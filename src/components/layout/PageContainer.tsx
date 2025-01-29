'use client'

import { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface PageContainerProps {
  children: ReactNode
}

/**
 * PageContainer Component
 * 
 * A wrapper component that provides consistent layout structure and animations
 * for all sections of the website.
 * 
 * Features:
 * - Maintains consistent spacing and layout
 * - Handles global animations and transitions
 * - Provides shared context if needed
 * - Preserves individual section functionality
 * 
 * @param {ReactNode} children - The child components (sections) to be rendered
 */
const PageContainer = ({ children }: PageContainerProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative w-full"
    >
      {/* Global styles and spacing container */}
      <div className="relative w-full">
        {/* 
          Render all child sections while maintaining their individual
          properties and animations
        */}
        {children}
      </div>
    </motion.div>
  )
}

export default PageContainer 