'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react'
import Navbar from '@/components/layout/Navbar'

// Extended tribe data with all 18 tribes
const tribes = [
  { 
    id: 1, 
    name: 'Angami', 
    description: 'Known for their bravery and rich agricultural practices.',
    longDescription: 'The Angami tribe is renowned for their terraced cultivation and the famous Sekrenyi festival. Their traditional villages are strategically located on hilltops, and they are known for their sophisticated agricultural techniques.',
    image: '/Hornbill festival.jpg',
    location: 'Kohima District',
    population: '150,000+',
    mainFestival: 'Sekrenyi',
    specialties: ['Terraced farming', 'Traditional architecture', 'Warrior traditions']
  },
  { 
    id: 2, 
    name: 'Ao', 
    description: 'Masters of traditional textile weaving and folklore.',
    longDescription: 'The Ao tribe is famous for their rich oral traditions and colorful textile designs. They celebrate the Moatsu festival in May, marking the completion of sowing, and are known for their unique traditional governance system.',
    image: '/Hornbill Festival Nagaland.jpg',
    location: 'Mokokchung District',
    population: '200,000+',
    mainFestival: 'Moatsu',
    specialties: ['Textile weaving', 'Folk songs', 'Wood carving']
  },
  {
    id: 3,
    name: 'Sumi',
    description: 'Renowned for their vibrant cultural festivals and craftsmanship.',
    longDescription: 'The Sumi Nagas are known for their exceptional craftsmanship in woodwork and metalwork. They celebrate the Tuluni festival, which marks their rich agricultural heritage and community bonding.',
    image: '/Hornbill festival.jpg',
    location: 'Zunheboto District',
    population: '180,000+',
    mainFestival: 'Tuluni',
    specialties: ['Metalwork', 'Traditional dance', 'Agricultural practices']
  },
  {
    id: 4,
    name: 'Konyak',
    description: 'The tattooed headhunters with rich artistic traditions.',
    longDescription: 'Once famous as headhunters, the Konyak tribe is known for their distinctive facial tattoos and elaborate headdresses adorned with hornbill feathers. They are skilled craftsmen, especially in blacksmithy and woodcarving.',
    image: '/Hornbill Festival Nagaland.jpg',
    location: 'Mon District',
    population: '250,000+',
    mainFestival: 'Aoleang Monyu',
    specialties: ['Facial tattoos', 'Blacksmithy', 'Traditional jewelry']
  },
  {
    id: 5,
    name: 'Lotha',
    description: 'Masters of traditional music and agricultural practices.',
    longDescription: 'The Lotha tribe is celebrated for their rich musical heritage and the Tokhu Emong festival. They are skilled agriculturists and their songs often reflect their deep connection with nature and farming.',
    image: '/Hornbill festival.jpg',
    location: 'Wokha District',
    population: '170,000+',
    mainFestival: 'Tokhu Emong',
    specialties: ['Musical traditions', 'Agriculture', 'Folk tales']
  },
  {
    id: 6,
    name: 'Rengma',
    description: 'Known for their unique customs and terrace farming.',
    longDescription: 'The Rengma Nagas are expert terrace farmers and are known for their unique Ngada festival. Their traditional attire features distinctive warrior designs and they maintain strong community bonds through their social institutions.',
    image: '/Hornbill Festival Nagaland.jpg',
    location: 'Tseminyu District',
    population: '100,000+',
    mainFestival: 'Ngada',
    specialties: ['Terrace farming', 'Traditional attire', 'Social institutions']
  },
  {
    id: 7,
    name: 'Chakhesang',
    description: 'Experts in sustainable farming and traditional conservation.',
    longDescription: 'The Chakhesang tribe is famous for their sustainable farming practices and the Thünyie festival. They have developed sophisticated methods of natural resource management and are known for their colorful shawls.',
    image: '/Hornbill festival.jpg',
    location: 'Phek District',
    population: '160,000+',
    mainFestival: 'Thünyie',
    specialties: ['Sustainable farming', 'Resource management', 'Textile weaving']
  },
  {
    id: 8,
    name: 'Sangtam',
    description: 'Masters of traditional crafts and agricultural innovations.',
    longDescription: 'The Sangtam tribe is known for their exceptional skills in bamboo craft and wood carving. They celebrate the Mongmong festival, which marks the completion of the sowing season and features unique ritual dances.',
    image: '/Hornbill Festival Nagaland.jpg',
    location: 'Kiphire District',
    population: '120,000+',
    mainFestival: 'Mongmong',
    specialties: ['Bamboo craft', 'Wood carving', 'Ritual dances']
  },
  {
    id: 9,
    name: 'Yimchunger',
    description: 'Preservers of ancient traditions and hunting practices.',
    longDescription: 'The Yimchunger tribe maintains strong connections to their ancestral practices, particularly in hunting and gathering. Their Metemneo festival is a celebration of community solidarity and traditional games.',
    image: '/Hornbill festival.jpg',
    location: 'Tuensang District',
    population: '110,000+',
    mainFestival: 'Metemneo',
    specialties: ['Hunting traditions', 'Traditional games', 'Forest conservation']
  },
  {
    id: 10,
    name: 'Khiamniungan',
    description: 'Skilled artisans and cultural preservationists.',
    longDescription: 'The Khiamniungan tribe is renowned for their intricate beadwork and traditional jewelry making. They celebrate the Miu festival, which showcases their rich cultural heritage through dance and music.',
    image: '/Hornbill Festival Nagaland.jpg',
    location: 'Noklak District',
    population: '90,000+',
    mainFestival: 'Miu',
    specialties: ['Beadwork', 'Jewelry making', 'Traditional dance']
  },
  {
    id: 11,
    name: 'Phom',
    description: 'Warriors known for their unique cultural practices.',
    longDescription: 'The Phom tribe has a rich warrior tradition and is known for their distinctive cultural practices. Their Monyu festival is a celebration of brotherhood and community harmony.',
    image: '/Hornbill festival.jpg',
    location: 'Longleng District',
    population: '140,000+',
    mainFestival: 'Monyu',
    specialties: ['Warrior traditions', 'Community bonds', 'Traditional games']
  },
  {
    id: 12,
    name: 'Pochury',
    description: 'Experts in traditional medicine and agriculture.',
    longDescription: 'The Pochury tribe possesses extensive knowledge of herbal medicine and sustainable farming. Their Yemshe festival celebrates the harvest season with traditional music and dance.',
    image: '/Hornbill Festival Nagaland.jpg',
    location: 'Meluri District',
    population: '80,000+',
    mainFestival: 'Yemshe',
    specialties: ['Herbal medicine', 'Sustainable farming', 'Traditional music']
  },
  {
    id: 13,
    name: 'Zeliang',
    description: 'Known for their rich oral traditions and craftsmanship.',
    longDescription: 'The Zeliang tribe maintains a rich oral history through folk songs and stories. They are skilled in bamboo craft and celebrate the Hega festival with great enthusiasm.',
    image: '/Hornbill festival.jpg',
    location: 'Peren District',
    population: '130,000+',
    mainFestival: 'Hega',
    specialties: ['Oral traditions', 'Bamboo craft', 'Folk music']
  },
  {
    id: 14,
    name: 'Chang',
    description: 'Masters of traditional warfare and agricultural practices.',
    longDescription: 'The Chang tribe is known for their traditional warfare techniques and sophisticated agricultural knowledge. Their Naknyulum festival celebrates victory and community achievements.',
    image: '/Hornbill Festival Nagaland.jpg',
    location: 'Tuensang District',
    population: '95,000+',
    mainFestival: 'Naknyulum',
    specialties: ['Warfare techniques', 'Agriculture', 'Victory celebrations']
  },
  {
    id: 15,
    name: 'Kachari',
    description: 'Preservers of ancient customs and textile traditions.',
    longDescription: 'The Kachari tribe is known for their intricate textile weaving and traditional customs. They celebrate the Bushu festival with traditional dance and music performances.',
    image: '/Hornbill festival.jpg',
    location: 'Dimapur District',
    population: '70,000+',
    mainFestival: 'Bushu',
    specialties: ['Textile weaving', 'Traditional customs', 'Folk dance']
  },
  {
    id: 16,
    name: 'Kuki',
    description: 'Known for their hunting skills and festive traditions.',
    longDescription: 'The Kuki tribe has a rich tradition of hunting and gathering. They celebrate the Chavang Kut festival with traditional dance, music, and sports competitions.',
    image: '/Hornbill Festival Nagaland.jpg',
    location: 'Various Districts',
    population: '60,000+',
    mainFestival: 'Chavang Kut',
    specialties: ['Hunting skills', 'Traditional sports', 'Festival celebrations']
  },
  {
    id: 17,
    name: 'Garo',
    description: 'Masters of traditional dance and community festivals.',
    longDescription: 'The Garo tribe is known for their vibrant dance traditions and community celebrations. Their Wangala festival is a grand harvest celebration featuring traditional music and dance.',
    image: '/Hornbill festival.jpg',
    location: 'Various Districts',
    population: '55,000+',
    mainFestival: 'Wangala',
    specialties: ['Traditional dance', 'Harvest celebrations', 'Community festivals']
  },
  {
    id: 18,
    name: 'Dimasa',
    description: 'Preservers of ancient rituals and cultural heritage.',
    longDescription: 'The Dimasa tribe maintains ancient rituals and cultural practices. They celebrate the Busu Dima festival with traditional dance, music, and ceremonial offerings.',
    image: '/Hornbill Festival Nagaland.jpg',
    location: 'Various Districts',
    population: '50,000+',
    mainFestival: 'Busu Dima',
    specialties: ['Ancient rituals', 'Traditional ceremonies', 'Cultural preservation']
  }
]

export default function TribesPage() {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] w-full overflow-hidden">
        <Image
          src="/Hornbill Festival Nagaland.jpg"
          alt="Nagaland Tribes"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="max-w-4xl px-6">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
            >
              Tribes of Nagaland
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-200"
            >
              Discover the rich cultural heritage and unique traditions of Nagaland's indigenous tribes
            </motion.p>
          </div>
        </div>
      </section>

      {/* Tribes List Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {tribes.map((tribe, index) => (
              <motion.div
                key={tribe.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-64">
                  <Image
                    src={tribe.image}
                    alt={tribe.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    {tribe.name} Tribe
                  </h2>
                  <p className="text-gray-600 mb-4">
                    {tribe.longDescription}
                  </p>
                  
                  {/* Tribe Details */}
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-gray-900">Location:</span>
                      <span className="text-gray-600">{tribe.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-gray-900">Population:</span>
                      <span className="text-gray-600">{tribe.population}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-gray-900">Main Festival:</span>
                      <span className="text-gray-600">{tribe.mainFestival}</span>
                    </div>
                  </div>

                  {/* Specialties */}
                  <div className="flex flex-wrap gap-2">
                    {tribe.specialties.map((specialty, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-amber-50 text-amber-800 rounded-full text-sm"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
} 