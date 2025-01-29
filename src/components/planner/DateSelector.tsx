'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { format, addDays, differenceInDays, isBefore, startOfTomorrow, addYears } from 'date-fns'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"

// Seasonal data
const seasons = [
  {
    name: 'Festival Season',
    months: 'December - January',
    description: 'Peak tourist season with the famous Hornbill Festival and perfect weather.',
    highlights: ['Hornbill Festival', 'Christmas Celebrations', 'Perfect Weather'],
    temperature: '15°C - 24°C',
    recommended: true
  },
  {
    name: 'Spring',
    months: 'February - March',
    description: 'Moderate weather with blooming rhododendrons and local festivals.',
    highlights: ['Sekrenyi Festival', 'Flower Blooms', 'Clear Skies'],
    temperature: '18°C - 28°C',
    recommended: true
  },
  {
    name: 'Summer',
    months: 'April - June',
    description: 'Warm weather with occasional rain, good for village tours.',
    highlights: ['Village Life', 'Cultural Tours', 'Local Markets'],
    temperature: '20°C - 32°C',
    recommended: false
  },
  {
    name: 'Monsoon',
    months: 'July - September',
    description: 'Heavy rainfall period with lush green landscapes.',
    highlights: ['Green Landscapes', 'Waterfalls', 'Less Crowded'],
    temperature: '20°C - 28°C',
    recommended: false
  },
  {
    name: 'Autumn',
    months: 'October - November',
    description: 'Pleasant weather with harvest festivals and clear views.',
    highlights: ['Harvest Festivals', 'Clear Views', 'Perfect Hiking'],
    temperature: '16°C - 26°C',
    recommended: true
  }
]

// Duration options
const durationOptions = [
  { label: '3-5 days', days: 4 },
  { label: 'One Week', days: 7 },
  { label: 'Two Weeks', days: 14 },
  { label: 'One Month', days: 30 }
]

interface DateSelectorProps {
  onDateSelect: (dates: { 
    start: Date | null; 
    end: Date | null; 
    duration: number;
    isHornbillFestival?: boolean;
  }) => void;
}

