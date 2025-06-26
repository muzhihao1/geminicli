'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import SearchBox from '@/components/SearchBox'

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Quick Start', href: '/quick-start' },
  { name: 'Q&A Hub', href: '/qa' },
  { name: 'Resources', href: '/resources' },
  { name: 'Use Cases', href: '/use-cases' },
  { name: 'Troubleshooting', href: '/troubleshooting' },
  { name: 'Community', href: '/community' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-lg backdrop-blur-lg'
          : 'bg-white/80 backdrop-blur-md'
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-google-blue to-google-green rounded-lg" />
            <span className="font-bold text-xl">Gemini CLI</span>
            <span className="text-sm text-neutral-gray">All in One</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center space-x-0.5">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-3 py-2 text-sm font-medium text-neutral-dark hover:text-google-blue 
                         transition-colors duration-200 rounded-button hover:bg-neutral-light whitespace-nowrap"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Search Box - Desktop */}
          <div className="hidden xl:block w-56 ml-4">
            <SearchBox 
              placeholder="Search..."
              className="[&>input]:py-1.5 [&>input]:text-sm [&>button]:top-0.5 [&>button]:right-0.5 [&>button]:p-1 [&>button>svg]:w-4 [&>button>svg]:h-4"
            />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="xl:hidden p-2 rounded-button hover:bg-neutral-light"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="xl:hidden py-4 border-t border-neutral-border"
          >
            {/* Mobile Search */}
            <div className="px-4 pb-3">
              <SearchBox 
                placeholder="Search..."
                className="[&>input]:py-2 [&>input]:text-sm [&>button]:top-1 [&>button]:right-1 [&>button]:p-1.5 [&>button>svg]:w-4 [&>button>svg]:h-4"
              />
            </div>
            
            {/* Mobile Nav Items */}
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-4 py-2 text-sm font-medium text-neutral-dark
                         hover:text-google-blue hover:bg-neutral-light"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </motion.div>
        )}
      </div>
    </nav>
  )
}