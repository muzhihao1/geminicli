import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Getting Started Tutorial - Gemini CLI',
  description: 'Complete beginner guide to using Gemini CLI effectively',
}

export default function GettingStartedTutorial() {
  return (
    <div className="pt-24 pb-16">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-h1 mb-4">Getting Started Tutorial</h1>
          <p className="text-lg text-neutral-gray mb-12">
            A comprehensive beginner's guide to mastering Gemini CLI from installation to advanced usage.
          </p>

          {/* Tutorial Steps */}
          <section className="mb-12">
            <h2 className="text-h2 mb-6">Tutorial Steps</h2>
            <div className="space-y-6">
              
              <div className="card">
                <div className="flex items-start">
                  <div className="bg-google-blue text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">
                    1
                  </div>
                  <div className="flex-1">
                    <h3 className="text-h4 mb-2">Installation</h3>
                    <p className="text-neutral-gray mb-3">Install Gemini CLI on your system</p>
                    <Link href="/qa/install-windows" className="text-google-blue hover:underline text-sm">
                      See installation guides →
                    </Link>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="flex items-start">
                  <div className="bg-google-blue text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">
                    2
                  </div>
                  <div className="flex-1">
                    <h3 className="text-h4 mb-2">API Configuration</h3>
                    <p className="text-neutral-gray mb-3">Set up your Google AI API key</p>
                    <Link href="/qa/configure-api-key" className="text-google-blue hover:underline text-sm">
                      Configuration guide →
                    </Link>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="flex items-start">
                  <div className="bg-google-blue text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">
                    3
                  </div>
                  <div className="flex-1">
                    <h3 className="text-h4 mb-2">First Command</h3>
                    <p className="text-neutral-gray mb-3">Run your first Gemini CLI command</p>
                    <Link href="/qa/first-command" className="text-google-blue hover:underline text-sm">
                      First command guide →
                    </Link>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="flex items-start">
                  <div className="bg-google-blue text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">
                    4
                  </div>
                  <div className="flex-1">
                    <h3 className="text-h4 mb-2">Basic Usage</h3>
                    <p className="text-neutral-gray mb-3">Learn essential commands and workflows</p>
                    <Link href="/qa/code-editing" className="text-google-blue hover:underline text-sm">
                      Basic usage guide →
                    </Link>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="flex items-start">
                  <div className="bg-google-blue text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">
                    5
                  </div>
                  <div className="flex-1">
                    <h3 className="text-h4 mb-2">Advanced Features</h3>
                    <p className="text-neutral-gray mb-3">Explore MCP integration and automation</p>
                    <Link href="/qa/mcp-integration" className="text-google-blue hover:underline text-sm">
                      Advanced features →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Next Steps */}
          <div className="bg-blue-50 rounded-card p-6">
            <h3 className="text-h3 mb-3">What's Next?</h3>
            <p className="text-neutral-gray mb-4">
              Continue your learning journey with more advanced topics:
            </p>
            <div className="flex gap-4 flex-wrap">
              <Link href="/tutorials/advanced-editing" className="btn-primary">
                Advanced Editing
              </Link>
              <Link href="/tutorials/mcp-integration" className="btn-secondary">
                MCP Integration
              </Link>
              <Link href="/use-cases" className="btn-secondary">
                Use Cases
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}