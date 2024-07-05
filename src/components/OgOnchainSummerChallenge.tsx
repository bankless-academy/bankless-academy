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
            top: '426px',
            left: '848px',
            width: '160px',
            height: '44px',
            fontFamily: 'ClearSans',
            color: '#FFFFFF',
            textAlign: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '32px',
            padding: '0 4px 6px 4px',
            borderRadius: '10px',
            border: '3px solid rgb(191, 184, 200)',
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
