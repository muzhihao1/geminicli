import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Configuration Files Management - Gemini CLI All in One',
  description: 'Learn how to manage and organize Gemini CLI configuration files effectively',
}

export default function ConfigFilesPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-h1 mb-4">Configuration Files Management</h1>
          <p className="text-lg text-neutral-gray mb-12">
            Master configuration file management for Gemini CLI to customize behavior, manage settings, and organize multiple environments.
          </p>

          {/* Configuration File Locations */}
          <section className="mb-12">
            <h2 className="text-h2 mb-4">Configuration File Locations</h2>
            <div className="card">
              <p className="mb-4">Gemini CLI looks for configuration files in these locations (in order of priority):</p>
              
              <div className="space-y-4">
                <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <h3 className="font-semibold mb-2">1. Project-specific config</h3>
                  <div className="bg-neutral-dark text-white p-3 rounded-lg font-code text-sm">
                    <p>./gemini.config.json</p>
                    <p>./.gemini/config.json</p>
                  </div>
                  <p className="text-sm text-neutral-gray mt-2">Highest priority, overrides all other settings</p>
                </div>

                <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                  <h3 className="font-semibold mb-2">2. User config</h3>
                  <div className="bg-neutral-dark text-white p-3 rounded-lg font-code text-sm">
                    <p className="text-green-400"># Linux</p>
                    <p>~/.config/gemini-cli/config.json</p>
                    <p className="text-green-400 mt-2"># macOS</p>
                    <p>~/Library/Application Support/gemini-cli/config.json</p>
                    <p className="text-green-400 mt-2"># Windows</p>
                    <p>%APPDATA%\gemini-cli\config.json</p>
                  </div>
                  <p className="text-sm text-neutral-gray mt-2">User-specific settings</p>
                </div>

                <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                  <h3 className="font-semibold mb-2">3. Global config</h3>
                  <div className="bg-neutral-dark text-white p-3 rounded-lg font-code text-sm">
                    <p className="text-green-400"># Linux/macOS</p>
                    <p>/etc/gemini-cli/config.json</p>
                    <p className="text-green-400 mt-2"># Windows</p>
                    <p>C:\ProgramData\gemini-cli\config.json</p>
                  </div>
                  <p className="text-sm text-neutral-gray mt-2">System-wide defaults</p>
                </div>
              </div>
            </div>
          </section>

          {/* Configuration Structure */}
          <section className="mb-12">
            <h2 className="text-h2 mb-4">Configuration File Structure</h2>
            <div className="card">
              <div className="space-y-4">
                <div>
                  <p className="font-semibold mb-2">Complete configuration example:</p>
                  <div className="bg-neutral-dark text-white p-4 rounded-lg font-code text-sm">
                    <p>{`{
  "apiKey": "AIza...",
  "model": "gemini-pro",
  "temperature": 0.7,
  "maxTokens": 2048,
  "timeout": 30000,
  
  "output": {
    "format": "markdown",
    "highlighting": true,
    "pager": "auto"
  },
  
  "mcpServers": {
    "filesystem": {
      "command": "npx",
      "args": ["@modelcontextprotocol/server-filesystem", "/home/user/projects"]
    }
  },
  
  "aliases": {
    "explain": "Explain this code: ",
    "review": "Review this code for issues: ",
    "test": "Generate unit tests for: "
  },
  
  "safety": {
    "blockThreshold": "BLOCK_MEDIUM_AND_ABOVE",
    "categories": ["HARM_CATEGORY_HARASSMENT"]
  }
}`}</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Configuration Options */}
          <section className="mb-12">
            <h2 className="text-h2 mb-4">Configuration Options</h2>
            
            <div className="space-y-6">
              <div className="card">
                <h3 className="font-semibold mb-3">Core Settings</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-2">Option</th>
                        <th className="text-left py-2">Type</th>
                        <th className="text-left py-2">Default</th>
                        <th className="text-left py-2">Description</th>
                      </tr>
                    </thead>
                    <tbody className="text-neutral-gray">
                      <tr className="border-b">
                        <td className="py-2 font-code">apiKey</td>
                        <td>string</td>
                        <td>-</td>
                        <td>Google AI API key</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2 font-code">model</td>
                        <td>string</td>
                        <td>"gemini-pro"</td>
                        <td>Default model to use</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2 font-code">temperature</td>
                        <td>number</td>
                        <td>0.7</td>
                        <td>Response randomness (0.0-1.0)</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2 font-code">maxTokens</td>
                        <td>number</td>
                        <td>2048</td>
                        <td>Maximum response length</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2 font-code">timeout</td>
                        <td>number</td>
                        <td>30000</td>
                        <td>Request timeout (milliseconds)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="card">
                <h3 className="font-semibold mb-3">Output Settings</h3>
                <div className="bg-neutral-dark text-white p-3 rounded-lg font-code text-sm">
                  <p>{`"output": {
  "format": "markdown",        // markdown, plain, json
  "highlighting": true,        // syntax highlighting
  "pager": "auto",            // auto, always, never
  "streaming": true,          // stream responses
  "quiet": false              // suppress non-essential output
}`}</p>
                </div>
              </div>

              <div className="card">
                <h3 className="font-semibold mb-3">Safety Settings</h3>
                <div className="bg-neutral-dark text-white p-3 rounded-lg font-code text-sm">
                  <p>{`"safety": {
  "blockThreshold": "BLOCK_MEDIUM_AND_ABOVE",
  "categories": [
    "HARM_CATEGORY_HARASSMENT",
    "HARM_CATEGORY_HATE_SPEECH",
    "HARM_CATEGORY_SEXUALLY_EXPLICIT",
    "HARM_CATEGORY_DANGEROUS_CONTENT"
  ]
}`}</p>
                </div>
              </div>
            </div>
          </section>

          {/* Managing Multiple Configs */}
          <section className="mb-12">
            <h2 className="text-h2 mb-4">Managing Multiple Configurations</h2>
            
            <div className="space-y-6">
              <div className="card">
                <h3 className="font-semibold mb-3">Environment-Specific Configs</h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm font-medium mb-1">Development config:</p>
                    <div className="bg-neutral-dark text-white p-3 rounded-lg font-code text-sm">
                      <p className="text-green-400"># gemini.dev.json</p>
                      <p>{`{
  "apiKey": "dev-api-key",
  "model": "gemini-pro",
  "temperature": 0.9,
  "output": { "format": "plain" }
}`}</p>
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-sm font-medium mb-1">Production config:</p>
                    <div className="bg-neutral-dark text-white p-3 rounded-lg font-code text-sm">
                      <p className="text-green-400"># gemini.prod.json</p>
                      <p>{`{
  "apiKey": "prod-api-key",
  "model": "gemini-pro",
  "temperature": 0.3,
  "timeout": 60000,
  "output": { "quiet": true }
}`}</p>
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-sm font-medium mb-1">Usage:</p>
                    <div className="bg-neutral-dark text-white p-3 rounded-lg font-code text-sm">
                      <p>gemini --config gemini.dev.json "test prompt"</p>
                      <p>gemini --config gemini.prod.json "production prompt"</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card">
                <h3 className="font-semibold mb-3">Project-Specific Configs</h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm font-medium mb-1">Create project config:</p>
                    <div className="bg-neutral-dark text-white p-3 rounded-lg font-code text-sm">
                      <p># In your project directory</p>
                      <p>mkdir .gemini</p>
                      <p>cat &gt; .gemini/config.json &lt;&lt; 'EOF'</p>
                      <p>{`{
  "model": "gemini-pro",
  "aliases": {
    "docs": "Generate documentation for: ",
    "fix": "Fix this bug: "
  },
  "mcpServers": {
    "git": {
      "command": "npx",
      "args": ["@modelcontextprotocol/server-git", "."]
    }
  }
}
EOF`}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Configuration Management Commands */}
          <section className="mb-12">
            <h2 className="text-h2 mb-4">Configuration Management Commands</h2>
            <div className="card">
              <div className="space-y-4">
                <div>
                  <p className="font-semibold mb-2">View current configuration:</p>
                  <div className="bg-neutral-dark text-white p-3 rounded-lg font-code text-sm">
                    <p>gemini config show</p>
                    <p>gemini config show --source  # Show where settings come from</p>
                  </div>
                </div>
                
                <div>
                  <p className="font-semibold mb-2">Edit configuration:</p>
                  <div className="bg-neutral-dark text-white p-3 rounded-lg font-code text-sm">
                    <p>gemini config edit</p>
                    <p>gemini config edit --global</p>
                  </div>
                </div>
                
                <div>
                  <p className="font-semibold mb-2">Set individual options:</p>
                  <div className="bg-neutral-dark text-white p-3 rounded-lg font-code text-sm">
                    <p>gemini config set model gemini-ultra</p>
                    <p>gemini config set temperature 0.5</p>
                    <p>gemini config set output.format markdown</p>
                  </div>
                </div>
                
                <div>
                  <p className="font-semibold mb-2">Validate configuration:</p>
                  <div className="bg-neutral-dark text-white p-3 rounded-lg font-code text-sm">
                    <p>gemini config validate</p>
                    <p>gemini config validate --file gemini.dev.json</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Templates and Examples */}
          <section className="mb-12">
            <h2 className="text-h2 mb-4">Configuration Templates</h2>
            
            <div className="space-y-6">
              <div className="card">
                <h3 className="font-semibold mb-3">Minimal Config</h3>
                <div className="bg-neutral-dark text-white p-3 rounded-lg font-code text-sm">
                  <p>{`{
  "apiKey": "your-api-key-here"
}`}</p>
                </div>
              </div>

              <div className="card">
                <h3 className="font-semibold mb-3">Developer Config</h3>
                <div className="bg-neutral-dark text-white p-3 rounded-lg font-code text-sm">
                  <p>{`{
  "apiKey": "your-api-key",
  "model": "gemini-pro",
  "temperature": 0.8,
  "output": {
    "format": "markdown",
    "highlighting": true
  },
  "aliases": {
    "code": "Help me with this code: ",
    "debug": "Debug this issue: ",
    "optimize": "Optimize this code: "
  }
}`}</p>
                </div>
              </div>

              <div className="card">
                <h3 className="font-semibold mb-3">Enterprise Config</h3>
                <div className="bg-neutral-dark text-white p-3 rounded-lg font-code text-sm">
                  <p>{`{
  "apiKey": "enterprise-api-key",
  "model": "gemini-pro",
  "temperature": 0.3,
  "timeout": 60000,
  "safety": {
    "blockThreshold": "BLOCK_LOW_AND_ABOVE"
  },
  "output": {
    "quiet": true,
    "format": "json"
  },
  "logging": {
    "level": "info",
    "file": "/var/log/gemini-cli.log"
  }
}`}</p>
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
                  <li>• Use project-specific configs for different codebases</li>
                  <li>• Version control your project configs (but not API keys)</li>
                  <li>• Use environment variables for sensitive data</li>
                  <li>• Validate configs after changes</li>
                  <li>• Document custom aliases and settings</li>
                </ul>
              </div>
              
              <div className="card">
                <h3 className="font-semibold mb-2 text-red-600">❌ Don't</h3>
                <ul className="space-y-2 text-sm">
                  <li>• Commit API keys to version control</li>
                  <li>• Use overly complex nested configurations</li>
                  <li>• Ignore configuration validation errors</li>
                  <li>• Set extremely high timeout values</li>
                  <li>• Override safety settings unnecessarily</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Next Steps */}
          <div className="bg-blue-50 rounded-card p-6">
            <h3 className="text-h3 mb-3">Next Steps</h3>
            <p className="text-neutral-gray mb-4">
              Ready to customize your Gemini CLI configuration:
            </p>
            <div className="flex gap-4 flex-wrap">
              <Link href="/qa/env-variables" className="btn-primary">
                Environment Variables
              </Link>
              <Link href="/qa/mcp-config" className="btn-secondary">
                MCP Configuration
              </Link>
              <Link href="/tools/config-templates" className="btn-secondary">
                Config Templates
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}