import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Setup Guide - Gemini CLI All in One',
  description: 'Complete setup guide for Gemini CLI configuration and first steps',
}

export default function SetupPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-h1 mb-4">Complete Setup Guide</h1>
          <p className="text-lg text-neutral-gray mb-12">
            Follow this comprehensive guide to set up Gemini CLI from start to finish.
          </p>

          {/* Setup Checklist */}
          <section className="mb-12">
            <h2 className="text-h2 mb-4">Setup Checklist</h2>
            <div className="card">
              <div className="space-y-4">
                <label className="flex items-start cursor-pointer">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <div>
                    <p className="font-medium">Install Gemini CLI</p>
                    <p className="text-sm text-neutral-gray">Choose your platform and install the CLI tool</p>
                  </div>
                </label>
                <label className="flex items-start cursor-pointer">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <div>
                    <p className="font-medium">Get Google AI API Key</p>
                    <p className="text-sm text-neutral-gray">Obtain your free API key from Google AI Studio</p>
                  </div>
                </label>
                <label className="flex items-start cursor-pointer">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <div>
                    <p className="font-medium">Configure API Key</p>
                    <p className="text-sm text-neutral-gray">Set up your API key using environment variables or config</p>
                  </div>
                </label>
                <label className="flex items-start cursor-pointer">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <div>
                    <p className="font-medium">Test Installation</p>
                    <p className="text-sm text-neutral-gray">Verify everything is working correctly</p>
                  </div>
                </label>
                <label className="flex items-start cursor-pointer">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <div>
                    <p className="font-medium">Configure Settings (Optional)</p>
                    <p className="text-sm text-neutral-gray">Customize model, temperature, and other settings</p>
                  </div>
                </label>
              </div>
            </div>
          </section>

          {/* Step 1: Installation */}
          <section className="mb-12">
            <h2 className="text-h2 mb-4">Step 1: Installation</h2>
            <div className="card">
              <p className="mb-4">First, install Gemini CLI on your system:</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Link href="/qa/install-windows" 
                      className="p-4 border-2 border-neutral-border rounded-lg hover:border-google-blue transition-colors text-center">
                  <div className="text-2xl mb-2">🪟</div>
                  <p className="font-medium">Windows</p>
                </Link>
                <Link href="/qa/install-macos" 
                      className="p-4 border-2 border-neutral-border rounded-lg hover:border-google-blue transition-colors text-center">
                  <div className="text-2xl mb-2">🍎</div>
                  <p className="font-medium">macOS</p>
                </Link>
                <Link href="/qa/install-linux" 
                      className="p-4 border-2 border-neutral-border rounded-lg hover:border-google-blue transition-colors text-center">
                  <div className="text-2xl mb-2">🐧</div>
                  <p className="font-medium">Linux</p>
                </Link>
              </div>
            </div>
          </section>

          {/* Step 2: API Key */}
          <section className="mb-12">
            <h2 className="text-h2 mb-4">Step 2: Get Your API Key</h2>
            <div className="card">
              <p className="mb-4">You'll need a Google AI API key to use Gemini CLI:</p>
              <ol className="space-y-3 mb-4">
                <li className="flex items-start">
                  <span className="font-bold mr-2">1.</span>
                  <span>Visit <a href="https://makersuite.google.com" target="_blank" rel="noopener noreferrer" 
                                className="text-google-blue hover:underline">Google AI Studio</a></span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-2">2.</span>
                  <span>Sign in with your Google account</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-2">3.</span>
                  <span>Click "Get API key" and create a new key</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-2">4.</span>
                  <span>Copy and save your API key securely</span>
                </li>
              </ol>
              <Link href="/qa/get-api-key" className="text-google-blue hover:underline">
                Detailed API key guide →
              </Link>
            </div>
          </section>

          {/* Step 3: Configuration */}
          <section className="mb-12">
            <h2 className="text-h2 mb-4">Step 3: Configure Your API Key</h2>
            <div className="card">
              <p className="mb-4">Choose one of these methods to configure your API key:</p>
              
              <div className="space-y-4">
                <div className="p-4 bg-neutral-light rounded-lg">
                  <h3 className="font-semibold mb-2">Quick Setup (Recommended)</h3>
                  <div className="bg-neutral-dark text-white p-3 rounded font-code">
                    <p>gemini config set api-key YOUR_API_KEY</p>
                  </div>
                </div>

                <div className="p-4 bg-neutral-light rounded-lg">
                  <h3 className="font-semibold mb-2">Environment Variable</h3>
                  <div className="bg-neutral-dark text-white p-3 rounded font-code">
                    <p>export GEMINI_API_KEY="your-api-key-here"</p>
                  </div>
                </div>
              </div>

              <Link href="/qa/configure-api-key" className="inline-block mt-4 text-google-blue hover:underline">
                See all configuration methods →
              </Link>
            </div>
          </section>

          {/* Step 4: Test */}
          <section className="mb-12">
            <h2 className="text-h2 mb-4">Step 4: Test Your Setup</h2>
            <div className="card">
              <p className="mb-4">Verify that everything is working correctly:</p>
              
              <div className="space-y-4">
                <div>
                  <p className="font-semibold mb-2">Check version:</p>
                  <div className="bg-neutral-dark text-white p-3 rounded-lg font-code">
                    <p>gemini --version</p>
                  </div>
                </div>

                <div>
                  <p className="font-semibold mb-2">Test API connection:</p>
                  <div className="bg-neutral-dark text-white p-3 rounded-lg font-code">
                    <p>gemini "Hello, Gemini! Please respond if you can hear me."</p>
                  </div>
                </div>

                <div>
                  <p className="font-semibold mb-2">View configuration:</p>
                  <div className="bg-neutral-dark text-white p-3 rounded-lg font-code">
                    <p>gemini config show</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Optional Configuration */}
          <section className="mb-12">
            <h2 className="text-h2 mb-4">Optional: Advanced Configuration</h2>
            <div className="card">
              <p className="mb-4">Customize Gemini CLI behavior with these optional settings:</p>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Set default model:</h3>
                  <div className="bg-neutral-dark text-white p-3 rounded-lg font-code">
                    <p>gemini config set model gemini-pro</p>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Adjust temperature (creativity):</h3>
                  <div className="bg-neutral-dark text-white p-3 rounded-lg font-code">
                    <p>gemini config set temperature 0.8</p>
                  </div>
                  <p className="text-sm text-neutral-gray mt-1">Range: 0.0 (focused) to 1.0 (creative)</p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Set max tokens:</h3>
                  <div className="bg-neutral-dark text-white p-3 rounded-lg font-code">
                    <p>gemini config set max-tokens 2000</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Common Setup Issues */}
          <section className="mb-12">
            <h2 className="text-h2 mb-4">Common Setup Issues</h2>
            <div className="space-y-4">
              <div className="card">
                <h3 className="font-semibold text-google-red mb-2">Command not found</h3>
                <p className="text-neutral-gray mb-2">Solution: Add npm global directory to PATH</p>
                <Link href="/troubleshooting" className="text-google-blue hover:underline text-sm">
                  See troubleshooting guide →
                </Link>
              </div>

              <div className="card">
                <h3 className="font-semibold text-google-red mb-2">API key not working</h3>
                <p className="text-neutral-gray mb-2">Solution: Verify key is correct and has proper permissions</p>
                <Link href="/qa/auth-errors" className="text-google-blue hover:underline text-sm">
                  Fix authentication errors →
                </Link>
              </div>

              <div className="card">
                <h3 className="font-semibold text-google-red mb-2">Rate limit exceeded</h3>
                <p className="text-neutral-gray mb-2">Solution: Wait or upgrade your API plan</p>
                <Link href="/qa/rate-limits" className="text-google-blue hover:underline text-sm">
                  Learn about rate limits →
                </Link>
              </div>
            </div>
          </section>

          {/* Next Steps */}
          <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-card p-8">
            <h2 className="text-h2 mb-4">🎉 Setup Complete!</h2>
            <p className="text-lg text-neutral-gray mb-6">
              Congratulations! You've successfully set up Gemini CLI. Here's what you can do next:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link href="/use-cases" className="card hover:shadow-card-hover transition-shadow">
                <h3 className="font-semibold mb-2">Explore Use Cases</h3>
                <p className="text-sm text-neutral-gray">See practical examples and tutorials</p>
              </Link>
              <Link href="/qa" className="card hover:shadow-card-hover transition-shadow">
                <h3 className="font-semibold mb-2">Browse Q&A</h3>
                <p className="text-sm text-neutral-gray">Find answers to common questions</p>
              </Link>
              <Link href="/resources#tools" className="card hover:shadow-card-hover transition-shadow">
                <h3 className="font-semibold mb-2">Discover Tools</h3>
                <p className="text-sm text-neutral-gray">Extend with MCP servers and plugins</p>
              </Link>
              <Link href="/community" className="card hover:shadow-card-hover transition-shadow">
                <h3 className="font-semibold mb-2">Join Community</h3>
                <p className="text-sm text-neutral-gray">Connect with other users</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}