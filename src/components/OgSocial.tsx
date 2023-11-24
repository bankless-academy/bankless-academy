import { DOMAIN_URL } from 'constants/index'

const DEFAULT_IMAGE =
  'https://app.banklessacademy.com/images/default_avatar.png'

const DEFAULT_NAME = 'explorer.eth'

const DEFAULT_SCORE = 'XX'

const Skill = ({ skill, score, max }) => (
  <div
    style={{
      display: 'flex',
      marginTop: '24px',
      width: '100%',
      height: '40px',
      justifyContent: 'flex-end',
      position: 'relative',
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
        width: `${(score / max) * 230}px`,
        height: '40px',
        background: 'linear-gradient(223deg, #3a355a 16.65%, #634c70 95.78%)',
        borderBottomLeftRadius: '2px',
        borderTopLeftRadius: '2px',
      }}
    />
    <div
      style={{
        display: 'flex',
        width: '200px',
        justifyContent: 'flex-end',
        alignItems: 'center',
        height: '40px',
        border: '2px solid #8a68a2',
        borderLeft: '0',
        backgroundColor: 'transparent',
        borderTopRightRadius: '2px',
        borderBottomRightRadius: '2px',
        textTransform: 'uppercase',
        paddingRight: '20px',
        paddingBottom: '2px',
      }}
    >
      {skill}
    </div>
    <div
      style={{
        display: 'flex',
        position: 'absolute',
        top: '-5px',
        height: '50px',
        right: '199px',
        borderRight: '1px #989898 solid',
      }}
    />
  </div>
)

const Skills = ({ stats }) => (
  <div
    style={{
      display: 'flex',
      position: 'relative',
      width: '550px',
      height: '258px',
      marginTop: '4px',
      flexWrap: 'wrap',
    }}
  >
    <Skill skill="Badges" score={stats?.badges || 0} max={9} />
    <Skill
      skill="Collectibles"
      score={
        3 * (stats?.datadisks?.length || 0) + (stats?.handbooks?.length || 0)
      }
      max={8}
    />
    <Skill
      skill="Donations"
      score={stats?.donations ? Object.keys(stats?.donations)?.length || 0 : 0}
      max={9}
    />
    <Skill
      skill="Stamps"
      score={
        stats?.valid_stamps ? Object.keys(stats?.valid_stamps)?.length || 0 : 0
      }
      max={8}
    />
  </div>
)

const OgSocial = ({
  explorerName,
  explorerAvatar,
  score,
  stats,
  badgeImageLink,
}: {
  explorerName?: string
  explorerAvatar?: string
  score?: number
  stats?: {
    badges?: number
    datadisks?: string[]
    handbooks?: string[]
    donations?: any
  }
  badgeImageLink?: string
}): React.ReactElement => {
  const profileSocialBackground = `${DOMAIN_URL}/images/profileSocialBackground.png?f=2`
  const badgeSocialBackground = `${DOMAIN_URL}/images/badgeSocialBackground.png?f=2`

  return (
    <>
      <img
        style={{
          display: 'flex',
          position: 'absolute',
          width: '1200px',
          height: '628px',
        }}
        src={badgeImageLink ? badgeSocialBackground : profileSocialBackground}
      />
      <img
        style={{
          display: 'flex',
          position: 'absolute',
          backgroundColor: 'black',
          top: '94px',
          left: '97px',
          width: '312px',
          height: '312px',
          borderRadius: '50%',
        }}
        src={explorerAvatar || DEFAULT_IMAGE}
      />
      {!badgeImageLink && (
        <div
          style={{
            display: 'flex',
            position: 'absolute',
            top: '160px',
            left: '972px',
            width: '102px',
            height: '63px',
            fontSize: 63,
            fontFamily: 'ClearSans',
            color: '#EAD6FF',
            textAlign: 'center',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {score >= 0 ? score : DEFAULT_SCORE}
        </div>
      )}
      <div
        style={{
          display: 'flex',
          position: 'absolute',
          top: '432px',
          left: '32px',
          width: '433px',
          height: '119px',
          fontSize: 40,
          fontFamily: 'ClearSans',
          color: '#EAD6FF',
          textAlign: 'center',
          justifyContent: 'center',
          alignItems: 'center',
          textTransform: 'uppercase',
        }}
      >
        {explorerName || DEFAULT_NAME}
      </div>
      {badgeImageLink ? (
        <img
          style={{
            display: 'flex',
            position: 'absolute',
            top: '80px',
            left: '691px',
            width: '345px',
            height: '345px',
            borderRadius: '50%',
          }}
          src={badgeImageLink}
        />
      ) : (
        <div
          style={{
            display: 'flex',
            position: 'absolute',
            top: '300px',
            left: '568px',
            width: '550px',
            height: '258px',
            fontSize: 20,
            fontFamily: 'ClearSans',
            color: 'white',
          }}
        >
          <Skills stats={stats} />
        </div>
      )}
    </>
  )
}

export default OgSocial
