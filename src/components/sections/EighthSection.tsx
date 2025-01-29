'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'

// Gallery data
const galleryImages = [
  {
    id: 1,
    src: '/gallery/landscape-1.jpg',
    alt: 'Dzükou Valley Landscape',
    category: 'Landscapes',
    width: 600,
    height: 400
  },
  {
    id: 2,
    src: '/gallery/festival-1.jpg',
    alt: 'Hornbill Festival Celebration',
    category: 'Festivals',
    width: 400,
    height: 600
  },
  {
    id: 3,
    src: '/gallery/culture-1.jpg',
    alt: 'Traditional Naga Dance',
    category: 'Culture',
    width: 600,
    height: 400
  },
  {
    id: 4,
    src: '/gallery/wildlife-1.jpg',
    alt: 'Nagaland Wildlife',
    category: 'Wildlife',
    width: 400,
    height: 600
  },
  {
    id: 5,
    src: '/gallery/landscape-2.jpg',
    alt: 'Mount Saramati View',
    category: 'Landscapes',
    width: 600,
    height: 400
  },
  {
    id: 6,
    src: '/gallery/culture-2.jpg',
    alt: 'Traditional Weaving',
    category: 'Culture',
    width: 400,
    height: 600
  }
]

const categories = ['All', 'Landscapes', 'Festivals', 'Culture', 'Wildlife']

const EighthSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null)
  const sectionRef = useRef<HTMLDivElement>(null)
  const galleryRef = useRef<HTMLDivElement>(null)

  const filteredImages = selectedCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory)

  // Add navigation function with null check
  const navigateImage = (direction: 'next' | 'prev') => {
    if (!selectedImage) return

    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id)
    if (direction === 'next') {
      const nextImage = filteredImages[currentIndex + 1] || filteredImages[0]
      setSelectedImage(nextImage)
    } else {
      const prevImage = filteredImages[currentIndex - 1] || filteredImages[filteredImages.length - 1]
      setSelectedImage(prevImage)
    }
  }

  // Handle keyboard events for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedImage) return

      if (e.key === 'Escape') {
        setSelectedImage(null)
      } else if (e.key === 'ArrowRight') {
        navigateImage('next')
      } else if (e.key === 'ArrowLeft') {
        navigateImage('prev')
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [selectedImage, filteredImages])

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      // Stagger animation for gallery items
      gsap.fromTo(
        '.gallery-item',
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
            trigger: galleryRef.current,
            start: 'top bottom-=20%',
            end: 'top center+=20%',
            toggleActions: "play none none reverse"
          }
        }
      )
    })

    return () => ctx.revert()
  }, [selectedCategory])

  return (
    <>
      <section
        ref={sectionRef}
        id="gallery"
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
                Photo{' '}
                <span className="text-amber-600">Gallery</span>
              </h2>
              <p className="mt-4 text-gray-600 text-lg sm:text-xl max-w-2xl mx-auto">
                Capturing the beauty and spirit of Nagaland through our lens
              </p>
            </motion.div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <motion.button
                  key={category}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300
                    ${selectedCategory === category
                      ? 'bg-amber-600 text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                >
                  {category}
                </motion.button>
              ))}
            </div>

            {/* Gallery Grid */}
            <div
              ref={galleryRef}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredImages.map((image) => (
                <motion.div
                  key={image.id}
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="gallery-item group relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg
                           cursor-pointer"
                  onClick={() => setSelectedImage(image)}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-100 to-amber-50">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover transition-transform duration-500
                               group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 
                                transition-colors duration-500" />
                  
                  {/* Image Info */}
                  <div className="absolute inset-x-0 bottom-0 p-6
                                bg-gradient-to-t from-black/80 to-transparent"
                  >
                    <p className="text-white text-sm font-medium">
                      {image.alt}
                    </p>
                    <span className="text-amber-300 text-xs">
                      {image.category}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 sm:p-8"
            onClick={() => setSelectedImage(null)}
          >
            {/* Close button */}
            <button 
              className="absolute top-4 right-4 z-50 p-2 text-white hover:text-amber-500 transition-colors"
              onClick={(e) => {
                e.stopPropagation()
                setSelectedImage(null)
              }}
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Navigation buttons */}
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 p-2 text-white hover:text-amber-500 transition-colors"
              onClick={(e) => {
                e.stopPropagation()
                navigateImage('prev')
              }}
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 p-2 text-white hover:text-amber-500 transition-colors"
              onClick={(e) => {
                e.stopPropagation()
                navigateImage('next')
              }}
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Image */}
            <div className="relative w-full max-w-4xl aspect-[4/3]">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                fill
                className="object-contain"
                priority
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default EighthSection 