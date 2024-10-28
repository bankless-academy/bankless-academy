/* eslint-disable no-console */
import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next'
import Head from 'next/head'
import bodyParser from 'body-parser'
import { z } from 'zod'
import { Box, Button } from '@chakra-ui/react'

import { ImageData, Props } from 'pages/api/frame-og/[props]'
import { DOMAIN_URL_, LESSONS } from 'constants/index'

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
})

export type Quiz = z.infer<typeof quizSchema>

type State = z.infer<typeof schema>

const CTA = 'Continue learning and mint your free lesson badge!'

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
  }
  console.log('quiz', quiz)

  let state: z.infer<typeof schema> = { index: 0, score: 0, selected: null }
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
    state = game(quiz, state, buttonIndex)
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

function game(quiz: Quiz, state: State, action: number): State {
  if (state.index === 0) {
    return { ...state, index: 1, selected: null }
  }

  if (state.index > quiz.questions.length) {
    return { index: 0, selected: null, score: 0 }
  }

  if (state.selected == null) {
    return { ...state, selected: action - 1 }
  }

  let score = state.score
  if (state.selected === quiz.questions[state.index - 1].correct) {
    score++
  }

  return { index: state.index + 1, selected: null, score }
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
        },
      },
      buttons: [CTA],
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
