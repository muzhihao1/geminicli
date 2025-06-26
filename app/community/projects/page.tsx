import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Community Projects - Gemini CLI',
  description: 'Open source projects and tools built with or for Gemini CLI',
}

export default function CommunityProjectsPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-h1 mb-4">Community Projects</h1>
          <p className="text-lg text-neutral-gray mb-12">
            Explore open source projects, tools, and extensions created by the Gemini CLI community.
          </p>

          {/* Featured Projects */}
          <section className="mb-12">
            <h2 className="text-h2 mb-6">Featured Projects</h2>
            <div className="space-y-6">
              
              <div className="card">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-h4">Gemini CLI VS Code Extension</h3>
                  <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">Popular</span>
                </div>
                <p className="text-neutral-gray mb-3">
                  Integrate Gemini CLI directly into Visual Studio Code with this community-built extension.
                </p>
                <div className="flex items-center text-sm text-neutral-gray mb-3">
                  <span>⭐ 1.2k stars</span>
                  <span className="mx-2">•</span>
                  <span>📦 50k downloads</span>
                  <span className="mx-2">•</span>
                  <span>🔄 Last updated: 2 days ago</span>
                </div>
                <div className="flex gap-2 mb-4">
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">vscode</span>
                  <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded">extension</span>
                  <span className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded">typescript</span>
                </div>
                <div className="flex gap-3">
                  <a href="#" className="text-google-blue hover:underline text-sm">View on GitHub</a>
                  <a href="#" className="text-google-blue hover:underline text-sm">VS Code Marketplace</a>
                </div>
              </div>

              <div className="card">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-h4">Gemini CLI Docker Images</h3>
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">Utility</span>
                </div>
                <p className="text-neutral-gray mb-3">
                  Pre-configured Docker images with Gemini CLI and popular MCP servers for easy deployment.
                </p>
                <div className="flex items-center text-sm text-neutral-gray mb-3">
                  <span>⭐ 800 stars</span>
                  <span className="mx-2">•</span>
                  <span>📦 100k pulls</span>
                  <span className="mx-2">•</span>
                  <span>🔄 Last updated: 1 week ago</span>
                </div>
                <div className="flex gap-2 mb-4">
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">docker</span>
                  <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">deployment</span>
                  <span className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded">containers</span>
                </div>
                <div className="flex gap-3">
                  <a href="#" className="text-google-blue hover:underline text-sm">View on GitHub</a>
                  <a href="#" className="text-google-blue hover:underline text-sm">Docker Hub</a>
                </div>
              </div>

              <div className="card">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-h4">MCP Server Registry</h3>
                  <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded">Registry</span>
                </div>
                <p className="text-neutral-gray mb-3">
                  Community-maintained registry of MCP servers with easy installation and discovery.
                </p>
                <div className="flex items-center text-sm text-neutral-gray mb-3">
                  <span>⭐ 600 stars</span>
                  <span className="mx-2">•</span>
                  <span>📦 200+ servers</span>
                  <span className="mx-2">•</span>
                  <span>🔄 Last updated: 3 days ago</span>
                </div>
                <div className="flex gap-2 mb-4">
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">mcp</span>
                  <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded">registry</span>
                  <span className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded">discovery</span>
                </div>
                <div className="flex gap-3">
                  <a href="#" className="text-google-blue hover:underline text-sm">View Registry</a>
                  <a href="#" className="text-google-blue hover:underline text-sm">Submit Server</a>
                </div>
              </div>
            </div>
          </section>

          {/* Project Categories */}
          <section className="mb-12">
            <h2 className="text-h2 mb-6">Project Categories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              
              <div className="card">
                <h3 className="text-h5 mb-2">🔌 Extensions & Plugins</h3>
                <p className="text-sm text-neutral-gray">IDE integrations, editor plugins, browser extensions</p>
              </div>

              <div className="card">
                <h3 className="text-h5 mb-2">🛠️ Developer Tools</h3>
                <p className="text-sm text-neutral-gray">CLI utilities, build tools, development helpers</p>
              </div>

              <div className="card">
                <h3 className="text-h5 mb-2">🌐 MCP Servers</h3>
                <p className="text-sm text-neutral-gray">Custom MCP servers for specific use cases</p>
              </div>

              <div className="card">
                <h3 className="text-h5 mb-2">📚 Templates & Boilerplates</h3>
                <p className="text-sm text-neutral-gray">Project templates, configuration examples</p>
              </div>

              <div className="card">
                <h3 className="text-h5 mb-2">🤖 Automation Scripts</h3>
                <p className="text-sm text-neutral-gray">Workflow automation, CI/CD integrations</p>
              </div>

              <div className="card">
                <h3 className="text-h5 mb-2">📖 Learning Resources</h3>
                <p className="text-sm text-neutral-gray">Tutorials, examples, educational content</p>
              </div>
            </div>
          </section>

          {/* Submit Project */}
          <div className="bg-gradient-to-r from-google-blue to-google-green rounded-card p-6 text-white">
            <h3 className="text-h3 mb-3">Submit Your Project</h3>
            <p className="mb-4 opacity-90">
              Built something awesome with Gemini CLI? Share it with the community and get featured!
            </p>
            <div className="flex gap-4 flex-wrap">
              <Link href="/contribute" className="bg-white text-google-blue px-6 py-3 rounded-button font-medium hover:bg-neutral-light transition-colors">
                Submit Project
              </Link>
              <Link href="/community/forums" className="border border-white text-white px-6 py-3 rounded-button font-medium hover:bg-white/10 transition-colors">
                Discuss Ideas
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}