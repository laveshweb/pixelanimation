import React from 'react'
import { useEffect, useRef } from "react";

const Hero = () => {
 
  return (
    <div>
       
    <div className="relative w-full h-screen overflow-hidden">
      
      {/* Background Image */}
      <img
        src="/backgroundimg.png"
        alt="background"
        className="absolute inset-0 w-full h-full object-cover -z-10"
      />

<section className="min-h-screen flex items-center justify-center px-4 mt-4">
      <div className="text-center max-w-4xl w-full">

        {/* ✏️ YOUR LOGO GOES HERE */}
        {/* <div ref={logoRef} className="mb-10 flex justify-center"> */}
          {/* Drop your <img>, <svg>, or component here */}
          {/* Example: <img src="/logo.svg" alt="Logo" className="w-12 h-12" /> */}
        {/* </div> */}

        {/* H1 */}
        <h1
        
          className="font-bold leading-8 sm:leading-10  lg:leading-14 xl:leading-18 tracking-[2.5px] text-[#0d1340] font-[myFont2]
                    text-[5.5vh] sm:text-[6.5vh] md:text-[7.5vh] lg:text-[10vh] 2xl:text-[12vh] mb-10"
        >
          Digital Growth<br />Engineered Together.
        </h1>

        {/* H2 */}
        <h2
          
          className="font-normal text-[#3a3d5c] text-[2.8vh] sm:text-[3vh] md:text-[3.5vh] lg:text-[4vh] 2xl:text-[4vh]
                      tracking-wide"
        >
          360° Systems for Global Scale
        </h2>

        {/* Card */}
        <div
          
          className="mt-12 inline-flex items-center gap-3
                     bg-white/60 backdrop-blur-md rounded-2xl
                     px-5 py-3 shadow-lg"
        >
          <span className="text-3xl">🍵</span>
          <div className="text-left">
            <p className="text-xs text-gray-400">Where Ideas became Intention</p>
            <p className="text-base font-semibold text-gray-900">Jan 2026</p>
          </div>
        </div>

      </div>
    </section>
    </div>
 
    </div>
  )
}

export default Hero