import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'MCP Server Configuration - Gemini CLI All in One',
  description: 'Learn how to configure MCP servers with Gemini CLI for extended functionality',
}

export default function MCPConfigPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-h1 mb-4">MCP Server Configuration</h1>
          <p className="text-lg text-neutral-gray mb-12">
            Configure Model Context Protocol (MCP) servers to extend Gemini CLI with additional capabilities.
          </p>

          {/* What is MCP */}
          <section className="mb-12">
            <h2 className="text-h2 mb-4">What is MCP?</h2>
            <div className="card">
              <p className="mb-4">
                Model Context Protocol (MCP) is a standardized way to connect AI models with external tools and data sources. 
                MCP servers provide Gemini CLI with access to:
              </p>
              <ul className="space-y-2">
                <li>• File system operations</li>
                <li>• Database connections</li>
                <li>• Web APIs and services</li>
                <li>• Development tools and environments</li>
                <li>• Custom business logic</li>
              </ul>
            </div>
          </section>

          {/* Configuration Example */}
          <section className="mb-12">
            <h2 className="text-h2 mb-4">Basic Configuration</h2>
            <div className="card">
              <p className="mb-4">Configure MCP servers in your Gemini CLI configuration file:</p>
              <div className="bg-neutral-dark text-white p-3 rounded-lg font-code text-sm">
                <p className="text-green-400"># ~/.config/gemini-cli/config.json</p>
                <p>{`{
  "apiKey": "your-api-key",
  "mcpServers": {
    "filesystem": {
      "command": "npx",
      "args": ["@modelcontextprotocol/server-filesystem", "/path/to/directory"]
    }
  }
}`}</p>
              </div>
            </div>
          </section>

          {/* Next Steps */}
          <div className="bg-blue-50 rounded-card p-6">
            <h3 className="text-h3 mb-3">Next Steps</h3>
            <p className="text-neutral-gray mb-4">
              Ready to explore MCP servers and advanced integration:
            </p>
            <div className="flex gap-4 flex-wrap">
              <Link href="/tools/mcp-servers" className="btn-primary">
                Browse MCP Servers
              </Link>
              <Link href="/qa/mcp-integration" className="btn-secondary">
                Integration Guide
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}