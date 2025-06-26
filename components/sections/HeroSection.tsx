'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import SearchBox from '@/components/SearchBox'

export default function HeroSection() {
  return (
    <section className="relative pt-24 pb-20 overflow-hidden gradient-bg">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-google-blue/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-google-green/10 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-h1 mb-4"
          >
            <span className="text-gradient">Gemini CLI</span> All in One
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-h3 text-neutral-gray mb-6"
          >
            Your one-stop solution for all Gemini CLI needs
          </motion.p>

          {/* Core Value */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg font-medium text-google-blue mb-8"
          >
            Whatever Gemini CLI challenge you face, we have the answer!
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-body text-neutral-gray mb-12 max-w-3xl mx-auto"
          >
            From installation to advanced usage, from official docs to community resources, 
            from tutorials to troubleshooting - find everything you need in one place
          </motion.p>

          {/* Search Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="max-w-2xl mx-auto mb-8"
          >
            <SearchBox 
              placeholder="Describe your problem or need..."
              onSearch={(query) => {
                // In a real app, this would navigate to a search results page
                window.location.href = `/search?q=${encodeURIComponent(query)}`
              }}
            />
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/qa" className="btn-primary">
              Solve My Problem
            </Link>
            <Link href="/resources" className="btn-secondary">
              Browse All Resources
            </Link>
          </motion.div>
        </div>

        {/* Visual Elements */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-16 relative"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {['Installation & Setup', 'Usage Tutorials', 'Problem Solving'].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                className="bg-white/80 backdrop-blur-sm rounded-card p-4 text-center shadow-card"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-google-blue to-google-green 
                              rounded-lg mx-auto mb-3" />
                <p className="text-sm font-medium text-neutral-dark">{item}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}