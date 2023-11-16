import { DOMAIN_URL } from 'constants/index'

const DEFAULT_IMAGE =
  'https://app.banklessacademy.com/images/default_avatar.png'

const DEFAULT_NAME = 'explorer.eth'

const DEFAULT_SCORE = 'XX'

const Skill = ({ skill, score, max }) => (
  <div
    style={{
      display: 'flex',
      opacity: '0.5',
      marginTop: '40px',
      width: '100%',
      height: '40px',
      justifyContent: 'flex-end',
    }}
  >
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        width: '20px',
        height: '40px',
      }}
    >
      {score}
    </div>
    <div
      style={{
        display: 'flex',
        width: `${(score / max) * 230 + 200}px`,
        justifyContent: 'flex-end',
        alignItems: 'center',
        height: '40px',
        backgroundColor: '#A379BD',
        borderRadius: '2px',
        textTransform: 'uppercase',
        paddingRight: '20px',
      }}
    >
      {skill}
    </div>
  </div>
)

const OgProfile = ({
  imageLink,
  explorerName,
  score,
  stats,
}: {
  imageLink?: string
  explorerName?: string
  score?: string
  stats?: {
    badges?: number
    collectibles?: number
    handbooks?: number
    donations?: any
  }
}): React.ReactElement => {
  const backgroundImageLink = `${DOMAIN_URL}/images/social_background_purple.png`
  // const score = 4
  // const max = 8
  // const skill = 'Knowledge'

  return (
    <>
      <img
        style={{
          display: 'flex',
          position: 'absolute',
          width: '1200px',
          height: '628px',
        }}
        src={backgroundImageLink}
      />
      <img
        style={{
          display: 'flex',
          position: 'absolute',
          top: '85px',
          left: '205px',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
        }}
        src={imageLink || DEFAULT_IMAGE}
      />
      <div
        style={{
          display: 'flex',
          position: 'absolute',
          top: '127px',
          left: '949px',
          width: '102px',
          height: '63px',
          fontSize: 50,
          fontFamily: '"ClearSans"',
          color: '#EAD6FF',
          textAlign: 'center',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {score || DEFAULT_SCORE}
      </div>
      <div
        style={{
          display: 'flex',
          position: 'absolute',
          top: '432px',
          left: '141px',
          width: '433px',
          height: '119px',
          fontSize: 40,
          fontFamily: '"ClearSans"',
          color: '#EAD6FF',
          textAlign: 'center',
          justifyContent: 'center',
          alignItems: 'center',
          textTransform: 'uppercase',
        }}
      >
        {explorerName || DEFAULT_NAME}
      </div>
      <div
        style={{
          display: 'flex',
          position: 'absolute',
          top: '266px',
          left: '630px',
          width: '430px',
          height: '258px',
          fontSize: 20,
          fontFamily: '"ClearSans"',
          color: 'white',
        }}
      >
        <div
          style={{
            display: 'flex',
            position: 'relative',
            width: '430px',
            height: '258px',
            marginTop: '4px',
            flexWrap: 'wrap',
          }}
        >
          <Skill skill="Achievement" score={stats?.badges || 0} max={9} />
          <Skill
            skill="Donation"
            score={
              stats?.donations ? Object.keys(stats?.donations)?.length || 0 : 0
            }
            max={10}
          />
          <Skill
            skill="Collection"
            score={stats?.collectibles + stats?.handbooks || 0}
            max={10}
          />
        </div>
      </div>
    </>
  )
}

export default OgProfile
