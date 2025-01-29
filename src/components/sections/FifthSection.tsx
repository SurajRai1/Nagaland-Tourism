'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'

// Festival data with dates, descriptions, and images
const festivals = [
  {
    id: 1,
    name: 'Hornbill Festival',
    month: 'December',
    date: '1-10',
    description: 'Known as the "Festival of Festivals", the Hornbill Festival is a celebration of Nagaland\'s rich cultural heritage and traditions.',
    longDescription: 'A vibrant showcase of Naga culture, featuring traditional dances, folk songs, indigenous games, and local cuisine. All 16 tribes of Nagaland participate in this grand celebration.',
    image: '/festivals/hornbill.jpg',
    location: 'Kisama Heritage Village, Kohima',
    tags: ['Cultural', 'Music', 'Dance', 'Food']
  },
  {
    id: 2,
    name: 'Moatsu Festival',
    month: 'May',
    date: '1-3',
    description: 'A significant festival of the Ao tribe celebrating the completion of sowing season.',
    longDescription: 'The festival includes traditional songs, dances, and feasts. It\'s a time when the Ao community comes together to celebrate their agricultural heritage.',
    image: '/festivals/moatsu.jpg',
    location: 'Mokokchung District',
    tags: ['Harvest', 'Dance', 'Community']
  },
  {
    id: 3,
    name: 'Sekrenyi Festival',
    month: 'February',
    date: '25-27',
    description: 'A purification festival celebrated by the Angami tribe.',
    longDescription: 'Also known as Phousanyi, this festival marks the purification of body and soul. It features traditional games, rituals, and community feasts.',
    image: '/festivals/sekrenyi.jpg',
    location: 'Kohima District',
    tags: ['Traditional', 'Rituals', 'Games']
  },
  {
    id: 4,
    name: 'Tokhu Emong',
    month: 'November',
    date: '7-8',
    description: 'Post-harvest festival of the Lotha tribe celebrating abundance.',
    longDescription: 'A thanksgiving celebration marked by feasting, music, and strengthening community bonds.',
    image: '/festivals/tokhu.jpg',
    location: 'Lotha District',
    tags: ['Harvest', 'Thanksgiving', 'Cultural']
  },
  {
    id: 5,
    name: 'Tuluni Festival',
    month: 'July',
    date: '8-9',
    description: 'Celebration of abundance by the Sumi tribe.',
    longDescription: 'A joyous celebration with traditional games, dances, and a grand feast.',
    image: '/festivals/tuluni.jpg',
    location: 'Sumi District',
    tags: ['Harvest', 'Games', 'Feast']
  }
]

const FifthSection = () => {
  const [selectedFestival, setSelectedFestival] = useState(festivals[0])
  const sectionRef = useRef<HTMLDivElement>(null)
  const timelineRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      // Timeline animation
      gsap.fromTo(
        timelineRef.current,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          scrollTrigger: {
            trigger: timelineRef.current,
            start: 'top bottom',
            end: 'top center',
            scrub: 1
          }
        }
      )

      // Content animation
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
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
              Festival{' '}
              <span className="text-amber-500">Calendar</span>
            </h2>
            <p className="mt-4 text-gray-300 text-lg sm:text-xl max-w-2xl mx-auto">
              Experience the vibrant festivals of Nagaland throughout the year
            </p>
          </motion.div>

          {/* Festival Timeline and Content */}
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            {/* Timeline */}
            <div className="space-y-8">
              {festivals.map((festival) => (
                <motion.div
                  key={festival.id}
                  className="festival-card group relative flex items-start gap-6 sm:gap-8"
                >
                  {/* Date Column */}
                  <div className="flex-none w-20 sm:w-24 text-center">
                    <div className="text-amber-500 font-medium">
                      {festival.month}
                    </div>
                    <div className="mt-1 text-sm text-gray-400">
                      {festival.date}
                    </div>
                  </div>

                  {/* Content Column */}
                  <div className="flex-1">
                    <div className="relative">
                      {/* Timeline Line */}
                      <div className="absolute -left-9 sm:-left-11 h-full w-px bg-gray-700" />
                      
                      {/* Timeline Dot */}
                      <div className="absolute -left-[2.25rem] sm:-left-[2.75rem] -top-1 w-3 h-3 
                                    rounded-full bg-amber-500 border-2 border-black
                                    group-hover:bg-amber-400 transition-colors duration-300" />

                      {/* Festival Content */}
                      <div className="bg-gray-900 rounded-xl p-6 sm:p-8
                                    transform transition-transform duration-300
                                    hover:scale-[1.02] hover:shadow-xl"
                      >
                        <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                          {festival.name}
                        </h3>
                        <p className="text-gray-300 text-sm sm:text-base mb-4">
                          {festival.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {festival.tags.map((tag, index) => (
                            <span
                              key={index}
                              className="px-3 py-1 bg-gray-800 text-amber-400
                                       text-xs rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Festival Content */}
            <div
              ref={contentRef}
              className="w-full lg:w-2/3"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedFestival.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="rounded-2xl overflow-hidden bg-white shadow-xl"
                >
                  {/* Festival Image */}
                  <div className="relative h-[300px] sm:h-[400px]">
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-100 to-amber-50">
                      {/* Replace with actual image once available */}
                      {/* <Image
                        src={selectedFestival.image}
                        alt={selectedFestival.name}
                        fill
                        className="object-cover"
                      /> */}
                    </div>
                  </div>

                  {/* Festival Details */}
                  <div className="p-6 sm:p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm">
                        {selectedFestival.month} {selectedFestival.date}
                      </div>
                      <div className="text-sm text-gray-600">
                        {selectedFestival.location}
                      </div>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                      {selectedFestival.name}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed">
                      {selectedFestival.longDescription}
                    </p>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="mt-6 px-6 py-3 bg-amber-600 text-white rounded-full
                               text-sm font-medium hover:bg-amber-700
                               transition-colors duration-300"
                    >
                      Learn More
                    </motion.button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FifthSection 