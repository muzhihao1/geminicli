import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Changelog - Gemini CLI All in One',
  description: 'Track updates, new features, and improvements to Gemini CLI All in One',
}

const releases = [
  {
    version: '2.1.0',
    date: '2024-01-15',
    type: 'Major Update',
    highlights: [
      'New Use Cases section with real-world examples',
      'Enhanced community features and forums',
      'Improved MCP server integration guides',
      'Advanced automation tutorials'
    ],
    changes: {
      added: [
        'Complete Use Cases section with 6 detailed use case pages',
        'Community tutorials and project showcase',
        'Advanced code editing tutorial',
        'MCP integration step-by-step guide',
        'Automation workflow examples',
        'Contact us and About us pages'
      ],
      improved: [
        'Enhanced Q&A hub with more comprehensive answers',
        'Better navigation and cross-linking between sections',
        'Improved search functionality',
        'Mobile responsiveness across all pages'
      ],
      fixed: [
        'Fixed broken links in Resource Center',
        'Resolved build issues with complex components',
        'Improved page loading performance',
        'Fixed accessibility issues in navigation'
      ]
    }
  },
  {
    version: '2.0.0',
    date: '2024-01-01',
    type: 'Major Release',
    highlights: [
      'Complete platform redesign',
      'Comprehensive Q&A hub',
      'Resource center with curated content',
      'Community integration'
    ],
    changes: {
      added: [
        'Modern, responsive design system',
        'Comprehensive Q&A hub with 15+ detailed guides',
        'Resource center with official and community resources',
        'Troubleshooting section with common solutions',
        'Community pages and forums integration',
        'Google Analytics integration'
      ],
      improved: [
        'Completely rebuilt user interface',
        'Enhanced mobile experience',
        'Faster page load times',
        'Better SEO optimization'
      ],
      fixed: [
        'All legacy compatibility issues',
        'Navigation inconsistencies',
        'Search functionality improvements'
      ]
    }
  },
  {
    version: '1.5.2',
    date: '2023-12-15',
    type: 'Bug Fix',
    highlights: [
      'Critical bug fixes',
      'Performance improvements',
      'Security updates'
    ],
    changes: {
      fixed: [
        'Fixed authentication flow issues',
        'Resolved search index corruption',
        'Fixed mobile navigation bugs',
        'Corrected API key validation'
      ],
      improved: [
        'Faster search response times',
        'Better error handling',
        'Improved caching mechanisms'
      ]
    }
  },
  {
    version: '1.5.0',
    date: '2023-12-01',
    type: 'Feature Update',
    highlights: [
      'Enhanced tutorials section',
      'New tool integrations',
      'Improved documentation'
    ],
    changes: {
      added: [
        'VS Code extension documentation',
        'Docker deployment guides',
        'CI/CD integration examples',
        'Custom MCP server templates'
      ],
      improved: [
        'Updated installation guides for all platforms',
        'Enhanced code examples with syntax highlighting',
        'Better organization of tutorial content'
      ]
    }
  },
  {
    version: '1.0.0',
    date: '2023-10-01',
    type: 'Initial Release',
    highlights: [
      'Platform launch',
      'Core documentation',
      'Basic tutorials',
      'Community foundation'
    ],
    changes: {
      added: [
        'Initial platform launch',
        'Basic Gemini CLI documentation',
        'Installation and setup guides',
        'Fundamental tutorials',
        'Community guidelines and structure'
      ]
    }
  }
]

const changeTypeColors = {
  'Major Release': 'bg-blue-100 text-blue-800',
  'Major Update': 'bg-green-100 text-green-800',
  'Feature Update': 'bg-purple-100 text-purple-800',
  'Bug Fix': 'bg-orange-100 text-orange-800',
  'Initial Release': 'bg-gray-100 text-gray-800'
}

