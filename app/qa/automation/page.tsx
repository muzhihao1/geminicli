import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Automation - Gemini CLI All in One',
  description: 'Learn how to automate repetitive tasks and workflows using Gemini CLI',
}

export default function AutomationPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-h1 mb-4">Task Automation</h1>
          <p className="text-lg text-neutral-gray mb-12">
            Automate repetitive development tasks and workflows using Gemini CLI's powerful automation capabilities.
          </p>

          {/* Automation Scripts */}
          <section className="mb-12">
            <h2 className="text-h2 mb-4">Automation Scripts</h2>
            <div className="space-y-4">
              
              <div className="card">
                <h3 className="font-semibold mb-3">Code Review Automation</h3>
                <div className="bg-neutral-dark text-white p-3 rounded-lg font-code text-sm">
                  <p>#!/bin/bash</p>
                  <p># auto-review.sh</p>
                  <p>for file in $(git diff --name-only HEAD~1); do</p>
                  <p>  echo "Reviewing $file..."</p>
                  <p>  gemini "Review this code for bugs and improvements" &lt; "$file" &gt; "reviews/$file.review"</p>
                  <p>done</p>
                </div>
              </div>

              <div className="card">
                <h3 className="font-semibold mb-3">Documentation Generation</h3>
                <div className="bg-neutral-dark text-white p-3 rounded-lg font-code text-sm">
                  <p>#!/bin/bash</p>
                  <p># generate-docs.sh</p>
                  <p>find src -name "*.js" -o -name "*.ts" | while read file; do</p>
                  <p>  docfile="docs/$(basename "$file" .js).md"</p>
                  <p>  gemini "Generate comprehensive documentation for this code" &lt; "$file" &gt; "$docfile"</p>
                  <p>done</p>
                </div>
              </div>
            </div>
          </section>

          {/* CI/CD Integration */}
          <section className="mb-12">
            <h2 className="text-h2 mb-4">CI/CD Integration</h2>
            <div className="space-y-4">
              
              <div className="card">
                <h3 className="font-semibold mb-3">GitHub Actions Workflow</h3>
                <div className="bg-neutral-dark text-white p-3 rounded-lg font-code text-sm">
                  <p>name: AI Code Review</p>
                  <p>on: [pull_request]</p>
                  <p>jobs:</p>
                  <p>  review:</p>
                  <p>    runs-on: ubuntu-latest</p>
                  <p>    steps:</p>
                  <p>    - uses: actions/checkout@v3</p>
                  <p>    - name: Install Gemini CLI</p>
                  <p>      run: npm install -g gemini-cli</p>
                  <p>    - name: Review Changes</p>
                  <p>      run: |</p>
                  <p>        git diff --name-only origin/main | while read file; do</p>
                  <p>          gemini "Review this code" &lt; "$file" &gt;&gt; review-summary.md</p>
                  <p>        done</p>
                </div>
              </div>

              <div className="card">
                <h3 className="font-semibold mb-3">Pre-commit Hooks</h3>
                <div className="bg-neutral-dark text-white p-3 rounded-lg font-code text-sm">
                  <p>#!/bin/bash</p>
                  <p># .git/hooks/pre-commit</p>
                  <p>changed_files=$(git diff --cached --name-only)</p>
                  <p>for file in $changed_files; do</p>
                  <p>  if [[ $file == *.js || $file == *.ts ]]; then</p>
                  <p>    issues=$(gemini "Find critical issues in this code" &lt; "$file")</p>
                  <p>    if echo "$issues" | grep -q "CRITICAL"; then</p>
                  <p>      echo "Critical issues found in $file. Commit blocked."</p>
                  <p>      exit 1</p>
                  <p>    fi</p>
                  <p>  fi</p>
                  <p>done</p>
                </div>
              </div>
            </div>
          </section>

          {/* Scheduled Tasks */}
          <section className="mb-12">
            <h2 className="text-h2 mb-4">Scheduled Automation</h2>
            <div className="space-y-4">
              
              <div className="card">
                <h3 className="font-semibold mb-3">Daily Code Quality Check</h3>
                <div className="bg-neutral-dark text-white p-3 rounded-lg font-code text-sm">
                  <p># Cron job: 0 9 * * 1-5 (9 AM, weekdays)</p>
                  <p>#!/bin/bash</p>
                  <p>cd /path/to/project</p>
                  <p>gemini "Analyze code quality for the entire project" . &gt; daily-quality-report.md</p>
                  <p>mail -s "Daily Code Quality Report" team@company.com &lt; daily-quality-report.md</p>
                </div>
              </div>

              <div className="card">
                <h3 className="font-semibold mb-3">Weekly Documentation Update</h3>
                <div className="bg-neutral-dark text-white p-3 rounded-lg font-code text-sm">
                  <p># Cron job: 0 10 * * 1 (10 AM, Mondays)</p>
                  <p>#!/bin/bash</p>
                  <p>git log --since="1 week ago" --name-only --pretty=format: | sort -u | while read file; do</p>
                  <p>  if [[ -f "$file" ]]; then</p>
                  <p>    gemini "Update documentation based on recent changes" &lt; "$file" &gt; "docs/$(basename "$file").md"</p>
                  <p>  fi</p>
                  <p>done</p>
                </div>
              </div>
            </div>
          </section>

          {/* Batch Operations */}
          <section className="mb-12">
            <h2 className="text-h2 mb-4">Batch Processing</h2>
            <div className="card">
              <h3 className="font-semibold mb-3">Process Multiple Files</h3>
              <div className="bg-neutral-dark text-white p-3 rounded-lg font-code text-sm">
                <p>#!/bin/bash</p>
                <p># Process all JavaScript files in a directory</p>
                <p>find . -name "*.js" -type f | while read file; do</p>
                <p>  echo "Processing $file..."</p>
                <p>  gemini "Add JSDoc comments to all functions" &lt; "$file" &gt; "$file.documented"</p>
                <p>  mv "$file.documented" "$file"</p>
                <p>done</p>
              </div>
            </div>
          </section>

          {/* Best Practices */}
          <section className="mb-12">
            <h2 className="text-h2 mb-4">Automation Best Practices</h2>
            <div className="card">
              <ul className="space-y-2">
                <li>• Test automation scripts thoroughly before deployment</li>
                <li>• Use version control to track automation script changes</li>
                <li>• Set up proper error handling and logging</li>
                <li>• Monitor automation results regularly</li>
                <li>• Keep backup copies of original files</li>
                <li>• Use rate limiting to avoid API quota issues</li>
              </ul>
            </div>
          </section>

          {/* Next Steps */}
          <div className="bg-blue-50 rounded-card p-6">
            <h3 className="text-h3 mb-3">Advanced Automation</h3>
            <p className="text-neutral-gray mb-4">
              Take your automation to the next level:
            </p>
            <div className="flex gap-4 flex-wrap">
              <Link href="/qa/custom-tools" className="btn-primary">
                Custom Tools
              </Link>
              <Link href="/qa/batch-ops" className="btn-secondary">
                Batch Operations
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