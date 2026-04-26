import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SecondBG1 from '../assets/images/secondbg1.png'
import AIBox from '../assets/images/AIBox.png'

// 👇 Add your avatar image import here
// import UserAvatar from '../assets/images/avatar.png'

gsap.registerPlugin(ScrollTrigger)

const Second = () => {
  const containerRef = useRef(null)
  const wordsRef = useRef([])
  const iconsRef = useRef([])

  const text = "New gen Digital System that evolves with every shift in innovation. Driven by real-time intelligence and seamless automation, lets turn your complexity into strategic clarity."

  useEffect(() => {
    const ctx = gsap.context(() => {

      // Word reveal animation (your existing)
      gsap.fromTo(wordsRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          stagger: 0.1,
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 60%',
            end: 'bottom 40%',
            scrub: 1,
          }
        }
      )

      // Floating icons entrance animation

    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={containerRef} className="relative w-full h-screen overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 w-full">
        <img
          src={SecondBG1}
          alt="bg"
          className="w-full h-full object-cover"
        />
      </div>

  

     
     

      {/* CENTER CONTENT */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-10 min-[400px]:px-25 sm:px-40 md:px-60 lg:px-80 2xl:px-130 leading-7  gap-6">
        <h1 className="md:text-[6vw] text-[8vw] sm:text-[6vw]  lg:text-[4.5vw] xl:text-[3.5vw] font-bold  
         min-[400px]:leading-9.5 sm:leading-10.5 md:leading-11 lg:leading-10 xl:leading-12 text-white font-[myFont2]
          tracking-tight xl:tracking-tight text-center">
          {text.split(' ').map((word, i) => (
            <span
              key={i}
              ref={el => wordsRef.current[i] = el}
              className="inline-block mr-[0.25em] opacity-0"
            >
              {word}
            </span>
          ))}
        </h1>
      </div>

    </div>
  )
}

export default Second