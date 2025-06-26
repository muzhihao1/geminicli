import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Environment Variables Setup - Gemini CLI All in One',
  description: 'Learn how to set up and manage environment variables for Gemini CLI',
}

export default function EnvVariablesPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-h1 mb-4">Environment Variables Setup</h1>
          <p className="text-lg text-neutral-gray mb-12">
            Configure Gemini CLI using environment variables for secure and flexible configuration management.
          </p>

          {/* Why Use Environment Variables */}
          <section className="mb-12">
            <h2 className="text-h2 mb-4">Why Use Environment Variables?</h2>
            <div className="card">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-google-green mr-2">✓</span>
                  <span><strong>Security:</strong> Keep sensitive data like API keys out of your code</span>
                </li>
                <li className="flex items-start">
                  <span className="text-google-green mr-2">✓</span>
                  <span><strong>Flexibility:</strong> Different settings for development, staging, and production</span>
                </li>
                <li className="flex items-start">
                  <span className="text-google-green mr-2">✓</span>
                  <span><strong>Portability:</strong> Works across different systems and deployment environments</span>
                </li>
                <li className="flex items-start">
                  <span className="text-google-green mr-2">✓</span>
                  <span><strong>Team Collaboration:</strong> Each team member can have their own configuration</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Core Environment Variables */}
          <section className="mb-12">
            <h2 className="text-h2 mb-4">Core Environment Variables</h2>
            <div className="space-y-6">
              
              <div className="card">
                <h3 className="font-semibold mb-3">GOOGLE_AI_API_KEY</h3>
                <p className="text-neutral-gray mb-3">Your Google AI API key for authentication</p>
                <div className="bg-neutral-dark text-white p-3 rounded-lg font-code text-sm">
                  <p>export GOOGLE_AI_API_KEY="AIza..."</p>
                </div>
                <p className="text-sm text-neutral-gray mt-2">
                  Required for all Gemini CLI operations. 
                  <Link href="/qa/get-api-key" className="text-google-blue hover:underline ml-1">
                    Get your API key →
                  </Link>
                </p>
              </div>

              <div className="card">
                <h3 className="font-semibold mb-3">GEMINI_MODEL</h3>
                <p className="text-neutral-gray mb-3">Default model to use for requests</p>
                <div className="bg-neutral-dark text-white p-3 rounded-lg font-code text-sm">
                  <p>export GEMINI_MODEL="gemini-pro"</p>
                  <p className="text-green-400 mt-1"># or gemini-pro-vision, gemini-ultra</p>
                </div>
              </div>

              <div className="card">
                <h3 className="font-semibold mb-3">GEMINI_TEMPERATURE</h3>
                <p className="text-neutral-gray mb-3">Control randomness in responses (0.0 to 1.0)</p>
                <div className="bg-neutral-dark text-white p-3 rounded-lg font-code text-sm">
                  <p>export GEMINI_TEMPERATURE="0.7"</p>
                  <p className="text-green-400 mt-1"># 0.0 = deterministic, 1.0 = creative</p>
                </div>
              </div>

              <div className="card">
                <h3 className="font-semibold mb-3">GEMINI_MAX_TOKENS</h3>
                <p className="text-neutral-gray mb-3">Maximum tokens in response</p>
                <div className="bg-neutral-dark text-white p-3 rounded-lg font-code text-sm">
                  <p>export GEMINI_MAX_TOKENS="2048"</p>
                </div>
              </div>

              <div className="card">
                <h3 className="font-semibold mb-3">GEMINI_CONFIG_PATH</h3>
                <p className="text-neutral-gray mb-3">Custom path for configuration file</p>
                <div className="bg-neutral-dark text-white p-3 rounded-lg font-code text-sm">
                  <p>export GEMINI_CONFIG_PATH="/path/to/your/config.json"</p>
                </div>
              </div>
            </div>
          </section>

          {/* Platform-Specific Setup */}
          <section className="mb-12">
            <h2 className="text-h2 mb-4">Platform-Specific Setup</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="card">
                <h3 className="font-semibold mb-3 flex items-center">
                  <span className="text-2xl mr-2">🐧</span>
                  Linux
                </h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm font-medium mb-1">Temporary (current session):</p>
                    <div className="bg-neutral-dark text-white p-2 rounded text-xs font-code">
                      <p>export GOOGLE_AI_API_KEY="your-key"</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-1">Permanent (bash):</p>
                    <div className="bg-neutral-dark text-white p-2 rounded text-xs font-code">
                      <p>echo 'export GOOGLE_AI_API_KEY="your-key"' &gt;&gt; ~/.bashrc</p>
                      <p>source ~/.bashrc</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card">
                <h3 className="font-semibold mb-3 flex items-center">
                  <span className="text-2xl mr-2">🍎</span>
                  macOS
                </h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm font-medium mb-1">Temporary:</p>
                    <div className="bg-neutral-dark text-white p-2 rounded text-xs font-code">
                      <p>export GOOGLE_AI_API_KEY="your-key"</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-1">Permanent (zsh):</p>
                    <div className="bg-neutral-dark text-white p-2 rounded text-xs font-code">
                      <p>echo 'export GOOGLE_AI_API_KEY="your-key"' &gt;&gt; ~/.zshrc</p>
                      <p>source ~/.zshrc</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card">
                <h3 className="font-semibold mb-3 flex items-center">
                  <span className="text-2xl mr-2">🪟</span>
                  Windows
                </h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm font-medium mb-1">Command Prompt:</p>
                    <div className="bg-neutral-dark text-white p-2 rounded text-xs font-code">
                      <p>set GOOGLE_AI_API_KEY=your-key</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-1">PowerShell:</p>
                    <div className="bg-neutral-dark text-white p-2 rounded text-xs font-code">
                      <p>$env:GOOGLE_AI_API_KEY="your-key"</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-1">Permanent: System Properties → Environment Variables</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* .env Files */}
          <section className="mb-12">
            <h2 className="text-h2 mb-4">Using .env Files</h2>
            <div className="card">
              <p className="mb-4">For project-specific configuration, use .env files:</p>
              
              <div className="space-y-4">
                <div>
                  <p className="font-semibold mb-2">1. Create .env file:</p>
                  <div className="bg-neutral-dark text-white p-3 rounded-lg font-code text-sm">
                    <p className="text-green-400"># .env</p>
                    <p>GOOGLE_AI_API_KEY=your-api-key-here</p>
                    <p>GEMINI_MODEL=gemini-pro</p>
                    <p>GEMINI_TEMPERATURE=0.7</p>
                    <p>GEMINI_MAX_TOKENS=2048</p>
                  </div>
                </div>
                
                <div>
                  <p className="font-semibold mb-2">2. Load .env file:</p>
                  <div className="bg-neutral-dark text-white p-3 rounded-lg font-code text-sm">
                    <p className="text-green-400"># Load environment variables from .env</p>
                    <p>set -a && source .env && set +a</p>
                  </div>
                </div>

                <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                  <p className="text-sm">
                    <strong>Important:</strong> Add .env to your .gitignore file to avoid committing sensitive data to version control.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Verification */}
          <section className="mb-12">
            <h2 className="text-h2 mb-4">Verify Your Setup</h2>
            <div className="card">
              <div className="space-y-4">
                <div>
                  <p className="font-semibold mb-2">Check if variables are set:</p>
                  <div className="bg-neutral-dark text-white p-3 rounded-lg font-code text-sm">
                    <p className="text-green-400"># Unix/Linux/macOS</p>
                    <p>echo $GOOGLE_AI_API_KEY</p>
                    <p>env | grep GEMINI</p>
                    <p className="text-green-400 mt-2"># Windows</p>
                    <p>echo %GOOGLE_AI_API_KEY%</p>
                  </div>
                </div>
                
                <div>
                  <p className="font-semibold mb-2">Test Gemini CLI with environment variables:</p>
                  <div className="bg-neutral-dark text-white p-3 rounded-lg font-code text-sm">
                    <p>gemini "Hello, world!"</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Best Practices */}
          <section className="mb-12">
            <h2 className="text-h2 mb-4">Best Practices</h2>
            <div className="space-y-4">
              <div className="card">
                <h3 className="font-semibold mb-2 text-green-600">✅ Do</h3>
                <ul className="space-y-2 text-sm">
                  <li>• Use different API keys for different environments</li>
                  <li>• Keep API keys in environment variables, not in code</li>
                  <li>• Use .env files for local development</li>
                  <li>• Document required environment variables</li>
                  <li>• Use validation scripts to check setup</li>
                </ul>
              </div>
              
              <div className="card">
                <h3 className="font-semibold mb-2 text-red-600">❌ Don't</h3>
                <ul className="space-y-2 text-sm">
                  <li>• Commit .env files to version control</li>
                  <li>• Share API keys in chat or email</li>
                  <li>• Use production keys in development</li>
                  <li>• Hardcode sensitive values in scripts</li>
                  <li>• Ignore environment variable validation</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Next Steps */}
          <div className="bg-blue-50 rounded-card p-6">
            <h3 className="text-h3 mb-3">Next Steps</h3>
            <p className="text-neutral-gray mb-4">
              Now that you have environment variables set up, configure your API key:
            </p>
            <div className="flex gap-4 flex-wrap">
              <Link href="/qa/get-api-key" className="btn-primary">
                Get API Key
              </Link>
              <Link href="/qa/configure-api-key" className="btn-secondary">
                Configure API Key
              </Link>
              <Link href="/qa/first-command" className="btn-secondary">
                First Command
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}