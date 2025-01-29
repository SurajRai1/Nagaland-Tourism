'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'
import Link from 'next/link'

// Extended tribe data with more tribes
const tribes = [
  { 
    id: 1, 
    name: 'Angami', 
    description: 'Known for their bravery and rich agricultural practices.',
    longDescription: 'The Angami tribe is renowned for their terraced cultivation and the famous Sekrenyi festival. Their traditional villages are strategically located on hilltops, and they are known for their sophisticated agricultural techniques.',
    image: '/Hornbill festival.jpg'
  },
  { 
    id: 2, 
    name: 'Ao', 
    description: 'Masters of traditional textile weaving and folklore.',
    longDescription: 'The Ao tribe is famous for their rich oral traditions and colorful textile designs. They celebrate the Moatsu festival in May, marking the completion of sowing, and are known for their unique traditional governance system.',
    image: '/Hornbill Festival Nagaland.jpg'
  },
  {
    id: 3,
    name: 'Sumi',
    description: 'Renowned for their vibrant cultural festivals and craftsmanship.',
    longDescription: 'The Sumi Nagas are known for their exceptional craftsmanship in woodwork and metalwork. They celebrate the Tuluni festival, which marks their rich agricultural heritage and community bonding.',
    image: '/Hornbill festival.jpg'
  },
  {
    id: 4,
    name: 'Konyak',
    description: 'The tattooed headhunters with rich artistic traditions.',
    longDescription: 'Once famous as headhunters, the Konyak tribe is known for their distinctive facial tattoos and elaborate headdresses adorned with hornbill feathers. They are skilled craftsmen, especially in blacksmithy and woodcarving.',
    image: '/Hornbill Festival Nagaland.jpg'
  },
  {
    id: 5,
    name: 'Lotha',
    description: 'Masters of traditional music and agricultural practices.',
    longDescription: 'The Lotha tribe is celebrated for their rich musical heritage and the Tokhu Emong festival. They are skilled agriculturists and their songs often reflect their deep connection with nature and farming.',
    image: '/Hornbill festival.jpg'
  },
  {
    id: 6,
    name: 'Rengma',
    description: 'Known for their unique customs and terrace farming.',
    longDescription: 'The Rengma Nagas are expert terrace farmers and are known for their unique Ngada festival. Their traditional attire features distinctive warrior designs and they maintain strong community bonds through their social institutions.',
    image: '/Hornbill Festival Nagaland.jpg'
  },
  {
    id: 7,
    name: 'Chakhesang',
    description: 'Experts in sustainable farming and traditional conservation.',
    longDescription: 'The Chakhesang tribe is famous for their sustainable farming practices and the Thünyie festival. They have developed sophisticated methods of natural resource management and are known for their colorful shawls.',
    image: '/Hornbill festival.jpg'
  }
]

const FourthSection = () => {
  const [selectedTribe, setSelectedTribe] = useState(tribes[0])
  const [currentIndex, setCurrentIndex] = useState(0)
  const sectionRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: contentRef.current,
            start: 'top bottom',
            end: 'top center',
            scrub: 1
          }
        }
      )
    })

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen w-full bg-white overflow-hidden perspective-[1000px]"
    >
      {/* Diagonal Overlay */}
      <div className="absolute inset-0 bg-white transform -skew-y-6 origin-top-left" />
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="min-h-screen flex flex-col py-20">
          {/* Top Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="text-center mb-16 sm:mb-20"
          >
            <h2 className="font-sans text-2xl sm:text-3xl md:text-4xl 
                         text-gray-900 font-bold leading-tight
                         max-w-4xl mx-auto"
            >
              A home to{' '}
              <span className="text-amber-600">18 tribes</span>,
              <br className="hidden sm:block" />
              each with its unique culture, beauty and traditions
            </h2>
          </motion.div>

          {/* Content Container */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16">
            {/* Left Side - Static Content */}
            <div
              ref={contentRef}
              className="w-full lg:w-1/2 space-y-8"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedTribe.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ 
                    duration: 1.2,
                    ease: [0.43, 0.13, 0.23, 0.96]
                  }}
                  className="space-y-6"
                >
                  <h3 className="text-xl sm:text-2xl font-semibold text-gray-800">
                    {selectedTribe.name} Tribe
                  </h3>
                  <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                    {selectedTribe.longDescription}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right Side - Interactive Cards */}
            <div className="w-full lg:w-1/2 relative h-[400px] sm:h-[500px] perspective-[2000px]">
              <AnimatePresence mode="wait">
                {tribes.map((tribe, index) => (
                  <motion.div
                    key={tribe.id}
                    initial={{ opacity: 0, rotateY: 90, x: 100 }}
                    animate={{ 
                      opacity: currentIndex === index ? 1 : 0,
                      rotateY: currentIndex === index ? 0 : 90,
                      x: currentIndex === index ? 0 : 100,
                      scale: currentIndex === index ? 1 : 0.8
                    }}
                    exit={{ opacity: 0, rotateY: -90, x: -100 }}
                    transition={{ 
                      duration: 1.2, // Slowed down
                      ease: [0.43, 0.13, 0.23, 0.96], // Smooth easing
                      opacity: { duration: 0.8 } // Slowed down fade
                    }}
                    className={`absolute inset-0 ${currentIndex === index ? 'pointer-events-auto' : 'pointer-events-none'}`}
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    <div 
                      className="relative w-full h-full rounded-2xl overflow-hidden cursor-pointer
                               shadow-lg hover:shadow-xl transition-all duration-700
                               transform hover:scale-[1.02]"
                      onClick={() => {
                        setSelectedTribe(tribe)
                        setCurrentIndex(index)
                      }}
                    >
                      {/* Tribe image */}
                      <div className="absolute inset-0">
                        <Image
                          src={tribe.image}
                          alt={tribe.name}
                          fill
                          className="object-cover"
                          priority
                        />
                      </div>
                      
                      {/* Overlay with tribe info */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent">
                        <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 text-white">
                          <motion.h3 
                            className="text-xl sm:text-2xl font-bold mb-2"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.8 }} // Slowed down
                          >
                            {tribe.name}
                          </motion.h3>
                          <motion.p 
                            className="text-sm sm:text-base text-gray-200"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.6, duration: 0.8 }} // Slowed down
                          >
                            {tribe.description}
                          </motion.p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>

              {/* Navigation Dots */}
              <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 flex gap-2">
                {tribes.map((tribe, index) => (
                  <button
                    key={tribe.id}
                    onClick={() => {
                      setCurrentIndex(index)
                      setSelectedTribe(tribe)
                    }}
                    className={`w-2 h-2 rounded-full transition-all duration-700 
                             ${currentIndex === index 
                               ? 'bg-amber-600 w-6' 
                               : 'bg-gray-400 hover:bg-amber-400'}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="text-center mt-20"
          >
            <Link href="/tribes">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 bg-amber-600 text-white rounded-full
                         text-lg sm:text-xl font-medium
                         hover:bg-amber-700 shadow-md hover:shadow-xl
                         transition-all duration-300"
              >
                Discover All Tribes
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default FourthSection 