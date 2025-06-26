import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Q&A Hub - Gemini CLI All in One',
  description: 'Find answers to all your Gemini CLI questions in one place',
}

const qaCategories = [
  {
    title: 'Installation & Setup',
    icon: '🚀',
    questions: [
      { q: 'How do I install Gemini CLI on Windows?', href: '/qa/install-windows' },
      { q: 'How do I install Gemini CLI on macOS?', href: '/qa/install-macos' },
      { q: 'How do I install Gemini CLI on Linux?', href: '/qa/install-linux' },
      { q: 'How do I get a Google AI API key?', href: '/qa/get-api-key' },
    ],
  },
  {
    title: 'Configuration',
    icon: '⚙️',
    questions: [
      { q: 'How do I configure my API key?', href: '/qa/configure-api-key' },
      { q: 'How do I set up environment variables?', href: '/qa/env-variables' },
      { q: 'How do I configure MCP servers?', href: '/qa/mcp-config' },
      { q: 'How do I manage configuration files?', href: '/qa/config-files' },
    ],
  },
  {
    title: 'Basic Usage',
    icon: '💡',
    questions: [
      { q: 'How do I run my first command?', href: '/qa/first-command' },
      { q: 'How do I use Gemini CLI for code editing?', href: '/qa/code-editing' },
      { q: 'How do I use file operations?', href: '/qa/file-operations' },
      { q: 'How do I use the search functionality?', href: '/qa/search' },
    ],
  },
  {
    title: 'Advanced Features',
    icon: '🔥',
    questions: [
      { q: 'How do I integrate MCP servers?', href: '/qa/mcp-integration' },
      { q: 'How do I use custom tools?', href: '/qa/custom-tools' },
      { q: 'How do I automate tasks?', href: '/qa/automation' },
      { q: 'How do I use batch operations?', href: '/qa/batch-ops' },
    ],
  },
  {
    title: 'Troubleshooting',
    icon: '🔧',
    questions: [
      { q: 'Why am I getting authentication errors?', href: '/qa/auth-errors' },
      { q: 'Why is Gemini CLI not responding?', href: '/qa/not-responding' },
      { q: 'How do I fix rate limit errors?', href: '/qa/rate-limits' },
      { q: 'How do I debug common issues?', href: '/qa/debug-issues' },
    ],
  },
]

export default function QAPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-h1 mb-4">Q&A Hub</h1>
          <p className="text-lg text-neutral-gray mb-12 max-w-3xl">
            Find answers to all your Gemini CLI questions. Browse by category or use the search box to find specific solutions.
          </p>

          {/* Search Box */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for answers..."
                className="w-full px-6 py-4 text-lg bg-white rounded-full shadow-lg
                         border border-neutral-border focus:outline-none focus:border-google-blue
                         focus:ring-4 focus:ring-google-blue/20 transition-all duration-200"
              />
              <button className="absolute right-2 top-2 bg-google-blue text-white p-3 rounded-full
                               hover:bg-blue-600 transition-colors duration-200">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Q&A Categories */}
          <div className="space-y-8">
            {qaCategories.map((category) => (
              <div key={category.title} className="card">
                <div className="flex items-center mb-6">
                  <span className="text-3xl mr-3">{category.icon}</span>
                  <h2 className="text-h3">{category.title}</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {category.questions.map((item) => (
                    <Link
                      key={item.q}
                      href={item.href}
                      className="group p-4 bg-neutral-light rounded-lg hover:bg-white hover:shadow-md
                               transition-all duration-200 border border-transparent hover:border-google-blue/20"
                    >
                      <p className="text-neutral-dark group-hover:text-google-blue transition-colors">
                        {item.q}
                      </p>
                      <svg className="w-4 h-4 mt-2 text-google-blue opacity-0 group-hover:opacity-100 transition-opacity" 
                           fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                              d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Help Section */}
          <div className="mt-12 text-center p-8 bg-blue-50 rounded-card">
            <h3 className="text-h3 mb-4">Can't find what you're looking for?</h3>
            <p className="text-neutral-gray mb-6">
              Join our community to get help from other Gemini CLI users and experts.
            </p>
            <Link href="/community" className="btn-primary">
              Ask the Community
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}