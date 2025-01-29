/**
 * Main Page Component
 * 
 * This is the root page component that assembles all sections of the website.
 * It uses a hybrid approach combining individual section components with a
 * page container for better layout management.
 * 
 * Structure:
 * - PageContainer: Provides global layout and animation context
 * - Individual Sections: Maintain their unique functionality and styling
 * 
 * Note: The order of sections affects their display order on the page
 */

import Navbar from '@/components/layout/Navbar'
import PageContainer from '@/components/layout/PageContainer'
import Hero from '@/components/home/Hero'
import SecondSection from '@/components/sections/SecondSection'
import ThirdSection from '@/components/sections/ThirdSection'
import FourthSection from '@/components/sections/FourthSection'
import FifthSection from '@/components/sections/FifthSection'
import SixthSection from '@/components/sections/SixthSection'
import SeventhSection from '@/components/sections/SeventhSection'
import EighthSection from '@/components/sections/EighthSection'
import NinthSection from '@/components/sections/NinthSection'
import TenthSection from '@/components/sections/TenthSection'
import Footer from '@/components/sections/Footer'

export default function Home() {
  return (
    <main className="relative">
      {/* Navbar is kept outside PageContainer to maintain its fixed positioning */}
      <Navbar />
      
      {/* 
        PageContainer wraps all sections while preserving their individual
        behaviors and animations
      */}
      <PageContainer>
        {/* Hero Section - Landing view with video background */}
        <Hero />

        {/* Second Section - Image showcase with transitions */}
        <SecondSection />

        {/* Third Section - Video and content with parallax */}
        <ThirdSection />

        {/* Fourth Section - Tribal showcase with interactive cards */}
        <FourthSection />

        {/* Fifth Section - Festival Calendar with timeline */}
        <FifthSection />

        {/* Sixth Section - Places to Visit with interactive grid */}
        <SixthSection />

        {/* Seventh Section - Local Experiences showcase */}
        <SeventhSection />

        {/* Eighth Section - Photo Gallery with filtering */}
        <EighthSection />

        {/* Ninth Section - Additional content */}
        <NinthSection />

        {/* Tenth Section - Additional content */}
        <TenthSection />
        <Footer />
      </PageContainer>
    </main>
  )
}
