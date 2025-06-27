'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const questions = [
  {
    id: 'install',
    question: 'How do I install Gemini CLI on my system?',
    description: 'Detailed installation guides for Windows, macOS, and Linux',
    href: '/quick-start/install',
    icon: '💻',
  },
  {
    id: 'api-key',
    question: 'How do I configure API Key and authentication?',
    description: 'Complete tutorial on getting and configuring Google AI API Key',
    href: '/quick-start/setup',
    icon: '🔑',
  },
  {
    id: 'usage',
    question: 'How do I use Gemini CLI for code editing?',
    description: 'Master basic commands and advanced editing techniques',
    href: '/qa/code-editing',
    icon: '✏️',
  },
  {
    id: 'errors',
    question: 'What to do when I encounter errors?',
    description: 'Common error solutions and troubleshooting guide',
    href: '/troubleshooting',
    icon: '🔧',
  },
  {
    id: 'mcp',
    question: 'How do I integrate MCP servers?',
    description: 'MCP server configuration to extend Gemini CLI functionality',
    href: '/tools/mcp-servers',
    icon: '🔌',
  },
]

export default function PopularQuestions() {
  return (
    <section className="py-20 bg-neutral-light">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-h2 mb-4">Popular Questions</h2>
          <p className="text-lg text-neutral-gray max-w-2xl mx-auto">
            Find answers to the questions you care about most - click for detailed solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {questions.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={item.href} className="block h-full">
                <div className="card h-full hover:border-google-blue transition-colors duration-300">
                  <div className="flex items-start space-x-4">
                    <span className="text-3xl">{item.icon}</span>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-neutral-dark mb-2 
                                   group-hover:text-google-blue transition-colors">
                        {item.question}
                      </h3>
                      <p className="text-sm text-neutral-gray">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center text-google-blue text-sm font-medium">
                    View Solution
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
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-10"
        >
          <Link href="/qa" className="btn-primary">
            View All Q&A
          </Link>
        </motion.div>
      </div>
    </section>
  )
}