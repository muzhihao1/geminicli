import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'MCP Integration Tutorial - Gemini CLI',
  description: 'Learn how to integrate and use MCP servers with Gemini CLI',
}

export default function MCPIntegrationTutorial() {
  return (
    <div className="pt-24 pb-16">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-h1 mb-4">MCP Integration Tutorial</h1>
          <p className="text-lg text-neutral-gray mb-12">
            Learn how to extend Gemini CLI capabilities by integrating Model Context Protocol (MCP) servers.
          </p>

          {/* Setup Steps */}
          <section className="mb-12">
            <h2 className="text-h2 mb-6">Setup and Configuration</h2>
            <div className="space-y-4">
              
              <div className="card">
                <h3 className="text-h4 mb-3">1. Install MCP Server</h3>
                <div className="bg-neutral-dark text-white p-3 rounded-lg font-code text-sm">
                  <p>npm install -g @modelcontextprotocol/server-filesystem</p>
                  <p>npm install -g @modelcontextprotocol/server-git</p>
                </div>
              </div>

              <div className="card">
                <h3 className="text-h4 mb-3">2. Configure Gemini CLI</h3>
                <div className="bg-neutral-dark text-white p-3 rounded-lg font-code text-sm">
                  <p>gemini mcp add filesystem npx @modelcontextprotocol/server-filesystem ./</p>
                  <p>gemini mcp add git npx @modelcontextprotocol/server-git .</p>
                </div>
              </div>

              <div className="card">
                <h3 className="text-h4 mb-3">3. Test Integration</h3>
                <div className="bg-neutral-dark text-white p-3 rounded-lg font-code text-sm">
                  <p>gemini "List all files in my project directory"</p>
                  <p>gemini "Show me the git history for the last week"</p>
                </div>
              </div>
            </div>
          </section>

          {/* Advanced Usage */}
          <section className="mb-12">
            <h2 className="text-h2 mb-6">Advanced MCP Usage</h2>
            <div className="card">
              <h3 className="text-h4 mb-3">Custom MCP Server Creation</h3>
              <div className="bg-neutral-dark text-white p-3 rounded-lg font-code text-sm">
                <p>npm create mcp-server my-custom-server</p>
                <p>cd my-custom-server</p>
                <p># Edit src/index.ts with your custom logic</p>
                <p>npm run build</p>
                <p>gemini mcp add custom ./dist/index.js</p>
              </div>
            </div>
          </section>

          {/* Next Steps */}
          <div className="bg-blue-50 rounded-card p-6">
            <h3 className="text-h3 mb-3">Explore More</h3>
            <div className="flex gap-4 flex-wrap">
              <Link href="/tutorials/automation" className="btn-primary">
                Automation Tutorial
              </Link>
              <Link href="/qa/mcp-integration" className="btn-secondary">
                MCP Q&A
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}