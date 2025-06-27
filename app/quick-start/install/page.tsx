import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Installation Guide - Gemini CLI All in One',
  description: 'Complete installation guide for Gemini CLI on all platforms',
}

export default function InstallationGuidePage() {
  return (
    <div className="pt-24 pb-16">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-h1 mb-4">Installation Guide</h1>
          <p className="text-lg text-neutral-gray mb-12">
            Choose your operating system to get started with Gemini CLI installation.
          </p>

          {/* OS Selection */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Link href="/qa/install-windows" className="card hover:shadow-card-hover transition-shadow text-center">
              <div className="text-5xl mb-4">🪟</div>
              <h2 className="text-h3 mb-2">Windows</h2>
              <p className="text-neutral-gray">Windows 10/11</p>
            </Link>

            <Link href="/qa/install-macos" className="card hover:shadow-card-hover transition-shadow text-center">
              <div className="text-5xl mb-4">🍎</div>
              <h2 className="text-h3 mb-2">macOS</h2>
              <p className="text-neutral-gray">macOS 11+</p>
            </Link>

            <Link href="/qa/install-linux" className="card hover:shadow-card-hover transition-shadow text-center">
              <div className="text-5xl mb-4">🐧</div>
              <h2 className="text-h3 mb-2">Linux</h2>
              <p className="text-neutral-gray">Ubuntu, Debian, etc.</p>
            </Link>
          </div>

          {/* Prerequisites */}
          <section className="mb-12">
            <h2 className="text-h2 mb-4">Prerequisites</h2>
            <div className="card">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-google-green mr-2">✓</span>
                  <div>
                    <strong>Node.js 16.0 or higher</strong>
                    <p className="text-sm text-neutral-gray">Required for npm installation</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-google-green mr-2">✓</span>
                  <div>
                    <strong>Google AI API Key</strong>
                    <p className="text-sm text-neutral-gray">Get it from Google AI Studio</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-google-green mr-2">✓</span>
                  <div>
                    <strong>Terminal/Command Prompt</strong>
                    <p className="text-sm text-neutral-gray">Basic command line knowledge</p>
                  </div>
                </li>
              </ul>
            </div>
          </section>

          {/* Quick Install */}
          <section className="mb-12">
            <h2 className="text-h2 mb-4">Quick Install (All Platforms)</h2>
            <div className="card">
              <p className="mb-4">If you have Node.js installed, you can use npm to install Gemini CLI:</p>
              <div className="bg-neutral-dark text-white p-4 rounded-lg font-code">
                <p className="text-green-400"># Install globally using npm</p>
                <p>npm install -g @google/gemini-cli</p>
                <p className="text-green-400 mt-4"># Verify installation</p>
                <p>gemini --version</p>
              </div>
            </div>
          </section>

          {/* Alternative Methods */}
          <section className="mb-12">
            <h2 className="text-h2 mb-4">Alternative Installation Methods</h2>
            <div className="space-y-6">
              <div className="card">
                <h3 className="text-h3 mb-3">Using Yarn</h3>
                <div className="bg-neutral-dark text-white p-4 rounded-lg font-code">
                  <p>yarn global add @google/gemini-cli</p>
                </div>
              </div>

              <div className="card">
                <h3 className="text-h3 mb-3">Using Homebrew (macOS/Linux)</h3>
                <div className="bg-neutral-dark text-white p-4 rounded-lg font-code">
                  <p>brew install gemini-cli</p>
                </div>
              </div>

              <div className="card">
                <h3 className="text-h3 mb-3">From Source</h3>
                <div className="bg-neutral-dark text-white p-4 rounded-lg font-code">
                  <p className="text-green-400"># Clone the repository</p>
                  <p>git clone https://github.com/google-gemini/gemini-cli.git</p>
                  <p>cd gemini-cli</p>
                  <p className="text-green-400 mt-2"># Install dependencies</p>
                  <p>npm install</p>
                  <p className="text-green-400 mt-2"># Build and link</p>
                  <p>npm run build</p>
                  <p>npm link</p>
                </div>
              </div>
            </div>
          </section>

          {/* Next Steps */}
          <div className="bg-blue-50 rounded-card p-6">
            <h3 className="text-h3 mb-3">Next Steps</h3>
            <p className="text-neutral-gray mb-4">
              After installation, you'll need to configure your API key:
            </p>
            <Link href="/quick-start/setup" className="btn-primary">
              Configure API Key →
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}