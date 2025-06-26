import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Contact Us - Gemini CLI All in One',
  description: 'Get in touch with the Gemini CLI team for support, feedback, and inquiries',
}

export default function ContactPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-h1 mb-4">Contact Us</h1>
          <p className="text-lg text-neutral-gray mb-12">
            We'd love to hear from you! Whether you have questions, feedback, or need support, 
            here are the best ways to reach us.
          </p>

          {/* Contact Methods */}
          <section className="mb-12">
            <h2 className="text-h2 mb-6">Get in Touch</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              <div className="card">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                            d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-h4">General Support</h3>
                </div>
                <p className="text-neutral-gray mb-4">
                  For general questions, feature requests, or technical support.
                </p>
                <a href="mailto:support@geminicli.com" 
                   className="text-google-blue hover:underline font-medium">
                  support@geminicli.com
                </a>
              </div>

              <div className="card">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-h4">Bug Reports</h3>
                </div>
                <p className="text-neutral-gray mb-4">
                  Found a bug? Help us improve by reporting issues.
                </p>
                <a href="mailto:bugs@geminicli.com" 
                   className="text-google-blue hover:underline font-medium">
                  bugs@geminicli.com
                </a>
              </div>

              <div className="card">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <h3 className="text-h4">Business Inquiries</h3>
                </div>
                <p className="text-neutral-gray mb-4">
                  Partnerships, enterprise solutions, and business opportunities.
                </p>
                <a href="mailto:business@geminicli.com" 
                   className="text-google-blue hover:underline font-medium">
                  business@geminicli.com
                </a>
              </div>

              <div className="card">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                            d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                    </svg>
                  </div>
                  <h3 className="text-h4">Content & Press</h3>
                </div>
                <p className="text-neutral-gray mb-4">
                  Media inquiries, press releases, and content collaboration.
                </p>
                <a href="mailto:press@geminicli.com" 
                   className="text-google-blue hover:underline font-medium">
                  press@geminicli.com
                </a>
              </div>
            </div>
          </section>

          {/* Community Support */}
          <section className="mb-12">
            <h2 className="text-h2 mb-6">Community Support</h2>
            <div className="card">
              <p className="text-neutral-gray mb-6">
                For quick help and community discussions, try these options first:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Link href="/community/forums" 
                      className="flex items-center p-4 bg-neutral-light rounded-lg hover:bg-white transition-colors">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                    <span className="text-xl">💬</span>
                  </div>
                  <div>
                    <div className="font-medium">Community Forums</div>
                    <div className="text-sm text-neutral-gray">Ask questions & get help</div>
                  </div>
                </Link>

                <Link href="/qa" 
                      className="flex items-center p-4 bg-neutral-light rounded-lg hover:bg-white transition-colors">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                    <span className="text-xl">❓</span>
                  </div>
                  <div>
                    <div className="font-medium">Q&A Hub</div>
                    <div className="text-sm text-neutral-gray">Browse common questions</div>
                  </div>
                </Link>

                <Link href="/troubleshooting" 
                      className="flex items-center p-4 bg-neutral-light rounded-lg hover:bg-white transition-colors">
                  <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mr-3">
                    <span className="text-xl">🔧</span>
                  </div>
                  <div>
                    <div className="font-medium">Troubleshooting</div>
                    <div className="text-sm text-neutral-gray">Fix common issues</div>
                  </div>
                </Link>
              </div>
            </div>
          </section>

          {/* Response Time */}
          <section className="mb-12">
            <h2 className="text-h2 mb-6">Response Times</h2>
            <div className="card">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-2">Email Support</h3>
                  <ul className="space-y-1 text-sm text-neutral-gray">
                    <li>• General inquiries: 24-48 hours</li>
                    <li>• Bug reports: 12-24 hours</li>
                    <li>• Business inquiries: 2-3 business days</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Community Support</h3>
                  <ul className="space-y-1 text-sm text-neutral-gray">
                    <li>• Forums: Usually within hours</li>
                    <li>• Q&A Hub: Browse immediately</li>
                    <li>• Real-time help available</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Office Information */}
          <section className="mb-12">
            <h2 className="text-h2 mb-6">Our Team</h2>
            <div className="card bg-gradient-to-r from-google-blue/10 to-google-green/10">
              <p className="text-neutral-gray mb-4">
                Gemini CLI All in One is maintained by a passionate team of developers dedicated to making 
                AI-powered development tools accessible to everyone. We're based globally and work around 
                the clock to support our community.
              </p>
              <div className="flex items-center text-sm text-neutral-gray">
                <span className="mr-4">🌍 Global Team</span>
                <span className="mr-4">⏰ 24/7 Support</span>
                <span>💙 Community First</span>
              </div>
            </div>
          </section>

          {/* Contact Form Alternative */}
          <div className="bg-blue-50 rounded-card p-8 text-center">
            <h3 className="text-h3 mb-4">Prefer Social Media?</h3>
            <p className="text-neutral-gray mb-6">
              Follow us on social media for updates, tips, and community highlights.
            </p>
            <div className="flex justify-center gap-4">
              <a href="#" className="w-10 h-10 bg-blue-600 text-white rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors">
                <span className="text-xl">𝕏</span>
              </a>
              <a href="#" className="w-10 h-10 bg-blue-600 text-white rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors">
                <span className="text-xl">in</span>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 text-white rounded-lg flex items-center justify-center hover:bg-gray-900 transition-colors">
                <span className="text-xl">gh</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}