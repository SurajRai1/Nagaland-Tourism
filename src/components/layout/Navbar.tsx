'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const links = [
    { href: '/', label: 'Home' },
    { href: '#destinations', label: 'Destinations' },
    { href: '#experiences', label: 'Experiences' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' }
  ];

  const menuVariants = {
    closed: {
      opacity: 0,
      y: "-100%",
      transition: {
        duration: 0.5,
        ease: "easeInOut"
      }
    },
    open: {
      opacity: 1,
      y: "0%",
      transition: {
        duration: 0.5,
        ease: "easeInOut"
      }
    }
  };

  return (
    <>
      <header className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-6 py-5">
          <nav className="flex items-center justify-between">
            <Link 
              href="/" 
              className={`text-lg font-bold ${
                scrolled ? 'text-black' : 'text-white'
              } transition-colors duration-300`}
            >
              Nagaland Tourism
            </Link>

            <div className="hidden lg:flex items-center space-x-10">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative text-sm font-medium ${
                    scrolled ? 'text-black' : 'text-white'
                  } hover:opacity-100 transition-all duration-300 group`}
                >
                  {link.label}
                  <span className={`absolute left-0 bottom-[-4px] w-0 h-[2px] ${
                    scrolled ? 'bg-black' : 'bg-white'
                  } transition-all duration-300 group-hover:w-full`} />
                </Link>
              ))}
              <Link 
                href="/plan-trip"
                className={`group px-4 py-2 rounded-full border text-xs font-medium 
                  transform transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center gap-1.5 ${
                  scrolled
                    ? 'border-black text-black hover:bg-black hover:text-white'
                    : 'border-white text-white hover:bg-white hover:text-black'
                }`}
              >
                <svg 
                  className="w-3 h-3" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={1.5} 
                    d="M9 6l6 6-6 6" 
                  />
                </svg>
                Plan Your Trip
              </Link>
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`lg:hidden z-50 p-2 ${isOpen ? 'text-white' : scrolled ? 'text-black' : 'text-white'}`}
              aria-label="Toggle Menu"
            >
              <div className="w-6 h-5 relative flex flex-col justify-between">
                <span className={`w-full h-0.5 transform transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2 bg-white' : scrolled ? 'bg-black' : 'bg-white'}`} />
                <span className={`w-full h-0.5 transition-all duration-300 ${isOpen ? 'opacity-0' : scrolled ? 'bg-black' : 'bg-white'}`} />
                <span className={`w-full h-0.5 transform transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2 bg-white' : scrolled ? 'bg-black' : 'bg-white'}`} />
              </div>
            </button>
          </nav>
        </div>
      </header>

      <motion.div
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={menuVariants}
        className={`fixed inset-0 bg-black/95 backdrop-blur-sm z-40 lg:hidden ${
          isOpen ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full">
          {links.map((link, index) => (
            <motion.div
              key={link.href}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : 20 }}
              transition={{ delay: index * 0.1 }}
              className="mb-8"
            >
              <Link
                href={link.href}
                className="text-white text-2xl font-medium hover:opacity-70 transition-opacity"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : 20 }}
            transition={{ delay: 0.4 }}
          >
            <Link 
              href="/plan-trip"
              className="group px-8 py-3 rounded-full border-[1.5px] border-white text-white text-lg hover:bg-white hover:text-black transition-all duration-300 flex items-center gap-2"
              onClick={() => setIsOpen(false)}
            >
              <svg 
                className="w-4 h-4" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={1.5} 
                  d="M9 6l6 6-6 6" 
                />
              </svg>
              Plan Your Trip
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default Navbar; 