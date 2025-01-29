'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

// Experience categories and data
const experienceCategories = [
  'All',
  'Cultural',
  'Adventure',
  'Nature',
  'Food',
  'Festivals',
  'Wellness'
]

const experiences = [
  {
    id: 'tribal-village',
    name: 'Traditional Village Visit',
    description: 'Experience authentic Naga tribal life and customs.',
    duration: '4-6 hours',
    category: 'Cultural',
    price: 'Rs. 2,000 per person',
    highlights: [
      'Traditional dance performances',
      'Local craft demonstrations',
      'Tribal home visits',
      'Cultural interaction'
    ],
    image: '/experiences/tribal-village.jpg'
  },
  {
    id: 'trekking',
    name: 'Dzukou Valley Trek',
    description: 'Trek through the famous valley of flowers.',
    duration: 'Full day',
    category: 'Adventure',
    price: 'Rs. 3,500 per person',
    highlights: [
      'Professional guide',
      'Camping equipment',
      'Meals included',
      'Photography spots'
    ],
    image: '/experiences/dzukou-trek.jpg'
  },
  {
    id: 'cooking-class',
    name: 'Naga Cuisine Workshop',
    description: 'Learn to cook traditional Naga dishes.',
    duration: '3 hours',
    category: 'Food',
    price: 'Rs. 1,500 per person',
    highlights: [
      'Local ingredient tour',
      'Hands-on cooking',
      'Recipe booklet',
      'Food tasting'
    ],
    image: '/experiences/cooking-class.jpg'
  },
  {
    id: 'hornbill-festival',
    name: 'Hornbill Festival Experience',
    description: 'Immerse in the Festival of Festivals.',
    duration: 'Full day',
    category: 'Festivals',
    price: 'Rs. 2,500 per person',
    highlights: [
      'Traditional games',
      'Music performances',
      'Cultural shows',
      'Local food stalls'
    ],
    image: '/experiences/hornbill-festival.jpg'
  },
  {
    id: 'wildlife-safari',
    name: 'Intanki Wildlife Safari',
    description: 'Explore Nagaland\'s diverse wildlife.',
    duration: 'Half day',
    category: 'Nature',
    price: 'Rs. 2,000 per person',
    highlights: [
      'Wildlife spotting',
      'Bird watching',
      'Nature guide',
      'Safari vehicle'
    ],
    image: '/experiences/wildlife-safari.jpg'
  },
  {
    id: 'meditation',
    name: 'Mountain Meditation Retreat',
    description: 'Find peace in the Naga hills.',
    duration: '2-3 hours',
    category: 'Wellness',
    price: 'Rs. 1,000 per person',
    highlights: [
      'Guided meditation',
      'Yoga session',
      'Herbal tea',
      'Peaceful environment'
    ],
    image: '/experiences/meditation.jpg'
  }
]

interface ExperienceSelectorProps {
  selectedDestinations: string[];
  onExperiencesSelect: (experiences: string[]) => void;
}

// Currency conversion rates (to be updated with real API integration)
const currencyRates = {
  USD: 0.012, // US Dollar
  EUR: 0.011, // Euro
  GBP: 0.0095, // British Pound
  JPY: 1.78, // Japanese Yen
  AUD: 0.018, // Australian Dollar
  CNY: 0.086, // Chinese Yuan
  NPR: 1.60, // Nepalese Rupee
  SGD: 0.016, // Singapore Dollar
  THB: 0.42, // Thai Baht
  MYR: 0.056, // Malaysian Ringgit
  KRW: 15.85, // South Korean Won
  HKD: 0.094, // Hong Kong Dollar
  VND: 294.5, // Vietnamese Dong
  IDR: 188.5, // Indonesian Rupiah
  PHP: 0.67, // Philippine Peso
  BDT: 1.32, // Bangladeshi Taka
  LKR: 3.85, // Sri Lankan Rupee
  MMK: 25.2, // Myanmar Kyat
  CAD: 0.016, // Canadian Dollar
  NZD: 0.020, // New Zealand Dollar
}

type CurrencyCode = keyof typeof currencyRates

