import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Install Gemini CLI on Windows - Gemini CLI All in One',
  description: 'Step-by-step guide to install Gemini CLI on Windows 10 and Windows 11',
}

export default function InstallWindowsPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-h1 mb-4">Install Gemini CLI on Windows</h1>
          <p className="text-lg text-neutral-gray mb-12">
            Complete guide for installing Gemini CLI on Windows 10 and Windows 11.
          </p>

          {/* Step 1: Install Node.js */}
          <section className="mb-12">
            <h2 className="text-h2 mb-4">Step 1: Install Node.js</h2>
            <div className="card">
              <p className="mb-4">Gemini CLI requires Node.js 16.0 or higher. Follow these steps:</p>
              <ol className="space-y-4">
                <li>
                  <strong>1. Download Node.js:</strong>
                  <p className="text-neutral-gray mt-1">
                    Visit <a href="https://nodejs.org" target="_blank" rel="noopener noreferrer" 
                            className="text-google-blue hover:underline">nodejs.org</a> and 
                    download the LTS version for Windows.
                  </p>
                </li>
                <li>
                  <strong>2. Run the installer:</strong>
                  <p className="text-neutral-gray mt-1">
                    Double-click the downloaded .msi file and follow the installation wizard.
                  </p>
                </li>
                <li>
                  <strong>3. Verify installation:</strong>
                  <p className="text-neutral-gray mt-1 mb-2">Open Command Prompt or PowerShell and run:</p>
                  <div className="bg-neutral-dark text-white p-3 rounded-lg font-code">
                    <p>node --version</p>
                    <p>npm --version</p>
                  </div>
                </li>
              </ol>
            </div>
          </section>

          {/* Step 2: Install Gemini CLI */}
          <section className="mb-12">
            <h2 className="text-h2 mb-4">Step 2: Install Gemini CLI</h2>
            <div className="card">
              <p className="mb-4">Open Command Prompt or PowerShell as Administrator:</p>
              <div className="bg-neutral-dark text-white p-4 rounded-lg font-code mb-6">
                <p className="text-green-400"># Install Gemini CLI globally</p>
                <p>npm install -g @google/gemini-cli</p>
              </div>

              <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                <p className="text-sm">
                  <strong>Note:</strong> If you encounter permission errors, try running the command 
                  prompt as Administrator (right-click → Run as Administrator).
                </p>
              </div>
            </div>
          </section>

          {/* Step 3: Configure Path (if needed) */}
          <section className="mb-12">
            <h2 className="text-h2 mb-4">Step 3: Configure PATH (if needed)</h2>
            <div className="card">
              <p className="mb-4">
                If the <code className="bg-neutral-light px-2 py-1 rounded">gemini</code> command 
                is not recognized, you may need to add npm's global directory to your PATH:
              </p>
              <ol className="space-y-4">
                <li>
                  <strong>1. Find npm global directory:</strong>
                  <div className="bg-neutral-dark text-white p-3 rounded-lg font-code mt-2">
                    <p>npm config get prefix</p>
                  </div>
                </li>
                <li>
                  <strong>2. Add to PATH:</strong>
                  <ul className="list-disc list-inside text-neutral-gray mt-2 space-y-2">
                    <li>Open System Properties → Advanced → Environment Variables</li>
                    <li>Under "User variables", select "Path" and click "Edit"</li>
                    <li>Add the npm global directory path (usually <code>C:\Users\[username]\AppData\Roaming\npm</code>)</li>
                    <li>Click OK and restart your terminal</li>
                  </ul>
                </li>
              </ol>
            </div>
          </section>

          {/* Step 4: Verify Installation */}
          <section className="mb-12">
            <h2 className="text-h2 mb-4">Step 4: Verify Installation</h2>
            <div className="card">
              <p className="mb-4">Test that Gemini CLI is installed correctly:</p>
              <div className="bg-neutral-dark text-white p-4 rounded-lg font-code">
                <p className="text-green-400"># Check version</p>
                <p>gemini --version</p>
                <p className="text-green-400 mt-4"># View help</p>
                <p>gemini --help</p>
              </div>
            </div>
          </section>

          {/* Troubleshooting */}
          <section className="mb-12">
            <h2 className="text-h2 mb-4">Common Issues and Solutions</h2>
            <div className="space-y-4">
              <div className="card">
                <h3 className="font-semibold mb-2">Error: EACCES permission denied</h3>
                <p className="text-neutral-gray mb-3">Solution: Run Command Prompt as Administrator</p>
                <div className="bg-neutral-dark text-white p-3 rounded-lg font-code text-sm">
                  <p># Or configure npm to use a different directory</p>
                  <p>npm config set prefix "%USERPROFILE%\npm-global"</p>
                </div>
              </div>

              <div className="card">
                <h3 className="font-semibold mb-2">'gemini' is not recognized as a command</h3>
                <p className="text-neutral-gray mb-3">Solution: Add npm global directory to PATH (see Step 3)</p>
              </div>

              <div className="card">
                <h3 className="font-semibold mb-2">Network or proxy issues</h3>
                <p className="text-neutral-gray mb-3">Solution: Configure npm proxy settings:</p>
                <div className="bg-neutral-dark text-white p-3 rounded-lg font-code text-sm">
                  <p>npm config set proxy http://proxy.company.com:8080</p>
                  <p>npm config set https-proxy http://proxy.company.com:8080</p>
                </div>
              </div>
            </div>
          </section>

          {/* Next Steps */}
          <div className="bg-blue-50 rounded-card p-6">
            <h3 className="text-h3 mb-3">Next Steps</h3>
            <p className="text-neutral-gray mb-4">
              Now that Gemini CLI is installed, configure your API key to start using it:
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