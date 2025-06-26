import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How to Get a Google AI API Key - Gemini CLI All in One',
  description: 'Step-by-step guide to obtain your Google AI API key for Gemini CLI',
}

export default function GetAPIKeyPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-h1 mb-4">How to Get a Google AI API Key</h1>
          <p className="text-lg text-neutral-gray mb-12">
            To use Gemini CLI, you need a Google AI API key. This guide will walk you through 
            the process of obtaining one for free.
          </p>

          {/* Prerequisites */}
          <section className="mb-12">
            <h2 className="text-h2 mb-4">Prerequisites</h2>
            <div className="card">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-google-green mr-2">✓</span>
                  <span>A Google Account (Gmail, Google Workspace, etc.)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-google-green mr-2">✓</span>
                  <span>Access to Google AI Studio (available in supported regions)</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Step by Step Guide */}
          <section className="mb-12">
            <h2 className="text-h2 mb-4">Step-by-Step Guide</h2>
            
            {/* Step 1 */}
            <div className="card mb-6">
              <div className="flex items-start mb-4">
                <span className="flex-shrink-0 w-10 h-10 bg-google-blue text-white rounded-full 
                               flex items-center justify-center font-bold mr-4">1</span>
                <div>
                  <h3 className="text-h3 mb-2">Visit Google AI Studio</h3>
                  <p className="text-neutral-gray mb-3">
                    Go to <a href="https://makersuite.google.com" target="_blank" rel="noopener noreferrer" 
                            className="text-google-blue hover:underline">Google AI Studio</a> (makersuite.google.com)
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-sm">
                      <strong>Note:</strong> Google AI Studio is currently available in specific regions. 
                      If you can't access it, you may need to use a VPN or wait for availability in your region.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="card mb-6">
              <div className="flex items-start mb-4">
                <span className="flex-shrink-0 w-10 h-10 bg-google-blue text-white rounded-full 
                               flex items-center justify-center font-bold mr-4">2</span>
                <div>
                  <h3 className="text-h3 mb-2">Sign in with Google</h3>
                  <p className="text-neutral-gray">
                    Click "Sign in" and authenticate with your Google account. Accept the terms of service if prompted.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="card mb-6">
              <div className="flex items-start mb-4">
                <span className="flex-shrink-0 w-10 h-10 bg-google-blue text-white rounded-full 
                               flex items-center justify-center font-bold mr-4">3</span>
                <div>
                  <h3 className="text-h3 mb-2">Navigate to API Keys</h3>
                  <p className="text-neutral-gray mb-3">
                    Once signed in, look for the "Get API key" button or navigate to the API keys section:
                  </p>
                  <ul className="list-disc list-inside text-neutral-gray space-y-2">
                    <li>Click on your profile icon in the top right</li>
                    <li>Select "API keys" from the dropdown menu</li>
                    <li>Or look for a "Get API key" button on the main page</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="card mb-6">
              <div className="flex items-start mb-4">
                <span className="flex-shrink-0 w-10 h-10 bg-google-blue text-white rounded-full 
                               flex items-center justify-center font-bold mr-4">4</span>
                <div>
                  <h3 className="text-h3 mb-2">Create a New API Key</h3>
                  <p className="text-neutral-gray mb-3">
                    Click "Create API key" and choose your preferences:
                  </p>
                  <ul className="list-disc list-inside text-neutral-gray space-y-2">
                    <li>Select "Create API key in new project" for a fresh start</li>
                    <li>Or choose an existing project if you have one</li>
                    <li>Give your API key a descriptive name (e.g., "Gemini CLI Key")</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Step 5 */}
            <div className="card mb-6">
              <div className="flex items-start mb-4">
                <span className="flex-shrink-0 w-10 h-10 bg-google-blue text-white rounded-full 
                               flex items-center justify-center font-bold mr-4">5</span>
                <div>
                  <h3 className="text-h3 mb-2">Copy and Save Your API Key</h3>
                  <p className="text-neutral-gray mb-3">
                    Your API key will be displayed. Make sure to:
                  </p>
                  <ul className="list-disc list-inside text-neutral-gray space-y-2">
                    <li>Copy the entire API key string</li>
                    <li>Save it in a secure location (password manager recommended)</li>
                    <li>Never share your API key publicly or commit it to version control</li>
                  </ul>
                  <div className="bg-yellow-50 p-4 rounded-lg mt-3">
                    <p className="text-sm">
                      <strong>Important:</strong> This may be the only time you can view the full API key. 
                      If you lose it, you'll need to create a new one.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* API Key Limits */}
          <section className="mb-12">
            <h2 className="text-h2 mb-4">API Key Limits and Quotas</h2>
            <div className="card">
              <p className="mb-4">Free tier includes:</p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-google-green mr-2">✓</span>
                  <span><strong>60 requests per minute</strong> rate limit</span>
                </li>
                <li className="flex items-start">
                  <span className="text-google-green mr-2">✓</span>
                  <span><strong>1,000 requests per day</strong> quota</span>
                </li>
                <li className="flex items-start">
                  <span className="text-google-green mr-2">✓</span>
                  <span><strong>1 million tokens</strong> context window</span>
                </li>
                <li className="flex items-start">
                  <span className="text-google-green mr-2">✓</span>
                  <span><strong>Free to use</strong> for personal and commercial projects</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Security Best Practices */}
          <section className="mb-12">
            <h2 className="text-h2 mb-4">Security Best Practices</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="card">
                <h3 className="text-h3 mb-3 text-google-green">DO ✓</h3>
                <ul className="space-y-2 text-sm">
                  <li>• Store API keys in environment variables</li>
                  <li>• Use a password manager</li>
                  <li>• Rotate keys regularly</li>
                  <li>• Use different keys for different projects</li>
                  <li>• Set up API key restrictions</li>
                </ul>
              </div>
              <div className="card">
                <h3 className="text-h3 mb-3 text-google-red">DON'T ✗</h3>
                <ul className="space-y-2 text-sm">
                  <li>• Commit keys to Git repositories</li>
                  <li>• Share keys in public forums</li>
                  <li>• Hardcode keys in your applications</li>
                  <li>• Use the same key everywhere</li>
                  <li>• Ignore suspicious activity</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Troubleshooting */}
          <section className="mb-12">
            <h2 className="text-h2 mb-4">Common Issues</h2>
            <div className="space-y-4">
              <div className="card">
                <h3 className="font-semibold mb-2">Google AI Studio not available in my region</h3>
                <p className="text-neutral-gray">
                  Currently, Google AI Studio has limited availability. You can check the 
                  <a href="https://ai.google.dev/available_regions" target="_blank" rel="noopener noreferrer" 
                     className="text-google-blue hover:underline ml-1">available regions list</a> 
                  or use a VPN to access from a supported region.
                </p>
              </div>
              <div className="card">
                <h3 className="font-semibold mb-2">API key not working</h3>
                <p className="text-neutral-gray">
                  Ensure you've copied the entire key, including any special characters. 
                  Check that the key hasn't expired and that you haven't exceeded rate limits.
                </p>
              </div>
            </div>
          </section>

          {/* Next Steps */}
          <div className="bg-blue-50 rounded-card p-6">
            <h3 className="text-h3 mb-3">Next Steps</h3>
            <p className="text-neutral-gray mb-4">
              Now that you have your API key, configure it with Gemini CLI:
            </p>
            <Link href="/qa/configure-api-key" className="btn-primary">
              Configure Your API Key →
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}