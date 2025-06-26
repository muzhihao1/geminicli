'use client'

import { motion } from 'framer-motion'

const features = [
  {
    title: 'Quick Problem Solving',
    description: 'Smart search to find solutions fast',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    color: 'blue',
  },
  {
    title: 'In-depth Resources',
    description: 'Detailed guides and usage instructions for every resource',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    color: 'green',
  },
  {
    title: 'All-in-One Service',
    description: 'Everything you need in one place, no jumping around',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
              d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    color: 'yellow',
  },
  {
    title: 'Always Up-to-date',
    description: 'Real-time tracking of latest resources and solutions',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    color: 'red',
  },
]

const colorClasses: Record<string, string> = {
  blue: 'from-google-blue to-blue-600',
  green: 'from-google-green to-green-600',
  yellow: 'from-google-yellow to-yellow-600',
  red: 'from-google-red to-red-600',
}

export default function FeaturesGrid() {
  return (
    <section className="py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-h2 mb-4">Core Features</h2>
          <p className="text-lg text-neutral-gray max-w-2xl mx-auto">
            We're committed to providing you with the most comprehensive and convenient Gemini CLI resources and solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card group cursor-pointer"
            >
              <div className={`w-12 h-12 bg-gradient-to-br ${colorClasses[feature.color]} 
                            rounded-lg flex items-center justify-center text-white mb-4
                            group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>
              <h3 className="text-h3 mb-2">{feature.title}</h3>
              <p className="text-neutral-gray">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}