/* eslint-disable no-console */
import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next'
import Head from 'next/head'
import bodyParser from 'body-parser'
import { z } from 'zod'
import { Box, Button } from '@chakra-ui/react'
import { EAS, SchemaEncoder } from '@ethereum-attestation-service/eas-sdk'

import { ImageData, Props } from 'pages/api/frame-og/[props]'
import { DOMAIN_URL_, LESSONS } from 'constants/index'
import { AlchemyProvider, ethers } from 'ethers'

const questionSchema = z.object({
  question: z.string().min(1).max(100),
  answers: z.array(z.string().max(60)).min(2).max(4),
  correct: z.number().min(0).max(3),
})

export const quizSchema = z.object({
  name: z.string().min(1).max(100),
  questions: z.array(questionSchema),
  socialImageLink: z.string(),
})

const schema = z.object({
  index: z.number(),
  score: z.number(),
  selected: z.number().nullable(),
  likeAndRecast: z.number().nullable(),
})

export type Quiz = z.infer<typeof quizSchema>

type State = z.infer<typeof schema>

const CTA = 'Continue learning and mint your free lesson badge!'
const MINT_SCORE = 'Mint score attestation on EAS'

const VERSION = 2

export default function UI({
  image,
  action,
  buttons,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const lessonSlug = action?.split('?')[0]?.split('/').pop()

  const isRedirect = buttons?.length && buttons[0] === CTA
  return (
    <>
      <Head>
        {/* Farcaster Frame */}
        <meta property="fc:frame" content="vNext" />
        <meta property="fc:frame:image" content={image} />
        {buttons.map((button, index) => (
          <meta
            key={`frame-${index}`}
            property={`fc:frame:button:${index + 1}`}
            content={button}
          />
        ))}
        {isRedirect ? (
          <meta
            property="fc:frame:post_url"
            content={`${DOMAIN_URL_}/api/frame-og/redirect?lesson_slug=${lessonSlug}&platform=farcaster&provenance=quiz`}
          />
        ) : (
          <meta property="fc:frame:post_url" content={action} />
        )}
        {isRedirect && (
          <meta name="fc:frame:button:1:action" content="post_redirect" />
        )}
        {/* Lens Portals */}
        <meta property="hey:portal" content="vLatest" />
        <meta property="hey:portal:image" content={image} />
        {buttons.map((button, index) => (
          <meta
            key={`portal-type-${index}`}
            property={`hey:portal:button:${index + 1}:type`}
            content={isRedirect ? 'redirect' : 'submit'}
          />
        ))}
        {buttons.map((button, index) => (
          <meta
            key={`portal-${index}`}
            property={`hey:portal:button:${index + 1}`}
            content={button}
          />
        ))}
        {isRedirect ? (
          <meta
            property="hey:portal:post_url"
            content={`${DOMAIN_URL_}/api/frame-og/redirect?lesson_slug=${lessonSlug}&platform=hey&provenance=quiz`}
          />
        ) : (
          <meta property="hey:portal:post_url" content={action} />
        )}
      </Head>
      <form
        action={action}
        method="POST"
        className="h-screen w-screen flex flex-col items-center justify-center"
      >
        <Box
          display="flex"
          justifyItems="center"
          justifyContent="center"
          flexDirection="column"
          placeItems="center"
        >
          <img className="max-w-xl h-auto" src={image} />
          <Box mt="2">
            {buttons.map((button, index) =>
              button && button === CTA ? (
                <a
                  key={button}
                  href={`${DOMAIN_URL_}/api/frame-og/redirect?lesson_slug=${lessonSlug}&platform=web&provenance=quiz`}
                >
                  <Button
                    name="buttonIndex"
                    variant="primaryWhite"
                    value={index + 1}
                  >
                    {button}
                  </Button>
                </a>
              ) : (
                <Button
                  key={button}
                  minW="100px"
                  marginLeft="10px"
                  type="submit"
                  name="buttonIndex"
                  variant="primaryWhite"
                  value={index + 1}
                >
                  {button}
                </Button>
              )
            )}
          </Box>
        </Box>
      </form>
    </>
  )
}

export const StateData = {
  serialize: (data: z.infer<typeof schema>) =>
    Buffer.from(JSON.stringify(data)).toString('base64url'),
  parse: (data: any) =>
    schema.parse(JSON.parse(Buffer.from(data, 'base64url').toString('utf8'))),
}

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const proto = ctx.req.headers['x-forwarded-proto'] ?? 'http'
  const host = ctx.req.headers['x-forwarded-host'] ?? ctx.req.headers.host
  const url = new URL(ctx.req.url ?? '/', `${proto}://${host}`)
  const id = z.object({ id: z.string() }).parse(ctx.params)
  const lesson = LESSONS.find((lesson) => lesson.slug === id.id)
  const quiz = {
    name: lesson.name,
    questions: [],
    socialImageLink: lesson.socialImageLink,
  }
  for (const slide of lesson.slides) {
    if (
      slide.type === 'QUIZ' &&
      slide.quiz.answers.filter((answer) => answer.length <= 60).length ===
        slide.quiz.answers.length &&
      slide.quiz.answers.length >= 2 &&
      slide.quiz.answers.length <= 4
    ) {
      quiz.questions.push({
        question: slide.quiz.question?.replaceAll('<br>', ' '),
        answers: slide.quiz.answers,
        correct: slide.quiz.rightAnswerNumber - 1,
      })
    }
    if (quiz.questions.length > 1) break
  }
  console.log('quiz', quiz)

  let state: z.infer<typeof schema> = {
    index: 0,
    score: 0,
    selected: null,
    likeAndRecast: null,
  }
  try {
    state = StateData.parse(url.searchParams.get('state'))
  } catch (e) {
    console.error(e)
  }

  let buttonIndex: number | null = null
  if (ctx.req.method === 'POST') {
    for (const parser of [
      bodyParser.json(),
      bodyParser.urlencoded({ extended: false }),
    ]) {
      await new Promise((resolve) => parser(ctx.req, ctx.res, resolve))
    }
    const body = (ctx.req as any).body
    if (body) {
      buttonIndex = body.buttonIndex
        ? parseInt(body.buttonIndex)
        : body.untrustedData.buttonIndex
    }
  }

  if (buttonIndex) {
    state = await game(quiz, state, buttonIndex)
  }

  const { props, buttons } = render(quiz, state)

  url.searchParams.set(
    'state',
    Buffer.from(JSON.stringify(state)).toString('base64url')
  )

  return {
    props: {
      v: VERSION,
      image: new URL(
        `/api/frame-og/${ImageData.serialize(props)}`,
        url
      ).toString(),
      action: url.toString(),
      buttons,
      pageMeta: {
        title: `${lesson.name} Quiz`,
        description: lesson.description,
        image: lesson.socialImageLink,
        nolayout: true,
        ssr: true,
      },
    },
  }
}

