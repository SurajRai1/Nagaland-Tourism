'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const ThirdSection = () => {
  const [isHovered, setIsHovered] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    if (sectionRef.current && textRef.current && videoRef.current) {
      // Text animation
      gsap.fromTo(
        textRef.current,
        {
          opacity: 0,
          x: -100,
        },
        {
          opacity: 1,
          x: 0,
          duration: 1.5,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top center',
            end: 'center center',
            scrub: 1.5,
          }
        }
      )

      // Video container animation
      gsap.fromTo(
        videoRef.current,
        {
          opacity: 0,
          x: 100,
        },
        {
          opacity: 1,
          x: 0,
          duration: 1.5,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top center',
            end: 'center center',
            scrub: 1.5,
          }
        }
      )
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen w-full bg-black text-white overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-white to-black opacity-10" />
      
      <div className="relative z-10 container mx-auto min-h-screen">
        <div className="flex flex-col lg:flex-row min-h-screen pt-20 lg:pt-0">
          {/* Text Content */}
          <div
            ref={textRef}
            className="w-full lg:w-1/2 flex flex-col justify-center 
                       p-6 sm:p-8 lg:p-16 
                       order-2 lg:order-1 
                       mt-12 sm:mt-16 lg:mt-0"
          >
            <h2 className="font-sans text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 
                           font-bold mb-6 sm:mb-8 lg:mb-8 leading-tight
                           px-4 sm:px-6"
            >
              A land of untold stories
            </h2>
            <p className="font-sans text-sm sm:text-base md:text-lg lg:text-xl 
                         text-gray-300 leading-relaxed sm:leading-relaxed
                         max-w-[90%] sm:max-w-[85%] lg:max-w-none
                         px-4 sm:px-6 mb-8"
            >
              Nestled in the mystical corners of Northeast India, Nagaland weaves together 
              ancient traditions with breathtaking landscapes. Each valley whispers tales of 
              tribal heritage, while every festival drums the heartbeat of a culture preserved 
              through generations.
            </p>
            <div className="px-4 sm:px-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 sm:px-8 py-2.5 sm:py-3 
                          bg-white text-black rounded-full 
                          text-base sm:text-lg font-medium
                          hover:bg-opacity-90 transition-all duration-300 
                          w-fit shadow-lg"
              >
                Explore More
              </motion.button>
            </div>
          </div>

          {/* Video Content */}
          <div
            ref={videoRef}
            className="w-full lg:w-1/2 relative order-1 lg:order-2
                       h-[45vh] sm:h-[50vh] md:h-[55vh] lg:h-auto
                       mt-16 sm:mt-20 lg:mt-0"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <motion.div 
              className="absolute inset-0 p-6 sm:p-8 md:p-10 lg:p-16"
              animate={{
                scale: isHovered ? 1.05 : 1,
                transition: { duration: 0.5 }
              }}
            >
              <div className="relative w-full h-full rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover"
                >
                  <source src="/Aotaditionaldance.webm" type="video/webm" />
                  Your browser does not support the video tag.
                </video>
                <motion.div 
                  className="absolute inset-0 bg-black/40"
                  animate={{
                    opacity: isHovered ? 0 : 0.4,
                    transition: { duration: 0.5 }
                  }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ThirdSection 