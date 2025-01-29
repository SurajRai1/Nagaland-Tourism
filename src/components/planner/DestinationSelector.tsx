'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

// Destination data
const destinations = [
  {
    id: 'kohima',
    name: 'Kohima',
    description: 'Capital city known for the Hornbill Festival and World War II cemetery.',
    image: '/destinations/kohima.jpg',
    highlights: [
      'Hornbill Festival Venue',
      'World War II Cemetery',
      'Kohima Cathedral',
      'Local Markets'
    ],
    duration: '2-3 days',
    category: 'City',
    distance: 'Central Nagaland'
  },
  {
    id: 'dimapur',
    name: 'Dimapur',
    description: 'Gateway to Nagaland with historical ruins and modern markets.',
    image: '/destinations/dimapur.jpg',
    highlights: [
      'Kachari Ruins',
      'Triple Falls',
      'Shopping Districts',
      'Local Cuisine'
    ],
    duration: '1-2 days',
    category: 'City',
    distance: 'Southern Gateway'
  },
  {
    id: 'mokokchung',
    name: 'Mokokchung',
    description: 'Cultural hub of the Ao Naga tribe with rich traditions and scenic beauty.',
    image: '/destinations/mokokchung.jpg',
    highlights: [
      'Ao Tribal Villages',
      'Longkhum Village',
      'Tribal Museums',
      'Local Handicrafts'
    ],
    duration: '2-3 days',
    category: 'City',
    distance: 'Northern Nagaland'
  },
  {
    id: 'mon',
    name: 'Mon',
    description: 'Home to the Konyak tribe, famous for their traditional tattoos and crafts.',
    image: '/destinations/mon.jpg',
    highlights: [
      'Konyak Villages',
      'Traditional Tattoo Art',
      'Tribal Culture',
      'Scenic Viewpoints'
    ],
    duration: '2-3 days',
    category: 'City',
    distance: 'Far Northern Nagaland'
  },
  {
    id: 'tuensang',
    name: 'Tuensang',
    description: 'One of the oldest districts, home to Chang, Yimchunger, and Khiamniungan tribes.',
    image: '/destinations/tuensang.jpg',
    highlights: [
      'Traditional Villages',
      'Cultural Heritage',
      'Local Festivals',
      'Handicraft Centers'
    ],
    duration: '2-3 days',
    category: 'City',
    distance: 'Eastern Nagaland'
  },
  {
    id: 'zunheboto',
    name: 'Zunheboto',
    description: 'Known as the land of the Sumi Nagas with rich wildlife and culture.',
    image: '/destinations/zunheboto.jpg',
    highlights: [
      'Sumi Villages',
      'Wildlife Spots',
      'Cultural Shows',
      'Local Markets'
    ],
    duration: '2 days',
    category: 'City',
    distance: 'Central Nagaland'
  },
  {
    id: 'wokha',
    name: 'Wokha',
    description: 'Home to the Lotha tribe and known for its scenic beauty.',
    image: '/destinations/wokha.jpg',
    highlights: [
      'Lotha Culture',
      'Mount Tiyi',
      'Doyang River',
      'Local Festivals'
    ],
    duration: '2 days',
    category: 'City',
    distance: 'Western Nagaland'
  },
  {
    id: 'phek',
    name: 'Phek',
    description: 'Known for its diverse Chakhesang and Pochury cultures and natural beauty.',
    image: '/destinations/phek.jpg',
    highlights: [
      'Chakhesang Villages',
      'Rice Terraces',
      'Folk Music',
      'Traditional Weaving'
    ],
    duration: '2-3 days',
    category: 'City',
    distance: 'Southern Nagaland'
  },
  {
    id: 'kiphire',
    name: 'Kiphire',
    description: 'Home to Sangtam tribe and Mount Saramati, the highest peak in Nagaland.',
    image: '/destinations/kiphire.jpg',
    highlights: [
      'Mount Saramati',
      'Tribal Culture',
      'Nature Trails',
      'Local Festivals'
    ],
    duration: '2 days',
    category: 'City',
    distance: 'Eastern Nagaland'
  },
  {
    id: 'longleng',
    name: 'Longleng',
    description: 'Home to the Phom tribe with unique customs and traditions.',
    image: '/destinations/longleng.jpg',
    highlights: [
      'Phom Villages',
      'Cultural Sites',
      'Traditional Dance',
      'Local Markets'
    ],
    duration: '1-2 days',
    category: 'City',
    distance: 'Eastern Nagaland'
  },
  {
    id: 'peren',
    name: 'Peren',
    description: 'Known for Zeliang and Kuki tribes and their distinct cultures.',
    image: '/destinations/peren.jpg',
    highlights: [
      'Mount Pauna',
      'Zeliang Culture',
      'Traditional Dances',
      'Local Handicrafts'
    ],
    duration: '2 days',
    category: 'City',
    distance: 'South-Western Nagaland'
  },
  {
    id: 'noklak',
    name: 'Noklak',
    description: 'Newest district known for Khiamniungan tribe and border culture.',
    image: '/destinations/noklak.jpg',
    highlights: [
      'Border Views',
      'Tribal Life',
      'Traditional Arts',
      'Local Markets'
    ],
    duration: '1-2 days',
    category: 'City',
    distance: 'Eastern Nagaland'
  },
  {
    id: 'shamator',
    name: 'Shamator',
    description: 'Home to Yimchunger tribe with rich cultural heritage.',
    image: '/destinations/shamator.jpg',
    highlights: [
      'Yimchunger Culture',
      'Traditional Villages',
      'Local Festivals',
      'Scenic Views'
    ],
    duration: '1-2 days',
    category: 'City',
    distance: 'Eastern Nagaland'
  },
  {
    id: 'tseminyu',
    name: 'Tseminyu',
    description: 'Known for Rengma Naga tribe and their unique traditions.',
    image: '/destinations/tseminyu.jpg',
    highlights: [
      'Rengma Culture',
      'Traditional Practices',
      'Local Festivals',
      'Handicrafts'
    ],
    duration: '1-2 days',
    category: 'City',
    distance: 'Northern Nagaland'
  },
  {
    id: 'niuland',
    name: 'Niuland',
    description: 'Known for its agricultural practices and local traditions.',
    image: '/destinations/niuland.jpg',
    highlights: [
      'Farming Culture',
      'Local Markets',
      'Traditional Life',
      'Cultural Shows'
    ],
    duration: '1-2 days',
    category: 'City',
    distance: 'Western Nagaland'
  },
  {
    id: 'chumoukedima',
    name: 'Chumoukedima',
    description: 'New district with modern amenities and traditional charm.',
    image: '/destinations/chumoukedima.jpg',
    highlights: [
      'Modern Markets',
      'Cultural Sites',
      'Local Food',
      'Shopping Areas'
    ],
    duration: '1-2 days',
    category: 'City',
    distance: 'Western Nagaland'
  },
  // Natural Attractions
  {
    id: 'dzukou',
    name: 'Dzükou Valley',
    description: 'Known for its seasonal flowers and pristine hiking trails.',
    image: '/destinations/dzukou.jpg',
    highlights: [
      'Valley of Flowers',
      'Trekking Trails',
      'Camping Sites',
      'Scenic Views'
    ],
    duration: '1-2 days',
    category: 'Nature',
    distance: 'Southern Nagaland'
  },
  {
    id: 'mount-saramati',
    name: 'Mount Saramati',
    description: 'Highest peak in Nagaland offering breathtaking views and challenging treks.',
    image: '/destinations/mount-saramati.jpg',
    highlights: [
      'Peak Climbing',
      'Cloud Forests',
      'Rare Flora',
      'Panoramic Views'
    ],
    duration: '2-3 days',
    category: 'Nature',
    distance: 'Kiphire District'
  },
  {
    id: 'doyang-reservoir',
    name: 'Doyang Reservoir',
    description: 'Known as the "Falcon Capital of the World", famous for Amur falcon migration.',
    image: '/destinations/doyang.jpg',
    highlights: [
      'Bird Watching',
      'Amur Falcons',
      'Boating',
      'Sunset Views'
    ],
    duration: '1-2 days',
    category: 'Nature',
    distance: 'Wokha District'
  },
  {
    id: 'shilloi-lake',
    name: 'Shilloi Lake',
    description: 'Natural heart-shaped lake surrounded by pristine forests.',
    image: '/destinations/shilloi.jpg',
    highlights: [
      'Heart-shaped Lake',
      'Forest Trails',
      'Local Legends',
      'Photography'
    ],
    duration: '1 day',
    category: 'Nature',
    distance: 'Phek District'
  },
  {
    id: 'triple-falls',
    name: 'Triple Falls',
    description: 'Three-tiered waterfall with scenic hiking trails and picnic spots.',
    image: '/destinations/triple-falls.jpg',
    highlights: [
      'Waterfall Views',
      'Nature Walks',
      'Picnic Areas',
      'Photography'
    ],
    duration: '1 day',
    category: 'Nature',
    distance: 'Dimapur District'
  },
  {
    id: 'mount-tiyi',
    name: 'Mount Tiyi',
    description: 'Sacred mountain known as "Mountain of Life" with rich mythology.',
    image: '/destinations/mount-tiyi.jpg',
    highlights: [
      'Sacred Sites',
      'Hiking Trails',
      'Cultural Stories',
      'Viewpoints'
    ],
    duration: '1-2 days',
    category: 'Nature',
    distance: 'Wokha District'
  },
  {
    id: 'ntangki',
    name: 'Ntangki National Park',
    description: 'Rich biodiversity with rare species and dense forests.',
    image: '/destinations/ntangki.jpg',
    highlights: [
      'Wildlife Spotting',
      'Forest Trails',
      'Bird Watching',
      'Nature Photography'
    ],
    duration: '1-2 days',
    category: 'Nature',
    distance: 'Peren District'
  },
  {
    id: 'satoi-range',
    name: 'Satoi Range',
    description: 'Pristine mountain range with diverse flora and stunning landscapes.',
    image: '/destinations/satoi.jpg',
    highlights: [
      'Mountain Views',
      'Alpine Meadows',
      'Trekking Routes',
      'Wild Orchids'
    ],
    duration: '2-3 days',
    category: 'Nature',
    distance: 'Zunheboto District'
  },
  {
    id: 'pulie-badze',
    name: 'Pulie Badze',
    description: 'A sacred grove with unique biodiversity and cultural significance.',
    image: '/destinations/pulie-badze.jpg',
    highlights: [
      'Sacred Forest',
      'Rare Plants',
      'Cultural Site',
      'Nature Walks'
    ],
    duration: '1 day',
    category: 'Nature',
    distance: 'Kohima District'
  },
  {
    id: 'intanki',
    name: 'Intanki National Park',
    description: 'Wildlife sanctuary with diverse flora and fauna.',
    image: '/destinations/intanki.jpg',
    highlights: [
      'Wildlife Viewing',
      'Nature Trails',
      'Bird Watching',
      'Photography'
    ],
    duration: '1 day',
    category: 'Nature',
    distance: 'Western Nagaland'
  }
]

