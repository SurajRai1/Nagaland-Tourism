'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

interface TripSummaryProps {
  selectedDates: {
    start: Date | null;
    end: Date | null;
    duration: number | null;
    isHornbillFestival?: boolean;
  };
  selectedDestinations: string[];
  selectedExperiences: string[];
}

const TripSummary = ({ selectedDates, selectedDestinations, selectedExperiences }: TripSummaryProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    nationality: '',
    groupSize: '1',
    preferredContact: 'email',
    arrivalDetails: '',
    dietaryRestrictions: '',
    specialRequests: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  return (
    <div className="space-y-8">
      {/* Trip Overview Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-br from-amber-50 to-white rounded-xl border border-amber-100 shadow-lg p-6"
      >
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Trip Overview</h3>
        
        {/* Dates */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="space-y-2">
            <h4 className="font-medium text-gray-900">Travel Dates</h4>
            <div className="bg-white rounded-lg p-4 border border-gray-200">
              {selectedDates.isHornbillFestival ? (
                <div className="text-amber-600 font-semibold">Hornbill Festival 2025</div>
              ) : (
                <>
                  <div className="text-gray-900 font-medium">
                    From: {selectedDates.start?.toLocaleDateString()}
                  </div>
                  <div className="text-gray-900 font-medium">
                    To: {selectedDates.end?.toLocaleDateString()}
                  </div>
                </>
              )}
              <div className="text-sm text-gray-700 mt-1 font-medium">
                Duration: {selectedDates.duration} days
              </div>
            </div>
          </div>

          {/* Destinations */}
          <div className="space-y-2">
            <h4 className="font-medium text-gray-900">Selected Destinations</h4>
            <div className="bg-white rounded-lg p-4 border border-gray-200">
              <div className="text-gray-900 font-medium">
                {selectedDestinations.length} locations selected
              </div>
              <div className="text-sm text-gray-700 mt-1">
                View detailed itinerary below
              </div>
            </div>
          </div>

          {/* Experiences */}
          <div className="space-y-2">
            <h4 className="font-medium text-gray-900">Planned Experiences</h4>
            <div className="bg-white rounded-lg p-4 border border-gray-200">
              <div className="text-gray-900 font-medium">
                {selectedExperiences.length} experiences selected
              </div>
              <div className="text-sm text-gray-700 mt-1">
                View experience details below
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Contact Form */}
      <motion.form
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        onSubmit={handleSubmit}
        className="bg-white rounded-xl border border-gray-200 shadow-lg p-8 space-y-8"
      >
        <div>
          <h3 className="text-xl font-semibold text-gray-900">Personal Details</h3>
          <p className="text-sm text-gray-600 mt-1">Please provide your contact information for trip coordination.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              required
              value={formData.name}
              onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900
                focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              placeholder="Enter your full name"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              required
              value={formData.email}
              onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900
                focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              placeholder="Enter your email"
            />
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">
              Phone Number *
            </label>
            <input
              type="tel"
              id="phone"
              required
              value={formData.phone}
              onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900
                focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              placeholder="Enter your phone number with country code"
            />
          </div>

          {/* Nationality */}
          <div>
            <label htmlFor="nationality" className="block text-sm font-semibold text-gray-900 mb-2">
              Nationality *
            </label>
            <input
              type="text"
              id="nationality"
              required
              value={formData.nationality}
              onChange={(e) => setFormData(prev => ({ ...prev, nationality: e.target.value }))}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900
                focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              placeholder="Enter your nationality"
            />
          </div>

          {/* Preferred Contact Method */}
          <div>
            <label htmlFor="preferredContact" className="block text-sm font-semibold text-gray-900 mb-2">
              Preferred Contact Method *
            </label>
            <select
              id="preferredContact"
              required
              value={formData.preferredContact}
              onChange={(e) => setFormData(prev => ({ ...prev, preferredContact: e.target.value }))}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900
                focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            >
              <option value="email">Email</option>
              <option value="phone">Phone</option>
              <option value="whatsapp">WhatsApp</option>
            </select>
          </div>

          {/* Group Size */}
          <div>
            <label htmlFor="groupSize" className="block text-sm font-semibold text-gray-900 mb-2">
              Number of Travelers *
            </label>
            <select
              id="groupSize"
              required
              value={formData.groupSize}
              onChange={(e) => setFormData(prev => ({ ...prev, groupSize: e.target.value }))}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900
                focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            >
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                <option key={num} value={num}>
                  {num} {num === 1 ? 'person' : 'people'}
                </option>
              ))}
              <option value="10+">More than 10 people</option>
            </select>
          </div>

          {/* Arrival Details */}
          <div className="md:col-span-2">
            <label htmlFor="arrivalDetails" className="block text-sm font-semibold text-gray-900 mb-2">
              Arrival Details (if known)
            </label>
            <input
              type="text"
              id="arrivalDetails"
              value={formData.arrivalDetails}
              onChange={(e) => setFormData(prev => ({ ...prev, arrivalDetails: e.target.value }))}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900
                focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              placeholder="Flight number, arrival time, etc. (optional)"
            />
          </div>

          {/* Dietary Restrictions */}
          <div className="md:col-span-2">
            <label htmlFor="dietaryRestrictions" className="block text-sm font-semibold text-gray-900 mb-2">
              Dietary Restrictions
            </label>
            <input
              type="text"
              id="dietaryRestrictions"
              value={formData.dietaryRestrictions}
              onChange={(e) => setFormData(prev => ({ ...prev, dietaryRestrictions: e.target.value }))}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900
                focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              placeholder="Any dietary requirements or restrictions (optional)"
            />
          </div>

          {/* Special Requests */}
          <div className="md:col-span-2">
            <label htmlFor="specialRequests" className="block text-sm font-semibold text-gray-900 mb-2">
              Additional Notes or Special Requests
            </label>
            <textarea
              id="specialRequests"
              value={formData.specialRequests}
              onChange={(e) => setFormData(prev => ({ ...prev, specialRequests: e.target.value }))}
              rows={4}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900
                focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              placeholder="Any other requirements or questions?"
            />
          </div>
        </div>
      </motion.form>
    </div>
  )
}

export default TripSummary 