'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const categories = [
  {
    id: 'official',
    title: 'Official Resources',
    description: 'Authoritative docs and updates from Google',
    items: [
      'Google Blog Announcements',
      'GitHub Repository',
      'Google Developers Docs',
      'Release Notes',
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    color: 'blue',
    badge: 'Official',
  },
  {
    id: 'tutorials',
    title: 'Tutorials & Guides',
    description: 'Learning path from beginner to expert',
    items: [
      'Quick Start Tutorials',
      'Advanced Usage Tips',
      'Best Practices Guide',
      'Video Tutorials',
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
              d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    color: 'green',
    badge: 'Learn',
  },
  {
    id: 'tools',
    title: 'Tools & Extensions',
    description: 'Tools to enhance Gemini CLI functionality',
    items: [
      'MCP Server Collection',
      'Third-party Plugins',
      'Config Templates',
      'Automation Scripts',
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
              d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    color: 'yellow',
    badge: 'Tools',
  },
  {
    id: 'community',
    title: 'Community Resources',
    description: 'Experience sharing from the developer community',
    items: [
      'User Case Studies',
      'Discussion Forums',
      'Open Source Projects',
      'Community Best Practices',
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
              d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    color: 'red',
    badge: 'Community',
  },
]

const colorClasses: Record<string, string> = {
  blue: 'from-google-blue/10 to-blue-50 border-google-blue/20',
  green: 'from-google-green/10 to-green-50 border-google-green/20',
  yellow: 'from-google-yellow/10 to-yellow-50 border-google-yellow/20',
  red: 'from-google-red/10 to-red-50 border-google-red/20',
}

const badgeColors: Record<string, string> = {
  blue: 'bg-google-blue',
  green: 'bg-google-green',
  yellow: 'bg-google-yellow',
  red: 'bg-google-red',
}

export default function ResourceCategories() {
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
          <h2 className="text-h2 mb-4">Resource Categories</h2>
          <p className="text-lg text-neutral-gray max-w-2xl mx-auto">
            Carefully curated resource library with in-depth analysis and value assessment for each resource
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={`/resources#${category.id}`} className="block h-full">
                <div className={`relative h-full bg-gradient-to-br ${colorClasses[category.color]} 
                              border rounded-card p-6 hover:shadow-card-hover transition-all duration-300
                              hover:-translate-y-1`}>
                  <div className={`absolute top-4 right-4 ${badgeColors[category.color]} 
                                text-white text-xs font-medium px-2 py-1 rounded-full`}>
                    {category.badge}
                  </div>
                  
                  <div className="mb-4">{category.icon}</div>
                  <h3 className="text-h3 mb-2">{category.title}</h3>
                  <p className="text-sm text-neutral-gray mb-4">{category.description}</p>
                  
                  <ul className="space-y-2">
                    {category.items.map((item) => (
                      <li key={item} className="flex items-center text-sm text-neutral-dark">
                        <span className="w-1.5 h-1.5 bg-neutral-gray rounded-full mr-2" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mt-4 flex items-center text-sm font-medium text-neutral-dark">
                    View All
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                            d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-neutral-gray mb-4">
            Can't find the resource you need?
          </p>
          <Link href="/community" className="text-google-blue font-medium hover:underline">
            Join the community for help →
          </Link>
        </motion.div>
      </div>
    </section>
  )
}