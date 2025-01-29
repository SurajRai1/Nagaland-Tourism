'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

const TenthSection = () => {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    
    const section = sectionRef.current

    if (section) {
      const ctx = gsap.context(() => {
        gsap.fromTo(
          '.contact-content',
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 80%',
              end: 'top 20%',
              toggleActions: 'play none none reverse',
            },
          }
        )
      }, section)

      return () => ctx.revert()
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative py-24 sm:py-32 bg-[#F8FAFC]"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Contact Info */}
          <div className="contact-content space-y-10">
            <div className="space-y-6">
              <h2 className="text-4xl sm:text-5xl font-light text-black">Contact Us</h2>
              <p className="text-gray-600 text-lg max-w-md leading-relaxed">
                Email, call, or complete the form to learn how we can enhance your Nagaland experience.
              </p>
            </div>
            
            <div className="space-y-3">
              <p className="text-black text-lg">info@nagalandtourism.gov.in</p>
              <p className="text-black text-lg">+91 370 2243124</p>
            </div>

            <div className="space-y-8">
              <div className="hover:translate-x-2 transition-transform duration-300">
                <h3 className="text-xl font-medium text-black mb-2">Customer Support</h3>
                <p className="text-gray-600 leading-relaxed">Our support team is available round the clock to address any concerns or queries you may have.</p>
              </div>

              <div className="hover:translate-x-2 transition-transform duration-300">
                <h3 className="text-xl font-medium text-black mb-2">Feedback and Suggestions</h3>
                <p className="text-gray-600 leading-relaxed">We value your feedback and are continuously working to improve your experience.</p>
              </div>

              <div className="hover:translate-x-2 transition-transform duration-300">
                <h3 className="text-xl font-medium text-black mb-2">Media Inquiries</h3>
                <p className="text-gray-600 leading-relaxed">For media-related questions or press inquiries, please contact our media team.</p>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="contact-content">
            <div className="bg-white rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.06)] p-8 sm:p-12">
              <div className="space-y-2 mb-10">
                <h3 className="text-2xl font-medium text-black">Get in Touch</h3>
                <p className="text-gray-500">You can reach us anytime</p>
              </div>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="First name"
                      className="w-full px-4 h-12 rounded-xl bg-gray-50 border-2 border-gray-100 focus:border-amber-500 focus:ring-4 focus:ring-amber-100 focus:outline-none transition-all text-black placeholder-gray-400"
                    />
                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-500 transition-all duration-300 group-focus-within:w-full" />
                  </div>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Last name"
                      className="w-full px-4 h-12 rounded-xl bg-gray-50 border-2 border-gray-100 focus:border-amber-500 focus:ring-4 focus:ring-amber-100 focus:outline-none transition-all text-black placeholder-gray-400"
                    />
                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-500 transition-all duration-300 group-focus-within:w-full" />
                  </div>
                </div>

                <div className="relative">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="w-full px-4 h-12 rounded-xl bg-gray-50 border-2 border-gray-100 focus:border-amber-500 focus:ring-4 focus:ring-amber-100 focus:outline-none transition-all text-black placeholder-gray-400"
                  />
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-500 transition-all duration-300 group-focus-within:w-full" />
                </div>

                <div className="flex gap-4">
                  <select
                    className="w-24 px-4 h-12 rounded-xl bg-gray-50 border-2 border-gray-100 focus:border-amber-500 focus:ring-4 focus:ring-amber-100 focus:outline-none transition-all text-black"
                  >
                    <option value="+91">+91</option>
                    <option value="+1">+1</option>
                    <option value="+44">+44</option>
                    <option value="+81">+81</option>
                    <option value="+86">+86</option>
                    <option value="+49">+49</option>
                    <option value="+33">+33</option>
                    <option value="+61">+61</option>
                    <option value="+65">+65</option>
                    <option value="+82">+82</option>
                    <option value="+971">+971</option>
                    <option value="+852">+852</option>
                    <option value="+66">+66</option>
                    <option value="+60">+60</option>
                    <option value="+95">+95</option>
                    <option value="+977">+977</option>
                    <option value="+975">+975</option>
                    <option value="+94">+94</option>
                    <option value="+880">+880</option>
                    <option value="+7">+7</option>
                  </select>
                  <div className="relative flex-1">
                    <input
                      type="tel"
                      placeholder="Phone number"
                      className="w-full px-4 h-12 rounded-xl bg-gray-50 border-2 border-gray-100 focus:border-amber-500 focus:ring-4 focus:ring-amber-100 focus:outline-none transition-all text-black placeholder-gray-400"
                    />
                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-500 transition-all duration-300 group-focus-within:w-full" />
                  </div>
                </div>

                <div className="relative">
                  <textarea
                    placeholder="How can we help?"
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border-2 border-gray-100 focus:border-amber-500 focus:ring-4 focus:ring-amber-100 focus:outline-none transition-all text-black placeholder-gray-400 resize-none"
                  />
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-500 transition-all duration-300 group-focus-within:w-full" />
                </div>

                <button
                  type="submit"
                  className="w-full h-12 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-medium transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
                >
                  Submit
                </button>

                <p className="text-center text-sm text-gray-500">
                  By contacting us, you agree to our{' '}
                  <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">Terms of service</a>
                  {' '}and{' '}
                  <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">Privacy Policy</a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TenthSection 