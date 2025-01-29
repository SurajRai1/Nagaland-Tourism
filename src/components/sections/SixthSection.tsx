'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'

// Places data
const places = [
  {
    id: 1,
    name: 'Dzükou Valley',
    location: 'Kohima District',
    description: 'Known for its pristine beauty and seasonal flowers, particularly the Dzükou Lily found nowhere else in the world.',
    details: 'A paradise for trekkers and nature lovers, featuring rolling hills, deep valleys, and crystal-clear streams.',
    image: '/places/dzukou-valley.jpg',
    activities: ['Trekking', 'Camping', 'Photography']
  },
  {
    id: 2,
    name: 'Kohima War Cemetery',
    location: 'Kohima',
    description: 'A memorial dedicated to soldiers who fought in World War II, offering a poignant reminder of history.',
    details: 'Beautifully maintained terraced cemetery with stunning views of Kohima city.',
    image: '/places/kohima-war-cemetery.jpg',
    activities: ['Historical Tours', 'Photography']
  },
  {
    id: 3,
    name: 'Khonoma Green Village',
    location: 'Khonoma',
    description: 'Asia\'s first green village, known for its sustainable practices and rich cultural heritage.',
    details: 'Experience traditional Angami lifestyle, terraced fields, and community-led conservation.',
    image: '/places/khonoma-village.jpg',
    activities: ['Cultural Tours', 'Homestays', 'Bird Watching']
  },
  {
    id: 4,
    name: 'Triple Falls',
    location: 'Seithekima',
    description: 'A spectacular three-tiered waterfall surrounded by lush forest.',
    details: 'Perfect spot for nature lovers with hiking trails and picnic areas.',
    image: '/places/triple-falls.jpg',
    activities: ['Hiking', 'Photography', 'Picnicking']
  },
  {
    id: 5,
    name: 'Kisama Heritage Village',
    location: 'Kisama',
    description: 'Home to the famous Hornbill Festival, showcasing Naga culture and traditions.',
    details: 'Features traditional Naga morung architecture and cultural exhibits.',
    image: '/places/kisama-village.jpg',
    activities: ['Cultural Events', 'Museum Visits', 'Photography']
  },
  {
    id: 6,
    name: 'Mount Saramati',
    location: 'Kiphire District',
    description: 'The highest peak in Nagaland, offering breathtaking views and challenging treks.',
    details: 'A paradise for adventure seekers and mountaineers with diverse flora and fauna.',
    image: '/places/mount-saramati.jpg',
    activities: ['Mountaineering', 'Wildlife Spotting', 'Camping']
  }
]

const SixthSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      // Stagger animation for grid items
      gsap.fromTo(
        '.place-card',
        { 
          opacity: 0,
          y: 20
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: {
            amount: 0.2,
            ease: "power1.out"
          },
          scrollTrigger: {
            trigger: gridRef.current,
            start: 'top bottom-=20%',
            end: 'top center+=20%',
            toggleActions: "play none none reverse"
          }
        }
      )
    })

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="destinations"
      className="relative min-h-screen w-full bg-white overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/patterns/dot-pattern.png')] opacity-5" />
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="min-h-screen flex flex-col py-20">
          {/* Section Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="text-center mb-16 sm:mb-20"
          >
            <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl 
                         text-gray-900 font-bold leading-tight
                         max-w-4xl mx-auto"
            >
              Places to{' '}
              <span className="text-amber-600">Visit</span>
            </h2>
            <p className="mt-4 text-gray-600 text-lg sm:text-xl max-w-2xl mx-auto">
              Discover the hidden gems and breathtaking landscapes of Nagaland
            </p>
          </motion.div>

          {/* Places Grid */}
          <div
            ref={gridRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10"
          >
            {places.map((place) => (
              <motion.div
                key={place.id}
                className="place-card group relative bg-white rounded-2xl overflow-hidden
                         shadow-lg hover:shadow-xl transition-all duration-500"
              >
                {/* Image Container */}
                <div className="relative h-[250px] overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-100 to-amber-50">
                    {/* Replace with actual image once available */}
                    {/* <Image
                      src={place.image}
                      alt={place.name}
                      fill
                      className="object-cover transition-transform duration-500
                               group-hover:scale-110"
                    /> */}
                  </div>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 
                                transition-colors duration-500" />
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8">
                  <div className="flex items-center gap-2 mb-3">
                    <svg 
                      className="w-4 h-4 text-amber-600" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-sm text-gray-600">{place.location}</span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {place.name}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-4">
                    {place.description}
                  </p>

                  {/* Activities Tags */}
                  <div className="flex flex-wrap gap-2">
                    {place.activities.map((activity, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-amber-50 text-amber-800 
                                 text-xs rounded-full"
                      >
                        {activity}
                      </span>
                    ))}
                  </div>

                  {/* Explore Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="mt-6 w-full px-4 py-2 bg-amber-600 text-white 
                             rounded-lg text-sm font-medium
                             hover:bg-amber-700 transition-colors duration-300"
                  >
                    Explore Location
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default SixthSection 