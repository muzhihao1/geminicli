import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Community Tutorials - Gemini CLI',
  description: 'User-created guides and tutorials for Gemini CLI',
}

export default function CommunityTutorialsPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-h1 mb-4">Community Tutorials</h1>
          <p className="text-lg text-neutral-gray mb-12">
            Discover tutorials and guides created by the Gemini CLI community to help you learn and master new techniques.
          </p>

          {/* Featured Tutorials */}
          <section className="mb-12">
            <h2 className="text-h2 mb-6">Featured Community Tutorials</h2>
            <div className="space-y-6">
              
              <div className="card">
                <h3 className="text-h4 mb-2">Building a Code Review Bot</h3>
                <p className="text-neutral-gray mb-3">
                  Learn how to create an automated code review bot that integrates with your GitHub workflow.
                </p>
                <div className="flex items-center text-sm text-neutral-gray mb-3">
                  <span>By @developer123</span>
                  <span className="mx-2">•</span>
                  <span>Advanced</span>
                  <span className="mx-2">•</span>
                  <span>30 min read</span>
                </div>
                <div className="flex gap-2">
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">automation</span>
                  <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">github</span>
                  <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded">bot</span>
                </div>
              </div>

              <div className="card">
                <h3 className="text-h4 mb-2">Custom MCP Server for Database Operations</h3>
                <p className="text-neutral-gray mb-3">
                  Step-by-step guide to creating a custom MCP server that can interact with your database.
                </p>
                <div className="flex items-center text-sm text-neutral-gray mb-3">
                  <span>By @dbexpert</span>
                  <span className="mx-2">•</span>
                  <span>Intermediate</span>
                  <span className="mx-2">•</span>
                  <span>45 min read</span>
                </div>
                <div className="flex gap-2">
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">mcp</span>
                  <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">database</span>
                  <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded">server</span>
                </div>
              </div>

              <div className="card">
                <h3 className="text-h4 mb-2">Documentation Generation Workflow</h3>
                <p className="text-neutral-gray mb-3">
                  Automate your documentation workflow with Gemini CLI and keep your docs always up-to-date.
                </p>
                <div className="flex items-center text-sm text-neutral-gray mb-3">
                  <span>By @docmaster</span>
                  <span className="mx-2">•</span>
                  <span>Beginner</span>
                  <span className="mx-2">•</span>
                  <span>20 min read</span>
                </div>
                <div className="flex gap-2">
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">documentation</span>
                  <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">automation</span>
                  <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded">workflow</span>
                </div>
              </div>
            </div>
          </section>

          {/* Contribute */}
          <div className="bg-green-50 rounded-card p-6">
            <h3 className="text-h3 mb-3">Share Your Tutorial</h3>
            <p className="text-neutral-gray mb-4">
              Have you created something cool with Gemini CLI? Share your knowledge with the community!
            </p>
            <div className="flex gap-4 flex-wrap">
              <Link href="/contribute" className="btn-primary bg-google-green hover:bg-green-600">
                Submit Tutorial
              </Link>
              <Link href="/community/forums" className="btn-secondary">
                Join Discussion
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}