async function game(quiz: Quiz, state: State, action: number): Promise<State> {
  console.log(state)
  console.log(quiz)
  console.log(action)
  if (state.index === 0) {
    return { ...state, index: 1, selected: null }
  }

  if (state.selected == null) {
    return { ...state, selected: action - 1 }
  }

  let score = state.score
  if (state.selected === quiz.questions[state.index - 1]?.correct) {
    score++
  }

  if (state.index === quiz.questions.length) {
    // Mint score button (show like and recast)
    const likeAndRecast = 0
    return {
      index: state.index + 1,
      selected: action - 1,
      score,
      likeAndRecast,
    }
  }
  if (state.index === quiz.questions.length + 1) {
    // CTA
    // TODO: get fid dynamically
    const response = await fetch(
      'https://api.neynar.com/v2/farcaster/reactions/user?fid=8709&type=all&limit=100',
      {
        method: 'GET',
        headers: {
          accept: 'application/json',
          api_key: process.env.NEYNAR_API_KEY,
        },
      }
    )
    let likeAndRecast = 0
    if (response.ok) {
      // OK
      const castHash = '0xe83279d057a4e8b47adb56137334ae1b45057499'
      // TEST: missing recast
      // const castHash = '0x6c6231af3252b128414fc526109f9f9ea6bfe67a'

      const { reactions } = await response.json()
      // console.log(reactions)
      const liked = reactions.some(
        (r) => r.reaction_type === 'like' && r.cast.hash === castHash
      )
      console.log('liked', liked)
      const recasted = reactions.some(
        (r) => r.reaction_type === 'recast' && r.cast.hash === castHash
      )
      console.log('recasted', recasted)
      if (liked && recasted) {
        likeAndRecast = 1
        // Mint attestation
        const easContractAddress = '0x4200000000000000000000000000000000000021'
        const schemaUID =
          '0x6cc06de66afccbec9f38baab556bdbe9db4ce9e677015a362dd5bb7cd160e5b7'
        const eas = new EAS(easContractAddress)
        // Signer must be an ethers-like signer.
        const provider = new AlchemyProvider(
          'base-sepolia',
          process.env.ALCHEMY_KEY_EAS
        )
        const signer = new ethers.Wallet(process.env.PRIVATE_KEY, provider)
        await eas.connect(signer)
        // Initialize SchemaEncoder with the schema string
        const schemaEncoder = new SchemaEncoder(
          'string institutionName,string degreeName,uint64 graduationDate,bytes32 transcriptHash,address issuerAddress,string score'
        )
        const encodedData = schemaEncoder.encodeData([
          {
            name: 'institutionName',
            value: 'Bankless Academy',
            type: 'string',
          },
          { name: 'degreeName', value: quiz.name, type: 'string' },
          { name: 'graduationDate', value: `${Date.now()}`, type: 'uint64' },
          { name: 'transcriptHash', value: '', type: 'bytes32' },
          {
            name: 'issuerAddress',
            value: '0xe1887fF140BfA9D3b45D0B2077b7471124acD242',
            type: 'address',
          },
          {
            name: 'score',
            value: `${score}/${quiz.questions.length}`,
            type: 'string',
          },
        ])
        const tx = await eas.attest({
          schema: schemaUID,
          data: {
            // TODO: get address dynamically
            recipient: '0xBD19a3F0A9CaCE18513A1e2863d648D13975CB30',
            expirationTime: 0 as any,
            revocable: true, // Be aware that if your schema is not revocable, this MUST be false
            data: encodedData,
          },
        })
        const newAttestationUID = await tx.wait()
        // TODO: display attestation
        // https://base-sepolia.easscan.org/attestation/view/0x1d99e54b4a73dcd502d9fe0a43f7533be5395b48b2983d014544dee2e4619ad1
        // https://base-sepolia.easscan.org/attestation/preview/0x1d99e54b4a73dcd502d9fe0a43f7533be5395b48b2983d014544dee2e4619ad1.png
        console.log('New attestation UID:', newAttestationUID)
      }
    }
    return {
      index: likeAndRecast ? state.index + 1 : state.index,
      selected: action - 1,
      score,
      likeAndRecast,
    }
  }

  return { index: state.index + 1, selected: null, score, likeAndRecast: null }
}

