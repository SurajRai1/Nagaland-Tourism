'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const images = [
  {
    src: '/Hornbill Festival Nagaland.jpg',
    alt: 'Base 1',
    label: 'BASE 1'
  },
  {
    src: '/Kohima War Cemetary.jpg',
    alt: 'Base 2',
    label: 'BASE 2'
  },
  {
    src: '/Jotsoma Nagaland.jpg',
    alt: 'Base 3',
    label: 'BASE 3'
  }
]

const SecondSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)
  const [currentImage, setCurrentImage] = useState(0)

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length)
  }

  const previousImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length)
  }

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    if (sectionRef.current && textRef.current) {
      // Create reveal animation
      gsap.fromTo(
        sectionRef.current,
        {
          y: '20%',
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'top center',
            scrub: 1,
          },
        }
      )

      // Text animation
      gsap.fromTo(
        textRef.current,
        {
          y: 100,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top center',
            end: 'center center',
            scrub: 1,
          },
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
      className="relative min-h-screen w-full bg-white overflow-hidden"
    >
      {/* Diagonal Overlay */}
      <div className="absolute inset-0 bg-white transform -skew-y-6 origin-top-left" />
      
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="flex flex-col items-center">
          {/* Text Content */}
          <motion.div
            ref={textRef}
            className="w-full max-w-3xl text-center mb-16 space-y-6"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900">
              Discover Our Heritage
            </h2>
            <p className="text-lg md:text-xl text-gray-700">
              Experience the rich cultural tapestry of Nagaland, where ancient traditions meet modern celebrations.
            </p>
          </motion.div>

          {/* Image Container */}
          <div className="w-full max-w-[90vw] h-[600px] relative rounded-lg overflow-hidden shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentImage}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <Image
                  src={images[currentImage].src}
                  alt={images[currentImage].alt}
                  fill
                  className="object-cover"
                  priority
                />
              </motion.div>
            </AnimatePresence>

            {/* Base Navigation Buttons */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 md:gap-1">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`
                    px-4 py-1.5 
                    text-[13px] font-medium 
                    transition-all duration-300
                    backdrop-blur-[2px]
                    ${currentImage === index 
                      ? 'bg-[rgba(255,255,255,0.2)] text-white' 
                      : 'bg-[rgba(0,0,0,0.4)] text-white/90 hover:bg-[rgba(0,0,0,0.5)]'
                    }
                    /* Mobile Responsive Styles */
                    md:px-6 md:py-2
                    md:text-sm
                  `}
                >
                  {image.label}{index === 1 ? '+' : ''}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SecondSection 