const DateSelector = ({ onDateSelect }: DateSelectorProps) => {
  const [selectedSeason, setSelectedSeason] = useState(seasons[0])
  const [selectedDuration, setSelectedDuration] = useState<number | null>(null)
  const [dateRange, setDateRange] = useState<{ start: Date | null; end: Date | null }>({
    start: null,
    end: null
  })

  // Get tomorrow and max date (2 years from now)
  const minDate = startOfTomorrow()
  const maxDate = addYears(new Date(), 2)

  // Function to handle duration selection
  const handleDurationSelect = (days: number) => {
    const start = minDate // Always start from tomorrow
    const end = addDays(start, days - 1) // Subtract 1 because we want inclusive dates
    setSelectedDuration(days)
    setDateRange({ start, end })
    onDateSelect({ 
      start, 
      end, 
      duration: days,
      isHornbillFestival: false
    })
  }

  // Function to validate dates
  const validateDates = (start: Date | null, end: Date | null): boolean => {
    if (!start || !end) return false
    return !isBefore(start, minDate) // Ensure start date is not before tomorrow
  }

  // Function to select Hornbill Festival dates
  const selectHornbillFestival = () => {
    const festivalStart = new Date(2025, 11, 1) // December 1, 2025
    const festivalEnd = new Date(2025, 11, 10) // December 10, 2025
    
    // Only allow selection if festival hasn't started yet
    if (isBefore(new Date(), festivalStart)) {
      setDateRange({
        start: festivalStart,
        end: festivalEnd
      })
      onDateSelect({
        start: festivalStart,
        end: festivalEnd,
        duration: 10,
        isHornbillFestival: true
      })
    }
  }

  // Function to handle date selection
  const handleDateSelect = (dates: { start: Date | null; end: Date | null }) => {
    if (validateDates(dates.start, dates.end)) {
      setDateRange(dates)
      if (dates.start && dates.end) {
        const duration = differenceInDays(dates.end, dates.start) + 1
        onDateSelect({ 
          ...dates, 
          duration,
          isHornbillFestival: false
        })
      }
    }
  }

  return (
    <div className="space-y-8">
      {/* Season Selector */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Seasons Section */}
        <div className="lg:col-span-2">
          <div className="flex overflow-x-auto pb-4 gap-4 snap-x">
            {seasons.map((season) => (
              <motion.div
                key={season.name}
                onClick={() => setSelectedSeason(season)}
                className={`flex-shrink-0 snap-start w-72 p-6 rounded-xl cursor-pointer transition-all duration-300
                  ${selectedSeason.name === season.name 
                    ? 'bg-amber-50 border-2 border-amber-600' 
                    : 'bg-gray-50 border-2 border-transparent hover:border-amber-200'}`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-bold text-gray-900">{season.name}</h3>
                    <p className="text-sm text-gray-600">{season.months}</p>
                  </div>
                  {season.recommended && (
                    <span className="px-2 py-1 text-xs font-medium text-amber-800 bg-amber-100 rounded-full">
                      Recommended
                    </span>
                  )}
                </div>
                <p className="text-sm text-gray-600 mb-4">{season.description}</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <svg className="w-4 h-4 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {season.temperature}
                  </div>
                  {season.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm text-gray-700">
                      <svg className="w-4 h-4 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {highlight}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Date Selection Section */}
        <div className="space-y-6">
          {/* Quick Selection and Custom Dates */}
          <div className="bg-gray-50 p-6 rounded-xl relative">
            <h3 className="font-bold text-gray-900 mb-4">Choose Your Dates</h3>
            
            {/* Quick Duration Options */}
            <div className="mb-12">
              <p className="text-sm text-gray-600 mb-3">Quick Selection:</p>
              <div className="grid grid-cols-2 gap-3">
                {durationOptions.map((option) => (
                  <button
                    key={option.days}
                    onClick={() => handleDurationSelect(option.days)}
                    className={`p-3 text-sm rounded-lg transition-all duration-300 ${
                      selectedDuration === option.days
                        ? 'bg-amber-100 text-amber-800 border-2 border-amber-500'
                        : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Custom Date Picker */}
            <div className="pt-8 mb-8">
              <p className="text-sm font-medium text-gray-700 mb-8">Or Select Custom Dates:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="relative">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Start Date</label>
                  <input 
                    type="date"
                    value={dateRange.start ? format(dateRange.start, 'yyyy-MM-dd') : ''}
                    onChange={(e) => {
                      const date = e.target.value ? new Date(e.target.value) : null;
                      handleDateSelect({
                        start: date,
                        end: dateRange.end
                      });
                    }}
                    min={format(minDate, 'yyyy-MM-dd')}
                    max={format(maxDate, 'yyyy-MM-dd')}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent
                             text-gray-900 bg-white"
                  />
                </div>
                <div className="relative">
                  <label className="block text-sm font-medium text-gray-700 mb-2">End Date</label>
                  <input 
                    type="date"
                    value={dateRange.end ? format(dateRange.end, 'yyyy-MM-dd') : ''}
                    onChange={(e) => {
                      const date = e.target.value ? new Date(e.target.value) : null;
                      handleDateSelect({
                        start: dateRange.start,
                        end: date
                      });
                    }}
                    min={dateRange.start ? format(dateRange.start, 'yyyy-MM-dd') : format(minDate, 'yyyy-MM-dd')}
                    max={format(maxDate, 'yyyy-MM-dd')}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent
                             text-gray-900 bg-white"
                  />
                </div>
              </div>
            </div>

            {/* Add extra bottom padding to the container */}
            <div className="pb-8"></div>
          </div>

          {/* Special Events Section */}
          <div className="bg-gray-50 p-6 rounded-xl mt-12">
            <h3 className="font-bold text-gray-900 mb-4">Special Events</h3>
            <button
              onClick={selectHornbillFestival}
              className={`w-full p-4 rounded-lg text-left transition-all duration-300 relative overflow-hidden group
                ${dateRange.start?.getMonth() === 11 ? 'bg-amber-100 border-2 border-amber-500' : 'bg-white border border-gray-200 hover:bg-gray-50'}`}
            >
              <div className="relative z-10">
                <div className="font-medium text-amber-800">Hornbill Festival 2025</div>
                <div className="text-sm text-gray-600 mt-1">December 1-10, 2025</div>
                <div className="text-xs text-amber-600 mt-2">Nagaland's most celebrated cultural festival</div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-amber-100/0 via-amber-100/30 to-amber-100/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
            </button>
          </div>
        </div>
      </div>

      {/* Selected Dates Display */}
      {dateRange.start && dateRange.end && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gray-50 p-6 rounded-xl"
        >
          <h3 className="font-bold text-gray-900 mb-4">Your Selected Dates</h3>
          <div className="flex items-center gap-4 text-gray-700">
            <div>
              <p className="text-sm text-gray-600">From</p>
              <p className="font-medium">{format(dateRange.start, 'MMMM d, yyyy')}</p>
            </div>
            <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
            <div>
              <p className="text-sm text-gray-600">To</p>
              <p className="font-medium">{format(dateRange.end, 'MMMM d, yyyy')}</p>
            </div>
            <div className="ml-auto">
              <span className="px-3 py-1 text-sm font-medium text-amber-800 bg-amber-100 rounded-full">
                {differenceInDays(dateRange.end, dateRange.start)} days
              </span>
            </div>
          </div>
        </motion.div>
      )}

      {/* Validation message */}
      {dateRange.start && !validateDates(dateRange.start, dateRange.end) && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg"
        >
          <p className="text-sm text-red-800">
            Please select dates starting from tomorrow onwards.
          </p>
        </motion.div>
      )}
    </div>
  )
}

export default DateSelector 