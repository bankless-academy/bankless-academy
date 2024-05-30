import React from 'react'

const ProgressSteps = ({ step, total }: { step: number; total: number }) => {
  return (
    <div
      style={{
        display: 'flex',
        width: '1200px',
        margin: '12px',
        position: 'absolute',
        justifyContent: 'center',
        top: '30px',
        left: '0',
      }}
    >
      {[...Array(total)].map((e, index) => (
        <div
          key={index}
          style={{
            display: 'flex',
            width: `${1200 / total / 1.3}px`,
            height: '4px',
            margin: '8px',
            borderRadius: '2px',
            overflow: 'hidden',
            background: '#ffffff22',
          }}
        >
          {index <= step && (
            <div
              style={{
                display: 'flex',
                width: '100%',
                height: '100%',
                background:
                  index + 1 === total
                    ? `linear-gradient(270deg, #FFFCF9 -44.74%, #F77B54 -11.81%, ${
                        index <= step ? '#916AB8' : '#ffffff22'
                      } 94.44%)`
                    : index <= step
                    ? '#916AB8'
                    : '#ffffff22',
              }}
            ></div>
          )}
        </div>
      ))}
    </div>
  )
}

export default ProgressSteps
