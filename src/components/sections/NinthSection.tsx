'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

// Travel information data
const travelInfo = [
  {
    id: 1,
    title: 'Best Time to Visit',
    description: 'October to May is ideal, with the Hornbill Festival in December being a major highlight.',
  },
  {
    id: 2,
    title: 'Getting There',
    description: 'Dimapur Airport is the main gateway. Regular flights connect to major Indian cities.',
  },
  {
    id: 3,
    title: 'Local Transport',
    description: 'Taxis, shared cabs, and buses are available. Book in advance during peak season.',
  },
]

const NinthSection = () => {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    // Register ScrollTrigger only on the client side
    gsap.registerPlugin(ScrollTrigger)
    
    const section = sectionRef.current

    if (section) {
      const ctx = gsap.context(() => {
        gsap.fromTo(
          '.travel-card',
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
            stagger: 0.2,
            ease: 'power1.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 80%',
              end: 'top 20%',
              toggleActions: 'play none none reverse',
            },
          }
        )
      }, section)

      // Cleanup
      return () => ctx.revert()
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative bg-white py-20 sm:py-32"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Travel Information */}
        <div className="mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center"
          >
            Essential Travel Guide
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {travelInfo.map((info) => (
              <div
                key={info.id}
                className="travel-card bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {info.title}
                </h3>
                <p className="text-gray-600">{info.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* OpenStreetMap Embed */}
        <div className="w-full h-[600px] rounded-lg overflow-hidden shadow-lg">
          <iframe
            width="100%"
            height="100%"
            frameBorder="0"
            scrolling="no"
            marginHeight={0}
            marginWidth={0}
            src="https://www.openstreetmap.org/export/embed.html?bbox=93.0%2C25.0%2C95.0%2C27.0&amp;layer=mapnik&amp;marker=25.6747%2C94.1086"
            className="rounded-lg"
            style={{ border: 0 }}
          />
        </div>
      </div>
    </section>
  )
}

export default NinthSection 