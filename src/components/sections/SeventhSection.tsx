'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'

// Local experiences data
const experiences = [
  {
    id: 1,
    title: 'Traditional Weaving Workshop',
    category: 'Arts & Crafts',
    description: 'Learn the intricate art of Naga textile weaving from local artisans.',
    duration: '3 hours',
    image: '/experiences/weaving.jpg',
    highlights: ['Hands-on learning', 'Take home your creation', 'Meet master weavers']
  },
  {
    id: 2,
    title: 'Naga Cuisine Cooking Class',
    category: 'Food & Culture',
    description: 'Master the art of traditional Naga cooking with local chefs.',
    duration: '4 hours',
    image: '/experiences/cooking.jpg',
    highlights: ['Market visit', 'Cooking session', 'Communal dining']
  },
  {
    id: 3,
    title: 'Village Homestay Experience',
    category: 'Cultural Immersion',
    description: 'Live with a local family and experience authentic Naga lifestyle.',
    duration: '2 days',
    image: '/experiences/homestay.jpg',
    highlights: ['Traditional accommodation', 'Local activities', 'Cultural exchange']
  },
  {
    id: 4,
    title: 'Traditional Music Workshop',
    category: 'Arts & Culture',
    description: 'Learn to play traditional Naga musical instruments.',
    duration: '2 hours',
    image: '/experiences/music.jpg',
    highlights: ['Instrument basics', 'Folk songs', 'Live performance']
  }
]

const SeventhSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      // Stagger animation for experience cards
      gsap.fromTo(
        '.experience-card',
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
            trigger: cardsRef.current,
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
      id="experiences"
      className="relative min-h-screen w-full bg-black overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-black opacity-10" />
      
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
                         text-white font-bold leading-tight
                         max-w-4xl mx-auto"
            >
              Local{' '}
              <span className="text-amber-500">Experiences</span>
            </h2>
            <p className="mt-4 text-gray-300 text-lg sm:text-xl max-w-2xl mx-auto">
              Immerse yourself in authentic Naga culture through unique experiences
            </p>
          </motion.div>

          {/* Experience Cards */}
          <div
            ref={cardsRef}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10"
          >
            {experiences.map((exp) => (
              <motion.div
                key={exp.id}
                className="experience-card group relative bg-gray-900 rounded-2xl overflow-hidden
                         shadow-lg hover:shadow-xl transition-all duration-500
                         border border-gray-800"
              >
                {/* Image Container */}
                <div className="relative h-[200px] overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900">
                    {/* Replace with actual image once available */}
                    {/* <Image
                      src={exp.image}
                      alt={exp.title}
                      fill
                      className="object-cover transition-transform duration-500
                               group-hover:scale-110"
                    /> */}
                  </div>
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 
                                transition-colors duration-500" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 px-3 py-1 
                                bg-white/10 backdrop-blur-sm rounded-full
                                text-xs font-medium text-amber-400">
                    {exp.category}
                  </div>
                  
                  {/* Duration Badge */}
                  <div className="absolute top-4 right-4 px-3 py-1 
                                bg-black/50 backdrop-blur-sm rounded-full
                                text-xs font-medium text-gray-300">
                    {exp.duration}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8">
                  <h3 className="text-xl font-bold text-white mb-3">
                    {exp.title}
                  </h3>
                  
                  <p className="text-gray-300 text-sm mb-4">
                    {exp.description}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-2">
                    {exp.highlights.map((highlight, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <svg 
                          className="w-4 h-4 text-amber-500" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                                d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm text-gray-300">{highlight}</span>
                      </div>
                    ))}
                  </div>

                  {/* Book Now Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="mt-6 w-full px-4 py-2 bg-amber-500 text-white 
                             rounded-lg text-sm font-medium
                             hover:bg-amber-600 transition-colors duration-300"
                  >
                    Book Experience
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

export default SeventhSection 