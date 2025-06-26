import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Authentication Error Fixes - Gemini CLI All in One',
  description: 'Troubleshoot and fix authentication errors when using Gemini CLI with Google AI API',
}

export default function AuthErrorsPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-h1 mb-4">Authentication Error Fixes</h1>
          <p className="text-lg text-neutral-gray mb-12">
            Resolve authentication issues and API key problems when using Gemini CLI.
          </p>

          {/* Common Auth Errors */}
          <section className="mb-12">
            <h2 className="text-h2 mb-4">Common Authentication Errors</h2>
            <div className="space-y-6">
              
              <div className="card">
                <h3 className="font-semibold mb-3 text-red-600">❌ "API key not provided"</h3>
                <div className="bg-red-50 p-4 rounded-lg border border-red-200 mb-4">
                  <p className="text-sm text-red-700">
                    <strong>Error:</strong> GOOGLE_AI_API_KEY environment variable is not set or accessible
                  </p>
                </div>
                
                <h4 className="font-semibold mb-2">Solutions:</h4>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm mb-2"><strong>1. Set environment variable:</strong></p>
                    <div className="bg-neutral-dark text-white p-3 rounded-lg font-code text-sm">
                      <p className="text-green-400"># Linux/macOS</p>
                      <p>export GOOGLE_AI_API_KEY="your_api_key_here"</p>
                      <p className="text-green-400 mt-2"># Windows (Command Prompt)</p>
                      <p>set GOOGLE_AI_API_KEY=your_api_key_here</p>
                      <p className="text-green-400 mt-2"># Windows (PowerShell)</p>
                      <p>$env:GOOGLE_AI_API_KEY="your_api_key_here"</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card">
                <h3 className="font-semibold mb-3 text-red-600">❌ "Invalid API key"</h3>
                <div className="bg-red-50 p-4 rounded-lg border border-red-200 mb-4">
                  <p className="text-sm text-red-700">
                    <strong>Error:</strong> API key format is incorrect or key is invalid
                  </p>
                </div>
                
                <h4 className="font-semibold mb-2">Solutions:</h4>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm mb-2"><strong>1. Verify API key format:</strong></p>
                    <ul className="list-disc list-inside text-sm text-neutral-gray space-y-1">
                      <li>Should start with "AIza" followed by 35 characters</li>
                      <li>Total length should be 39 characters</li>
                      <li>Contains only alphanumeric characters and dashes</li>
                    </ul>
                  </div>
                  
                  <div>
                    <p className="text-sm mb-2"><strong>2. Generate a new API key:</strong></p>
                    <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
                      <p className="text-sm">
                        Visit{' '}
                        <a href="https://aistudio.google.com/app/apikey" target="_blank" rel="noopener noreferrer" 
                           className="text-google-blue hover:underline">
                          Google AI Studio
                        </a>{' '}
                        to create a new API key.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Troubleshooting */}
          <section className="mb-12">
            <h2 className="text-h2 mb-4">Quick Fixes</h2>
            <div className="space-y-4">
              <div className="card">
                <h3 className="font-semibold mb-2">Check environment variable</h3>
                <div className="bg-neutral-dark text-white p-3 rounded-lg font-code text-sm">
                  <p>echo $GOOGLE_AI_API_KEY</p>
                </div>
              </div>
            </div>
          </section>

          {/* Next Steps */}
          <div className="bg-blue-50 rounded-card p-6">
            <h3 className="text-h3 mb-3">Next Steps</h3>
            <p className="text-neutral-gray mb-4">
              Still having authentication issues? Try these resources:
            </p>
            <div className="flex gap-4 flex-wrap">
              <Link href="/qa/get-api-key" className="btn-primary">
                Get API Key Guide
              </Link>
              <Link href="/qa/configure-api-key" className="btn-secondary">
                Configure API Key
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}