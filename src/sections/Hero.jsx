import React from 'react'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import Logo from '../assets/images/Logo.png'
import TEA from '../assets/images/ChaiTea.jpg'


const Hero = () => {
  const h1Ref = useRef(null)
  const h2Ref = useRef(null)
  const cardRef = useRef(null)

  useEffect(() => {
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
       
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <img src="/backgroundimg.png" alt="background" className="absolute inset-0 w-full h-full object-cover -z-10"/>


{/* ------------------------------------------CENTER PART----------------------------------- */}
<section className="min-h-screen flex items-center justify-center px-4 mt-">
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
{/* ------------------------------------------Right Nav PART----------------------------------- */}
 
    </div>
  )
}

export default Hero