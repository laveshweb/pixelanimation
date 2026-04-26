import React from 'react'
import SecondBG2 from '../assets/images/secondbg2.png'

const Third = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">

    {/* Background */}
    <div className="absolute inset-0 w-full">
      <img
        src={SecondBG2}
        alt="bg"
        className="w-full h-full object-cover"
      />
    </div>
</div>
  )
}

export default Third