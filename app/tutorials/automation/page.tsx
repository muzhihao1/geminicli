import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Automation Tutorial - Gemini CLI',
  description: 'Build automated workflows and scripts using Gemini CLI',
}

export default function AutomationTutorial() {
  return (
    <div className="pt-24 pb-16">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-h1 mb-4">Automation Tutorial</h1>
          <p className="text-lg text-neutral-gray mb-12">
            Learn how to build powerful automation workflows that leverage Gemini CLI's AI capabilities.
          </p>

          {/* Automation Examples */}
          <section className="mb-12">
            <h2 className="text-h2 mb-6">Automation Examples</h2>
            <div className="space-y-6">
              
              <div className="card">
                <h3 className="text-h4 mb-3">🔄 Code Review Automation</h3>
                <div className="bg-neutral-dark text-white p-3 rounded-lg font-code text-sm mb-3">
                  <p>#!/bin/bash</p>
                  <p># auto-review.sh</p>
                  <p>git diff --name-only HEAD~1 | while read file; do</p>
                  <p>  gemini "Review this code for issues" &lt; "$file" &gt; "reviews/$file.review"</p>
                  <p>done</p>
                </div>
                <p className="text-sm text-neutral-gray">
                  Automatically review code changes and generate review reports.
                </p>
              </div>

              <div className="card">
                <h3 className="text-h4 mb-3">📚 Documentation Generation</h3>
                <div className="bg-neutral-dark text-white p-3 rounded-lg font-code text-sm mb-3">
                  <p>#!/bin/bash</p>
                  <p># generate-docs.sh</p>
                  <p>find src -name "*.js" | while read file; do</p>
                  <p>  gemini "Generate documentation" &lt; "$file" &gt; "docs/$(basename "$file").md"</p>
                  <p>done</p>
                </div>
                <p className="text-sm text-neutral-gray">
                  Keep documentation up-to-date automatically.
                </p>
              </div>

              <div className="card">
                <h3 className="text-h4 mb-3">🧪 Test Generation</h3>
                <div className="bg-neutral-dark text-white p-3 rounded-lg font-code text-sm mb-3">
                  <p>#!/bin/bash</p>
                  <p># generate-tests.sh</p>
                  <p>for file in src/*.js; do</p>
                  <p>  gemini "Generate unit tests" &lt; "$file" &gt; "tests/$(basename "$file" .js).test.js"</p>
                  <p>done</p>
                </div>
                <p className="text-sm text-neutral-gray">
                  Automatically create comprehensive test suites.
                </p>
              </div>
            </div>
          </section>

          {/* CI/CD Integration */}
          <section className="mb-12">
            <h2 className="text-h2 mb-6">CI/CD Integration</h2>
            <div className="card">
              <h3 className="text-h4 mb-3">GitHub Actions Workflow</h3>
              <div className="bg-neutral-dark text-white p-3 rounded-lg font-code text-sm">
                <p>name: AI Automation</p>
                <p>on: [push, pull_request]</p>
                <p>jobs:</p>
                <p>  ai_tasks:</p>
                <p>    runs-on: ubuntu-latest</p>
                <p>    steps:</p>
                <p>    - uses: actions/checkout@v3</p>
                <p>    - name: Install Gemini CLI</p>
                <p>      run: npm install -g gemini-cli</p>
                <p>    - name: Run AI Analysis</p>
                <p>      run: |</p>
                <p>        gemini "Analyze code quality" . &gt; quality-report.md</p>
                <p>        gemini "Generate changelog" . &gt; CHANGELOG.md</p>
              </div>
            </div>
          </section>

          {/* Next Steps */}
          <div className="bg-blue-50 rounded-card p-6">
            <h3 className="text-h3 mb-3">Next Steps</h3>
            <div className="flex gap-4 flex-wrap">
              <Link href="/qa/automation" className="btn-primary">
                Automation Q&A
              </Link>
              <Link href="/use-cases/automation" className="btn-secondary">
                Automation Use Cases
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}