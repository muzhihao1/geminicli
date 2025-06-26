import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Configure API Key - Gemini CLI All in One',
  description: 'Learn how to configure your Google AI API key for Gemini CLI',
}

export default function ConfigureAPIKeyPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-h1 mb-4">Configure Your API Key</h1>
          <p className="text-lg text-neutral-gray mb-12">
            Once you have your Google AI API key, you need to configure it with Gemini CLI. 
            Here are several methods to do so.
          </p>

          {/* Method 1: Environment Variable */}
          <section className="mb-12">
            <h2 className="text-h2 mb-4">Method 1: Environment Variable (Recommended)</h2>
            <div className="card">
              <p className="mb-4">
                The most secure way is to set your API key as an environment variable:
              </p>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">For macOS/Linux:</h3>
                  <div className="bg-neutral-dark text-white p-4 rounded-lg font-code">
                    <p className="text-green-400"># Add to ~/.bashrc, ~/.zshrc, or ~/.profile</p>
                    <p>export GEMINI_API_KEY="your-api-key-here"</p>
                    <p className="text-green-400 mt-3"># Reload your shell configuration</p>
                    <p>source ~/.bashrc  # or ~/.zshrc</p>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">For Windows:</h3>
                  <p className="text-sm text-neutral-gray mb-2">Option 1: Command Prompt (temporary)</p>
                  <div className="bg-neutral-dark text-white p-4 rounded-lg font-code mb-3">
                    <p>set GEMINI_API_KEY=your-api-key-here</p>
                  </div>
                  
                  <p className="text-sm text-neutral-gray mb-2">Option 2: PowerShell (temporary)</p>
                  <div className="bg-neutral-dark text-white p-4 rounded-lg font-code mb-3">
                    <p>$env:GEMINI_API_KEY="your-api-key-here"</p>
                  </div>

                  <p className="text-sm text-neutral-gray mb-2">Option 3: System Environment Variables (permanent)</p>
                  <ol className="list-decimal list-inside text-sm text-neutral-gray space-y-1">
                    <li>Open System Properties → Advanced → Environment Variables</li>
                    <li>Click "New" under User variables</li>
                    <li>Variable name: GEMINI_API_KEY</li>
                    <li>Variable value: your-api-key-here</li>
                    <li>Click OK and restart your terminal</li>
                  </ol>
                </div>
              </div>
            </div>
          </section>

          {/* Method 2: Gemini Config Command */}
          <section className="mb-12">
            <h2 className="text-h2 mb-4">Method 2: Gemini Config Command</h2>
            <div className="card">
              <p className="mb-4">
                Use Gemini CLI's built-in configuration command:
              </p>
              <div className="bg-neutral-dark text-white p-4 rounded-lg font-code">
                <p>gemini config set api-key YOUR_API_KEY</p>
              </div>
              <p className="text-sm text-neutral-gray mt-3">
                This stores your API key in a configuration file at <code className="bg-neutral-light px-2 py-1 rounded">~/.gemini/config.json</code>
              </p>
            </div>
          </section>

          {/* Method 3: Config File */}
          <section className="mb-12">
            <h2 className="text-h2 mb-4">Method 3: Configuration File</h2>
            <div className="card">
              <p className="mb-4">
                Create or edit the configuration file directly:
              </p>
              
              <div className="space-y-4">
                <div>
                  <p className="font-semibold mb-2">1. Create the config directory:</p>
                  <div className="bg-neutral-dark text-white p-4 rounded-lg font-code">
                    <p className="text-green-400"># macOS/Linux</p>
                    <p>mkdir -p ~/.gemini</p>
                    <p className="text-green-400 mt-2"># Windows</p>
                    <p>mkdir %USERPROFILE%\.gemini</p>
                  </div>
                </div>

                <div>
                  <p className="font-semibold mb-2">2. Create config.json:</p>
                  <div className="bg-neutral-dark text-white p-4 rounded-lg font-code">
                    <p>{`{
  "apiKey": "your-api-key-here",
  "model": "gemini-pro",
  "temperature": 0.7,
  "maxTokens": 1000
}`}</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Method 4: Per-Command */}
          <section className="mb-12">
            <h2 className="text-h2 mb-4">Method 4: Per-Command API Key</h2>
            <div className="card">
              <p className="mb-4">
                You can also provide the API key for individual commands:
              </p>
              <div className="bg-neutral-dark text-white p-4 rounded-lg font-code">
                <p>gemini --api-key YOUR_API_KEY "Your prompt here"</p>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg mt-4">
                <p className="text-sm">
                  <strong>Warning:</strong> This method may expose your API key in shell history. 
                  Use environment variables or config files for better security.
                </p>
              </div>
            </div>
          </section>

          {/* Verify Configuration */}
          <section className="mb-12">
            <h2 className="text-h2 mb-4">Verify Your Configuration</h2>
            <div className="card">
              <p className="mb-4">Test that your API key is properly configured:</p>
              
              <div className="space-y-4">
                <div>
                  <p className="font-semibold mb-2">1. Check configuration:</p>
                  <div className="bg-neutral-dark text-white p-4 rounded-lg font-code">
                    <p>gemini config show</p>
                  </div>
                </div>

                <div>
                  <p className="font-semibold mb-2">2. Test with a simple command:</p>
                  <div className="bg-neutral-dark text-white p-4 rounded-lg font-code">
                    <p>gemini "Hello, can you hear me?"</p>
                  </div>
                </div>

                <div>
                  <p className="font-semibold mb-2">3. Check API status:</p>
                  <div className="bg-neutral-dark text-white p-4 rounded-lg font-code">
                    <p>gemini status</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Priority Order */}
          <section className="mb-12">
            <h2 className="text-h2 mb-4">Configuration Priority</h2>
            <div className="card">
              <p className="mb-4">
                Gemini CLI checks for API keys in this order:
              </p>
              <ol className="space-y-3">
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-8 h-8 bg-google-blue text-white rounded-full 
                                 flex items-center justify-center text-sm font-bold mr-3">1</span>
                  <div>
                    <strong>Command-line flag</strong>
                    <p className="text-sm text-neutral-gray">--api-key flag in the command</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-8 h-8 bg-google-blue text-white rounded-full 
                                 flex items-center justify-center text-sm font-bold mr-3">2</span>
                  <div>
                    <strong>Environment variable</strong>
                    <p className="text-sm text-neutral-gray">GEMINI_API_KEY environment variable</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-8 h-8 bg-google-blue text-white rounded-full 
                                 flex items-center justify-center text-sm font-bold mr-3">3</span>
                  <div>
                    <strong>Configuration file</strong>
                    <p className="text-sm text-neutral-gray">~/.gemini/config.json</p>
                  </div>
                </li>
              </ol>
            </div>
          </section>

          {/* Troubleshooting */}
          <section className="mb-12">
            <h2 className="text-h2 mb-4">Troubleshooting</h2>
            <div className="space-y-4">
              <div className="card">
                <h3 className="font-semibold mb-2">Error: API key not found</h3>
                <p className="text-neutral-gray mb-3">Make sure you've set the API key correctly:</p>
                <div className="bg-neutral-dark text-white p-3 rounded-lg font-code text-sm">
                  <p className="text-green-400"># Check if environment variable is set</p>
                  <p>echo $GEMINI_API_KEY  # macOS/Linux</p>
                  <p>echo %GEMINI_API_KEY%  # Windows CMD</p>
                  <p>echo $env:GEMINI_API_KEY  # Windows PowerShell</p>
                </div>
              </div>

              <div className="card">
                <h3 className="font-semibold mb-2">Error: Invalid API key</h3>
                <p className="text-neutral-gray">
                  Verify that you've copied the entire key without any extra spaces or characters. 
                  Try regenerating a new key in Google AI Studio if the problem persists.
                </p>
              </div>
            </div>
          </section>

          {/* Next Steps */}
          <div className="bg-blue-50 rounded-card p-6">
            <h3 className="text-h3 mb-3">You're All Set!</h3>
            <p className="text-neutral-gray mb-4">
              Your API key is now configured. Start using Gemini CLI:
            </p>
            <div className="flex gap-4">
              <Link href="/qa/first-command" className="btn-primary">
                Run Your First Command
              </Link>
              <Link href="/use-cases" className="btn-secondary">
                Explore Use Cases
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}