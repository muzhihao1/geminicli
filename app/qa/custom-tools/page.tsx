import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Custom Tools - Gemini CLI All in One',
  description: 'Learn how to create and use custom tools with Gemini CLI for specialized workflows',
}

export default function CustomToolsPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-h1 mb-4">Creating Custom Tools</h1>
          <p className="text-lg text-neutral-gray mb-12">
            Extend Gemini CLI with custom tools, scripts, and integrations tailored to your specific workflow needs.
          </p>

          {/* Custom Aliases */}
          <section className="mb-12">
            <h2 className="text-h2 mb-4">Custom Aliases</h2>
            <div className="card">
              <p className="mb-4">Create shortcuts for frequently used commands:</p>
              <div className="bg-neutral-dark text-white p-3 rounded-lg font-code text-sm">
                <p>gemini config set alias.review "Review this code for bugs and improvements:"</p>
                <p>gemini config set alias.docs "Generate documentation for:"</p>
                <p>gemini config set alias.test "Create unit tests for:"</p>
              </div>
              <p className="text-sm text-neutral-gray mt-3">
                Usage: <code className="bg-neutral-light px-2 py-1 rounded">gemini review &lt; myfile.js</code>
              </p>
            </div>
          </section>

          {/* Shell Scripts */}
          <section className="mb-12">
            <h2 className="text-h2 mb-4">Shell Script Integration</h2>
            <div className="space-y-4">
              
              <div className="card">
                <h3 className="font-semibold mb-3">Code Review Script</h3>
                <div className="bg-neutral-dark text-white p-3 rounded-lg font-code text-sm">
                  <p>#!/bin/bash</p>
                  <p># review-code.sh</p>
                  <p>for file in "$@"; do</p>
                  <p>  echo "Reviewing $file..."</p>
                  <p>  gemini "Review this code" &lt; "$file" &gt; "$file.review"</p>
                  <p>done</p>
                </div>
              </div>

              <div className="card">
                <h3 className="font-semibold mb-3">Documentation Generator</h3>
                <div className="bg-neutral-dark text-white p-3 rounded-lg font-code text-sm">
                  <p>#!/bin/bash</p>
                  <p># generate-docs.sh</p>
                  <p>gemini "Create comprehensive documentation" &lt; "$1" &gt; "docs/$(basename "$1" .js).md"</p>
                </div>
              </div>
            </div>
          </section>

          {/* API Integration */}
          <section className="mb-12">
            <h2 className="text-h2 mb-4">API Integration Tools</h2>
            <div className="space-y-4">
              
              <div className="card">
                <h3 className="font-semibold mb-3">Custom MCP Server</h3>
                <p className="text-sm text-neutral-gray mb-3">Create your own MCP server for specific APIs:</p>
                <div className="bg-neutral-dark text-white p-3 rounded-lg font-code text-sm">
                  <p>npm create mcp-server my-custom-tool</p>
                  <p>cd my-custom-tool</p>
                  <p># Edit src/index.ts with your custom logic</p>
                  <p>npm run build</p>
                  <p>gemini mcp add my-tool ./dist/index.js</p>
                </div>
              </div>

              <div className="card">
                <h3 className="font-semibold mb-3">External API Wrapper</h3>
                <div className="bg-neutral-dark text-white p-3 rounded-lg font-code text-sm">
                  <p>#!/bin/bash</p>
                  <p># jira-integration.sh</p>
                  <p>TICKET_ID="$1"</p>
                  <p>DESCRIPTION=$(gemini "Summarize these changes" &lt; changes.diff)</p>
                  <p>curl -X POST "https://company.atlassian.net/rest/api/2/issue/$TICKET_ID/comment" \</p>
                  <p>  -H "Authorization: Basic $JIRA_TOKEN" \</p>
                  <p>  -d "{`{\"body\": \"$DESCRIPTION\"}`}"</p>
                </div>
              </div>
            </div>
          </section>

          {/* Workflow Automation */}
          <section className="mb-12">
            <h2 className="text-h2 mb-4">Workflow Automation</h2>
            <div className="space-y-4">
              
              <div className="card">
                <h3 className="font-semibold mb-3">Git Hook Integration</h3>
                <div className="bg-neutral-dark text-white p-3 rounded-lg font-code text-sm">
                  <p>#!/bin/bash</p>
                  <p># .git/hooks/pre-commit</p>
                  <p>changed_files=$(git diff --cached --name-only --diff-filter=AM | grep '\\.js$')</p>
                  <p>for file in $changed_files; do</p>
                  <p>  issues=$(gemini "Find potential issues" &lt; "$file")</p>
                  <p>  if [[ "$issues" == *"CRITICAL"* ]]; then</p>
                  <p>    echo "Critical issues found in $file"</p>
                  <p>    exit 1</p>
                  <p>  fi</p>
                  <p>done</p>
                </div>
              </div>

              <div className="card">
                <h3 className="font-semibold mb-3">CI/CD Integration</h3>
                <div className="bg-neutral-dark text-white p-3 rounded-lg font-code text-sm">
                  <p># GitHub Actions workflow</p>
                  <p>- name: Code Analysis</p>
                  <p>  run: |</p>
                  <p>    for file in $(git diff --name-only HEAD~1); do</p>
                  <p>      gemini "Analyze for security issues" &lt; "$file" &gt;&gt; security-report.md</p>
                  <p>    done</p>
                </div>
              </div>
            </div>
          </section>

          {/* Custom Prompt Templates */}
          <section className="mb-12">
            <h2 className="text-h2 mb-4">Custom Prompt Templates</h2>
            <div className="card">
              <h3 className="font-semibold mb-3">Template Configuration</h3>
              <div className="bg-neutral-dark text-white p-3 rounded-lg font-code text-sm">
                <p>{`{
  "templates": {
    "security-review": "Perform a thorough security review of this code, checking for: SQL injection, XSS vulnerabilities, authentication bypass, data validation issues, and insecure dependencies. Provide specific recommendations.",
    "performance-audit": "Analyze this code for performance bottlenecks including: algorithmic complexity, memory usage, I/O operations, and caching opportunities. Suggest specific optimizations.",
    "accessibility-check": "Review this frontend code for accessibility compliance including: ARIA labels, keyboard navigation, color contrast, screen reader compatibility, and WCAG 2.1 guidelines."
  }
}`}</p>
              </div>
              <p className="text-sm text-neutral-gray mt-3">
                Usage: <code className="bg-neutral-light px-2 py-1 rounded">gemini template security-review &lt; auth.js</code>
              </p>
            </div>
          </section>

          {/* Integration Examples */}
          <section className="mb-12">
            <h2 className="text-h2 mb-4">Real-World Integration Examples</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <div className="card">
                <h3 className="font-semibold mb-2">Slack Notifications</h3>
                <p className="text-sm text-neutral-gray">Send code review summaries to team channels</p>
              </div>

              <div className="card">
                <h3 className="font-semibold mb-2">Issue Tracking</h3>
                <p className="text-sm text-neutral-gray">Auto-create tickets for detected code issues</p>
              </div>

              <div className="card">
                <h3 className="font-semibold mb-2">Documentation Updates</h3>
                <p className="text-sm text-neutral-gray">Automatically update docs when code changes</p>
              </div>

              <div className="card">
                <h3 className="font-semibold mb-2">Code Metrics</h3>
                <p className="text-sm text-neutral-gray">Generate complexity and quality reports</p>
              </div>
            </div>
          </section>

          {/* Next Steps */}
          <div className="bg-blue-50 rounded-card p-6">
            <h3 className="text-h3 mb-3">Build Your Tools</h3>
            <p className="text-neutral-gray mb-4">
              Start creating custom tools for your workflow:
            </p>
            <div className="flex gap-4 flex-wrap">
              <Link href="/tools/scripts" className="btn-primary">
                Script Collection
              </Link>
              <Link href="/qa/automation" className="btn-secondary">
                Automation Guide
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