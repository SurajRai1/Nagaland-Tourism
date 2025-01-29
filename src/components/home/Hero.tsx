'use client'

import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Link from 'next/link'

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const sectionRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    // Ensure video plays
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log("Video autoplay failed:", error)
      })
    }

    // Create parallax effect
    if (sectionRef.current && contentRef.current) {
      gsap.to(contentRef.current, {
        opacity: 0,
        y: -50,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'center center',
          end: 'bottom top',
          scrub: 1,
          pin: true,
          pinSpacing: false,
        }
      })
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <div ref={sectionRef} className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="object-cover w-full h-full"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div 
        ref={contentRef}
        className="relative h-full flex items-center justify-start text-left px-8 md:px-16 lg:px-24"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-white max-w-4xl"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.2] mb-6">
            Weaving Your Dreams
            <br />
            into Unforgettable
            <br />
            Adventures
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="text-base md:text-lg text-white/90 mb-8 max-w-2xl"
          >
            Discover the captivating allure of Nagaland, from stunning landscapes
            to vibrant culture, on an unforgettable journey through the Northeast.
          </motion.p>

          {/* CTA */}
          <Link href="/book-now">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.9 }}
              className="inline-flex items-center gap-4 group cursor-pointer"
            >
              <div className="bg-white text-black px-6 py-3 rounded-full text-sm font-medium 
                            hover:bg-black hover:text-white transition-all duration-300 
                            border-2 border-transparent hover:border-white"
              >
                Booking Now
              </div>
              <svg 
                className="w-6 h-6 text-white transition-transform duration-300 transform group-hover:translate-x-2" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </div>
  )
}

export default Hero 