function render(
  quiz: Quiz,
  state: State
): {
  props: Props
  buttons: string[]
} {
  if (state.index === 0) {
    return {
      props: {
        v: VERSION,
        state: {
          type: 'intro',
          name: quiz.name,
          socialImageLink: quiz.socialImageLink,
        },
      },
      buttons: ['Start quiz'],
    }
  }

  const question = quiz.questions[state.index - 1]
  if (!question) {
    return {
      props: {
        v: VERSION,
        state: {
          type: 'result',
          win: state.score === quiz.questions.length,
          score: `${state.score}/${quiz.questions.length}`,
          likeAndRecast: state.likeAndRecast > 0,
        },
      },
      buttons: [state.likeAndRecast > 0 ? CTA : MINT_SCORE],
    }
  }
  if (state.selected == null) {
    return {
      props: {
        v: VERSION,
        state: {
          type: 'question',
          numQuestion: state.index - 1,
          totalQuestions: quiz.questions.length,
          question: question.question,
          answers: question.answers,
          selection: null,
        },
      },
      buttons: ['A', 'B', 'C', 'D'].slice(0, question.answers.length),
    }
  } else {
    const question = quiz.questions[state.index - 1]
    return {
      props: {
        v: VERSION,
        state: {
          type: 'question',
          numQuestion: state.index - 1,
          totalQuestions: quiz.questions.length,
          question: question.question,
          answers: question.answers,
          selection: {
            selected: state.selected,
            correct: question.correct,
          },
        },
      },
      buttons: ['Continue'],
    }
  }
}
