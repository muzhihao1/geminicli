import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Debug Common Issues - Gemini CLI All in One',
  description: 'Troubleshoot and debug common issues when using Gemini CLI',
}

export default function DebugIssuesPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-h1 mb-4">Debug Common Issues</h1>
          <p className="text-lg text-neutral-gray mb-12">
            Troubleshoot and resolve common problems you might encounter while using Gemini CLI.
          </p>

          {/* Installation Issues */}
          <section className="mb-12">
            <h2 className="text-h2 mb-4">Installation Issues</h2>
            <div className="space-y-4">
              
              <div className="card">
                <h3 className="font-semibold mb-2 text-red-600">Command not found: gemini</h3>
                <p className="text-sm text-neutral-gray mb-3">
                  The Gemini CLI is not installed or not in your PATH.
                </p>
                <div className="bg-neutral-dark text-white p-3 rounded-lg font-code text-sm">
                  <p># Check if installed</p>
                  <p>which gemini</p>
                  <p># Reinstall if needed</p>
                  <p>npm install -g gemini-cli</p>
                  <p># Add to PATH (macOS/Linux)</p>
                  <p>export PATH="$PATH:$(npm root -g)/gemini-cli/bin"</p>
                </div>
              </div>

              <div className="card">
                <h3 className="font-semibold mb-2 text-red-600">Permission denied during installation</h3>
                <p className="text-sm text-neutral-gray mb-3">
                  You don't have permission to install globally.
                </p>
                <div className="bg-neutral-dark text-white p-3 rounded-lg font-code text-sm">
                  <p># Use sudo on macOS/Linux</p>
                  <p>sudo npm install -g gemini-cli</p>
                  <p># Or install locally</p>
                  <p>npm install gemini-cli</p>
                  <p>npx gemini "your command"</p>
                </div>
              </div>
            </div>
          </section>

          {/* Authentication Issues */}
          <section className="mb-12">
            <h2 className="text-h2 mb-4">Authentication Issues</h2>
            <div className="space-y-4">
              
              <div className="card">
                <h3 className="font-semibold mb-2 text-red-600">API key not found</h3>
                <p className="text-sm text-neutral-gray mb-3">
                  Gemini CLI can't find your Google AI API key.
                </p>
                <div className="bg-neutral-dark text-white p-3 rounded-lg font-code text-sm">
                  <p># Check if API key is set</p>
                  <p>echo $GOOGLE_AI_API_KEY</p>
                  <p># Set API key (replace with your key)</p>
                  <p>export GOOGLE_AI_API_KEY="your-api-key-here"</p>
                  <p># Make it permanent (add to ~/.bashrc or ~/.zshrc)</p>
                  <p>echo 'export GOOGLE_AI_API_KEY="your-api-key-here"' &gt;&gt; ~/.bashrc</p>
                </div>
              </div>

              <div className="card">
                <h3 className="font-semibold mb-2 text-red-600">Invalid API key</h3>
                <p className="text-sm text-neutral-gray mb-3">
                  Your API key is incorrect or expired.
                </p>
                <div className="bg-neutral-dark text-white p-3 rounded-lg font-code text-sm">
                  <p># Test API key</p>
                  <p>gemini "Hello" --debug</p>
                  <p># Generate new API key at:</p>
                  <p># https://makersuite.google.com/app/apikey</p>
                </div>
              </div>
            </div>
          </section>

          {/* Network Issues */}
          <section className="mb-12">
            <h2 className="text-h2 mb-4">Network Issues</h2>
            <div className="space-y-4">
              
              <div className="card">
                <h3 className="font-semibold mb-2 text-red-600">Connection timeout</h3>
                <p className="text-sm text-neutral-gray mb-3">
                  Unable to connect to Google AI API.
                </p>
                <div className="bg-neutral-dark text-white p-3 rounded-lg font-code text-sm">
                  <p># Check internet connection</p>
                  <p>ping google.com</p>
                  <p># Check firewall settings</p>
                  <p># Try with proxy if needed</p>
                  <p>export https_proxy=http://proxy.company.com:8080</p>
                  <p>gemini "test connection"</p>
                </div>
              </div>

              <div className="card">
                <h3 className="font-semibold mb-2 text-red-600">SSL certificate errors</h3>
                <p className="text-sm text-neutral-gray mb-3">
                  SSL/TLS certificate validation issues.
                </p>
                <div className="bg-neutral-dark text-white p-3 rounded-lg font-code text-sm">
                  <p># Update certificates</p>
                  <p>sudo apt-get update && sudo apt-get install ca-certificates</p>
                  <p># Or on macOS</p>
                  <p>brew install ca-certificates</p>
                </div>
              </div>
            </div>
          </section>

          {/* Performance Issues */}
          <section className="mb-12">
            <h2 className="text-h2 mb-4">Performance Issues</h2>
            <div className="space-y-4">
              
              <div className="card">
                <h3 className="font-semibold mb-2 text-red-600">Slow responses</h3>
                <p className="text-sm text-neutral-gray mb-3">
                  Gemini CLI is taking too long to respond.
                </p>
                <div className="bg-neutral-dark text-white p-3 rounded-lg font-code text-sm">
                  <p># Use shorter prompts</p>
                  <p>gemini "brief summary" &lt; large-file.js</p>
                  <p># Process files in chunks</p>
                  <p>split -l 50 large-file.js chunk_</p>
                  <p>for chunk in chunk_*; do</p>
                  <p>  gemini "analyze" &lt; "$chunk"</p>
                  <p>done</p>
                </div>
              </div>

              <div className="card">
                <h3 className="font-semibold mb-2 text-red-600">Memory issues</h3>
                <p className="text-sm text-neutral-gray mb-3">
                  Running out of memory when processing large files.
                </p>
                <div className="bg-neutral-dark text-white p-3 rounded-lg font-code text-sm">
                  <p># Process files one at a time</p>
                  <p>for file in *.js; do</p>
                  <p>  gemini "analyze" &lt; "$file" &gt; "$file.analysis"</p>
                  <p>done</p>
                  <p># Use streaming for large outputs</p>
                  <p>gemini "explain" &lt; large-file.js | less</p>
                </div>
              </div>
            </div>
          </section>

          {/* Debugging Commands */}
          <section className="mb-12">
            <h2 className="text-h2 mb-4">Debugging Commands</h2>
            <div className="space-y-4">
              
              <div className="card">
                <h3 className="font-semibold mb-3">Enable Debug Mode</h3>
                <div className="bg-neutral-dark text-white p-3 rounded-lg font-code text-sm">
                  <p># Run with debug output</p>
                  <p>gemini "test command" --debug</p>
                  <p># Verbose logging</p>
                  <p>gemini "test command" --verbose</p>
                  <p># Check configuration</p>
                  <p>gemini config show</p>
                </div>
              </div>

              <div className="card">
                <h3 className="font-semibold mb-3">System Diagnostics</h3>
                <div className="bg-neutral-dark text-white p-3 rounded-lg font-code text-sm">
                  <p># Check version</p>
                  <p>gemini --version</p>
                  <p># Check system info</p>
                  <p>node --version</p>
                  <p>npm --version</p>
                  <p># Check environment</p>
                  <p>env | grep GOOGLE</p>
                </div>
              </div>
            </div>
          </section>

          {/* Common Solutions */}
          <section className="mb-12">
            <h2 className="text-h2 mb-4">Common Solutions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <div className="card">
                <h3 className="font-semibold mb-2">Clear Cache</h3>
                <p className="text-sm text-neutral-gray mb-2">Clear npm and application cache</p>
                <div className="bg-neutral-light p-2 rounded text-xs font-code">
                  npm cache clean --force
                </div>
              </div>

              <div className="card">
                <h3 className="font-semibold mb-2">Reinstall</h3>
                <p className="text-sm text-neutral-gray mb-2">Clean reinstall of Gemini CLI</p>
                <div className="bg-neutral-light p-2 rounded text-xs font-code">
                  npm uninstall -g gemini-cli && npm install -g gemini-cli
                </div>
              </div>

              <div className="card">
                <h3 className="font-semibold mb-2">Check Logs</h3>
                <p className="text-sm text-neutral-gray mb-2">Look for error messages in logs</p>
                <div className="bg-neutral-light p-2 rounded text-xs font-code">
                  gemini "test" 2&gt;&amp;1 | tee debug.log
                </div>
              </div>

              <div className="card">
                <h3 className="font-semibold mb-2">Update Dependencies</h3>
                <p className="text-sm text-neutral-gray mb-2">Ensure all dependencies are current</p>
                <div className="bg-neutral-light p-2 rounded text-xs font-code">
                  npm update -g
                </div>
              </div>
            </div>
          </section>

          {/* Getting Help */}
          <section className="mb-12">
            <h2 className="text-h2 mb-4">Getting Additional Help</h2>
            <div className="card">
              <p className="mb-4">When reporting issues, include:</p>
              <ul className="space-y-2">
                <li>• Gemini CLI version (`gemini --version`)</li>
                <li>• Operating system and version</li>
                <li>• Complete error message</li>
                <li>• Steps to reproduce the issue</li>
                <li>• Debug output (`--debug` flag)</li>
              </ul>
            </div>
          </section>

          {/* Next Steps */}
          <div className="bg-blue-50 rounded-card p-6">
            <h3 className="text-h3 mb-3">Still Having Issues?</h3>
            <p className="text-neutral-gray mb-4">
              If these solutions don't help, try these resources:
            </p>
            <div className="flex gap-4 flex-wrap">
              <Link href="/qa/auth-errors" className="btn-primary">
                Authentication Errors
              </Link>
              <Link href="/qa/rate-limits" className="btn-secondary">
                Rate Limit Issues
              </Link>
              <Link href="/community" className="btn-secondary">
                Community Support
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}