import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'File Operations - Gemini CLI All in One',
  description: 'Learn how to work with files using Gemini CLI for analysis, processing, and automation',
}

export default function FileOperationsPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-h1 mb-4">File Operations</h1>
          <p className="text-lg text-neutral-gray mb-12">
            Work with files efficiently using Gemini CLI for reading, analyzing, processing, and automating file-related tasks.
          </p>

          {/* Reading Files */}
          <section className="mb-12">
            <h2 className="text-h2 mb-4">Reading and Analyzing Files</h2>
            <div className="space-y-4">
              
              <div className="card">
                <h3 className="font-semibold mb-3">Read Single File</h3>
                <div className="bg-neutral-dark text-white p-3 rounded-lg font-code text-sm">
                  <p>gemini "Summarize this file" &lt; document.md</p>
                  <p>gemini "What does this code do?" &lt; script.js</p>
                  <p>gemini "Find issues in this configuration" &lt; config.json</p>
                </div>
              </div>

              <div className="card">
                <h3 className="font-semibold mb-3">Process Multiple Files</h3>
                <div className="bg-neutral-dark text-white p-3 rounded-lg font-code text-sm">
                  <p>gemini "Compare these two files" file1.js file2.js</p>
                  <p>gemini batch "*.py" "Add docstrings to functions"</p>
                </div>
              </div>
            </div>
          </section>

          {/* File Processing */}
          <section className="mb-12">
            <h2 className="text-h2 mb-4">File Processing Operations</h2>
            <div className="space-y-4">
              
              <div className="card">
                <h3 className="font-semibold mb-3">Content Analysis</h3>
                <div className="bg-neutral-dark text-white p-3 rounded-lg font-code text-sm">
                  <p>gemini "Extract key information from this log" &lt; app.log</p>
                  <p>gemini "Count functions in this file" &lt; large-script.js</p>
                  <p>gemini "Find security issues in this code" &lt; auth.py</p>
                </div>
              </div>

              <div className="card">
                <h3 className="font-semibold mb-3">File Transformation</h3>
                <div className="bg-neutral-dark text-white p-3 rounded-lg font-code text-sm">
                  <p>gemini "Convert this JSON to YAML" &lt; data.json &gt; data.yaml</p>
                  <p>gemini "Generate README from this code" &lt; main.py &gt; README.md</p>
                </div>
              </div>
            </div>
          </section>

          {/* File Organization */}
          <section className="mb-12">
            <h2 className="text-h2 mb-4">File Organization and Management</h2>
            <div className="space-y-4">
              
              <div className="card">
                <h3 className="font-semibold mb-3">Project Analysis</h3>
                <div className="bg-neutral-dark text-white p-3 rounded-lg font-code text-sm">
                  <p>gemini "Analyze the structure of this project" .</p>
                  <p>gemini "Suggest improvements to file organization" .</p>
                </div>
              </div>

              <div className="card">
                <h3 className="font-semibold mb-3">Documentation Generation</h3>
                <div className="bg-neutral-dark text-white p-3 rounded-lg font-code text-sm">
                  <p>gemini "Create documentation for this module" &lt; module.py</p>
                  <p>gemini "Generate API docs from this code" &lt; api.js</p>
                </div>
              </div>
            </div>
          </section>

          {/* Common Use Cases */}
          <section className="mb-12">
            <h2 className="text-h2 mb-4">Common File Operation Use Cases</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <div className="card">
                <h3 className="font-semibold mb-2">Log Analysis</h3>
                <p className="text-sm text-neutral-gray">Extract insights from application logs and error reports</p>
              </div>

              <div className="card">
                <h3 className="font-semibold mb-2">Code Review</h3>
                <p className="text-sm text-neutral-gray">Automated code quality assessment and improvement suggestions</p>
              </div>

              <div className="card">
                <h3 className="font-semibold mb-2">Configuration Validation</h3>
                <p className="text-sm text-neutral-gray">Check configuration files for errors and best practices</p>
              </div>

              <div className="card">
                <h3 className="font-semibold mb-2">Data Processing</h3>
                <p className="text-sm text-neutral-gray">Transform and analyze data files in various formats</p>
              </div>
            </div>
          </section>

          {/* Next Steps */}
          <div className="bg-blue-50 rounded-card p-6">
            <h3 className="text-h3 mb-3">Next Steps</h3>
            <p className="text-neutral-gray mb-4">
              Explore more advanced file operations:
            </p>
            <div className="flex gap-4 flex-wrap">
              <Link href="/qa/batch-ops" className="btn-primary">
                Batch Operations
              </Link>
              <Link href="/qa/automation" className="btn-secondary">
                Automation
              </Link>
              <Link href="/qa/search" className="btn-secondary">
                Search Files
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}