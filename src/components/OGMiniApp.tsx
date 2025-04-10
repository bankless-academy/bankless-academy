const OGMiniApp = ({ image }: { image?: string }): React.ReactElement => {
  return (
    <div
      style={{
        backgroundColor: '#242031',
        display: 'flex',
        width: '1200px',
        height: '800px',
      }}
    >
      <img
        style={{
          display: 'flex',
          position: 'absolute',
          top: '86px',
          left: '0px',
          width: '1200px',
          height: '628px',
        }}
        width={1200}
        height={628}
        src={image}
      />
    </div>
  )
}

export default OGMiniApp
