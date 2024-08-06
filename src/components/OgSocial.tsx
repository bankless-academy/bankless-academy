import { MAX_BADGES } from 'constants/badges'
import { MAX_ACHIEVEMENT } from 'constants/donations'
import { DEFAULT_ENS, DOMAIN_URL, MAX_COLLECTIBLES } from 'constants/index'
import { MAX_STAMPS } from 'constants/passport'

const DEFAULT_IMAGE =
  'https://app.banklessacademy.com/images/explorer_avatar.png'

const DEFAULT_SCORE = 16

export const maxReferrals = (referrals: number) =>
  referrals < 6 ? 8 : referrals < 11 ? 15 : referrals < 21 ? 15 : referrals

const Skill = ({ skill, score, max }) => (
  <div
    style={{
      display: 'flex',
      marginTop: '24px',
      width: '100%',
      height: '36px',
      justifyContent: 'flex-end',
      position: 'relative',
    }}
  >
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        width: '30px',
        height: '36px',
        color: '#FFFFFF',
        justifyContent: 'flex-end',
        paddingRight: '8px',
      }}
    >
      {score}
    </div>
    <div
      style={{
        display: 'flex',
        width: `${(score / max) * 230}px`,
        height: '36px',
        background:
          'linear-gradient(135.91deg, #634c70 29.97%, #3a355a 99.26%)',
        borderBottomLeftRadius: '2px',
        borderTopLeftRadius: '2px',
      }}
    />
    <div
      style={{
        display: 'flex',
        width: '200px',
        justifyContent: 'center',
        alignItems: 'center',
        height: '36px',
        border: '2px solid #8a68a2',
        borderLeft: '0',
        backgroundColor: 'transparent',
        borderTopRightRadius: '2px',
        borderBottomRightRadius: '2px',
        textTransform: 'uppercase',
        paddingBottom: '2px',
        color: '#D6D6D6',
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

const Skills = ({ stats }) => {
  const referrals = stats?.referrals?.length || 0
  return (
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
      <Skill skill="Badges" score={stats?.badges || 0} max={MAX_BADGES} />
      <Skill skill="Referral" score={referrals} max={maxReferrals(referrals)} />
      <Skill
        skill="Ownership"
        score={
          3 * (stats?.datadisks?.length || 0) + (stats?.handbooks?.length || 0)
        }
        max={MAX_COLLECTIBLES}
      />
      <Skill
        skill="Humanity"
        score={stats?.valid_stamps?.length || 0}
        max={MAX_STAMPS}
      />
      <Skill
        skill="Achievement"
        score={
          stats?.donations
            ? (Object.keys(stats?.donations)?.length || 0) > 1
              ? 3
              : 0
            : 0
        }
        max={MAX_ACHIEVEMENT}
      />
    </div>
  )
}

const OgSocial = ({
  explorerName,
  community,
  explorerAvatar,
  score,
  stats,
  badgeImageLink,
}: {
  explorerName?: string
  community?: string
  explorerAvatar?: string
  score?: number
  stats?: {
    badges?: number
    datadisks?: string[]
    handbooks?: string[]
    donations?: { [key: string]: any }
    valid_stamps?: string[]
    referrals?: { profile_address: string; created_at: string }[]
  }
  badgeImageLink?: string
}): React.ReactElement => {
  const profileSocialBackground = `${DOMAIN_URL}/images/profileSocialBackground.png?f=3`
  const badgeSocialBackground = `${DOMAIN_URL}/images/badgeSocialBackground.png?f=3`

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
        width="312px"
        height="312px"
        src={explorerAvatar || DEFAULT_IMAGE}
      />
      {!badgeImageLink && (
        <div
          style={{
            display: 'flex',
            position: 'absolute',
            top: '165px',
            left: '969px',
            width: '102px',
            height: '63px',
            fontSize: 63,
            fontFamily: 'ClearSans',
            color: '#D6D6D6',
            textAlign: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            paddingBottom: '8px',
          }}
        >
          {score >= 0 ? score : DEFAULT_SCORE}
        </div>
      )}
      <div
        style={{
          display: 'flex',
          position: 'absolute',
          top: '410px',
          left: '32px',
          width: '433px',
          height: '119px',
          fontSize: 40,
          fontFamily: 'ClearSans',
          color: '#FFFFFF',
          textAlign: 'center',
          justifyContent: 'center',
          alignItems: 'center',
          textTransform: 'uppercase',
        }}
      >
        {explorerName || DEFAULT_ENS}
      </div>
      {community && (
        <div
          style={{
            display: 'flex',
            position: 'absolute',
            top: '464px',
            left: '32px',
            width: '433px',
            height: '119px',
            fontSize: 32,
            fontFamily: 'ClearSans',
            color: '#ffffff70',
            textAlign: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            textTransform: 'uppercase',
          }}
        >
          <div>-[</div>
          <div
            style={{
              marginTop: '1.3px',
              marginLeft: '4px',
              marginRight: '4px',
            }}
          >
            {community}
          </div>
          <div>]-</div>
        </div>
      )}
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
            top: '272px',
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
