import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'MCP Server Collection - Gemini CLI All in One',
  description: 'Curated collection of MCP servers to extend Gemini CLI functionality',
}

const mcpServers = [
  {
    category: 'File System',
    servers: [
      {
        name: 'filesystem-mcp',
        description: 'Advanced file system operations with search and manipulation',
        features: ['File search', 'Directory traversal', 'Content manipulation', 'Batch operations'],
        github: 'https://github.com/modelcontextprotocol/servers/filesystem',
        difficulty: 'Beginner',
      },
      {
        name: 'git-mcp',
        description: 'Git repository operations and version control',
        features: ['Commit history', 'Branch management', 'Diff viewing', 'Status tracking'],
        github: 'https://github.com/modelcontextprotocol/servers/git',
        difficulty: 'Intermediate',
      },
    ],
  },
  {
    category: 'Web & APIs',
    servers: [
      {
        name: 'fetch-mcp',
        description: 'Web scraping and API interactions',
        features: ['HTTP requests', 'Web scraping', 'API integration', 'Response parsing'],
        github: 'https://github.com/modelcontextprotocol/servers/fetch',
        difficulty: 'Beginner',
      },
      {
        name: 'browser-mcp',
        description: 'Browser automation and web interaction',
        features: ['Page navigation', 'Element interaction', 'Screenshot capture', 'JavaScript execution'],
        github: 'https://github.com/modelcontextprotocol/servers/browser',
        difficulty: 'Advanced',
      },
    ],
  },
  {
    category: 'Development Tools',
    servers: [
      {
        name: 'sqlite-mcp',
        description: 'SQLite database operations',
        features: ['Query execution', 'Schema management', 'Data manipulation', 'Transaction support'],
        github: 'https://github.com/modelcontextprotocol/servers/sqlite',
        difficulty: 'Intermediate',
      },
      {
        name: 'docker-mcp',
        description: 'Docker container management',
        features: ['Container control', 'Image management', 'Log viewing', 'Network operations'],
        github: 'https://github.com/modelcontextprotocol/servers/docker',
        difficulty: 'Advanced',
      },
    ],
  },
  {
    category: 'Productivity',
    servers: [
      {
        name: 'memory-mcp',
        description: 'Persistent memory and note-taking',
        features: ['Note storage', 'Memory retrieval', 'Context preservation', 'Search functionality'],
        github: 'https://github.com/modelcontextprotocol/servers/memory',
        difficulty: 'Beginner',
      },
      {
        name: 'time-mcp',
        description: 'Time and date operations',
        features: ['Current time', 'Timezone conversion', 'Date calculations', 'Scheduling'],
        github: 'https://github.com/modelcontextprotocol/servers/time',
        difficulty: 'Beginner',
      },
    ],
  },
]

const difficultyColors: Record<string, string> = {
  Beginner: 'bg-green-100 text-green-800',
  Intermediate: 'bg-yellow-100 text-yellow-800',
  Advanced: 'bg-red-100 text-red-800',
}

export default function MCPServersPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-h1 mb-4">MCP Server Collection</h1>
          <p className="text-lg text-neutral-gray mb-12 max-w-3xl">
            Model Context Protocol (MCP) servers extend Gemini CLI with additional capabilities. 
            Browse our curated collection to enhance your workflow.
          </p>

          {/* What is MCP */}
          <section className="mb-12">
            <div className="card bg-blue-50 border-blue-200">
              <h2 className="text-h3 mb-3">What are MCP Servers?</h2>
              <p className="text-neutral-gray mb-4">
                MCP servers are plugins that give Gemini CLI access to external tools and services. 
                They enable functionality like file system operations, web browsing, database queries, and more.
              </p>
              <Link href="/qa/mcp-integration" className="text-google-blue hover:underline">
                Learn how to integrate MCP servers →
              </Link>
            </div>
          </section>

          {/* Server Categories */}
          {mcpServers.map((category) => (
            <section key={category.category} className="mb-12">
              <h2 className="text-h2 mb-6">{category.category}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {category.servers.map((server) => (
                  <div key={server.name} className="card hover:shadow-card-hover transition-shadow">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-h3">{server.name}</h3>
                      <span className={`px-3 py-1 rounded-full text-sm ${difficultyColors[server.difficulty]}`}>
                        {server.difficulty}
                      </span>
                    </div>
                    
                    <p className="text-neutral-gray mb-4">{server.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-sm mb-2">Features:</h4>
                      <div className="flex flex-wrap gap-2">
                        {server.features.map((feature) => (
                          <span key={feature} className="px-2 py-1 bg-neutral-light text-xs rounded">
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <a 
                        href={server.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-google-blue hover:underline"
                      >
                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                        View on GitHub
                      </a>
                      <button className="text-sm text-neutral-gray hover:text-google-blue">
                        Copy install command
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}

          {/* Installation Guide */}
          <section className="mb-12">
            <h2 className="text-h2 mb-4">How to Install MCP Servers</h2>
            <div className="card">
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">1. Install the MCP server:</h3>
                  <div className="bg-neutral-dark text-white p-4 rounded-lg font-code">
                    <p className="text-green-400"># Example: Install filesystem MCP server</p>
                    <p>npm install -g @modelcontextprotocol/server-filesystem</p>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">2. Configure in Gemini CLI:</h3>
                  <div className="bg-neutral-dark text-white p-4 rounded-lg font-code">
                    <p>gemini config add-server filesystem</p>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">3. Verify installation:</h3>
                  <div className="bg-neutral-dark text-white p-4 rounded-lg font-code">
                    <p>gemini list-servers</p>
                  </div>
                </div>
              </div>

              <Link href="/qa/mcp-integration" className="inline-block mt-6 btn-primary">
                Full MCP Integration Guide
              </Link>
            </div>
          </section>

          {/* Create Your Own */}
          <section>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-card p-8 text-center">
              <h2 className="text-h2 mb-4">Build Your Own MCP Server</h2>
              <p className="text-neutral-gray mb-6 max-w-2xl mx-auto">
                Can't find what you need? Learn how to create custom MCP servers for your specific use cases.
              </p>
              <Link href="/tutorials/create-mcp-server" className="btn-primary">
                MCP Development Guide
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}