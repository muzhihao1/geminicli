import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'First Command - Gemini CLI All in One',
  description: 'Run your first Gemini CLI command and verify your setup is working correctly',
}

export default function FirstCommandPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-h1 mb-4">Run Your First Command</h1>
          <p className="text-lg text-neutral-gray mb-12">
            Verify your Gemini CLI setup by running your first command and getting familiar with basic usage.
          </p>

          {/* Pre-flight Check */}
          <section className="mb-12">
            <h2 className="text-h2 mb-4">Pre-flight Check</h2>
            <div className="card">
              <p className="mb-4">Before running your first command, ensure you have:</p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-google-green mr-2">✓</span>
                  <span>Gemini CLI installed</span>
                </li>
                <li className="flex items-start">
                  <span className="text-google-green mr-2">✓</span>
                  <span>Google AI API key configured</span>
                </li>
                <li className="flex items-start">
                  <span className="text-google-green mr-2">✓</span>
                  <span>Internet connection active</span>
                </li>
              </ul>
            </div>
          </section>

          {/* First Command */}
          <section className="mb-12">
            <h2 className="text-h2 mb-4">Your First Command</h2>
            <div className="card">
              <p className="mb-4">Let's start with a simple test:</p>
              <div className="bg-neutral-dark text-white p-4 rounded-lg font-code text-sm">
                <p>gemini "Hello, world! Can you help me with coding?"</p>
              </div>
              <p className="text-sm text-neutral-gray mt-3">
                This command sends a simple prompt to verify your setup is working.
              </p>
            </div>
          </section>

          {/* Common Commands */}
          <section className="mb-12">
            <h2 className="text-h2 mb-4">Common Commands</h2>
            <div className="space-y-4">
              
              <div className="card">
                <h3 className="font-semibold mb-2">Check Version</h3>
                <div className="bg-neutral-dark text-white p-3 rounded-lg font-code text-sm">
                  <p>gemini --version</p>
                </div>
              </div>

              <div className="card">
                <h3 className="font-semibold mb-2">Get Help</h3>
                <div className="bg-neutral-dark text-white p-3 rounded-lg font-code text-sm">
                  <p>gemini --help</p>
                </div>
              </div>

              <div className="card">
                <h3 className="font-semibold mb-2">Explain Code</h3>
                <div className="bg-neutral-dark text-white p-3 rounded-lg font-code text-sm">
                  <p>gemini "Explain this code" &lt; script.js</p>
                </div>
              </div>
            </div>
          </section>

          {/* Next Steps */}
          <div className="bg-blue-50 rounded-card p-6">
            <h3 className="text-h3 mb-3">Next Steps</h3>
            <p className="text-neutral-gray mb-4">
              Great! Now explore more advanced features:
            </p>
            <div className="flex gap-4 flex-wrap">
              <Link href="/qa/code-editing" className="btn-primary">
                Code Editing
              </Link>
              <Link href="/qa/file-operations" className="btn-secondary">
                File Operations
              </Link>
              <Link href="/use-cases" className="btn-secondary">
                Use Cases
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}