import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Install Gemini CLI on Linux - Gemini CLI All in One',
  description: 'Step-by-step guide to install Gemini CLI on Ubuntu, Debian, Fedora, and other Linux distributions',
}

export default function InstallLinuxPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-h1 mb-4">Install Gemini CLI on Linux</h1>
          <p className="text-lg text-neutral-gray mb-12">
            Complete guide for installing Gemini CLI on various Linux distributions.
          </p>

          {/* Ubuntu/Debian */}
          <section className="mb-12">
            <h2 className="text-h2 mb-4">Ubuntu / Debian / Linux Mint</h2>
            <div className="card">
              <div className="space-y-4">
                <div>
                  <p className="font-semibold mb-2">1. Update package list:</p>
                  <div className="bg-neutral-dark text-white p-4 rounded-lg font-code">
                    <p>sudo apt update</p>
                  </div>
                </div>

                <div>
                  <p className="font-semibold mb-2">2. Install Node.js and npm:</p>
                  <div className="bg-neutral-dark text-white p-4 rounded-lg font-code">
                    <p className="text-green-400"># Install Node.js 18.x</p>
                    <p>curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -</p>
                    <p>sudo apt install nodejs</p>
                  </div>
                </div>

                <div>
                  <p className="font-semibold mb-2">3. Install Gemini CLI:</p>
                  <div className="bg-neutral-dark text-white p-4 rounded-lg font-code">
                    <p>sudo npm install -g @google/gemini-cli</p>
                  </div>
                </div>

                <div>
                  <p className="font-semibold mb-2">4. Verify installation:</p>
                  <div className="bg-neutral-dark text-white p-4 rounded-lg font-code">
                    <p>gemini --version</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Fedora/RHEL */}
          <section className="mb-12">
            <h2 className="text-h2 mb-4">Fedora / RHEL / CentOS</h2>
            <div className="card">
              <div className="space-y-4">
                <div>
                  <p className="font-semibold mb-2">1. Install Node.js:</p>
                  <div className="bg-neutral-dark text-white p-4 rounded-lg font-code">
                    <p className="text-green-400"># For Fedora</p>
                    <p>sudo dnf install nodejs npm</p>
                    <p className="text-green-400 mt-3"># For RHEL/CentOS 8+</p>
                    <p>sudo dnf module enable nodejs:18</p>
                    <p>sudo dnf install nodejs npm</p>
                  </div>
                </div>

                <div>
                  <p className="font-semibold mb-2">2. Install Gemini CLI:</p>
                  <div className="bg-neutral-dark text-white p-4 rounded-lg font-code">
                    <p>sudo npm install -g @google/gemini-cli</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Arch Linux */}
          <section className="mb-12">
            <h2 className="text-h2 mb-4">Arch Linux / Manjaro</h2>
            <div className="card">
              <div className="space-y-4">
                <div>
                  <p className="font-semibold mb-2">1. Install Node.js and npm:</p>
                  <div className="bg-neutral-dark text-white p-4 rounded-lg font-code">
                    <p>sudo pacman -S nodejs npm</p>
                  </div>
                </div>

                <div>
                  <p className="font-semibold mb-2">2. Install Gemini CLI:</p>
                  <div className="bg-neutral-dark text-white p-4 rounded-lg font-code">
                    <p>sudo npm install -g @google/gemini-cli</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Using nvm */}
          <section className="mb-12">
            <h2 className="text-h2 mb-4">Install Using NVM (Recommended)</h2>
            <div className="card">
              <p className="mb-4">Node Version Manager (nvm) allows you to install Node.js without sudo:</p>
              
              <div className="space-y-4">
                <div>
                  <p className="font-semibold mb-2">1. Install nvm:</p>
                  <div className="bg-neutral-dark text-white p-4 rounded-lg font-code">
                    <p>curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash</p>
                    <p className="text-green-400 mt-2"># Reload shell configuration</p>
                    <p>source ~/.bashrc</p>
                  </div>
                </div>

                <div>
                  <p className="font-semibold mb-2">2. Install Node.js:</p>
                  <div className="bg-neutral-dark text-white p-4 rounded-lg font-code">
                    <p>nvm install node</p>
                    <p>nvm use node</p>
                  </div>
                </div>

                <div>
                  <p className="font-semibold mb-2">3. Install Gemini CLI:</p>
                  <div className="bg-neutral-dark text-white p-4 rounded-lg font-code">
                    <p>npm install -g @google/gemini-cli</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Permissions Fix */}
          <section className="mb-12">
            <h2 className="text-h2 mb-4">Fix npm Permissions (Alternative to sudo)</h2>
            <div className="card">
              <p className="mb-4">If you want to avoid using sudo for npm installations:</p>
              <div className="bg-neutral-dark text-white p-4 rounded-lg font-code">
                <p className="text-green-400"># Create a directory for global packages</p>
                <p>mkdir ~/.npm-global</p>
                <p className="text-green-400 mt-2"># Configure npm to use the new directory</p>
                <p>npm config set prefix '~/.npm-global'</p>
                <p className="text-green-400 mt-2"># Add to PATH (add to ~/.bashrc or ~/.zshrc)</p>
                <p>export PATH=~/.npm-global/bin:$PATH</p>
                <p className="text-green-400 mt-2"># Reload shell configuration</p>
                <p>source ~/.bashrc</p>
              </div>
            </div>
          </section>

          {/* Troubleshooting */}
          <section className="mb-12">
            <h2 className="text-h2 mb-4">Common Issues</h2>
            <div className="space-y-4">
              <div className="card">
                <h3 className="font-semibold mb-2">EACCES permission denied</h3>
                <p className="text-neutral-gray mb-3">Use the npm permissions fix above or install with nvm</p>
              </div>

              <div className="card">
                <h3 className="font-semibold mb-2">Command not found: gemini</h3>
                <p className="text-neutral-gray mb-3">Add npm global bin directory to PATH:</p>
                <div className="bg-neutral-dark text-white p-3 rounded-lg font-code text-sm">
                  <p>echo 'export PATH="$(npm bin -g):$PATH"' &gt;&gt; ~/.bashrc</p>
                  <p>source ~/.bashrc</p>
                </div>
              </div>

              <div className="card">
                <h3 className="font-semibold mb-2">Old Node.js version</h3>
                <p className="text-neutral-gray mb-3">Update Node.js to version 16 or higher using nvm or your package manager</p>
              </div>
            </div>
          </section>

          {/* Next Steps */}
          <div className="bg-blue-50 rounded-card p-6">
            <h3 className="text-h3 mb-3">Next Steps</h3>
            <p className="text-neutral-gray mb-4">
              Excellent! Gemini CLI is now installed on your Linux system. Configure your API key to start using it:
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