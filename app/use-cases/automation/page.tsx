import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Automation & Scripting - Gemini CLI Use Cases',
  description: 'Automate development workflows and repetitive tasks with Gemini CLI',
}

export default function AutomationUseCasePage() {
  return (
    <div className="pt-24 pb-16">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-h1 mb-4">Automation & Scripting</h1>
          <p className="text-lg text-neutral-gray mb-12">
            Streamline your development workflow by automating repetitive tasks with intelligent AI assistance.
          </p>

          {/* Automation Examples */}
          <section className="mb-12">
            <h2 className="text-h2 mb-4">Automation Examples</h2>
            <div className="space-y-4">
              
              <div className="card">
                <h3 className="font-semibold mb-3">🔄 Batch Processing</h3>
                <div className="bg-neutral-dark text-white p-3 rounded-lg font-code text-sm">
                  <p>find . -name "*.js" | xargs -I {} gemini "Add error handling" &lt; {}</p>
                </div>
              </div>

              <div className="card">
                <h3 className="font-semibold mb-3">📦 Build Automation</h3>
                <div className="bg-neutral-dark text-white p-3 rounded-lg font-code text-sm">
                  <p>gemini "Generate build script for this project" . &gt; build.sh</p>
                </div>
              </div>

              <div className="card">
                <h3 className="font-semibold mb-3">🧪 Test Generation</h3>
                <div className="bg-neutral-dark text-white p-3 rounded-lg font-code text-sm">
                  <p>gemini "Generate unit tests for this function" &lt; utils.js &gt; tests/utils.test.js</p>
                </div>
              </div>
            </div>
          </section>

          {/* CI/CD Integration */}
          <section className="mb-12">
            <h2 className="text-h2 mb-4">CI/CD Integration</h2>
            <div className="card">
              <h3 className="font-semibold mb-3">Automated Pipeline</h3>
              <div className="bg-neutral-dark text-white p-3 rounded-lg font-code text-sm">
                <p>name: AI-Enhanced CI</p>
                <p>on: [push, pull_request]</p>
                <p>jobs:</p>
                <p>  ai_tasks:</p>
                <p>    runs-on: ubuntu-latest</p>
                <p>    steps:</p>
                <p>    - name: Code Analysis</p>
                <p>      run: gemini "Analyze code quality" . &gt; quality-report.md</p>
                <p>    - name: Generate Tests</p>
                <p>      run: gemini "Generate missing tests" . &gt; new-tests.js</p>
              </div>
            </div>
          </section>

          {/* Next Steps */}
          <div className="bg-blue-50 rounded-card p-6">
            <h3 className="text-h3 mb-3">More Automation</h3>
            <div className="flex gap-4 flex-wrap">
              <Link href="/qa/automation" className="btn-primary">
                Automation Guide
              </Link>
              <Link href="/use-cases/data-processing" className="btn-secondary">
                Data Processing
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}