export default function ChangelogPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-h1 mb-4">Changelog</h1>
          <p className="text-lg text-neutral-gray mb-12">
            Stay updated with the latest features, improvements, and fixes to Gemini CLI All in One.
          </p>

          {/* Latest Release Highlight */}
          <div className="card bg-gradient-to-r from-google-blue/10 to-google-green/10 mb-12">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <span className="text-2xl mr-3">🎉</span>
                <div>
                  <h2 className="text-h3">Latest Release: v{releases[0].version}</h2>
                  <p className="text-neutral-gray">{releases[0].date}</p>
                </div>
              </div>
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${changeTypeColors[releases[0].type as keyof typeof changeTypeColors]}`}>
                {releases[0].type}
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {releases[0].highlights.map((highlight, index) => (
                <div key={index} className="flex items-start">
                  <span className="text-google-green mr-2 mt-1">✓</span>
                  <span className="text-sm">{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* All Releases */}
          <div className="space-y-8">
            {releases.map((release, index) => (
              <div key={release.version} className="card">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-google-blue/10 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-google-blue font-bold">v{release.version.split('.')[0]}</span>
                    </div>
                    <div>
                      <h3 className="text-h4">Version {release.version}</h3>
                      <p className="text-neutral-gray">{release.date}</p>
                    </div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${changeTypeColors[release.type as keyof typeof changeTypeColors]}`}>
                    {release.type}
                  </span>
                </div>

                {/* Highlights */}
                <div className="mb-6">
                  <h4 className="font-semibold mb-3">✨ Highlights</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {release.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-start">
                        <span className="text-google-blue mr-2 mt-1">•</span>
                        <span className="text-sm">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Detailed Changes */}
                <div className="space-y-4">
                  {release.changes.added && (
                    <div>
                      <h4 className="font-semibold mb-2 text-green-700">🎉 Added</h4>
                      <ul className="space-y-1">
                        {release.changes.added.map((item, idx) => (
                          <li key={idx} className="text-sm text-neutral-gray flex items-start">
                            <span className="text-green-600 mr-2 mt-1">+</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {release.changes.improved && (
                    <div>
                      <h4 className="font-semibold mb-2 text-blue-700">🔄 Improved</h4>
                      <ul className="space-y-1">
                        {release.changes.improved.map((item, idx) => (
                          <li key={idx} className="text-sm text-neutral-gray flex items-start">
                            <span className="text-blue-600 mr-2 mt-1">↗</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {release.changes.fixed && (
                    <div>
                      <h4 className="font-semibold mb-2 text-orange-700">🔧 Fixed</h4>
                      <ul className="space-y-1">
                        {release.changes.fixed.map((item, idx) => (
                          <li key={idx} className="text-sm text-neutral-gray flex items-start">
                            <span className="text-orange-600 mr-2 mt-1">×</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Subscribe to Updates */}
          <div className="mt-12 bg-blue-50 rounded-card p-8 text-center">
            <h3 className="text-h3 mb-4">Stay Updated</h3>
            <p className="text-neutral-gray mb-6">
              Get notified about new releases, features, and important updates.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link href="/community" className="btn-primary">
                Join Community
              </Link>
              <a href="mailto:updates@geminicli.com" className="btn-secondary">
                Subscribe to Updates
              </a>
            </div>
          </div>

          {/* Version History */}
          <div className="mt-12 card">
            <h3 className="text-h4 mb-4">Release Statistics</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              
              <div className="text-center p-4 bg-neutral-light rounded-lg">
                <div className="text-2xl font-bold text-google-blue">{releases.length}</div>
                <div className="text-sm text-neutral-gray">Total Releases</div>
              </div>

              <div className="text-center p-4 bg-neutral-light rounded-lg">
                <div className="text-2xl font-bold text-google-green">
                  {releases.filter(r => r.type.includes('Major')).length}
                </div>
                <div className="text-sm text-neutral-gray">Major Updates</div>
              </div>

              <div className="text-center p-4 bg-neutral-light rounded-lg">
                <div className="text-2xl font-bold text-purple-600">
                  {releases.reduce((acc, r) => acc + (r.changes.added?.length || 0), 0)}
                </div>
                <div className="text-sm text-neutral-gray">Features Added</div>
              </div>

              <div className="text-center p-4 bg-neutral-light rounded-lg">
                <div className="text-2xl font-bold text-orange-600">
                  {releases.reduce((acc, r) => acc + (r.changes.fixed?.length || 0), 0)}
                </div>
                <div className="text-sm text-neutral-gray">Issues Fixed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}