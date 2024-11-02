// pages/index.tsx
import React from 'react'
import dynamic from 'next/dynamic'

const ThreeScene = dynamic(() => import('components/ThreeScene'), {
  ssr: false,
})

const VR: React.FC = () => {
  return (
    <div>
      <ThreeScene />
    </div>
  )
}

export default VR
