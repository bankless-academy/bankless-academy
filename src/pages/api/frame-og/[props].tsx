/* eslint-disable react/no-unknown-property */
import { ImageResponse } from '@vercel/og'
import { NextRequest } from 'next/server'
import { z } from 'zod'

import { DOMAIN_URL } from 'constants/index'
import ProgressStepsBasic from 'components/ProgressStepsBasic'

export const runtime = 'edge'

const schema = z.object({
  v: z.number(),
  state: z.union([
    z.object({
      type: z.literal('intro'),
      name: z.string().optional(),
      socialImageLink: z.string().optional(),
    }),
    z.object({
      type: z.literal('question'),
      numQuestion: z.number(),
      totalQuestions: z.number(),
      question: z.string(),
      answers: z.array(z.string().max(60)).min(2).max(4),
      selection: z
        .object({
          selected: z.number(),
          correct: z.number(),
        })
        .nullable(),
    }),
    z.object({
      type: z.literal('result'),
      win: z.boolean(),
      score: z.string().optional(),
    }),
  ]),
})

export type Props = z.infer<typeof schema>

export const ImageData = {
  serialize: (props: z.infer<typeof schema>) =>
    Buffer.from(JSON.stringify(props)).toString('base64url'),
  parse: (props: any) =>
    schema.parse(JSON.parse(Buffer.from(props, 'base64url').toString('utf8'))),
}

function Screen(props: Props) {
  if (props.state.type === 'intro') {
    const socialImageLink = `${DOMAIN_URL}${props.state.socialImageLink}`
    return (
      <div tw="relative bg-black w-full h-full flex flex-col items-center justify-center">
        <img src={socialImageLink} tw="absolute w-full h-full" />
      </div>
    )
  }

  if (props.state.type === 'result') {
    return (
      <div tw="relative bg-black w-full h-full flex flex-col items-center justify-center">
        <img
          src={`${DOMAIN_URL}/images/quiz_background.jpg`}
          tw="absolute w-full h-full"
        />
        <div
          style={{
            fontSize: 60,
            color: '#FFBF00',
            background: '#161718',
            border: '3px solid #646587',
            borderRadius: '8px',
            padding: '15px 40px',
            marginTop: '180px',
          }}
        >
          {`Score: ${props.state.score}`}
        </div>
        <div
          tw="flex flex-col items-center text-center"
          style={{ fontSize: 50, color: 'white', marginTop: 20 }}
        >
          <span>Learn more about this topic at</span>
          <span style={{ color: '#FFBF00' }}>banklessacademy.com</span>
        </div>
      </div>
    )
  }

  const buttons = ['A', 'B', 'C', 'D']
  const coords = [
    { x: 123, y: 288 },
    { x: 654, y: 288 },
    { x: 123, y: 415 },
    { x: 654, y: 415 },
  ]

  const { selection } = props.state
  return (
    <div
      tw="relative w-full h-full flex flex-col items-center justify-center"
      style={{ backgroundColor: '#161515' }}
    >
      {props.state?.totalQuestions && (
        <ProgressStepsBasic
          step={props.state.numQuestion}
          total={props.state.totalQuestions}
        />
      )}
      <WWTBAMUI
        green={selection && selection.correct}
        red={selection && selection.selected}
        nb={props.state.answers?.length}
      />
      <div
        tw={`absolute flex items-center justify-center text-center text-white overflow-hidden ${
          props.state.question.length > 100 ? 'text-4xl' : 'text-5xl'
        }`}
        style={{ left: 164, top: 75, width: 859, height: 154 }}
      >
        {props.state.question}
      </div>

      {props.state.answers.map((answer, index) => {
        return (
          <div
            key={index}
            tw={`absolute flex items-center text-left text-white ${
              answer.length > 47
                ? 'text-2xl'
                : answer.length > 40
                ? 'text-3xl'
                : 'text-4xl'
            }`}
            style={{
              left: coords[index].x,
              top: coords[index].y,
              width: 440,
              height: 85,
            }}
          >
            <span tw="flex">
              <span
                tw="items-center justify-center"
                style={{
                  color: '#FFBF00',
                  paddingRight: 20,
                  height: 85,
                }}
              >
                {buttons[index]}:
              </span>
              <span
                tw="items-center"
                style={{
                  width: 380,
                  height: 85,
                }}
              >
                {answer}
              </span>
            </span>
          </div>
        )
      })}
    </div>
  )
}

export default async function handler(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const props = ImageData.parse(searchParams.get('props'))

  return new ImageResponse(<Screen {...props} />, {
    width: 1200,
    height: 630,
  })
}

function WWTBAMUI({
  green,
  red,
  nb,
}: {
  green: number | null
  red: number | null
  nb: number
}) {
  return (
    <svg
      width="1200"
      height="630"
      viewBox="0 0 1200 630"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="99.5"
        y="280"
        width="472"
        height="103"
        rx="9.5"
        fill={0 == green ? '#44A991' : 0 == red ? '#A94462' : '#060B0F'}
        stroke="#646587"
        stroke-width="3"
        stroke-linejoin="round"
      />
      <rect
        x="624.5"
        y="280"
        width="472"
        height="103"
        rx="9.5"
        fill={1 == green ? '#44A991' : 1 == red ? '#A94462' : '#060B0F'}
        stroke="#646587"
        stroke-width="3"
        stroke-linejoin="round"
      />
      {nb >= 3 && (
        <rect
          x="99.5"
          y="407"
          width="472"
          height="103"
          rx="9.5"
          fill={2 == green ? '#44A991' : 2 == red ? '#A94462' : '#060B0F'}
          stroke="#646587"
          stroke-width="3"
          stroke-linejoin="round"
        />
      )}
      {nb >= 4 && (
        <rect
          x="624.5"
          y="407"
          width="472"
          height="103"
          rx="9.5"
          fill={3 == green ? '#44A991' : 3 == red ? '#A94462' : '#060B0F'}
          stroke="#646587"
          stroke-width="3"
          stroke-linejoin="round"
        />
      )}
    </svg>
  )
}
