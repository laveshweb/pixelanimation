import React from 'react'
import { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import Logo from '../assets/images/Logo.png'
import TEA from '../assets/images/ChaiTea.jpg'
import RV  from '../assets/images/RighhNav.png'


const Hero = () => {
  const h1Ref = useRef(null)
  const h2Ref = useRef(null)
  const cardRef = useRef(null)
  const [selected, setSelected] = useState('img')
  const navRef = useRef(null)


  useEffect(() => {
    gsap.fromTo(navRef.current,
      { opacity: 0, y: -40 },   // start
      { opacity: 1, y: 0, duration: 1.5, ease: 'power3.out' }  // end
    )
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
  

    // H1 comes in first
    tl.fromTo(h1Ref.current,
      { opacity: 0, y: 60 },
      { opacity: 1, y: 0, duration: 1 }
    )

    // H2 comes in after h1
    .fromTo(h2Ref.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 1.2 },
      '-=0.3' // starts 0.3s before h1 finishes
    )

    // Card comes in last
    .fromTo(cardRef.current,
      { opacity: 0, y: 30, scale: 0.95 },
      { opacity: 1, y: 0, scale: 1, duration: 1 },
      '-=0.2' // starts 0.2s before h2 finishes
    )
  
  }, [])
  return (
    <div>
       {/* ------------------------------------------Background Image----------------------------------- */}
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <img src="/backgroundimg.png" alt="background" className="absolute inset-0 w-full h-full object-cover -z-10"/>

{/* ------------------------------------------Right Nav PART----------------------------------- */}
<nav ref={navRef} className='absolute w-full flex justify-end px-14 py-10 z-10'>

  <div className='relative flex items-center hidden sm:flex  sm:px-8 sm:py-2 md:px-5 md:py-1 lg:px-3 lg:py-1.5 xl:px-2.5 xl:py-[1.5px] rounded-2xl bg-[#E2E7EC] 
  sm:gap-8 md:gap-6 lg:gap-6 xl:gap-0'>

    {/* Sliding white background */}
    <div
      className={`absolute top-1.5 bottom-1.5 bg-white rounded-xl shadow-md transition-all duration-300 ease-in-out 
        ${selected === 'text' ? 'left-1.5 right-[calc(50%+2px)]' : 'left-[calc(50%+2px)] right-1.5'}`}/>
    {/* Text */}
    <span
      onClick={() => setSelected('text')}
      className={`relative z-10 font-semibold font-[myFont2] px-2 py-0.5 lg:py-1 rounded-xl relative 
        right-3 absolute md:right-0 md:translate-x-[-6px] lg:translate-x-0 lg:right-0 text-[2.5vw] lg:text-[1.6vw] md:mr-2 lg:mr-0  xl:pr-6 xl:pl-3 -pb-0.5 
        cursor-pointer transition-colors duration-300
        ${selected === 'text' ? 'text-black' : 'text-[#0d1340]'}`} >
      Call
    </span>
    {/* Image */}
    <div
      onClick={() => setSelected('img')}
      className='relative z-10 cursor-pointer px-0.5 sm:-m-3 -mr-0.5 
      xl:pr-2 xl:pl-2 lg:mr-2 relative md:right-1 lg:left-2  2xl:left-2.5  ' >
      <img
        src={RV}
        className='sm:w-6 sm:h-4  md:w-4 md:h-4 md:w-9 md:h-4 ' />
    </div>

  </div>
</nav>
{/* ------------------------------------------CENTER PART----------------------------------- */}
<section className="min-h-screen flex items-center justify-center px-4 ">
      <div className="text-center max-w-4xl w-full">

        {/* LOGO - No animation as requested */}
        <div className='flex items-center justify-center'>
          <img src={Logo} className="mb-6" />
        </div>

        {/* H1 */}
        <h1
          ref={h1Ref}
          className="font-bold text-[#0d1340] font-[myFont2] text-[12vw] sm:text-[6vw] md:text-[8vw] xl:text-[4.5vw] 
          2xl:text-[5vw] md:leading-14 2xl:leading-16 whitespace-nowrap tracking-tight leading-none mb-3 lg:mb-6"
        >
          Digital Growth<br />Engineered Together.
        </h1>

        {/* H2 */}
        <h2
          ref={h2Ref}
          className="font-lighter text-[#3a3d5c] font-[myFont3] font-bold tracking-tight text-[4.5vw] min-[450px]:text-[3vw]
          sm:text-[2.5vw] md:text-[2vw] xl:text-[1.5vw] 2xl:text-[1.2vw]"
        >
          360° Systems for Global Scale
        </h2>

        {/* Card */}
        <div
          ref={cardRef}
          className="mt-12 inline-flex items-center gap-3 bg-white/60 backdrop-blur-md rounded-2xl px-4 py-1.5 shadow-lg"
        >
          <img src={TEA} className='w-8 h-10 sm:w-10 sm:h-12 md:w-12 md:h-14 lg:w-[4vw] lg:h-[9.5vh]' />
          <div className="text-left">
            <p className="text-[12px] sm:text-[14px] lg:text-[16px] text-black tracking-wide font-[myFont2]">
              Where Ideas became Intention
            </p>
            <p className="text-[12px] sm:text-[14px] lg:text-[16px] font-semibold text-gray-900 font-[myFont2] relative bottom-1 mb-0.5">
              Jan 2026
            </p>
          </div>
        </div>

      </div>
    </section>
    </div>

    </div>
  )
}

export default Hero