import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'MCP Integration - Gemini CLI All in One',
  description: 'Learn how to integrate MCP servers with Gemini CLI for extended functionality',
}

export default function MCPIntegrationPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-h1 mb-4">MCP Server Integration</h1>
          <p className="text-lg text-neutral-gray mb-12">
            Extend Gemini CLI with Model Context Protocol (MCP) servers to access external tools and services.
          </p>

          {/* What is MCP */}
          <section className="mb-12">
            <h2 className="text-h2 mb-4">Understanding MCP</h2>
            <div className="card">
              <p className="mb-4">
                Model Context Protocol (MCP) allows Gemini CLI to connect with external services and tools:
              </p>
              <ul className="space-y-2">
                <li>• File system operations</li>
                <li>• Database queries</li>
                <li>• Web API interactions</li>
                <li>• Development tool integration</li>
                <li>• Custom business logic</li>
              </ul>
            </div>
          </section>

          {/* Quick Setup */}
          <section className="mb-12">
            <h2 className="text-h2 mb-4">Quick Setup</h2>
            <div className="space-y-4">
              
              <div className="card">
                <h3 className="font-semibold mb-3">1. Install MCP Server</h3>
                <div className="bg-neutral-dark text-white p-3 rounded-lg font-code text-sm">
                  <p>npm install -g @modelcontextprotocol/server-filesystem</p>
                </div>
              </div>

              <div className="card">
                <h3 className="font-semibold mb-3">2. Configure Gemini CLI</h3>
                <div className="bg-neutral-dark text-white p-3 rounded-lg font-code text-sm">
                  <p>gemini mcp add filesystem npx @modelcontextprotocol/server-filesystem ./</p>
                </div>
              </div>

              <div className="card">
                <h3 className="font-semibold mb-3">3. Test Integration</h3>
                <div className="bg-neutral-dark text-white p-3 rounded-lg font-code text-sm">
                  <p>gemini "List the files in my project directory"</p>
                </div>
              </div>
            </div>
          </section>

          {/* Popular MCP Servers */}
          <section className="mb-12">
            <h2 className="text-h2 mb-4">Popular MCP Servers</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <div className="card">
                <h3 className="font-semibold mb-2">Filesystem Server</h3>
                <p className="text-sm text-neutral-gray mb-3">Read, write, and search files and directories</p>
                <div className="bg-neutral-light p-2 rounded text-xs font-code">
                  @modelcontextprotocol/server-filesystem
                </div>
              </div>

              <div className="card">
                <h3 className="font-semibold mb-2">Git Server</h3>
                <p className="text-sm text-neutral-gray mb-3">Git repository operations and version control</p>
                <div className="bg-neutral-light p-2 rounded text-xs font-code">
                  @modelcontextprotocol/server-git
                </div>
              </div>

              <div className="card">
                <h3 className="font-semibold mb-2">SQLite Server</h3>
                <p className="text-sm text-neutral-gray mb-3">Database queries and data manipulation</p>
                <div className="bg-neutral-light p-2 rounded text-xs font-code">
                  @modelcontextprotocol/server-sqlite
                </div>
              </div>

              <div className="card">
                <h3 className="font-semibold mb-2">Web Fetch Server</h3>
                <p className="text-sm text-neutral-gray mb-3">HTTP requests and web scraping</p>
                <div className="bg-neutral-light p-2 rounded text-xs font-code">
                  @modelcontextprotocol/server-fetch
                </div>
              </div>
            </div>
          </section>

          {/* Advanced Configuration */}
          <section className="mb-12">
            <h2 className="text-h2 mb-4">Advanced Configuration</h2>
            <div className="card">
              <h3 className="font-semibold mb-3">Manual Configuration</h3>
              <p className="text-sm text-neutral-gray mb-3">Edit your config file directly:</p>
              <div className="bg-neutral-dark text-white p-3 rounded-lg font-code text-sm">
                <p>{`{
  "mcpServers": {
    "filesystem": {
      "command": "npx",
      "args": ["@modelcontextprotocol/server-filesystem", "/path/to/workspace"]
    },
    "git": {
      "command": "npx", 
      "args": ["@modelcontextprotocol/server-git", "."]
    }
  }
}`}</p>
              </div>
            </div>
          </section>

          {/* Troubleshooting */}
          <section className="mb-12">
            <h2 className="text-h2 mb-4">Common Issues</h2>
            <div className="space-y-4">
              
              <div className="card">
                <h3 className="font-semibold mb-2 text-red-600">Server not starting</h3>
                <p className="text-sm text-neutral-gray">
                  Check if the MCP server package is installed and the path is correct.
                </p>
              </div>

              <div className="card">
                <h3 className="font-semibold mb-2 text-red-600">Permission denied</h3>
                <p className="text-sm text-neutral-gray">
                  Ensure the MCP server has proper file system permissions.
                </p>
              </div>
            </div>
          </section>

          {/* Next Steps */}
          <div className="bg-blue-50 rounded-card p-6">
            <h3 className="text-h3 mb-3">Explore MCP Servers</h3>
            <p className="text-neutral-gray mb-4">
              Discover more MCP servers and integration options:
            </p>
            <div className="flex gap-4 flex-wrap">
              <Link href="/tools/mcp-servers" className="btn-primary">
                MCP Server Collection
              </Link>
              <Link href="/qa/mcp-config" className="btn-secondary">
                Configuration Guide
              </Link>
              <Link href="/tutorials/mcp-integration" className="btn-secondary">
                Integration Tutorial
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}