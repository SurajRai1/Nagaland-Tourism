'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Navbar from '@/components/layout/Navbar'
import DateSelector from '@/components/planner/DateSelector'
import DestinationSelector from '@/components/planner/DestinationSelector'
import ExperienceSelector from '@/components/planner/ExperienceSelector'
import TripSummary from '@/components/planner/TripSummary'

const PlanTripPage = () => {
  const [activeStep, setActiveStep] = useState(1)
  const [validationError, setValidationError] = useState<string | null>(null)
  const [selectedDates, setSelectedDates] = useState<{ 
    start: Date | null; 
    end: Date | null;
    duration: number | null;
    isHornbillFestival?: boolean;
  }>({
    start: null,
    end: null,
    duration: null,
    isHornbillFestival: false
  })
  const [selectedDestinations, setSelectedDestinations] = useState<string[]>([])
  const [selectedExperiences, setSelectedExperiences] = useState<string[]>([])

  // Function to handle date selection
  const handleDateSelect = (dates: { 
    start: Date | null; 
    end: Date | null; 
    duration: number;
    isHornbillFestival?: boolean;
  }) => {
    setValidationError(null) // Clear error when dates are selected
    setSelectedDates({
      start: dates.start,
      end: dates.end,
      duration: dates.duration,
      isHornbillFestival: dates.isHornbillFestival
    })
  }

  // Function to handle step navigation
  const handleNextStep = () => {
    console.log('Current step:', activeStep) // Debug log
    console.log('Selected destinations:', selectedDestinations) // Debug log
    setValidationError(null) // Clear previous errors

    // Validate based on current step
    if (activeStep === 1) {
      if (!selectedDates.start || !selectedDates.end) {
        setValidationError('Please select your travel dates before proceeding.')
        return
      }
      console.log('Moving from Step 1 to Step 2') // Debug log
      setActiveStep(2)
      return
    }

    if (activeStep === 2) {
      console.log('Validating step 2, destinations:', selectedDestinations.length) // Debug log
      if (selectedDestinations.length === 0) {
        setValidationError('Please select at least one destination before proceeding.')
        return
      }
      console.log('Moving from Step 2 to Step 3') // Debug log
      setActiveStep(3)
      return
    }

    if (activeStep === 3) {
      console.log('Moving from Step 3 to Step 4') // Debug log
      setActiveStep(4)
      return
    }

    console.log('Moving to next step') // Debug log
    setActiveStep(prev => Math.min(4, prev + 1))
  }

  // Function to handle destination selection
  const handleDestinationSelect = (destinations: string[]) => {
    console.log('Parent received destinations:', destinations) // Debug log
    setSelectedDestinations(destinations)
    setValidationError(null)
  }

  // Function to handle experience selection
  const handleExperienceSelect = (experiences: string[]) => {
    console.log('Experiences selected:', experiences) // Debug log
    setSelectedExperiences(experiences)
    setValidationError(null)
  }

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] w-full overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-amber-900">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.1)_1px,transparent_0)] [background-size:40px_40px]" />
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
            className="absolute inset-0 bg-gradient-to-r from-amber-500/10 via-transparent to-amber-500/10"
          />
        </div>

        {/* Decorative Elements */}
        <div className="absolute inset-0">
          {/* Top Left Corner */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="absolute top-10 left-10 w-24 h-24 rounded-full bg-gradient-to-br from-amber-400/20 to-amber-600/20 blur-2xl"
          />
          {/* Bottom Right Corner */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="absolute bottom-10 right-10 w-32 h-32 rounded-full bg-gradient-to-tl from-amber-500/20 to-amber-700/20 blur-2xl"
          />
        </div>

        {/* Content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="max-w-4xl px-6 text-center relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <span className="inline-block px-4 py-2 rounded-full bg-amber-500/20 text-amber-100 text-sm font-medium mb-4 backdrop-blur-sm">
                Your Journey Begins Here
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Plan Your Nagaland Adventure
              </h1>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Create your perfect itinerary with our interactive trip planner and discover the rich cultural heritage of Nagaland
              </p>
            </motion.div>

            {/* Journey Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-3 gap-6 max-w-2xl mx-auto"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-amber-400 mb-1">16+</div>
                <div className="text-sm text-gray-300">Major Tribes</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-amber-400 mb-1">100+</div>
                <div className="text-sm text-gray-300">Cultural Events</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-amber-400 mb-1">12</div>
                <div className="text-sm text-gray-300">Districts to Explore</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Planning Steps */}
      <section className="py-16 px-6 bg-gradient-to-b from-white via-amber-50/30 to-white">
        <div className="container mx-auto max-w-7xl">
          {/* Progress Steps */}
          <div className="flex items-center justify-center mb-12">
            {[1, 2, 3, 4].map((step) => (
              <div key={step} className="flex items-center">
                <motion.div 
                  initial={false}
                  animate={{
                    scale: activeStep === step ? 1.1 : 1,
                    backgroundColor: activeStep >= step ? '#d97706' : '#e5e7eb'
                  }}
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium
                    ${activeStep >= step ? 'text-white' : 'text-gray-600'}`}
                >
                  {step}
                </motion.div>
                {step < 4 && (
                  <motion.div 
                    initial={false}
                    animate={{
                      backgroundColor: activeStep > step ? '#d97706' : '#e5e7eb'
                    }}
                    className="w-20 h-0.5 mx-2"
                  />
                )}
              </div>
            ))}
          </div>

          {/* Step Labels */}
          <div className="flex items-center justify-center text-sm text-gray-600 mb-16 gap-12">
            <motion.span
              animate={{ color: activeStep >= 1 ? '#d97706' : '#4b5563', fontWeight: activeStep === 1 ? 600 : 400 }}
            >
              Choose Dates
            </motion.span>
            <motion.span
              animate={{ color: activeStep >= 2 ? '#d97706' : '#4b5563', fontWeight: activeStep === 2 ? 600 : 400 }}
            >
              Select Places
            </motion.span>
            <motion.span
              animate={{ color: activeStep >= 3 ? '#d97706' : '#4b5563', fontWeight: activeStep === 3 ? 600 : 400 }}
            >
              Add Experiences
            </motion.span>
            <motion.span
              animate={{ color: activeStep >= 4 ? '#d97706' : '#4b5563', fontWeight: activeStep === 4 ? 600 : 400 }}
            >
              Finalize
            </motion.span>
          </div>

          {/* Content Area */}
          <motion.div 
            layout
            className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl shadow-gray-200/50 p-8"
          >
            {/* Validation Error Message */}
            {validationError && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg"
              >
                <p className="text-sm text-red-800">{validationError}</p>
              </motion.div>
            )}

            {/* Step 1: Choose Dates */}
            {activeStep === 1 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                <div className="max-w-2xl">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">When would you like to visit?</h2>
                  <p className="text-gray-600">
                    Choose your travel dates and we'll help you plan the perfect itinerary based on seasonal events and festivals.
                  </p>
                </div>
                <DateSelector onDateSelect={handleDateSelect} />
              </motion.div>
            )}

            {/* Step 2: Select Places */}
            {activeStep === 2 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                <div className="max-w-2xl">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Where would you like to go?</h2>
                  <p className="text-gray-600">
                    Select the destinations you'd like to visit in Nagaland. You can choose multiple places to create your perfect itinerary.
                  </p>
                  {selectedDates.duration && (
                    <div className="mt-4 p-4 bg-amber-50 rounded-lg border border-amber-200">
                      <p className="text-sm text-amber-800">
                        <span className="font-medium">Trip Duration:</span> {selectedDates.duration} days
                        {selectedDates.duration >= 7 && (
                          <span className="block mt-1 text-amber-700">
                            ✨ Perfect duration to explore multiple destinations!
                          </span>
                        )}
                      </p>
                    </div>
                  )}
                </div>
                <DestinationSelector 
                  onDestinationsSelect={handleDestinationSelect} 
                  isHornbillSelected={selectedDates.isHornbillFestival}
                />
              </motion.div>
            )}

            {/* Step 3: Add Experiences */}
            {activeStep === 3 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                <div className="max-w-2xl">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Choose Your Experiences</h2>
                  <p className="text-gray-600">
                    Select activities and experiences to make your trip memorable. We've curated these based on your selected destinations.
                  </p>
                  {selectedDestinations.length > 0 && (
                    <div className="mt-4 p-4 bg-amber-50 rounded-lg border border-amber-200">
                      <p className="text-sm text-amber-800">
                        <span className="font-medium">Selected Destinations:</span>{' '}
                        {selectedDestinations.length} location{selectedDestinations.length !== 1 ? 's' : ''}
                      </p>
                    </div>
                  )}
                </div>
                <ExperienceSelector
                  selectedDestinations={selectedDestinations}
                  onExperiencesSelect={handleExperienceSelect}
                />
              </motion.div>
            )}

            {/* Step 4: Finalize */}
            {activeStep === 4 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                <div className="max-w-2xl">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Review & Finalize Your Trip</h2>
                  <p className="text-gray-600">
                    Please review your trip details and provide your contact information. Our team will get back to you within 24 hours to confirm your itinerary.
                  </p>
                </div>
                <TripSummary
                  selectedDates={selectedDates}
                  selectedDestinations={selectedDestinations}
                  selectedExperiences={selectedExperiences}
                />
              </motion.div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-12">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  console.log('Going back from step:', activeStep) // Debug log
                  setValidationError(null)
                  setActiveStep(prev => Math.max(1, prev - 1))
                }}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2
                  ${activeStep === 1 
                    ? 'opacity-50 cursor-not-allowed bg-gray-100 text-gray-400' 
                    : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50 hover:border-gray-300'}`}
                disabled={activeStep === 1}
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Previous
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  console.log('Attempting to move to next step from:', activeStep) // Debug log
                  handleNextStep()
                }}
                className="px-6 py-2.5 rounded-full bg-amber-600 text-white text-sm font-medium
                         hover:bg-amber-700 transition-all duration-300 flex items-center gap-2"
              >
                {activeStep === 4 ? 'Submit Plan' : 'Next Step'}
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}

export default PlanTripPage 