'use client'

import { ReactNode } from 'react'
import { ReactLenis } from '@studio-freight/react-lenis'
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })
const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair',
})

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${playfair.variable}`}>
        <ReactLenis root>
          {children}
        </ReactLenis>
      </body>
    </html>
  )
}
