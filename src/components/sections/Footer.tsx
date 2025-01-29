'use client'

import Link from 'next/link'
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & Description */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-white">Nagaland Tourism</h2>
            <p className="text-gray-400 leading-relaxed">
              Discover the untold stories of Nagaland, where tradition meets adventure 
              in the land of festivals.
            </p>
            {/* Social Links */}
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">
                <FaYoutube size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <Link href="#destinations" className="hover:text-amber-500 transition-colors">
                  Destinations
                </Link>
              </li>
              <li>
                <Link href="#experiences" className="hover:text-amber-500 transition-colors">
                  Experiences
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-amber-500 transition-colors">
                  Festivals
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-amber-500 transition-colors">
                  Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white">Contact Info</h3>
            <ul className="space-y-4">
              <li>
                <p className="text-gray-400">Directorate of Tourism</p>
                <p className="text-gray-400">Government of Nagaland</p>
              </li>
              <li>
                <p className="text-gray-400">Phone: +91 370 2243124</p>
              </li>
              <li>
                <p className="text-gray-400">Email: info@nagalandtourism.gov.in</p>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white">Stay Updated</h3>
            <p className="text-gray-400">
              Subscribe to our newsletter for the latest updates and travel guides.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 bg-gray-900 border border-gray-800 rounded-l-lg focus:outline-none focus:border-amber-500 text-white"
              />
              <button className="px-4 py-2 bg-amber-500 text-black font-medium rounded-r-lg hover:bg-amber-400 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2024 Nagaland Tourism. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 