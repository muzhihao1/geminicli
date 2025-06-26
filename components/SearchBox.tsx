'use client'

import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'

interface SearchResult {
  title: string
  description: string
  href: string
  category: string
}

// Mock search data - in a real app, this would come from an API
const searchData: SearchResult[] = [
  // Installation
  { title: 'How to install Gemini CLI on Windows', description: 'Step-by-step guide for Windows installation', href: '/qa/install-windows', category: 'Installation' },
  { title: 'How to install Gemini CLI on macOS', description: 'Complete macOS installation guide', href: '/qa/install-macos', category: 'Installation' },
  { title: 'How to install Gemini CLI on Linux', description: 'Linux installation instructions', href: '/qa/install-linux', category: 'Installation' },
  
  // Configuration
  { title: 'Configure API Key', description: 'How to set up your Google AI API key', href: '/qa/configure-api-key', category: 'Configuration' },
  { title: 'Environment Variables', description: 'Setting up environment variables for Gemini CLI', href: '/qa/env-variables', category: 'Configuration' },
  
  // Usage
  { title: 'Code Editing with Gemini CLI', description: 'Master code editing techniques', href: '/qa/code-editing', category: 'Usage' },
  { title: 'First Command', description: 'Run your first Gemini CLI command', href: '/qa/first-command', category: 'Getting Started' },
  
  // Troubleshooting
  { title: 'Authentication Errors', description: 'Fix authentication and API key issues', href: '/qa/auth-errors', category: 'Troubleshooting' },
  { title: 'Rate Limit Errors', description: 'Handle rate limit exceeded errors', href: '/qa/rate-limits', category: 'Troubleshooting' },
  
  // Resources
  { title: 'MCP Server Integration', description: 'Extend Gemini CLI with MCP servers', href: '/qa/mcp-integration', category: 'Resources' },
  { title: 'Official Documentation', description: 'Google\'s official Gemini CLI docs', href: '/resources', category: 'Resources' },
  
  // More entries
  { title: 'Batch Operations', description: 'Process multiple files at once', href: '/qa/batch-ops', category: 'Usage' },
  { title: 'File Operations', description: 'Working with files using Gemini CLI', href: '/qa/file-operations', category: 'Usage' },
  { title: 'Custom Tools', description: 'Create custom tools and scripts', href: '/qa/custom-tools', category: 'Advanced' },
  { title: 'Automation Workflows', description: 'Automate repetitive tasks', href: '/qa/automation', category: 'Advanced' },
  { title: 'Debug Common Issues', description: 'Troubleshoot common problems', href: '/qa/debug-issues', category: 'Troubleshooting' },
  { title: 'Not Responding', description: 'Fix when Gemini CLI is not responding', href: '/qa/not-responding', category: 'Troubleshooting' },
  { title: 'VS Code Extension', description: 'Integrate with Visual Studio Code', href: '/tools/vscode-extension', category: 'Tools' },
  { title: 'Configuration Templates', description: 'Pre-built configuration examples', href: '/tools/config-templates', category: 'Tools' },
  { title: 'Community Forums', description: 'Get help from the community', href: '/community/forums', category: 'Community' },
  { title: 'Use Cases Overview', description: 'Real-world applications', href: '/use-cases', category: 'Use Cases' },
  { title: 'Code Review Automation', description: 'Automate code reviews', href: '/use-cases/code-review', category: 'Use Cases' },
  { title: 'Documentation Generation', description: 'Auto-generate documentation', href: '/use-cases/documentation', category: 'Use Cases' },
]

interface SearchBoxProps {
  placeholder?: string
  className?: string
  onSearch?: (query: string) => void
}

export default function SearchBox({ placeholder = "Search for solutions...", className = "", onSearch }: SearchBoxProps) {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<SearchResult[]>([])
  const [isOpen, setIsOpen] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(-1)
  const searchRef = useRef<HTMLDivElement>(null)
  const router = useRouter()

  // Search logic
  useEffect(() => {
    if (query.length > 1) {
      const filtered = searchData.filter(item =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.description.toLowerCase().includes(query.toLowerCase()) ||
        item.category.toLowerCase().includes(query.toLowerCase())
      )
      setResults(filtered.slice(0, 5)) // Show max 5 results
      setIsOpen(true)
    } else {
      setResults([])
      setIsOpen(false)
    }
    setSelectedIndex(-1)
  }, [query])

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setSelectedIndex(prev => (prev < results.length - 1 ? prev + 1 : prev))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setSelectedIndex(prev => (prev > 0 ? prev - 1 : -1))
    } else if (e.key === 'Enter') {
      e.preventDefault()
      if (selectedIndex >= 0 && results[selectedIndex]) {
        router.push(results[selectedIndex].href)
        setQuery('')
        setIsOpen(false)
      } else if (query && onSearch) {
        onSearch(query)
      }
    } else if (e.key === 'Escape') {
      setIsOpen(false)
      setSelectedIndex(-1)
    }
  }

  const handleResultClick = (href: string) => {
    router.push(href)
    setQuery('')
    setIsOpen(false)
  }

  return (
    <div ref={searchRef} className={`relative ${className}`}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        className="w-full px-6 py-4 text-lg bg-white rounded-full shadow-lg
                   border border-neutral-border focus:outline-none focus:border-google-blue
                   focus:ring-4 focus:ring-google-blue/20 transition-all duration-200"
      />
      <button 
        onClick={() => onSearch && onSearch(query)}
        className="absolute right-2 top-2 bg-google-blue text-white p-3 rounded-full
                   hover:bg-blue-600 transition-colors duration-200"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </button>

      {/* Search Results Dropdown */}
      <AnimatePresence>
        {isOpen && results.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-xl 
                       border border-neutral-border overflow-hidden z-50"
          >
            <div className="p-2">
              {results.map((result, index) => (
                <button
                  key={result.href}
                  onClick={() => handleResultClick(result.href)}
                  className={`w-full text-left p-3 rounded-lg transition-colors duration-150 ${
                    index === selectedIndex 
                      ? 'bg-google-blue/10' 
                      : 'hover:bg-neutral-light'
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h4 className="font-medium text-neutral-dark">{result.title}</h4>
                      <p className="text-sm text-neutral-gray mt-1">{result.description}</p>
                    </div>
                    <span className="text-xs bg-neutral-light px-2 py-1 rounded ml-3 flex-shrink-0">
                      {result.category}
                    </span>
                  </div>
                </button>
              ))}
            </div>
            <div className="px-5 py-3 bg-neutral-light border-t border-neutral-border">
              <p className="text-sm text-neutral-gray">
                Press <kbd className="px-1.5 py-0.5 bg-white rounded text-xs border">Enter</kbd> to search, 
                <kbd className="px-1.5 py-0.5 bg-white rounded text-xs border ml-2">↑↓</kbd> to navigate
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* No Results */}
      <AnimatePresence>
        {isOpen && query.length > 1 && results.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-xl 
                       border border-neutral-border p-6 text-center z-50"
          >
            <p className="text-neutral-gray">No results found for "{query}"</p>
            <p className="text-sm text-neutral-gray mt-2">
              Try different keywords or <a href="/qa" className="text-google-blue hover:underline">browse all Q&A</a>
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}