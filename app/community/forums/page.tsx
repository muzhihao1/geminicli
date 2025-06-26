import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Community Forums - Gemini CLI',
  description: 'Join the discussion with other Gemini CLI users and developers',
}

export default function CommunityForumsPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-h1 mb-4">Community Forums</h1>
          <p className="text-lg text-neutral-gray mb-12">
            Connect with other Gemini CLI users, share ideas, get help, and discuss the latest developments.
          </p>

          {/* Forum Categories */}
          <section className="mb-12">
            <h2 className="text-h2 mb-6">Discussion Categories</h2>
            <div className="space-y-4">
              
              <div className="card hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-2xl">💬</span>
                    </div>
                    <div>
                      <h3 className="text-h4 mb-1">General Discussion</h3>
                      <p className="text-sm text-neutral-gray">General questions and discussions about Gemini CLI</p>
                    </div>
                  </div>
                  <div className="text-right text-sm text-neutral-gray">
                    <div>1,247 posts</div>
                    <div>2 hours ago</div>
                  </div>
                </div>
              </div>

              <div className="card hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-2xl">🆘</span>
                    </div>
                    <div>
                      <h3 className="text-h4 mb-1">Help & Support</h3>
                      <p className="text-sm text-neutral-gray">Get help with installation, configuration, and troubleshooting</p>
                    </div>
                  </div>
                  <div className="text-right text-sm text-neutral-gray">
                    <div>892 posts</div>
                    <div>1 hour ago</div>
                  </div>
                </div>
              </div>

              <div className="card hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-2xl">🛠️</span>
                    </div>
                    <div>
                      <h3 className="text-h4 mb-1">Development & Tools</h3>
                      <p className="text-sm text-neutral-gray">Discuss MCP servers, extensions, and development tools</p>
                    </div>
                  </div>
                  <div className="text-right text-sm text-neutral-gray">
                    <div>634 posts</div>
                    <div>4 hours ago</div>
                  </div>
                </div>
              </div>

              <div className="card hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-2xl">💡</span>
                    </div>
                    <div>
                      <h3 className="text-h4 mb-1">Feature Requests</h3>
                      <p className="text-sm text-neutral-gray">Suggest new features and improvements</p>
                    </div>
                  </div>
                  <div className="text-right text-sm text-neutral-gray">
                    <div>423 posts</div>
                    <div>6 hours ago</div>
                  </div>
                </div>
              </div>

              <div className="card hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-2xl">🎯</span>
                    </div>
                    <div>
                      <h3 className="text-h4 mb-1">Use Cases & Examples</h3>
                      <p className="text-sm text-neutral-gray">Share your use cases and learn from others</p>
                    </div>
                  </div>
                  <div className="text-right text-sm text-neutral-gray">
                    <div>756 posts</div>
                    <div>3 hours ago</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Recent Discussions */}
          <section className="mb-12">
            <h2 className="text-h2 mb-6">Recent Discussions</h2>
            <div className="space-y-4">
              
              <div className="card">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-h5 mb-1">How to integrate Gemini CLI with Jenkins?</h3>
                    <p className="text-sm text-neutral-gray mb-2">
                      Looking for best practices to integrate Gemini CLI into our Jenkins CI/CD pipeline...
                    </p>
                    <div className="flex items-center text-xs text-neutral-gray">
                      <span>by @devops_engineer</span>
                      <span className="mx-2">•</span>
                      <span>12 replies</span>
                      <span className="mx-2">•</span>
                      <span>2 hours ago</span>
                    </div>
                  </div>
                  <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded ml-4">Help</span>
                </div>
              </div>

              <div className="card">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-h5 mb-1">Feature Request: Batch processing for multiple files</h3>
                    <p className="text-sm text-neutral-gray mb-2">
                      It would be great to have native support for processing multiple files in a single command...
                    </p>
                    <div className="flex items-center text-xs text-neutral-gray">
                      <span>by @productivity_user</span>
                      <span className="mx-2">•</span>
                      <span>8 replies</span>
                      <span className="mx-2">•</span>
                      <span>4 hours ago</span>
                    </div>
                  </div>
                  <span className="px-2 py-1 bg-orange-100 text-orange-800 text-xs rounded ml-4">Feature</span>
                </div>
              </div>

              <div className="card">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-h5 mb-1">Custom MCP server for Slack integration</h3>
                    <p className="text-sm text-neutral-gray mb-2">
                      I've built a custom MCP server that integrates with Slack. Here's how to set it up...
                    </p>
                    <div className="flex items-center text-xs text-neutral-gray">
                      <span>by @slack_integrator</span>
                      <span className="mx-2">•</span>
                      <span>15 replies</span>
                      <span className="mx-2">•</span>
                      <span>1 day ago</span>
                    </div>
                  </div>
                  <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded ml-4">Tools</span>
                </div>
              </div>
            </div>
          </section>

          {/* Forum Guidelines */}
          <section className="mb-12">
            <h2 className="text-h2 mb-6">Community Guidelines</h2>
            <div className="card">
              <ul className="space-y-2">
                <li>• Be respectful and constructive in all discussions</li>
                <li>• Search existing posts before creating new topics</li>
                <li>• Provide clear, detailed descriptions of issues</li>
                <li>• Share code examples when asking for help</li>
                <li>• Mark solved topics and thank helpful contributors</li>
                <li>• Follow the code of conduct in all interactions</li>
              </ul>
            </div>
          </section>

          {/* Join Forum CTA */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-card p-6 text-white text-center">
            <h3 className="text-h3 mb-3">Join the Conversation</h3>
            <p className="mb-6 opacity-90">
              Connect with thousands of Gemini CLI users, share your experiences, and get the help you need.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a href="#" className="bg-white text-blue-600 px-6 py-3 rounded-button font-medium hover:bg-neutral-light transition-colors">
                Join Forum
              </a>
              <Link href="/community" className="border border-white text-white px-6 py-3 rounded-button font-medium hover:bg-white/10 transition-colors">
                Community Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}