const ExperienceSelector = ({ selectedDestinations, onExperiencesSelect }: ExperienceSelectorProps) => {
  const [selectedExperiences, setSelectedExperiences] = useState<string[]>([])
  const [activeCategory, setActiveCategory] = useState('All')
  const [selectedCurrency, setSelectedCurrency] = useState<CurrencyCode>('USD')
  const [hoveredExperience, setHoveredExperience] = useState<string | null>(null)

  // Calculate total cost
  const totalCost = selectedExperiences.reduce((total, expId) => {
    const experience = experiences.find(exp => exp.id === expId)
    if (!experience) return total
    const priceMatch = experience.price.match(/\d+(?:,\d+)*/)
    const price = priceMatch ? parseInt(priceMatch[0].replace(/,/g, '')) : 0
    return total + price
  }, 0)

  // Convert price to selected currency
  const convertPrice = (priceInINR: number, currency: CurrencyCode) => {
    const rate = currencyRates[currency]
    const converted = priceInINR * rate
    return new Intl.NumberFormat('en-US', { 
      style: 'currency', 
      currency: currency,
      maximumFractionDigits: 2
    }).format(converted)
  }

  // Filter experiences based on selected category
  const filteredExperiences = experiences.filter(exp => 
    activeCategory === 'All' || exp.category === activeCategory
  )

  // Handle experience selection
  const handleExperienceToggle = (experienceId: string) => {
    setSelectedExperiences(prev => {
      const newSelection = prev.includes(experienceId)
        ? prev.filter(id => id !== experienceId)
        : [...prev, experienceId]
      return newSelection
    })
  }

  // Use effect to notify parent of changes
  useEffect(() => {
    onExperiencesSelect(selectedExperiences)
  }, [selectedExperiences, onExperiencesSelect])

  return (
    <div className="space-y-6 relative">
      {/* Categories */}
      <div className="flex gap-4 overflow-x-auto pb-4 snap-x">
        {experienceCategories.map(category => (
          <motion.button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 flex-shrink-0 snap-start
              ${activeCategory === category
                ? 'bg-amber-600 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {category}
          </motion.button>
        ))}
      </div>

      {/* Experiences Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {filteredExperiences.map(experience => (
          <motion.div
            key={experience.id}
            className={`relative rounded-xl overflow-hidden cursor-pointer group
              ${selectedExperiences.includes(experience.id)
                ? 'ring-2 ring-amber-500'
                : 'hover:ring-2 hover:ring-amber-300'}`}
            onClick={() => handleExperienceToggle(experience.id)}
            onHoverStart={() => setHoveredExperience(experience.id)}
            onHoverEnd={() => setHoveredExperience(null)}
            whileHover={{ y: -5 }}
          >
            {/* Image */}
            <div className="aspect-[4/3] relative">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20 z-10" />
              <img
                src={experience.image}
                alt={experience.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="absolute inset-0 z-20 p-6 flex flex-col justify-end text-white">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold">{experience.name}</h3>
                  <span className="text-sm bg-amber-500/20 backdrop-blur-sm px-3 py-1 rounded-full">
                    {experience.duration}
                  </span>
                </div>
                <p className="text-sm text-gray-200">{experience.description}</p>
                
                {/* Price and Category */}
                <div className="flex items-center justify-between text-sm">
                  <span className="text-amber-300">{experience.price}</span>
                  <span className="text-gray-300">{experience.category}</span>
                </div>

                {/* Highlights */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredExperience === experience.id ? 1 : 0 }}
                  className="space-y-1 pt-2"
                >
                  {experience.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-center gap-1 text-xs text-gray-200">
                      <svg className="w-3 h-3 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {highlight}
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>

            {/* Selection indicator */}
            {selectedExperiences.includes(experience.id) && (
              <div className="absolute top-4 right-4 z-30 bg-amber-500 rounded-full p-2">
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Summary Panel - Integrated into page flow */}
      {selectedExperiences.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-br from-amber-50 to-white rounded-xl border border-amber-100 shadow-lg overflow-hidden"
        >
          <div className="p-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              {/* Cost Information */}
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Trip Summary</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    Selected Experiences: {selectedExperiences.length}
                  </p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-amber-600">
                    ₹{totalCost.toLocaleString()}
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-sm font-medium text-gray-700">
                      {convertPrice(totalCost, selectedCurrency)}
                    </span>
                    <select
                      value={selectedCurrency}
                      onChange={(e) => setSelectedCurrency(e.target.value as CurrencyCode)}
                      className="px-3 py-1.5 rounded-md border border-gray-200 text-sm font-medium text-gray-800 
                        focus:outline-none focus:ring-2 focus:ring-amber-500 hover:border-gray-300 
                        bg-white cursor-pointer"
                    >
                      {Object.entries(currencyRates).map(([currency, rate]) => (
                        <option key={currency} value={currency} className="font-medium">
                          {currency}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Selected Experiences List */}
              <div className="flex-1 max-w-xl">
                <div className="space-y-3">
                  {selectedExperiences.map(id => {
                    const experience = experiences.find(e => e.id === id)
                    if (!experience) return null
                    return (
                      <div 
                        key={id}
                        className="flex items-center justify-between bg-white rounded-lg p-3 shadow-sm"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-md overflow-hidden">
                            <img 
                              src={experience.image} 
                              alt={experience.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-900">{experience.name}</h4>
                            <p className="text-sm text-gray-500">{experience.duration}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-medium text-amber-600">{experience.price}</div>
                          <button
                            onClick={(e) => {
                              e.stopPropagation()
                              handleExperienceToggle(id)
                            }}
                            className="text-sm text-gray-400 hover:text-red-500 transition-colors"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  )
}

export default ExperienceSelector 