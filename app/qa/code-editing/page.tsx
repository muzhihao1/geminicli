import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Code Editing with Gemini CLI - All in One Guide',
  description: 'Learn how to use Gemini CLI for intelligent code editing, refactoring, and improvement',
}

export default function CodeEditingPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-h1 mb-4">Code Editing with Gemini CLI</h1>
          <p className="text-lg text-neutral-gray mb-12">
            Use Gemini CLI's AI-powered capabilities to edit, refactor, and improve your code with intelligent suggestions.
          </p>

          {/* Basic Code Editing */}
          <section className="mb-12">
            <h2 className="text-h2 mb-4">Basic Code Editing</h2>
            <div className="space-y-4">
              
              <div className="card">
                <h3 className="font-semibold mb-3">Edit Code with Prompts</h3>
                <div className="bg-neutral-dark text-white p-3 rounded-lg font-code text-sm">
                  <p>gemini "Add error handling to this function" &lt; script.js</p>
                  <p>gemini "Optimize this code for performance" &lt; app.py</p>
                  <p>gemini "Convert this to TypeScript" &lt; component.js</p>
                </div>
              </div>

              <div className="card">
                <h3 className="font-semibold mb-3">Code Explanation</h3>
                <div className="bg-neutral-dark text-white p-3 rounded-lg font-code text-sm">
                  <p>gemini "Explain what this code does" &lt; complex-function.js</p>
                  <p>gemini "Add comments to explain this algorithm" &lt; sort.py</p>
                </div>
              </div>
            </div>
          </section>

          {/* Advanced Features */}
          <section className="mb-12">
            <h2 className="text-h2 mb-4">Advanced Editing Features</h2>
            <div className="space-y-4">
              
              <div className="card">
                <h3 className="font-semibold mb-3">Code Refactoring</h3>
                <div className="bg-neutral-dark text-white p-3 rounded-lg font-code text-sm">
                  <p>gemini "Refactor this code to use modern ES6 features" &lt; legacy.js</p>
                  <p>gemini "Extract reusable functions from this code" &lt; monolith.py</p>
                </div>
              </div>

              <div className="card">
                <h3 className="font-semibold mb-3">Bug Fixing</h3>
                <div className="bg-neutral-dark text-white p-3 rounded-lg font-code text-sm">
                  <p>gemini "Find and fix bugs in this code" &lt; buggy-script.js</p>
                  <p>gemini "Why is this code not working as expected?" &lt; broken.py</p>
                </div>
              </div>
            </div>
          </section>

          {/* Best Practices */}
          <section className="mb-12">
            <h2 className="text-h2 mb-4">Best Practices</h2>
            <div className="card">
              <ul className="space-y-2">
                <li>• Be specific in your prompts</li>
                <li>• Review AI suggestions before applying</li>
                <li>• Test code changes thoroughly</li>
                <li>• Use version control to track changes</li>
              </ul>
            </div>
          </section>

          {/* Next Steps */}
          <div className="bg-blue-50 rounded-card p-6">
            <h3 className="text-h3 mb-3">Learn More</h3>
            <p className="text-neutral-gray mb-4">
              Explore advanced code editing techniques:
            </p>
            <div className="flex gap-4 flex-wrap">
              <Link href="/qa/file-operations" className="btn-primary">
                File Operations
              </Link>
              <Link href="/qa/batch-ops" className="btn-secondary">
                Batch Operations
              </Link>
              <Link href="/tutorials/advanced-editing" className="btn-secondary">
                Advanced Tutorial
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}