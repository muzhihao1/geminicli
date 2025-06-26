import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Documentation Generation - Gemini CLI Use Cases',
  description: 'Automatically generate comprehensive documentation using Gemini CLI',
}

export default function DocumentationPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-h1 mb-4">Documentation Generation</h1>
          <p className="text-lg text-neutral-gray mb-12">
            Automatically generate comprehensive, up-to-date documentation for your codebase using Gemini CLI's AI capabilities.
          </p>

          {/* Quick Examples */}
          <section className="mb-12">
            <h2 className="text-h2 mb-4">Quick Examples</h2>
            <div className="space-y-4">
              
              <div className="card">
                <h3 className="font-semibold mb-3">📄 README Generation</h3>
                <div className="bg-neutral-dark text-white p-3 rounded-lg font-code text-sm">
                  <p>gemini "Generate a comprehensive README for this project" . &gt; README.md</p>
                </div>
              </div>

              <div className="card">
                <h3 className="font-semibold mb-3">📚 API Documentation</h3>
                <div className="bg-neutral-dark text-white p-3 rounded-lg font-code text-sm">
                  <p>gemini "Generate API documentation from this code" &lt; api.js &gt; docs/api.md</p>
                </div>
              </div>

              <div className="card">
                <h3 className="font-semibold mb-3">💬 Code Comments</h3>
                <div className="bg-neutral-dark text-white p-3 rounded-lg font-code text-sm">
                  <p>gemini "Add comprehensive JSDoc comments" &lt; functions.js</p>
                </div>
              </div>
            </div>
          </section>

          {/* Documentation Types */}
          <section className="mb-12">
            <h2 className="text-h2 mb-4">Documentation Types</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <div className="card">
                <h3 className="font-semibold mb-3">🔧 Technical Documentation</h3>
                <ul className="space-y-2 text-sm">
                  <li>• API references</li>
                  <li>• Function documentation</li>
                  <li>• Code architecture guides</li>
                  <li>• Installation instructions</li>
                </ul>
              </div>

              <div className="card">
                <h3 className="font-semibold mb-3">👥 User Documentation</h3>
                <ul className="space-y-2 text-sm">
                  <li>• User guides and tutorials</li>
                  <li>• Getting started guides</li>
                  <li>• FAQ sections</li>
                  <li>• Troubleshooting guides</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Automation Scripts */}
          <section className="mb-12">
            <h2 className="text-h2 mb-4">Automation Scripts</h2>
            <div className="card">
              <h3 className="font-semibold mb-3">Batch Documentation Generator</h3>
              <div className="bg-neutral-dark text-white p-3 rounded-lg font-code text-sm">
                <p>#!/bin/bash</p>
                <p># generate-docs.sh</p>
                <p>mkdir -p docs</p>
                <p>find src -name "*.js" -o -name "*.ts" | while read file; do</p>
                <p>  echo "Documenting $file..."</p>
                <p>  docfile="docs/$(basename "$file" .js).md"</p>
                <p>  gemini "Generate comprehensive documentation" &lt; "$file" &gt; "$docfile"</p>
                <p>done</p>
                <p>echo "Documentation generated in docs/ directory"</p>
              </div>
            </div>
          </section>

          {/* Next Steps */}
          <div className="bg-blue-50 rounded-card p-6">
            <h3 className="text-h3 mb-3">More Use Cases</h3>
            <div className="flex gap-4 flex-wrap">
              <Link href="/use-cases/learning" className="btn-primary">
                Learning & Education
              </Link>
              <Link href="/use-cases/automation" className="btn-secondary">
                Automation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}