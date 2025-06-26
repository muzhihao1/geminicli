import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Install Gemini CLI on macOS - Gemini CLI All in One',
  description: 'Step-by-step guide to install Gemini CLI on macOS using Homebrew or npm',
}

export default function InstallMacOSPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-h1 mb-4">Install Gemini CLI on macOS</h1>
          <p className="text-lg text-neutral-gray mb-12">
            Complete guide for installing Gemini CLI on macOS 11 (Big Sur) and later.
          </p>

          {/* Method 1: Homebrew */}
          <section className="mb-12">
            <h2 className="text-h2 mb-4">Method 1: Install with Homebrew (Recommended)</h2>
            <div className="card">
              <p className="mb-4">The easiest way to install Gemini CLI on macOS is using Homebrew:</p>
              
              <div className="space-y-4">
                <div>
                  <p className="font-semibold mb-2">1. Install Homebrew (if not already installed):</p>
                  <div className="bg-neutral-dark text-white p-4 rounded-lg font-code">
                    <p>/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"</p>
                  </div>
                </div>

                <div>
                  <p className="font-semibold mb-2">2. Install Gemini CLI:</p>
                  <div className="bg-neutral-dark text-white p-4 rounded-lg font-code">
                    <p>brew install gemini-cli</p>
                  </div>
                </div>

                <div>
                  <p className="font-semibold mb-2">3. Verify installation:</p>
                  <div className="bg-neutral-dark text-white p-4 rounded-lg font-code">
                    <p>gemini --version</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Method 2: npm */}
          <section className="mb-12">
            <h2 className="text-h2 mb-4">Method 2: Install with npm</h2>
            <div className="card">
              <p className="mb-4">If you prefer using npm or need more control over the installation:</p>
              
              <div className="space-y-4">
                <div>
                  <p className="font-semibold mb-2">1. Install Node.js:</p>
                  <p className="text-neutral-gray mb-2">Option A: Using Homebrew</p>
                  <div className="bg-neutral-dark text-white p-4 rounded-lg font-code mb-3">
                    <p>brew install node</p>
                  </div>
                  <p className="text-neutral-gray mb-2">Option B: Download from nodejs.org</p>
                  <p className="text-sm text-neutral-gray">
                    Visit <a href="https://nodejs.org" target="_blank" rel="noopener noreferrer" 
                            className="text-google-blue hover:underline">nodejs.org</a> and 
                    download the macOS installer.
                  </p>
                </div>

                <div>
                  <p className="font-semibold mb-2">2. Install Gemini CLI globally:</p>
                  <div className="bg-neutral-dark text-white p-4 rounded-lg font-code">
                    <p>npm install -g @google/gemini-cli</p>
                  </div>
                </div>

                <div>
                  <p className="font-semibold mb-2">3. Fix npm permissions (if needed):</p>
                  <p className="text-sm text-neutral-gray mb-2">If you get permission errors:</p>
                  <div className="bg-neutral-dark text-white p-4 rounded-lg font-code">
                    <p className="text-green-400"># Option 1: Use a Node version manager (recommended)</p>
                    <p>curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash</p>
                    <p>nvm install node</p>
                    <p className="text-green-400 mt-3"># Option 2: Change npm's default directory</p>
                    <p>mkdir ~/.npm-global</p>
                    <p>npm config set prefix '~/.npm-global'</p>
                    <p>echo 'export PATH=~/.npm-global/bin:$PATH' &gt;&gt; ~/.zshrc</p>
                    <p>source ~/.zshrc</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Shell Configuration */}
          <section className="mb-12">
            <h2 className="text-h2 mb-4">Shell Configuration</h2>
            <div className="card">
              <p className="mb-4">Ensure your shell is properly configured:</p>
              
              <div className="space-y-4">
                <div>
                  <p className="font-semibold mb-2">For Zsh (default on macOS):</p>
                  <div className="bg-neutral-dark text-white p-4 rounded-lg font-code">
                    <p className="text-green-400"># Add to ~/.zshrc</p>
                    <p>export PATH="/usr/local/bin:$PATH"</p>
                    <p className="text-green-400 mt-2"># Reload configuration</p>
                    <p>source ~/.zshrc</p>
                  </div>
                </div>

                <div>
                  <p className="font-semibold mb-2">For Bash:</p>
                  <div className="bg-neutral-dark text-white p-4 rounded-lg font-code">
                    <p className="text-green-400"># Add to ~/.bash_profile</p>
                    <p>export PATH="/usr/local/bin:$PATH"</p>
                    <p className="text-green-400 mt-2"># Reload configuration</p>
                    <p>source ~/.bash_profile</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Apple Silicon Specific */}
          <section className="mb-12">
            <h2 className="text-h2 mb-4">Apple Silicon (M1/M2/M3) Macs</h2>
            <div className="card">
              <p className="mb-4">For Apple Silicon Macs, Homebrew installs to a different location:</p>
              <div className="bg-neutral-dark text-white p-4 rounded-lg font-code">
                <p className="text-green-400"># Add Homebrew to PATH</p>
                <p>echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' &gt;&gt; ~/.zshrc</p>
                <p>eval "$(/opt/homebrew/bin/brew shellenv)"</p>
              </div>
            </div>
          </section>

          {/* Troubleshooting */}
          <section className="mb-12">
            <h2 className="text-h2 mb-4">Common Issues</h2>
            <div className="space-y-4">
              <div className="card">
                <h3 className="font-semibold mb-2">Command not found: gemini</h3>
                <p className="text-neutral-gray mb-3">Make sure the installation directory is in your PATH:</p>
                <div className="bg-neutral-dark text-white p-3 rounded-lg font-code text-sm">
                  <p>echo $PATH</p>
                  <p>which gemini</p>
                </div>
              </div>

              <div className="card">
                <h3 className="font-semibold mb-2">Permission denied errors</h3>
                <p className="text-neutral-gray mb-3">Never use sudo with npm. Instead, fix npm permissions:</p>
                <div className="bg-neutral-dark text-white p-3 rounded-lg font-code text-sm">
                  <p>npm config get prefix</p>
                  <p>npm config set prefix '~/.npm-global'</p>
                </div>
              </div>
            </div>
          </section>

          {/* Next Steps */}
          <div className="bg-blue-50 rounded-card p-6">
            <h3 className="text-h3 mb-3">Next Steps</h3>
            <p className="text-neutral-gray mb-4">
              Great! Gemini CLI is now installed on your Mac. Configure your API key to start using it:
            </p>
            <div className="flex gap-4">
              <Link href="/qa/get-api-key" className="btn-secondary">
                Get API Key
              </Link>
              <Link href="/qa/configure-api-key" className="btn-primary">
                Configure API Key
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}