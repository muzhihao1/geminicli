import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About Us - Gemini CLI All in One',
  description: 'Learn about our mission to make AI-powered development tools accessible to everyone',
}

export default function AboutPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-h1 mb-4">About Us</h1>
          <p className="text-lg text-neutral-gray mb-12">
            We're passionate about making AI-powered development tools accessible, practical, and transformative for developers worldwide.
          </p>

          {/* Mission */}
          <section className="mb-12">
            <h2 className="text-h2 mb-6">Our Mission</h2>
            <div className="card bg-gradient-to-r from-google-blue/10 to-google-green/10">
              <p className="text-lg text-neutral-dark mb-4">
                To democratize AI-powered development by providing comprehensive resources, tutorials, and tools 
                that help developers harness the full potential of Gemini CLI.
              </p>
              <p className="text-neutral-gray">
                We believe that AI should enhance human creativity and productivity, not replace it. Our platform 
                serves as a bridge between cutting-edge AI technology and practical development workflows.
              </p>
            </div>
          </section>

          {/* What We Do */}
          <section className="mb-12">
            <h2 className="text-h2 mb-6">What We Do</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <div className="card">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-h4 mb-3">Educational Content</h3>
                <p className="text-neutral-gray">
                  Create comprehensive tutorials, guides, and documentation to help developers learn and master Gemini CLI.
                </p>
              </div>

              <div className="card">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-h4 mb-3">Community Building</h3>
                <p className="text-neutral-gray">
                  Foster a vibrant community where developers can share knowledge, collaborate, and support each other.
                </p>
              </div>

              <div className="card">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                          d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h3 className="text-h4 mb-3">Tool Development</h3>
                <p className="text-neutral-gray">
                  Develop and curate tools, extensions, and integrations that enhance the Gemini CLI experience.
                </p>
              </div>

              <div className="card">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-h4 mb-3">Best Practices</h3>
                <p className="text-neutral-gray">
                  Research and share best practices, use cases, and success stories from the developer community.
                </p>
              </div>
            </div>
          </section>

          {/* Our Values */}
          <section className="mb-12">
            <h2 className="text-h2 mb-6">Our Values</h2>
            <div className="space-y-6">
              
              <div className="card">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-google-blue text-white rounded-full flex items-center justify-center mr-4 mt-1 text-sm font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="text-h5 mb-2">🌟 Accessibility First</h3>
                    <p className="text-neutral-gray">
                      We believe powerful AI tools should be accessible to developers of all skill levels, 
                      from beginners to experts.
                    </p>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-google-green text-white rounded-full flex items-center justify-center mr-4 mt-1 text-sm font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="text-h5 mb-2">🤝 Community Driven</h3>
                    <p className="text-neutral-gray">
                      Our platform grows through community contributions, feedback, and collaborative learning.
                    </p>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-google-yellow text-white rounded-full flex items-center justify-center mr-4 mt-1 text-sm font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="text-h5 mb-2">🔬 Innovation & Quality</h3>
                    <p className="text-neutral-gray">
                      We're committed to providing high-quality, accurate, and up-to-date information and tools.
                    </p>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-google-red text-white rounded-full flex items-center justify-center mr-4 mt-1 text-sm font-bold">
                    4
                  </div>
                  <div>
                    <h3 className="text-h5 mb-2">🚀 Practical Focus</h3>
                    <p className="text-neutral-gray">
                      Everything we create is designed to solve real-world development challenges and improve workflows.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Our Story */}
          <section className="mb-12">
            <h2 className="text-h2 mb-6">Our Story</h2>
            <div className="card">
              <p className="text-neutral-gray mb-4">
                Gemini CLI All in One was born from the recognition that while AI-powered development tools 
                like Gemini CLI are incredibly powerful, they can also be overwhelming for newcomers and 
                underutilized even by experienced developers.
              </p>
              <p className="text-neutral-gray mb-4">
                We started as a small team of developers who were passionate about AI and frustrated by 
                the lack of comprehensive, practical resources for Gemini CLI. What began as internal 
                documentation and scripts quickly grew into a mission to help the entire developer community.
              </p>
              <p className="text-neutral-gray">
                Today, we serve thousands of developers worldwide, providing the resources, tools, and 
                community support needed to unlock the full potential of AI-powered development.
              </p>
            </div>
          </section>

          {/* Team Stats */}
          <section className="mb-12">
            <h2 className="text-h2 mb-6">By the Numbers</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              
              <div className="text-center p-6 bg-blue-50 rounded-card">
                <div className="text-3xl font-bold text-google-blue mb-2">10k+</div>
                <div className="text-sm text-neutral-gray">Community Members</div>
              </div>

              <div className="text-center p-6 bg-green-50 rounded-card">
                <div className="text-3xl font-bold text-google-green mb-2">50+</div>
                <div className="text-sm text-neutral-gray">Countries Reached</div>
              </div>

              <div className="text-center p-6 bg-purple-50 rounded-card">
                <div className="text-3xl font-bold text-purple-600 mb-2">200+</div>
                <div className="text-sm text-neutral-gray">Tutorials Created</div>
              </div>

              <div className="text-center p-6 bg-orange-50 rounded-card">
                <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
                <div className="text-sm text-neutral-gray">Community Support</div>
              </div>
            </div>
          </section>

          {/* Join Us */}
          <div className="bg-gradient-to-r from-google-blue to-google-green rounded-card p-8 text-white text-center">
            <h3 className="text-h3 mb-4">Join Our Mission</h3>
            <p className="text-lg mb-6 opacity-90">
              Help us make AI-powered development accessible to everyone. Join our community and contribute to the future of development.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link href="/community" className="bg-white text-google-blue px-6 py-3 rounded-button font-medium hover:bg-neutral-light transition-colors">
                Join Community
              </Link>
              <Link href="/contribute" className="border border-white text-white px-6 py-3 rounded-button font-medium hover:bg-white/10 transition-colors">
                Contribute
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}