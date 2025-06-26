import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Contribute - Gemini CLI All in One',
  description: 'Contribute to the Gemini CLI community with tutorials, resources, and tools',
}

export default function ContributePage() {
  return (
    <div className="pt-24 pb-16">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-h1 mb-4">Contribute to the Community</h1>
          <p className="text-lg text-neutral-gray mb-12">
            Help grow the Gemini CLI community by sharing your knowledge, tools, and experiences with fellow developers.
          </p>

          {/* Contribution Types */}
          <section className="mb-12">
            <h2 className="text-h2 mb-6">Ways to Contribute</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <div className="card">
                <h3 className="text-h4 mb-3">📚 Submit a Tutorial</h3>
                <p className="text-neutral-gray mb-4">
                  Share your knowledge by creating step-by-step tutorials for the community.
                </p>
                <Link href="/community/tutorials" className="btn-primary">
                  Submit Tutorial
                </Link>
              </div>

              <div className="card">
                <h3 className="text-h4 mb-3">🛠️ Share a Tool</h3>
                <p className="text-neutral-gray mb-4">
                  Built something useful? Share your MCP servers, scripts, or extensions.
                </p>
                <Link href="/community/projects" className="btn-primary">
                  Submit Project
                </Link>
              </div>

              <div className="card">
                <h3 className="text-h4 mb-3">📖 Add Resources</h3>
                <p className="text-neutral-gray mb-4">
                  Contribute helpful resources, documentation, or reference materials.
                </p>
                <Link href="/resources" className="btn-primary">
                  Submit Resource
                </Link>
              </div>

              <div className="card">
                <h3 className="text-h4 mb-3">💬 Join Discussions</h3>
                <p className="text-neutral-gray mb-4">
                  Help others by answering questions and sharing your experiences.
                </p>
                <Link href="/community/forums" className="btn-primary">
                  Join Forums
                </Link>
              </div>
            </div>
          </section>

          {/* Contribution Guidelines */}
          <section className="mb-12">
            <h2 className="text-h2 mb-6">Contribution Guidelines</h2>
            <div className="card">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-google-green mr-3 mt-1">✓</span>
                  <div>
                    <strong>Quality Content:</strong> Ensure your contributions are well-written, accurate, and helpful
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-google-green mr-3 mt-1">✓</span>
                  <div>
                    <strong>Original Work:</strong> Submit only original content or properly attribute sources
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-google-green mr-3 mt-1">✓</span>
                  <div>
                    <strong>Clear Instructions:</strong> Provide step-by-step instructions with examples
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-google-green mr-3 mt-1">✓</span>
                  <div>
                    <strong>Tested Code:</strong> Test all code examples and ensure they work as expected
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-google-green mr-3 mt-1">✓</span>
                  <div>
                    <strong>Community Standards:</strong> Follow our community guidelines and code of conduct
                  </div>
                </li>
              </ul>
            </div>
          </section>

          {/* Recognition */}
          <section className="mb-12">
            <h2 className="text-h2 mb-6">Recognition Program</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              <div className="card text-center">
                <div className="text-4xl mb-3">🌟</div>
                <h3 className="text-h5 mb-2">Community Star</h3>
                <p className="text-sm text-neutral-gray">For outstanding contributions and community involvement</p>
              </div>

              <div className="card text-center">
                <div className="text-4xl mb-3">🏆</div>
                <h3 className="text-h5 mb-2">Expert Contributor</h3>
                <p className="text-sm text-neutral-gray">For high-quality tutorials and technical content</p>
              </div>

              <div className="card text-center">
                <div className="text-4xl mb-3">🎯</div>
                <h3 className="text-h5 mb-2">Helper Hero</h3>
                <p className="text-sm text-neutral-gray">For actively helping community members in forums</p>
              </div>
            </div>
          </section>

          {/* Get Started */}
          <div className="bg-gradient-to-r from-google-blue to-google-green rounded-card p-8 text-white text-center">
            <h3 className="text-h3 mb-4">Ready to Contribute?</h3>
            <p className="text-lg mb-6 opacity-90">
              Start contributing today and help make Gemini CLI better for everyone.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link href="/community/forums" className="bg-white text-google-blue px-6 py-3 rounded-button font-medium hover:bg-neutral-light transition-colors">
                Join Community
              </Link>
              <Link href="/community" className="border border-white text-white px-6 py-3 rounded-button font-medium hover:bg-white/10 transition-colors">
                Explore Community
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}