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

      {/* ── FLOATING ICONS ── */}

      {/* 1. AIBox blob — top right */}
      <div
        
        className="absolute  top-[43%] -left-[5%]  min-[400px]:top-[43%] min-[400px]:left-[0%] sm:top-[36%] 
        sm:left-[8%] md:top-[36%] md:left-[13%]  lg:top-[40%] lg:left-[16.5%] xl:top-[32%] xl:left-[12%] 2xl:top-[32%] 
        2xl:left-[25%] z-20 "
      >
        <img
          src={AIBox}
          alt="AI"
          className="w-38 h-38 min-[400px]:w-44 min-[400px]:h-44 sm:w-54 sm:h-54 lg:w-60 lg:h-60 xl:w-64 xl:h-64 2xl:w-70 2xl:h-70 object-contain drop-shadow-lg"
        />
      </div>

      {/* 2. Social icon chips — mid right (Phone, Instagram, LinkedIn) */}
      <div
        
        className="absolute top-[48%] right-[20%] sm:right-[25%] md:right-[26%] lg:right-[29%] xl:lg:right-[24%] 2xl:right-[30%] z-20  flex flex-col items-end "
      >
        {/* Phone */}
        <div className="w-9.5 h-9 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-white rounded-2xl 
        shadow-md flex items-center justify-center
          hover:scale-110 transition-transform duration-200 cursor-pointer" style={{ transform: 'rotate(-10deg)' }}>
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4.5 h-4.5 md:w-5 md:h-5 lg:w-5.5 lg:h-5.5 xl:w-6 xl:h-6" viewBox="0 0 24 24" fill="none">
            <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.47 11.47 0 003.58.57 1 1 0 011 1V20a1 1 0 01-1 1C9.61 21 3 14.39 3 6a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.58a1 1 0 01-.25 1.01l-2.2 2.2z"
              fill="#22C55E"/>
          </svg>
        </div>

        {/* Instagram */}
        <div className="w-9.5 h-9 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-white rounded-2xl shadow-md flex items-center justify-center absolute top-[30%] left-[90%]
          hover:scale-110 transition-transform duration-200 cursor-pointer"
          style={{ transform: 'rotate(16deg)' }}>
          <svg xmlns="http://www.w3.org/2000/svg" className="4.5 h-4.5 md:w-5 md:h-5 lg:w-5.5 lg:h-5.5 xl:w-6 xl:h-6" viewBox="0 0 24 24">
            <defs>
              <linearGradient id="ig" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#f09433"/>
                <stop offset="25%" stopColor="#e6683c"/>
                <stop offset="50%" stopColor="#dc2743"/>
                <stop offset="75%" stopColor="#cc2366"/>
                <stop offset="100%" stopColor="#bc1888"/>
              </linearGradient>
            </defs>
            <path fill="url(#ig)" d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.31.975.975 1.247 2.242 1.31 3.608.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.063 1.366-.335 2.633-1.31 3.608-.975.976-2.242 1.248-3.608 1.31-1.266.058-1.646.07-4.85.07s-3.584-.012-4.849-.07c-1.366-.062-2.633-.334-3.608-1.31-.975-.975-1.247-2.242-1.31-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.849c.063-1.366.335-2.633 1.31-3.608.975-.976 2.242-1.248 3.608-1.31C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.014 7.052.072 5.197.157 3.355.673 2.014 2.014.673 3.355.157 5.197.072 7.052.014 8.332 0 8.741 0 12c0 3.259.014 3.668.072 4.948.085 1.855.601 3.697 1.942 5.038 1.341 1.341 3.183 1.857 5.038 1.942C8.332 23.986 8.741 24 12 24s3.668-.014 4.948-.072c1.855-.085 3.697-.601 5.038-1.942 1.341-1.341 1.857-3.183 1.942-5.038.058-1.28.072-1.689.072-4.948s-.014-3.668-.072-4.948c-.085-1.855-.601-3.697-1.942-5.038C20.645.673 18.803.157 16.948.072 15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
          </svg>
        </div>

        {/* LinkedIn */}
        <div className="w-9.5 h-9 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-white rounded-2xl shadow-md flex items-center justify-center absolute top-[%] left-[175%]
          hover:scale-110 transition-transform duration-200 cursor-pointer"
          style={{ transform: 'rotate(20deg)' }}>
          <svg xmlns="http://www.w3.org/2000/svg" className="4.5 h-4.5 md:w-5 md:h-5 lg:w-5.5 lg:h-5.5 xl:w-6 xl:h-6 " viewBox="0 0 24 24" fill="#0A66C2">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        </div>
      </div>

 
     
     

      {/* CENTER CONTENT */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-10 min-[400px]:px-15 
      sm:px-40 md:px-55 lg:px-80 2xl:px-130 leading-7  gap-6">
        <h1 className="md:text-[6vw] text-[8vw] sm:text-[6vw]  lg:text-[4.5vw] xl:text-[3.5vw] font-bold  
         min-[400px]:leading-8 sm:leading-9 md:leading-11 lg:leading-10.5 xl:leading-12 text-white font-[myFont2]
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