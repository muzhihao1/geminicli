import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Batch Operations - Gemini CLI All in One',
  description: 'Learn how to perform batch operations efficiently with Gemini CLI',
}

export default function BatchOpsPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-h1 mb-4">Batch Operations</h1>
          <p className="text-lg text-neutral-gray mb-12">
            Process multiple files, directories, or tasks efficiently using Gemini CLI's batch operation capabilities.
          </p>

          {/* Basic Batch Operations */}
          <section className="mb-12">
            <h2 className="text-h2 mb-4">Basic Batch Operations</h2>
            <div className="card">
              <div className="space-y-4">
                <div>
                  <p className="font-semibold mb-2">Process multiple files:</p>
                  <div className="bg-neutral-dark text-white p-3 rounded-lg font-code text-sm">
                    <p>gemini batch "*.js" "Add JSDoc comments to this file"</p>
                    <p>gemini batch src/**/*.ts "Review this TypeScript file"</p>
                  </div>
                </div>
                
                <div>
                  <p className="font-semibold mb-2">Batch file analysis:</p>
                  <div className="bg-neutral-dark text-white p-3 rounded-lg font-code text-sm">
                    <p>gemini analyze --batch "*.py" "Find potential bugs"</p>
                    <p>gemini check --all "Check for code quality issues"</p>
                  </div>
                </div>
                
                <div>
                  <p className="font-semibold mb-2">Directory-wide operations:</p>
                  <div className="bg-neutral-dark text-white p-3 rounded-lg font-code text-sm">
                    <p>gemini process --dir src/ "Generate unit tests"</p>
                    <p>gemini transform --recursive "Convert to ES6 modules"</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* File Pattern Matching */}
          <section className="mb-12">
            <h2 className="text-h2 mb-4">File Pattern Matching</h2>
            
            <div className="space-y-6">
              <div className="card">
                <h3 className="font-semibold mb-3">Glob Patterns</h3>
                <div className="bg-neutral-dark text-white p-3 rounded-lg font-code text-sm">
                  <p className="text-green-400"># All JavaScript files</p>
                  <p>gemini batch "*.js" "Add error handling"</p>
                  <p className="text-green-400 mt-2"># Recursive pattern</p>
                  <p>gemini batch "**/*.py" "Add type hints"</p>
                  <p className="text-green-400 mt-2"># Multiple extensions</p>
                  <p>gemini batch "*.{`{`}js,ts,jsx,tsx{`}`}" "Optimize imports"</p>
                  <p className="text-green-400 mt-2"># Exclude patterns</p>
                  <p>gemini batch "src/**/*.js" --exclude "*.test.js" "Document functions"</p>
                </div>
              </div>

              <div className="card">
                <h3 className="font-semibold mb-3">Advanced Filtering</h3>
                <div className="bg-neutral-dark text-white p-3 rounded-lg font-code text-sm">
                  <p className="text-green-400"># Filter by file size</p>
                  <p>gemini batch --max-size 1MB "*.log" "Analyze log patterns"</p>
                  <p className="text-green-400 mt-2"># Filter by modification time</p>
                  <p>gemini batch --newer-than 7d "*.js" "Check recent changes"</p>
                  <p className="text-green-400 mt-2"># Filter by content</p>
                  <p>gemini batch --contains "TODO" "*.md" "Summarize TODO items"</p>
                </div>
              </div>
            </div>
          </section>

          {/* Parallel Processing */}
          <section className="mb-12">
            <h2 className="text-h2 mb-4">Parallel Processing</h2>
            <div className="card">
              <div className="space-y-4">
                <div>
                  <p className="font-semibold mb-2">Control concurrency:</p>
                  <div className="bg-neutral-dark text-white p-3 rounded-lg font-code text-sm">
                    <p className="text-green-400"># Default parallel processing</p>
                    <p>gemini batch --parallel "*.js" "Review code"</p>
                    <p className="text-green-400 mt-2"># Limit concurrent operations</p>
                    <p>gemini batch --parallel --max-workers 4 "*.py" "Add docstrings"</p>
                    <p className="text-green-400 mt-2"># Sequential processing</p>
                    <p>gemini batch --sequential "*.md" "Proofread content"</p>
                  </div>
                </div>
                
                <div>
                  <p className="font-semibold mb-2">Progress monitoring:</p>
                  <div className="bg-neutral-dark text-white p-3 rounded-lg font-code text-sm">
                    <p>gemini batch --progress "*.js" "Analyze complexity"</p>
                    <p>gemini batch --verbose --stats "*.py" "Generate docs"</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Batch Templates */}
          <section className="mb-12">
            <h2 className="text-h2 mb-4">Batch Operation Templates</h2>
            
            <div className="space-y-6">
              <div className="card">
                <h3 className="font-semibold mb-3">Code Quality Templates</h3>
                <div className="bg-neutral-dark text-white p-3 rounded-lg font-code text-sm">
                  <p className="text-green-400"># Code review template</p>
                  <p>gemini batch "src/**/*.js" --template code-review</p>
                  <p className="text-green-400 mt-2"># Security audit template</p>
                  <p>gemini batch "*.py" --template security-check</p>
                  <p className="text-green-400 mt-2"># Performance analysis template</p>
                  <p>gemini batch "*.ts" --template performance-review</p>
                </div>
              </div>

              <div className="card">
                <h3 className="font-semibold mb-3">Documentation Templates</h3>
                <div className="bg-neutral-dark text-white p-3 rounded-lg font-code text-sm">
                  <p className="text-green-400"># API documentation</p>
                  <p>gemini batch "api/**/*.js" --template api-docs</p>
                  <p className="text-green-400 mt-2"># README generation</p>
                  <p>gemini batch "*/README.md" --template readme-update</p>
                  <p className="text-green-400 mt-2"># Changelog generation</p>
                  <p>gemini batch --git-diff --template changelog</p>
                </div>
              </div>

              <div className="card">
                <h3 className="font-semibold mb-3">Custom Templates</h3>
                <div className="bg-neutral-dark text-white p-3 rounded-lg font-code text-sm">
                  <p className="text-green-400"># Create custom template</p>
                  <p>gemini template create my-review "Review this code for: {`{criteria}`}"</p>
                  <p className="text-green-400 mt-2"># Use custom template</p>
                  <p>gemini batch "*.js" --template my-review --criteria "bugs,performance"</p>
                </div>
              </div>
            </div>
          </section>

          {/* Output Management */}
          <section className="mb-12">
            <h2 className="text-h2 mb-4">Output Management</h2>
            
            <div className="space-y-6">
              <div className="card">
                <h3 className="font-semibold mb-3">Output Formats</h3>
                <div className="bg-neutral-dark text-white p-3 rounded-lg font-code text-sm">
                  <p className="text-green-400"># Individual file outputs</p>
                  <p>gemini batch "*.js" --output-per-file "Review code"</p>
                  <p className="text-green-400 mt-2"># Combined report</p>
                  <p>gemini batch "*.py" --output combined.md "Analyze code"</p>
                  <p className="text-green-400 mt-2"># JSON summary</p>
                  <p>gemini batch "*.ts" --output-json results.json "Find issues"</p>
                </div>
              </div>

              <div className="card">
                <h3 className="font-semibold mb-3">Result Organization</h3>
                <div className="bg-neutral-dark text-white p-3 rounded-lg font-code text-sm">
                  <p className="text-green-400"># Organize by file</p>
                  <p>gemini batch --group-by file "*.js" "Document functions"</p>
                  <p className="text-green-400 mt-2"># Organize by category</p>
                  <p>gemini batch --group-by category "*.py" "Find issues"</p>
                  <p className="text-green-400 mt-2"># Sort results</p>
                  <p>gemini batch --sort-by severity "*.ts" "Security review"</p>
                </div>
              </div>
            </div>
          </section>

          {/* Error Handling */}
          <section className="mb-12">
            <h2 className="text-h2 mb-4">Error Handling and Recovery</h2>
            <div className="card">
              <div className="space-y-4">
                <div>
                  <p className="font-semibold mb-2">Error handling strategies:</p>
                  <div className="bg-neutral-dark text-white p-3 rounded-lg font-code text-sm">
                    <p className="text-green-400"># Continue on errors</p>
                    <p>gemini batch --continue-on-error "*.js" "Process files"</p>
                    <p className="text-green-400 mt-2"># Retry failed operations</p>
                    <p>gemini batch --retry 3 "*.py" "Complex analysis"</p>
                    <p className="text-green-400 mt-2"># Fail fast</p>
                    <p>gemini batch --fail-fast "*.ts" "Critical validation"</p>
                  </div>
                </div>
                
                <div>
                  <p className="font-semibold mb-2">Resume interrupted operations:</p>
                  <div className="bg-neutral-dark text-white p-3 rounded-lg font-code text-sm">
                    <p className="text-green-400"># Save progress</p>
                    <p>gemini batch --save-progress batch.state "*.js" "Long operation"</p>
                    <p className="text-green-400 mt-2"># Resume from checkpoint</p>
                    <p>gemini batch --resume batch.state</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Practical Examples */}
          <section className="mb-12">
            <h2 className="text-h2 mb-4">Practical Examples</h2>
            
            <div className="space-y-6">
              <div className="card">
                <h3 className="font-semibold mb-3">Code Migration</h3>
                <div className="bg-neutral-dark text-white p-3 rounded-lg font-code text-sm">
                  <p className="text-green-400"># Convert CommonJS to ES6 modules</p>
                  <p>gemini batch "src/**/*.js" "Convert require() statements to import/export"</p>
                  <p className="text-green-400 mt-2"># Update deprecated API calls</p>
                  <p>gemini batch "*.js" "Replace deprecated jQuery methods with modern alternatives"</p>
                </div>
              </div>

              <div className="card">
                <h3 className="font-semibold mb-3">Documentation Generation</h3>
                <div className="bg-neutral-dark text-white p-3 rounded-lg font-code text-sm">
                  <p className="text-green-400"># Generate function documentation</p>
                  <p>gemini batch "src/**/*.py" "Add comprehensive docstrings to all functions"</p>
                  <p className="text-green-400 mt-2"># Create API documentation</p>
                  <p>gemini batch "api/*.js" --output docs/api.md "Generate API documentation"</p>
                </div>
              </div>

              <div className="card">
                <h3 className="font-semibold mb-3">Quality Assurance</h3>
                <div className="bg-neutral-dark text-white p-3 rounded-lg font-code text-sm">
                  <p className="text-green-400"># Security vulnerability scan</p>
                  <p>gemini batch "**/*.js" "Identify potential security vulnerabilities"</p>
                  <p className="text-green-400 mt-2"># Performance optimization</p>
                  <p>gemini batch "src/**/*.ts" "Suggest performance optimizations"</p>
                </div>
              </div>

              <div className="card">
                <h3 className="font-semibold mb-3">Test Generation</h3>
                <div className="bg-neutral-dark text-white p-3 rounded-lg font-code text-sm">
                  <p className="text-green-400"># Generate unit tests</p>
                  <p>gemini batch "src/**/*.js" --output "tests/" "Generate comprehensive unit tests"</p>
                  <p className="text-green-400 mt-2"># Create integration tests</p>
                  <p>gemini batch "api/**/*.py" "Generate integration test scenarios"</p>
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
                  <li>• Test batch operations on a small subset first</li>
                  <li>• Use version control before large batch operations</li>
                  <li>• Monitor resource usage during large batches</li>
                  <li>• Use specific file patterns to avoid unwanted files</li>
                  <li>• Save progress for long-running operations</li>
                </ul>
              </div>
              
              <div className="card">
                <h3 className="font-semibold mb-2 text-red-600">❌ Don't</h3>
                <ul className="space-y-2 text-sm">
                  <li>• Run batch operations on critical files without backups</li>
                  <li>• Use overly broad patterns that include system files</li>
                  <li>• Ignore error messages and warnings</li>
                  <li>• Run too many concurrent operations on limited resources</li>
                  <li>• Skip validation of results</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Next Steps */}
          <div className="bg-blue-50 rounded-card p-6">
            <h3 className="text-h3 mb-3">Next Steps</h3>
            <p className="text-neutral-gray mb-4">
              Ready to explore more advanced Gemini CLI capabilities:
            </p>
            <div className="flex gap-4 flex-wrap">
              <Link href="/qa/automation" className="btn-primary">
                Automation
              </Link>
              <Link href="/qa/custom-tools" className="btn-secondary">
                Custom Tools
              </Link>
              <Link href="/tutorials/automation" className="btn-secondary">
                Automation Tutorial
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}