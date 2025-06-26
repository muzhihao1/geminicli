import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Search Functionality - Gemini CLI All in One',
  description: 'Master the search functionality in Gemini CLI for finding information and resources quickly',
}

export default function SearchPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-h1 mb-4">Search Functionality</h1>
          <p className="text-lg text-neutral-gray mb-12">
            Learn how to effectively use Gemini CLI's search capabilities to find information, code, and resources quickly.
          </p>

          {/* Basic Search */}
          <section className="mb-12">
            <h2 className="text-h2 mb-4">Basic Search Commands</h2>
            <div className="card">
              <div className="space-y-4">
                <div>
                  <p className="font-semibold mb-2">Simple text search:</p>
                  <div className="bg-neutral-dark text-white p-3 rounded-lg font-code text-sm">
                    <p>gemini search "function definition"</p>
                    <p>gemini find "error handling"</p>
                  </div>
                </div>
                
                <div>
                  <p className="font-semibold mb-2">File-specific search:</p>
                  <div className="bg-neutral-dark text-white p-3 rounded-lg font-code text-sm">
                    <p>gemini search --file "*.js" "async function"</p>
                    <p>gemini search --ext py "class definition"</p>
                  </div>
                </div>
                
                <div>
                  <p className="font-semibold mb-2">Directory search:</p>
                  <div className="bg-neutral-dark text-white p-3 rounded-lg font-code text-sm">
                    <p>gemini search --dir src/ "component"</p>
                    <p>gemini search --path ./lib "utility function"</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Advanced Search */}
          <section className="mb-12">
            <h2 className="text-h2 mb-4">Advanced Search Options</h2>
            
            <div className="space-y-6">
              <div className="card">
                <h3 className="font-semibold mb-3">Pattern Matching</h3>
                <div className="bg-neutral-dark text-white p-3 rounded-lg font-code text-sm">
                  <p className="text-green-400"># Regex search</p>
                  <p>gemini search --regex "function\s+\w+\("</p>
                  <p className="text-green-400 mt-2"># Wildcard search</p>
                  <p>gemini search --glob "*test*.js"</p>
                  <p className="text-green-400 mt-2"># Case-insensitive</p>
                  <p>gemini search --ignore-case "ERROR"</p>
                </div>
              </div>

              <div className="card">
                <h3 className="font-semibold mb-3">Content Type Filters</h3>
                <div className="bg-neutral-dark text-white p-3 rounded-lg font-code text-sm">
                  <p className="text-green-400"># Code files only</p>
                  <p>gemini search --code "import statement"</p>
                  <p className="text-green-400 mt-2"># Documentation files</p>
                  <p>gemini search --docs "API reference"</p>
                  <p className="text-green-400 mt-2"># Configuration files</p>
                  <p>gemini search --config "database connection"</p>
                </div>
              </div>

              <div className="card">
                <h3 className="font-semibold mb-3">Search Scope</h3>
                <div className="bg-neutral-dark text-white p-3 rounded-lg font-code text-sm">
                  <p className="text-green-400"># Include/exclude patterns</p>
                  <p>gemini search --include "*.ts,*.js" "interface"</p>
                  <p>gemini search --exclude "node_modules,dist" "function"</p>
                  <p className="text-green-400 mt-2"># Max depth</p>
                  <p>gemini search --max-depth 3 "component"</p>
                </div>
              </div>
            </div>
          </section>

          {/* Search with Context */}
          <section className="mb-12">
            <h2 className="text-h2 mb-4">Contextual Search</h2>
            <div className="card">
              <div className="space-y-4">
                <div>
                  <p className="font-semibold mb-2">Search with surrounding context:</p>
                  <div className="bg-neutral-dark text-white p-3 rounded-lg font-code text-sm">
                    <p className="text-green-400"># Show 3 lines before and after match</p>
                    <p>gemini search --context 3 "error handling"</p>
                    <p className="text-green-400 mt-2"># Show 5 lines before, 2 after</p>
                    <p>gemini search --before 5 --after 2 "function"</p>
                  </div>
                </div>
                
                <div>
                  <p className="font-semibold mb-2">Semantic search:</p>
                  <div className="bg-neutral-dark text-white p-3 rounded-lg font-code text-sm">
                    <p>gemini search --semantic "database connection logic"</p>
                    <p>gemini search --meaning "user authentication flow"</p>
                  </div>
                </div>
                
                <div>
                  <p className="font-semibold mb-2">Related code search:</p>
                  <div className="bg-neutral-dark text-white p-3 rounded-lg font-code text-sm">
                    <p>gemini search --related "getUserProfile function"</p>
                    <p>gemini search --similar "error handling pattern"</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Interactive Search */}
          <section className="mb-12">
            <h2 className="text-h2 mb-4">Interactive Search</h2>
            <div className="card">
              <div className="space-y-4">
                <div>
                  <p className="font-semibold mb-2">Launch interactive search mode:</p>
                  <div className="bg-neutral-dark text-white p-3 rounded-lg font-code text-sm">
                    <p>gemini search --interactive</p>
                    <p>gemini isearch  # Shorthand</p>
                  </div>
                </div>
                
                <div>
                  <p className="font-semibold mb-2">Interactive search features:</p>
                  <ul className="space-y-2 text-sm">
                    <li>• Real-time search as you type</li>
                    <li>• Preview file contents</li>
                    <li>• Navigate results with arrow keys</li>
                    <li>• Open files directly in your editor</li>
                    <li>• Refine search with filters</li>
                  </ul>
                </div>
                
                <div>
                  <p className="font-semibold mb-2">Keyboard shortcuts in interactive mode:</p>
                  <div className="bg-neutral-light p-3 rounded-lg text-sm">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p><kbd className="px-2 py-1 bg-white rounded border">↑↓</kbd> Navigate results</p>
                        <p><kbd className="px-2 py-1 bg-white rounded border">Enter</kbd> Open file</p>
                        <p><kbd className="px-2 py-1 bg-white rounded border">Tab</kbd> Preview</p>
                      </div>
                      <div>
                        <p><kbd className="px-2 py-1 bg-white rounded border">Ctrl+F</kbd> Add filter</p>
                        <p><kbd className="px-2 py-1 bg-white rounded border">Esc</kbd> Exit</p>
                        <p><kbd className="px-2 py-1 bg-white rounded border">F1</kbd> Help</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Search Output Formats */}
          <section className="mb-12">
            <h2 className="text-h2 mb-4">Search Output Formats</h2>
            
            <div className="space-y-6">
              <div className="card">
                <h3 className="font-semibold mb-3">Output Format Options</h3>
                <div className="bg-neutral-dark text-white p-3 rounded-lg font-code text-sm">
                  <p className="text-green-400"># Default format</p>
                  <p>gemini search "function"</p>
                  <p className="text-green-400 mt-2"># JSON output</p>
                  <p>gemini search --json "class" | jq '.results[]'</p>
                  <p className="text-green-400 mt-2"># CSV output</p>
                  <p>gemini search --csv "import" &gt; results.csv</p>
                  <p className="text-green-400 mt-2"># Markdown report</p>
                  <p>gemini search --markdown "TODO" &gt; todos.md</p>
                </div>
              </div>

              <div className="card">
                <h3 className="font-semibold mb-3">Detailed Output</h3>
                <div className="bg-neutral-dark text-white p-3 rounded-lg font-code text-sm">
                  <p className="text-green-400"># Show file statistics</p>
                  <p>gemini search --stats "function"</p>
                  <p className="text-green-400 mt-2"># Include git blame info</p>
                  <p>gemini search --blame "bug fix"</p>
                  <p className="text-green-400 mt-2"># Show file metadata</p>
                  <p>gemini search --metadata "config"</p>
                </div>
              </div>
            </div>
          </section>

          {/* Search Configuration */}
          <section className="mb-12">
            <h2 className="text-h2 mb-4">Search Configuration</h2>
            <div className="card">
              <div className="space-y-4">
                <div>
                  <p className="font-semibold mb-2">Configure search defaults:</p>
                  <div className="bg-neutral-dark text-white p-3 rounded-lg font-code text-sm">
                    <p>gemini config set search.defaultContext 3</p>
                    <p>gemini config set search.ignoreCase true</p>
                    <p>gemini config set search.excludePatterns "node_modules,dist"</p>
                  </div>
                </div>
                
                <div>
                  <p className="font-semibold mb-2">Search configuration file:</p>
                  <div className="bg-neutral-dark text-white p-3 rounded-lg font-code text-sm">
                    <p>{`{
  "search": {
    "defaultContext": 3,
    "ignoreCase": true,
    "excludePatterns": ["node_modules", "dist", ".git"],
    "includePatterns": ["*.js", "*.ts", "*.py", "*.md"],
    "maxResults": 100,
    "semanticSearch": true
  }
}`}</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Search Tips and Tricks */}
          <section className="mb-12">
            <h2 className="text-h2 mb-4">Search Tips and Tricks</h2>
            
            <div className="space-y-6">
              <div className="card">
                <h3 className="font-semibold mb-3">Efficient Search Strategies</h3>
                <ul className="space-y-2 text-sm">
                  <li>• Start with broad terms, then narrow down</li>
                  <li>• Use file extensions to limit scope</li>
                  <li>• Combine multiple search terms with AND/OR</li>
                  <li>• Use quotes for exact phrase matching</li>
                  <li>• Exclude common files to reduce noise</li>
                </ul>
              </div>

              <div className="card">
                <h3 className="font-semibold mb-3">Common Search Patterns</h3>
                <div className="bg-neutral-dark text-white p-3 rounded-lg font-code text-sm">
                  <p className="text-green-400"># Find all TODOs</p>
                  <p>gemini search "TODO|FIXME|HACK" --regex</p>
                  <p className="text-green-400 mt-2"># Find unused imports</p>
                  <p>gemini search --semantic "unused import statements"</p>
                  <p className="text-green-400 mt-2"># Find API endpoints</p>
                  <p>gemini search "app\.(get|post|put|delete)" --regex</p>
                  <p className="text-green-400 mt-2"># Find hardcoded strings</p>
                  <p>gemini search '"[^"]*"' --regex --exclude "*.json"</p>
                </div>
              </div>

              <div className="card">
                <h3 className="font-semibold mb-3">Performance Optimization</h3>
                <ul className="space-y-2 text-sm">
                  <li>• Use specific file patterns to reduce search scope</li>
                  <li>• Exclude large directories like node_modules</li>
                  <li>• Use parallel search for large codebases</li>
                  <li>• Cache search results for repeated queries</li>
                  <li>• Index your codebase for faster searches</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Search Integration */}
          <section className="mb-12">
            <h2 className="text-h2 mb-4">Integration with Other Tools</h2>
            <div className="card">
              <div className="space-y-4">
                <div>
                  <p className="font-semibold mb-2">Editor integration:</p>
                  <div className="bg-neutral-dark text-white p-3 rounded-lg font-code text-sm">
                    <p className="text-green-400"># Open results in VS Code</p>
                    <p>gemini search "function" --editor code</p>
                    <p className="text-green-400 mt-2"># Open in vim</p>
                    <p>gemini search "class" --editor vim</p>
                  </div>
                </div>
                
                <div>
                  <p className="font-semibold mb-2">Pipeline integration:</p>
                  <div className="bg-neutral-dark text-white p-3 rounded-lg font-code text-sm">
                    <p className="text-green-400"># Pipe to other commands</p>
                    <p>gemini search "TODO" | gemini "Summarize these TODO items"</p>
                    <p>gemini search --json "function" | jq '.results[].file' | sort | uniq</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Next Steps */}
          <div className="bg-blue-50 rounded-card p-6">
            <h3 className="text-h3 mb-3">Next Steps</h3>
            <p className="text-neutral-gray mb-4">
              Ready to explore more advanced Gemini CLI features:
            </p>
            <div className="flex gap-4 flex-wrap">
              <Link href="/qa/file-operations" className="btn-primary">
                File Operations
              </Link>
              <Link href="/qa/code-editing" className="btn-secondary">
                Code Editing
              </Link>
              <Link href="/qa/batch-ops" className="btn-secondary">
                Batch Operations
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}