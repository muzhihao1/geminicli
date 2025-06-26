import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy - Gemini CLI All in One',
  description: 'Learn how we collect, use, and protect your personal information',
}

export default function PrivacyPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-h1 mb-4">Privacy Policy</h1>
          <p className="text-lg text-neutral-gray mb-8">
            Last updated: January 15, 2024
          </p>
          <p className="text-lg text-neutral-gray mb-12">
            This Privacy Policy describes how Gemini CLI All in One collects, uses, and protects your information when you use our website and services.
          </p>

          {/* Information We Collect */}
          <section className="mb-12">
            <h2 className="text-h2 mb-6">Information We Collect</h2>
            
            <div className="space-y-6">
              <div className="card">
                <h3 className="text-h4 mb-3">📊 Analytics Information</h3>
                <p className="text-neutral-gray mb-3">
                  We use Google Analytics to understand how visitors interact with our website:
                </p>
                <ul className="space-y-2 text-neutral-gray">
                  <li>• Page views and navigation patterns</li>
                  <li>• Time spent on pages</li>
                  <li>• Referral sources</li>
                  <li>• General geographic location (country/region)</li>
                  <li>• Device and browser information</li>
                </ul>
                <p className="text-sm text-neutral-gray mt-3">
                  This data is anonymized and aggregated. No personally identifiable information is collected through analytics.
                </p>
              </div>

              <div className="card">
                <h3 className="text-h4 mb-3">💬 Communication Information</h3>
                <p className="text-neutral-gray mb-3">
                  When you contact us or participate in community activities:
                </p>
                <ul className="space-y-2 text-neutral-gray">
                  <li>• Email addresses when you contact support</li>
                  <li>• Forum posts and community contributions</li>
                  <li>• Feedback and survey responses</li>
                  <li>• Bug reports and feature requests</li>
                </ul>
              </div>

              <div className="card">
                <h3 className="text-h4 mb-3">🍪 Cookies and Local Storage</h3>
                <p className="text-neutral-gray mb-3">
                  We use minimal cookies and local storage for:
                </p>
                <ul className="space-y-2 text-neutral-gray">
                  <li>• Remembering your preferences (theme, language)</li>
                  <li>• Analytics tracking (Google Analytics)</li>
                  <li>• Session management for community features</li>
                </ul>
              </div>
            </div>
          </section>

          {/* How We Use Information */}
          <section className="mb-12">
            <h2 className="text-h2 mb-6">How We Use Your Information</h2>
            
            <div className="space-y-4">
              <div className="card">
                <h3 className="font-semibold mb-2">🎯 Website Improvement</h3>
                <p className="text-neutral-gray">
                  Analytics data helps us understand user behavior and improve our content, navigation, and overall user experience.
                </p>
              </div>

              <div className="card">
                <h3 className="font-semibold mb-2">🤝 Support and Communication</h3>
                <p className="text-neutral-gray">
                  Contact information is used solely to respond to your inquiries, provide support, and send updates you've requested.
                </p>
              </div>

              <div className="card">
                <h3 className="font-semibold mb-2">🛠️ Service Maintenance</h3>
                <p className="text-neutral-gray">
                  Technical information helps us maintain website performance, fix bugs, and ensure security.
                </p>
              </div>

              <div className="card">
                <h3 className="font-semibold mb-2">📚 Content Creation</h3>
                <p className="text-neutral-gray">
                  Community feedback and usage patterns help us create relevant tutorials, guides, and resources.
                </p>
              </div>
            </div>
          </section>

          {/* Information Sharing */}
          <section className="mb-12">
            <h2 className="text-h2 mb-6">Information Sharing</h2>
            
            <div className="card bg-green-50">
              <h3 className="text-h4 mb-3 text-green-800">🔒 We Do NOT Share Personal Information</h3>
              <p className="text-green-700 mb-4">
                We do not sell, trade, rent, or otherwise transfer your personal information to third parties.
              </p>
              
              <h4 className="font-semibold mb-2 text-green-800">Limited Exceptions:</h4>
              <ul className="space-y-1 text-green-700">
                <li>• <strong>Analytics Services:</strong> Anonymized data with Google Analytics</li>
                <li>• <strong>Legal Requirements:</strong> If required by law or to protect rights and safety</li>
                <li>• <strong>Service Providers:</strong> Trusted partners who assist in website operation (under strict confidentiality)</li>
              </ul>
            </div>
          </section>

          {/* Data Security */}
          <section className="mb-12">
            <h2 className="text-h2 mb-6">Data Security</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="card">
                <h3 className="text-h5 mb-3">🛡️ Technical Safeguards</h3>
                <ul className="space-y-1 text-sm text-neutral-gray">
                  <li>• HTTPS encryption for all communications</li>
                  <li>• Secure hosting infrastructure</li>
                  <li>• Regular security updates and monitoring</li>
                  <li>• Access controls and authentication</li>
                </ul>
              </div>

              <div className="card">
                <h3 className="text-h5 mb-3">📋 Administrative Safeguards</h3>
                <ul className="space-y-1 text-sm text-neutral-gray">
                  <li>• Limited access to personal information</li>
                  <li>• Employee privacy training</li>
                  <li>• Regular security policy reviews</li>
                  <li>• Incident response procedures</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Your Rights */}
          <section className="mb-12">
            <h2 className="text-h2 mb-6">Your Rights and Choices</h2>
            
            <div className="space-y-4">
              <div className="card">
                <h3 className="font-semibold mb-2">📧 Email Communications</h3>
                <p className="text-neutral-gray">
                  You can opt out of promotional emails at any time. Support communications may continue as needed to resolve your inquiries.
                </p>
              </div>

              <div className="card">
                <h3 className="font-semibold mb-2">🍪 Cookie Management</h3>
                <p className="text-neutral-gray">
                  You can control cookies through your browser settings. Note that disabling certain cookies may affect website functionality.
                </p>
              </div>

              <div className="card">
                <h3 className="font-semibold mb-2">📊 Analytics Opt-out</h3>
                <p className="text-neutral-gray mb-3">
                  You can opt out of Google Analytics tracking:
                </p>
                <a href="https://tools.google.com/dlpage/gaoptout" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="text-google-blue hover:underline">
                  Google Analytics Opt-out Browser Add-on →
                </a>
              </div>

              <div className="card">
                <h3 className="font-semibold mb-2">🗂️ Data Access and Deletion</h3>
                <p className="text-neutral-gray">
                  Contact us to request access to your personal information or request deletion of your data.
                </p>
              </div>
            </div>
          </section>

          {/* Third-Party Services */}
          <section className="mb-12">
            <h2 className="text-h2 mb-6">Third-Party Services</h2>
            
            <div className="card">
              <h3 className="text-h4 mb-4">🔗 External Links and Services</h3>
              <p className="text-neutral-gray mb-4">
                Our website contains links to external resources and documentation. We are not responsible for the privacy practices of these external sites.
              </p>
              
              <h4 className="font-semibold mb-2">Third-Party Services We Use:</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-google-blue mr-2">•</span>
                  <div>
                    <strong>Google Analytics:</strong> Website analytics and performance monitoring
                    <br />
                    <a href="https://policies.google.com/privacy" 
                       target="_blank" 
                       rel="noopener noreferrer"
                       className="text-sm text-google-blue hover:underline">
                      Google Privacy Policy →
                    </a>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-google-blue mr-2">•</span>
                  <div>
                    <strong>Vercel/Netlify:</strong> Website hosting and content delivery
                  </div>
                </li>
              </ul>
            </div>
          </section>

          {/* Children's Privacy */}
          <section className="mb-12">
            <h2 className="text-h2 mb-6">Children's Privacy</h2>
            
            <div className="card">
              <p className="text-neutral-gray">
                Our services are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us to have it removed.
              </p>
            </div>
          </section>

          {/* Policy Updates */}
          <section className="mb-12">
            <h2 className="text-h2 mb-6">Policy Updates</h2>
            
            <div className="card">
              <p className="text-neutral-gray mb-4">
                We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated "Last modified" date. For significant changes, we may provide additional notice through email or prominent website notifications.
              </p>
              <p className="text-neutral-gray">
                We encourage you to review this Privacy Policy periodically to stay informed about how we're protecting your information.
              </p>
            </div>
          </section>

          {/* Contact Information */}
          <div className="bg-blue-50 rounded-card p-8">
            <h3 className="text-h3 mb-4">Questions About Privacy?</h3>
            <p className="text-neutral-gray mb-6">
              If you have questions about this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="space-y-2">
              <p><strong>Email:</strong> <a href="mailto:privacy@geminicli.com" className="text-google-blue hover:underline">privacy@geminicli.com</a></p>
              <p><strong>General Contact:</strong> <Link href="/contact" className="text-google-blue hover:underline">Contact Us Page</Link></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}