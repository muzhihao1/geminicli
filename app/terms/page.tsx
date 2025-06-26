import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Terms of Service - Gemini CLI All in One',
  description: 'Terms and conditions for using Gemini CLI All in One website and services',
}

export default function TermsPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-h1 mb-4">Terms of Service</h1>
          <p className="text-lg text-neutral-gray mb-8">
            Last updated: January 15, 2024
          </p>
          <p className="text-lg text-neutral-gray mb-12">
            These Terms of Service govern your use of the Gemini CLI All in One website and services. 
            By accessing or using our services, you agree to be bound by these terms.
          </p>

          {/* Acceptance of Terms */}
          <section className="mb-12">
            <h2 className="text-h2 mb-6">1. Acceptance of Terms</h2>
            <div className="card">
              <p className="text-neutral-gray mb-4">
                By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.
              </p>
              <p className="text-neutral-gray">
                If you do not agree to abide by the above, please do not use this service.
              </p>
            </div>
          </section>

          {/* Use of the Website */}
          <section className="mb-12">
            <h2 className="text-h2 mb-6">2. Use of the Website</h2>
            
            <div className="space-y-6">
              <div className="card">
                <h3 className="text-h4 mb-3">✅ Permitted Uses</h3>
                <p className="text-neutral-gray mb-3">You may use our website to:</p>
                <ul className="space-y-2 text-neutral-gray">
                  <li>• Access educational content and tutorials</li>
                  <li>• Download tools and resources</li>
                  <li>• Participate in community discussions</li>
                  <li>• Share knowledge and experiences</li>
                  <li>• Contribute content following our guidelines</li>
                </ul>
              </div>

              <div className="card">
                <h3 className="text-h4 mb-3">❌ Prohibited Uses</h3>
                <p className="text-neutral-gray mb-3">You may not use our website to:</p>
                <ul className="space-y-2 text-neutral-gray">
                  <li>• Violate any applicable laws or regulations</li>
                  <li>• Transmit malicious code or harmful content</li>
                  <li>• Spam, harass, or abuse other users</li>
                  <li>• Attempt to gain unauthorized access to systems</li>
                  <li>• Copy, reproduce, or redistribute our content without permission</li>
                  <li>• Use the service for commercial purposes without authorization</li>
                </ul>
              </div>
            </div>
          </section>

          {/* User Accounts and Community */}
          <section className="mb-12">
            <h2 className="text-h2 mb-6">3. User Accounts and Community</h2>
            
            <div className="space-y-4">
              <div className="card">
                <h3 className="font-semibold mb-3">👤 Account Responsibility</h3>
                <p className="text-neutral-gray">
                  You are responsible for maintaining the confidentiality of any account credentials 
                  and for all activities that occur under your account.
                </p>
              </div>

              <div className="card">
                <h3 className="font-semibold mb-3">💬 Community Guidelines</h3>
                <p className="text-neutral-gray mb-3">
                  When participating in community features, you agree to:
                </p>
                <ul className="space-y-1 text-sm text-neutral-gray">
                  <li>• Be respectful and constructive in all interactions</li>
                  <li>• Provide accurate information and helpful content</li>
                  <li>• Respect intellectual property rights</li>
                  <li>• Report inappropriate behavior or content</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Content and Intellectual Property */}
          <section className="mb-12">
            <h2 className="text-h2 mb-6">4. Content and Intellectual Property</h2>
            
            <div className="space-y-6">
              <div className="card">
                <h3 className="text-h4 mb-3">📝 Our Content</h3>
                <p className="text-neutral-gray mb-4">
                  All content on this website, including text, graphics, logos, images, and software, 
                  is the property of Gemini CLI All in One or its content suppliers and is protected by copyright and other intellectual property laws.
                </p>
                <p className="text-neutral-gray">
                  You may view, download, and print content for personal, non-commercial use only, 
                  provided you keep all copyright and other proprietary notices intact.
                </p>
              </div>

              <div className="card">
                <h3 className="text-h4 mb-3">🤝 User-Generated Content</h3>
                <p className="text-neutral-gray mb-4">
                  By submitting content to our website (comments, tutorials, code examples), you grant us a 
                  non-exclusive, royalty-free, perpetual license to use, modify, and distribute that content.
                </p>
                <p className="text-neutral-gray">
                  You represent that you own or have the necessary rights to submit such content and that 
                  it does not violate any third-party rights.
                </p>
              </div>

              <div className="card">
                <h3 className="text-h4 mb-3">🔗 Third-Party Content</h3>
                <p className="text-neutral-gray">
                  Links to third-party websites and references to third-party services are provided for convenience. 
                  We do not endorse or take responsibility for the content of external sites.
                </p>
              </div>
            </div>
          </section>

          {/* Disclaimers */}
          <section className="mb-12">
            <h2 className="text-h2 mb-6">5. Disclaimers</h2>
            
            <div className="space-y-4">
              <div className="card bg-yellow-50">
                <h3 className="text-h4 mb-3 text-yellow-800">⚠️ Educational Purpose</h3>
                <p className="text-yellow-700 mb-3">
                  This website provides educational content and resources about Gemini CLI. 
                  We are not affiliated with or endorsed by Google.
                </p>
                <p className="text-yellow-700">
                  Information is provided "as is" without warranty of any kind. 
                  Users should verify all information and use at their own risk.
                </p>
              </div>

              <div className="card">
                <h3 className="font-semibold mb-3">🔧 Technical Information</h3>
                <p className="text-neutral-gray">
                  Code examples, tutorials, and technical information are provided for educational purposes. 
                  Always test thoroughly in development environments before using in production.
                </p>
              </div>

              <div className="card">
                <h3 className="font-semibold mb-3">🌐 Service Availability</h3>
                <p className="text-neutral-gray">
                  We strive to maintain website availability but do not guarantee uninterrupted service. 
                  Maintenance, updates, or technical issues may cause temporary unavailability.
                </p>
              </div>
            </div>
          </section>

          {/* Limitation of Liability */}
          <section className="mb-12">
            <h2 className="text-h2 mb-6">6. Limitation of Liability</h2>
            
            <div className="card">
              <p className="text-neutral-gray mb-4">
                To the maximum extent permitted by law, Gemini CLI All in One shall not be liable for any indirect, 
                incidental, special, consequential, or punitive damages, including but not limited to:
              </p>
              <ul className="space-y-2 text-neutral-gray">
                <li>• Loss of profits, data, or business opportunities</li>
                <li>• Service interruptions or technical failures</li>
                <li>• Errors in content or information</li>
                <li>• Third-party actions or content</li>
              </ul>
              <p className="text-neutral-gray mt-4">
                Our total liability shall not exceed the amount paid by you (if any) for accessing our services.
              </p>
            </div>
          </section>

          {/* Privacy */}
          <section className="mb-12">
            <h2 className="text-h2 mb-6">7. Privacy</h2>
            
            <div className="card">
              <p className="text-neutral-gray">
                Your privacy is important to us. Please review our Privacy Policy to understand how we collect, 
                use, and protect your information.
              </p>
              <Link href="/privacy" className="inline-block mt-3 text-google-blue hover:underline">
                Read our Privacy Policy →
              </Link>
            </div>
          </section>

          {/* Modifications */}
          <section className="mb-12">
            <h2 className="text-h2 mb-6">8. Modifications to Terms</h2>
            
            <div className="card">
              <p className="text-neutral-gray mb-4">
                We reserve the right to modify these Terms of Service at any time. Changes will be effective 
                immediately upon posting to this page.
              </p>
              <p className="text-neutral-gray">
                Continued use of the website after changes constitutes acceptance of the modified terms. 
                We encourage you to review these terms periodically.
              </p>
            </div>
          </section>

          {/* Termination */}
          <section className="mb-12">
            <h2 className="text-h2 mb-6">9. Termination</h2>
            
            <div className="card">
              <p className="text-neutral-gray mb-4">
                We may terminate or suspend your access to our services immediately, without prior notice, 
                for conduct that we believe violates these Terms of Service or is harmful to other users.
              </p>
              <p className="text-neutral-gray">
                You may discontinue use of our services at any time.
              </p>
            </div>
          </section>

          {/* Governing Law */}
          <section className="mb-12">
            <h2 className="text-h2 mb-6">10. Governing Law</h2>
            
            <div className="card">
              <p className="text-neutral-gray">
                These Terms of Service shall be governed by and construed in accordance with applicable laws. 
                Any disputes arising from these terms or your use of our services shall be resolved through 
                appropriate legal channels.
              </p>
            </div>
          </section>

          {/* Severability */}
          <section className="mb-12">
            <h2 className="text-h2 mb-6">11. Severability</h2>
            
            <div className="card">
              <p className="text-neutral-gray">
                If any provision of these Terms of Service is found to be unenforceable or invalid, 
                that provision shall be limited or eliminated to the minimum extent necessary so that 
                the remaining terms shall remain in full force and effect.
              </p>
            </div>
          </section>

          {/* Contact Information */}
          <div className="bg-blue-50 rounded-card p-8">
            <h3 className="text-h3 mb-4">Questions About These Terms?</h3>
            <p className="text-neutral-gray mb-6">
              If you have questions about these Terms of Service, please contact us:
            </p>
            <div className="space-y-2">
              <p><strong>Email:</strong> <a href="mailto:legal@geminicli.com" className="text-google-blue hover:underline">legal@geminicli.com</a></p>
              <p><strong>General Contact:</strong> <Link href="/contact" className="text-google-blue hover:underline">Contact Us Page</Link></p>
            </div>
          </div>

          {/* Agreement */}
          <div className="mt-8 p-6 bg-green-50 rounded-card text-center">
            <p className="text-green-800 font-medium">
              By using our website, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}