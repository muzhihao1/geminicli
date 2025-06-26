import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Quick Start - Gemini CLI All in One',
  description: 'Learn how to install, configure, and use Gemini CLI quickly',
}

export default function QuickStartPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-h1 mb-4">Quick Start</h1>
          <p className="text-lg text-neutral-gray mb-12">
            Let's help you get started with Gemini CLI quickly, from installation to running your first command
          </p>

          {/* Quick Start Steps */}
          <div className="space-y-8">
            {/* Step 1: Install */}
            <div className="card">
              <div className="flex items-center mb-4">
                <span className="flex-shrink-0 w-10 h-10 bg-google-blue text-white rounded-full 
                               flex items-center justify-center font-bold mr-4">1</span>
                <h2 className="text-h3">Install Gemini CLI</h2>
              </div>
              <p className="text-neutral-gray mb-4">
                Gemini CLI supports multiple installation methods. Choose the one that fits your system:
              </p>
              <div className="bg-neutral-dark text-white p-4 rounded-lg font-code">
                <p className="text-green-400"># Install using npm</p>
                <p>npm install -g @google/gemini-cli</p>
                <p className="text-green-400 mt-4"># Or using Homebrew (macOS)</p>
                <p>brew install gemini-cli</p>
              </div>
            </div>

            {/* Step 2: Configure */}
            <div className="card">
              <div className="flex items-center mb-4">
                <span className="flex-shrink-0 w-10 h-10 bg-google-green text-white rounded-full 
                               flex items-center justify-center font-bold mr-4">2</span>
                <h2 className="text-h3">Configure API Key</h2>
              </div>
              <p className="text-neutral-gray mb-4">
                Get your Google AI API Key and configure it:
              </p>
              <div className="bg-neutral-dark text-white p-4 rounded-lg font-code">
                <p className="text-green-400"># Set API Key</p>
                <p>export GEMINI_API_KEY="your-api-key-here"</p>
                <p className="text-green-400 mt-4"># Or use config command</p>
                <p>gemini config set api-key YOUR_API_KEY</p>
              </div>
            </div>

            {/* Step 3: First Command */}
            <div className="card">
              <div className="flex items-center mb-4">
                <span className="flex-shrink-0 w-10 h-10 bg-google-yellow text-white rounded-full 
                               flex items-center justify-center font-bold mr-4">3</span>
                <h2 className="text-h3">Run Your First Command</h2>
              </div>
              <p className="text-neutral-gray mb-4">
                Verify your installation and run your first Gemini CLI command:
              </p>
              <div className="bg-neutral-dark text-white p-4 rounded-lg font-code">
                <p className="text-green-400"># Check version</p>
                <p>gemini --version</p>
                <p className="text-green-400 mt-4"># Get help</p>
                <p>gemini --help</p>
                <p className="text-green-400 mt-4"># Simple conversation</p>
                <p>gemini "Hello, Gemini!"</p>
              </div>
            </div>
          </div>

          {/* Next Steps */}
          <div className="mt-12 p-6 bg-blue-50 rounded-card border border-google-blue/20">
            <h3 className="text-h3 mb-3">Next Steps</h3>
            <p className="text-neutral-gray mb-4">
              Congratulations! You've successfully installed and configured Gemini CLI. Here's what you can do next:
            </p>
            <ul className="space-y-2 text-neutral-dark">
              <li className="flex items-start">
                <span className="text-google-blue mr-2">•</span>
                <span>Explore more <a href="/use-cases" className="text-google-blue hover:underline ml-1">use cases</a></span>
              </li>
              <li className="flex items-start">
                <span className="text-google-blue mr-2">•</span>
                <span>Learn about <a href="/resources#tools" className="text-google-blue hover:underline ml-1">MCP server integration</a></span>
              </li>
              <li className="flex items-start">
                <span className="text-google-blue mr-2">•</span>
                <span>Check out <a href="/troubleshooting" className="text-google-blue hover:underline ml-1">common problem solutions</a></span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}