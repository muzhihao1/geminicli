'use client'

import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'
import Link from 'next/link'
import SearchBox from '@/components/SearchBox'

// Mock search results - in production, this would come from an API
const allContent = [
  // Installation
  { title: 'Install Gemini CLI on Windows', description: 'Step-by-step guide for Windows installation', href: '/qa/install-windows', category: 'Installation' },
  { title: 'Install Gemini CLI on macOS', description: 'Complete macOS installation guide using Homebrew or npm', href: '/qa/install-macos', category: 'Installation' },
  { title: 'Install Gemini CLI on Linux', description: 'Installation guide for Ubuntu, Debian, Fedora, and other distributions', href: '/qa/install-linux', category: 'Installation' },
  
  // Configuration
  { title: 'Get Google AI API Key', description: 'How to obtain your free API key from Google AI Studio', href: '/qa/get-api-key', category: 'Configuration' },
  { title: 'Configure API Key', description: 'Multiple methods to set up your API key with Gemini CLI', href: '/qa/configure-api-key', category: 'Configuration' },
  { title: 'Environment Variables Setup', description: 'Configure Gemini CLI using environment variables', href: '/qa/env-variables', category: 'Configuration' },
  
  // Usage
  { title: 'First Command', description: 'Run your first Gemini CLI command and verify setup', href: '/qa/first-command', category: 'Getting Started' },
  { title: 'Code Editing', description: 'Use Gemini CLI for intelligent code editing and refactoring', href: '/qa/code-editing', category: 'Usage' },
  { title: 'File Operations', description: 'Work with files using Gemini CLI commands', href: '/qa/file-operations', category: 'Usage' },
  
  // Troubleshooting
  { title: 'Authentication Errors', description: 'Fix API key and authentication issues', href: '/qa/auth-errors', category: 'Troubleshooting' },
  { title: 'Rate Limit Errors', description: 'Handle and prevent rate limit exceeded errors', href: '/qa/rate-limits', category: 'Troubleshooting' },
  { title: 'Debugging Common Issues', description: 'Solutions for common Gemini CLI problems', href: '/qa/debug-issues', category: 'Troubleshooting' },
  
  // Advanced
  { title: 'MCP Server Integration', description: 'Extend Gemini CLI with MCP servers', href: '/qa/mcp-integration', category: 'Advanced' },
  { title: 'Custom Tools', description: 'Create and use custom tools with Gemini CLI', href: '/qa/custom-tools', category: 'Advanced' },
  { title: 'Automation', description: 'Automate repetitive tasks with Gemini CLI', href: '/qa/automation', category: 'Advanced' },
]

function SearchResults() {
  const searchParams = useSearchParams()
  const query = searchParams.get('q') || ''

  // Filter results based on query
  const results = query 
    ? allContent.filter(item =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.description.toLowerCase().includes(query.toLowerCase()) ||
        item.category.toLowerCase().includes(query.toLowerCase())
      )
    : []

  // Group results by category
  const groupedResults = results.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = []
    }
    acc[item.category].push(item)
    return acc
  }, {} as Record<string, typeof results>)

  return (
    <div className="pt-24 pb-16">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-h1 mb-4">Search Results</h1>
          
          {/* Search Box */}
          <div className="mb-8">
            <SearchBox placeholder="Search again..." />
          </div>

          {query && (
            <>
              <p className="text-lg text-neutral-gray mb-8">
                {results.length > 0 
                  ? `Found ${results.length} result${results.length === 1 ? '' : 's'} for "${query}"`
                  : `No results found for "${query}"`
                }
              </p>

              {results.length > 0 ? (
                <div className="space-y-8">
                  {Object.entries(groupedResults).map(([category, items]) => (
                    <section key={category}>
                      <h2 className="text-h3 mb-4 text-neutral-gray">{category}</h2>
                      <div className="space-y-4">
                        {items.map((item) => (
                          <Link key={item.href} href={item.href} className="block">
                            <div className="card hover:shadow-card-hover transition-shadow">
                              <h3 className="text-xl font-semibold text-neutral-dark mb-2 
                                         hover:text-google-blue transition-colors">
                                {item.title}
                              </h3>
                              <p className="text-neutral-gray">{item.description}</p>
                              <div className="mt-3 flex items-center text-google-blue text-sm">
                                View →
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </section>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <div className="text-6xl mb-4">🔍</div>
                  <h2 className="text-h2 mb-4">No results found</h2>
                  <p className="text-neutral-gray mb-8">
                    Try different keywords or browse our resources:
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/qa" className="btn-primary">
                      Browse Q&A
                    </Link>
                    <Link href="/resources" className="btn-secondary">
                      View Resources
                    </Link>
                  </div>
                </div>
              )}
            </>
          )}

          {!query && (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🔍</div>
              <h2 className="text-h2 mb-4">What are you looking for?</h2>
              <p className="text-neutral-gray mb-8">
                Use the search box above to find answers to your Gemini CLI questions.
              </p>
              <Link href="/" className="btn-primary">
                Back to Home
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default function SearchPage() {
  return (
    <Suspense fallback={
      <div className="pt-24 pb-16">
        <div className="container">
          <div className="text-center">
            <p>Loading search results...</p>
          </div>
        </div>
      </div>
    }>
      <SearchResults />
    </Suspense>
  )
}