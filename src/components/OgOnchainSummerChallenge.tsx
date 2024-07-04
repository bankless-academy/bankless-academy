import { DOMAIN_URL_ } from 'constants/index'

const OgOnchainSummerChallenge = ({
  time,
}: {
  time?: string
}): React.ReactElement => {
  return (
    <>
      <img
        style={{
          display: 'flex',
          position: 'absolute',
          width: '1200px',
          height: '628px',
        }}
        src={`${DOMAIN_URL_}/images/onchain-summer-challenge-social.jpg`}
      />
      {time ? (
        <div
          style={{
            display: 'flex',
            position: 'absolute',
            top: '378px',
            left: '890px',
            width: '94px',
            height: '28px',
            fontFamily: 'monospace',
            color: '#FFFFFF',
            textAlign: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '20px',
            padding: '4px 4px',
            borderRadius: '5px',
            border: '2px solid rgb(191, 184, 200)',
            backgroundColor: '#261441',
            fontWeight: 'bold',
          }}
        >
          {time}
        </div>
      ) : null}
    </>
  )
}

export default OgOnchainSummerChallenge