// Category filters
const categories = ['All', 'City', 'Cultural', 'Nature']

interface DestinationSelectorProps {
  onDestinationsSelect: (selectedDestinations: string[]) => void;
  isHornbillSelected?: boolean;
}

const DestinationSelector = ({ onDestinationsSelect, isHornbillSelected }: DestinationSelectorProps) => {
  const [selectedDestinations, setSelectedDestinations] = useState<string[]>([])
  const [activeCategory, setActiveCategory] = useState('All')
  const [hoveredDestination, setHoveredDestination] = useState<string | null>(null)

  // Auto-select Kohima if Hornbill Festival is selected
  useEffect(() => {
    if (isHornbillSelected) {
      setSelectedDestinations(['kohima'])
      onDestinationsSelect(['kohima'])
      setActiveCategory('City')
    }
  }, [isHornbillSelected, onDestinationsSelect])

  // Handle destination selection
  const handleDestinationToggle = (destinationId: string) => {
    console.log('Toggling destination:', destinationId) // Debug log
    
    const newSelectedDestinations = selectedDestinations.includes(destinationId)
      ? selectedDestinations.filter(id => id !== destinationId)
      : [...selectedDestinations, destinationId]
    
    console.log('New selection:', newSelectedDestinations) // Debug log
    setSelectedDestinations(newSelectedDestinations)
    
    // Notify parent component
    onDestinationsSelect(newSelectedDestinations)
  }

  // Use effect to notify parent of changes
  useEffect(() => {
    console.log('DestinationSelector useEffect - selected:', selectedDestinations) // Debug log
    onDestinationsSelect(selectedDestinations)
  }, [selectedDestinations, onDestinationsSelect])

  const filteredDestinations = destinations.filter(dest => {
    if (isHornbillSelected) {
      return dest.id === 'kohima' // Only show Kohima if Hornbill is selected
    }
    return activeCategory === 'All' || dest.category === activeCategory
  })

  return (
    <div className="space-y-6">
      {/* Categories */}
      <div className="flex flex-wrap gap-3">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => {
              console.log('Setting category:', category) // Debug log
              setActiveCategory(category)
            }}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
              ${activeCategory === category
                ? 'bg-amber-600 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Destinations Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredDestinations.map(destination => (
          <motion.div
            key={destination.id}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => handleDestinationToggle(destination.id)}
            className={`relative rounded-xl overflow-hidden cursor-pointer border-2 transition-all duration-300
              ${selectedDestinations.includes(destination.id)
                ? 'border-amber-600 shadow-lg'
                : 'border-transparent hover:border-gray-200'}`}
          >
            {/* Selection indicator */}
            {selectedDestinations.includes(destination.id) && (
              <div className="absolute top-2 right-2 z-10 bg-amber-600 text-white p-1 rounded-full">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            )}
            
            {/* Image with overlay */}
            <div className="aspect-[4/3] relative">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20 z-10" />
              <img
                src={destination.image}
                alt={destination.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="absolute inset-0 z-20 p-6 flex flex-col justify-end text-white">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold">{destination.name}</h3>
                  <span className="text-sm bg-amber-500/20 backdrop-blur-sm px-3 py-1 rounded-full">
                    {destination.duration}
                  </span>
                </div>
                <p className="text-sm text-gray-200">{destination.description}</p>
                
                {/* Highlights */}
                <div className="space-y-2 pt-3">
                  <div className="text-xs font-medium text-amber-300">Highlights:</div>
                  <div className="grid grid-cols-2 gap-2">
                    {destination.highlights.map((highlight, index) => (
                      <div key={index} className="flex items-center gap-1 text-xs text-gray-200">
                        <svg className="w-3 h-3 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {highlight}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default DestinationSelector 