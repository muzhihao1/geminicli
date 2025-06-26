import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Resource Center - Gemini CLI All in One',
  description: 'Complete collection of Gemini CLI resources including official docs, tutorials, tools, and community contributions',
}

const resources = {
  official: {
    title: 'Official Resources',
    icon: '🏛️',
    description: 'Authoritative documentation and reference materials',
    items: [
      {
        title: 'Google AI Studio',
        description: 'Get your API key and manage your Google AI projects',
        url: 'https://makersuite.google.com/app/apikey',
        tags: ['api-key', 'official'],
      },
      {
        title: 'Google AI Gemini Documentation',
        description: 'Official Gemini API documentation and guides',
        url: 'https://ai.google.dev/docs',
        tags: ['docs', 'api'],
      },
      {
        title: 'Model Context Protocol (MCP)',
        description: 'Official MCP specification and documentation',
        url: 'https://modelcontextprotocol.io/',
        tags: ['mcp', 'protocol'],
      },
      {
        title: 'Getting Started Guide',
        description: 'Complete setup and installation guide',
        url: '/tutorials/getting-started',
        tags: ['guide', 'setup'],
      },
    ],
  },
  tutorials: {
    title: 'Tutorials & Guides',
    icon: '📚',
    description: 'Step-by-step guides from beginner to advanced usage',
    items: [
      {
        title: 'Getting Started Guide',
        description: 'Complete walkthrough for new users',
        url: '/tutorials/getting-started',
        tags: ['beginner', 'guide'],
      },
      {
        title: 'Advanced Code Editing',
        description: 'Master complex code manipulation techniques',
        url: '/tutorials/advanced-editing',
        tags: ['advanced', 'code'],
      },
      {
        title: 'MCP Server Integration',
        description: 'How to extend Gemini CLI with MCP servers',
        url: '/tutorials/mcp-integration',
        tags: ['mcp', 'integration'],
      },
      {
        title: 'Automation Workflows',
        description: 'Build automated workflows with Gemini CLI',
        url: '/tutorials/automation',
        tags: ['automation', 'workflow'],
      },
    ],
  },
  tools: {
    title: 'Tools & Extensions',
    icon: '🛠️',
    description: 'Enhance your Gemini CLI experience with these tools',
    items: [
      {
        title: 'MCP Server Collection',
        description: 'Curated list of MCP servers for various use cases',
        url: '/tools/mcp-servers',
        tags: ['mcp', 'servers'],
      },
      {
        title: 'VS Code Extension',
        description: 'Integrate Gemini CLI with Visual Studio Code',
        url: '/tools/vscode-extension',
        tags: ['vscode', 'ide'],
      },
      {
        title: 'Configuration Templates',
        description: 'Pre-configured templates for common scenarios',
        url: '/tools/config-templates',
        tags: ['config', 'templates'],
      },
      {
        title: 'Shell Scripts',
        description: 'Useful scripts for common Gemini CLI tasks',
        url: '/tools/scripts',
        tags: ['scripts', 'automation'],
      },
    ],
  },
  community: {
    title: 'Community Resources',
    icon: '🌟',
    description: 'Resources created and shared by the Gemini CLI community',
    items: [
      {
        title: 'Community Tutorials',
        description: 'User-created guides and tutorials',
        url: '/community/tutorials',
        tags: ['community', 'tutorials'],
      },
      {
        title: 'Use Case Examples',
        description: 'Real-world applications and success stories',
        url: '/community/use-cases',
        tags: ['examples', 'cases'],
      },
      {
        title: 'Open Source Projects',
        description: 'Projects built with or for Gemini CLI',
        url: '/community/projects',
        tags: ['opensource', 'projects'],
      },
      {
        title: 'Discussion Forums',
        description: 'Active community discussions and Q&A',
        url: '/community/forums',
        tags: ['forum', 'discussion'],
      },
    ],
  },
}

export default function ResourcesPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-h1 mb-4">Resource Center</h1>
          <p className="text-lg text-neutral-gray mb-12 max-w-3xl">
            Your comprehensive library of Gemini CLI resources. Everything from official documentation 
            to community contributions, all organized and easily accessible.
          </p>

          {/* Resource Categories */}
          <div className="space-y-12">
            {Object.entries(resources).map(([key, category]) => (
              <section key={key} id={key}>
                <div className="flex items-center mb-6">
                  <span className="text-4xl mr-4">{category.icon}</span>
                  <div>
                    <h2 className="text-h2">{category.title}</h2>
                    <p className="text-neutral-gray">{category.description}</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {category.items.map((item) => (
                    <div key={item.title} className="card hover:shadow-card-hover transition-shadow">
                      <h3 className="text-h3 mb-2">{item.title}</h3>
                      <p className="text-neutral-gray mb-4">{item.description}</p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {item.tags.map((tag) => (
                          <span key={tag} className="px-3 py-1 bg-neutral-light text-sm rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <Link 
                        href={item.url}
                        className="inline-flex items-center text-google-blue hover:underline"
                        target={item.url.startsWith('http') ? '_blank' : undefined}
                        rel={item.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                      >
                        View Resource
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                                d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>

          {/* Contribution CTA */}
          <div className="mt-16 text-center p-8 bg-green-50 rounded-card">
            <h3 className="text-h3 mb-4">Have a resource to share?</h3>
            <p className="text-neutral-gray mb-6">
              Help the community by contributing your Gemini CLI resources, tutorials, or tools.
            </p>
            <Link href="/contribute" className="btn-primary bg-google-green hover:bg-green-600">
              Contribute a Resource
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}