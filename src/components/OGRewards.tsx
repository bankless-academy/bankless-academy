import { DOMAIN_URL_ } from 'constants/index'

const OGRewards = ({ rewards }: { rewards?: string }): React.ReactElement => {
  return (
    <>
      <img
        style={{
          display: 'flex',
          position: 'absolute',
          width: '1200px',
          height: '628px',
        }}
        src={`${DOMAIN_URL_}/images/usdglo-rewards.jpg`}
      />
      {rewards ? (
        <div
          style={{
            display: 'flex',
            position: 'absolute',
            top: '390px',
            left: '430px',
            width: '400px',
            height: '200px',
            fontFamily: 'ClearSans',
            color: '#FFFFFF',
            textAlign: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '60px',
            padding: '0 4px 6px 4px',
            borderRadius: '30px',
            border: '3px solid rgb(191, 184, 200)',
            backgroundColor: '#2d5751c8',
            fontWeight: 'bold',
          }}
        >
          {rewards}
        </div>
      ) : null}
    </>
  )
}

export default OGRewards
