import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'VS Code Extension - Gemini CLI All in One',
  description: 'Integrate Gemini CLI with Visual Studio Code for seamless AI-powered development',
}

export default function VSCodeExtensionPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-h1 mb-4">VS Code Extension</h1>
          <p className="text-lg text-neutral-gray mb-12">
            Integrate Gemini CLI directly into Visual Studio Code for a seamless AI-powered development experience.
          </p>

          {/* Extension Overview */}
          <section className="mb-12">
            <h2 className="text-h2 mb-4">Extension Overview</h2>
            <div className="card">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-3">Key Features</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <span className="text-google-blue mr-2">•</span>
                      <span>Inline code assistance and suggestions</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-google-blue mr-2">•</span>
                      <span>Code explanation and documentation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-google-blue mr-2">•</span>
                      <span>Automatic test generation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-google-blue mr-2">•</span>
                      <span>Code review and optimization</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-google-blue mr-2">•</span>
                      <span>Integrated chat interface</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-3">Supported Languages</h3>
                  <div className="flex flex-wrap gap-2">
                    {['JavaScript', 'TypeScript', 'Python', 'Java', 'C++', 'Go', 'Rust', 'PHP', 'Ruby', 'HTML', 'CSS', 'SQL'].map((lang) => (
                      <span key={lang} className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Installation */}
          <section className="mb-12">
            <h2 className="text-h2 mb-4">Installation</h2>
            
            <div className="space-y-6">
              <div className="card">
                <h3 className="font-semibold mb-3">Method 1: VS Code Marketplace</h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm mb-2"><strong>1. Open VS Code Extensions view:</strong></p>
                    <div className="bg-neutral-dark text-white p-3 rounded-lg font-code text-sm">
                      <p>Ctrl+Shift+X (Windows/Linux)</p>
                      <p>Cmd+Shift+X (macOS)</p>
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-sm mb-2"><strong>2. Search for "Gemini CLI"</strong></p>
                  </div>
                  
                  <div>
                    <p className="text-sm mb-2"><strong>3. Click "Install" on the official extension</strong></p>
                  </div>
                </div>
              </div>

              <div className="card">
                <h3 className="font-semibold mb-3">Method 2: Command Line</h3>
                <div className="bg-neutral-dark text-white p-3 rounded-lg font-code text-sm">
                  <p>code --install-extension google.gemini-cli</p>
                </div>
              </div>

              <div className="card">
                <h3 className="font-semibold mb-3">Method 3: Manual Installation</h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm mb-2"><strong>1. Download .vsix file from releases page</strong></p>
                  </div>
                  
                  <div>
                    <p className="text-sm mb-2"><strong>2. Install from VSIX:</strong></p>
                    <div className="bg-neutral-dark text-white p-3 rounded-lg font-code text-sm">
                      <p>code --install-extension gemini-cli.vsix</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Configuration */}
          <section className="mb-12">
            <h2 className="text-h2 mb-4">Configuration</h2>
            <div className="card">
              <div className="space-y-4">
                <div>
                  <p className="font-semibold mb-2">1. Set up API key:</p>
                  <div className="bg-neutral-dark text-white p-3 rounded-lg font-code text-sm">
                    <p className="text-green-400"># Open VS Code Settings (Ctrl+,)</p>
                    <p className="text-green-400"># Search for "Gemini CLI"</p>
                    <p className="text-green-400"># Set "Gemini CLI: API Key" to your API key</p>
                  </div>
                </div>
                
                <div>
                  <p className="font-semibold mb-2">2. Configure settings.json:</p>
                  <div className="bg-neutral-dark text-white p-3 rounded-lg font-code text-sm">
                    <p>{`{
  "geminiCli.apiKey": "your-api-key-here",
  "geminiCli.model": "gemini-pro",
  "geminiCli.temperature": 0.7,
  "geminiCli.maxTokens": 2048,
  "geminiCli.enableInlineCompletion": true,
  "geminiCli.enableCodeLens": true,
  "geminiCli.autoSuggest": true
}`}</p>
                  </div>
                </div>
                
                <div>
                  <p className="font-semibold mb-2">3. Verify installation:</p>
                  <div className="bg-neutral-dark text-white p-3 rounded-lg font-code text-sm">
                    <p className="text-green-400"># Open Command Palette (Ctrl+Shift+P)</p>
                    <p className="text-green-400"># Type "Gemini: Test Connection"</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Features and Usage */}
          <section className="mb-12">
            <h2 className="text-h2 mb-4">Features and Usage</h2>
            
            <div className="space-y-6">
              <div className="card">
                <h3 className="font-semibold mb-3">Code Assistance</h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm mb-2"><strong>Inline suggestions:</strong></p>
                    <ul className="text-sm text-neutral-gray space-y-1">
                      <li>• Auto-complete function implementations</li>
                      <li>• Suggest variable names and types</li>
                      <li>• Generate boilerplate code</li>
                      <li>• Fix syntax errors automatically</li>
                    </ul>
                  </div>
                  
                  <div>
                    <p className="text-sm mb-2"><strong>Code Actions:</strong></p>
                    <div className="bg-neutral-dark text-white p-3 rounded-lg font-code text-sm">
                      <p className="text-green-400"># Right-click on code → "Gemini: Explain Code"</p>
                      <p className="text-green-400"># Right-click → "Gemini: Optimize Code"</p>
                      <p className="text-green-400"># Right-click → "Gemini: Generate Tests"</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card">
                <h3 className="font-semibold mb-3">Chat Interface</h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm mb-2"><strong>Open Chat Panel:</strong></p>
                    <div className="bg-neutral-dark text-white p-3 rounded-lg font-code text-sm">
                      <p>Ctrl+Shift+P → "Gemini: Open Chat"</p>
                      <p># Or click Gemini icon in Activity Bar</p>
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-sm mb-2"><strong>Chat Features:</strong></p>
                    <ul className="text-sm text-neutral-gray space-y-1">
                      <li>• Context-aware conversations about your code</li>
                      <li>• Ask questions about specific files or functions</li>
                      <li>• Get suggestions for debugging issues</li>
                      <li>• Request code improvements and refactoring</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="card">
                <h3 className="font-semibold mb-3">Code Lens Features</h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm mb-2"><strong>Function-level actions:</strong></p>
                    <ul className="text-sm text-neutral-gray space-y-1">
                      <li>• "Explain" - Get detailed function explanations</li>
                      <li>• "Test" - Generate unit tests</li>
                      <li>• "Optimize" - Suggest performance improvements</li>
                      <li>• "Document" - Add JSDoc/docstring comments</li>
                    </ul>
                  </div>
                  
                  <div>
                    <p className="text-sm mb-2"><strong>Class-level actions:</strong></p>
                    <ul className="text-sm text-neutral-gray space-y-1">
                      <li>• Generate constructor documentation</li>
                      <li>• Create interface definitions</li>
                      <li>• Suggest design pattern improvements</li>
                      <li>• Generate example usage</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Keyboard Shortcuts */}
          <section className="mb-12">
            <h2 className="text-h2 mb-4">Keyboard Shortcuts</h2>
            <div className="card">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-3">Default Shortcuts</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Open Chat</span>
                      <kbd className="px-2 py-1 bg-neutral-light rounded text-xs">Ctrl+Shift+G</kbd>
                    </div>
                    <div className="flex justify-between">
                      <span>Explain Selection</span>
                      <kbd className="px-2 py-1 bg-neutral-light rounded text-xs">Ctrl+Alt+E</kbd>
                    </div>
                    <div className="flex justify-between">
                      <span>Generate Tests</span>
                      <kbd className="px-2 py-1 bg-neutral-light rounded text-xs">Ctrl+Alt+T</kbd>
                    </div>
                    <div className="flex justify-between">
                      <span>Optimize Code</span>
                      <kbd className="px-2 py-1 bg-neutral-light rounded text-xs">Ctrl+Alt+O</kbd>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-3">Custom Shortcuts</h3>
                  <div className="bg-neutral-dark text-white p-3 rounded-lg font-code text-sm">
                    <p className="text-green-400"># File &gt; Preferences &gt; Keyboard Shortcuts</p>
                    <p className="text-green-400"># Search "Gemini" to customize</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Advanced Configuration */}
          <section className="mb-12">
            <h2 className="text-h2 mb-4">Advanced Configuration</h2>
            
            <div className="space-y-6">
              <div className="card">
                <h3 className="font-semibold mb-3">Workspace Settings</h3>
                <div className="bg-neutral-dark text-white p-3 rounded-lg font-code text-sm">
                  <p className="text-green-400"># .vscode/settings.json (project-specific)</p>
                  <p>{`{
  "geminiCli.enabled": true,
  "geminiCli.model": "gemini-pro",
  "geminiCli.contextFiles": [
    "src/**/*.ts",
    "docs/**/*.md"
  ],
  "geminiCli.excludePatterns": [
    "node_modules/**",
    "dist/**",
    "*.test.js"
  ],
  "geminiCli.customPrompts": {
    "codeReview": "Review this code for bugs and improvements",
    "optimize": "Optimize this code for performance"
  }
}`}</p>
                </div>
              </div>

              <div className="card">
                <h3 className="font-semibold mb-3">Language-Specific Settings</h3>
                <div className="bg-neutral-dark text-white p-3 rounded-lg font-code text-sm">
                  <p>{`{
  "[javascript]": {
    "geminiCli.enableInlineCompletion": true,
    "geminiCli.temperature": 0.3
  },
  "[python]": {
    "geminiCli.enableDocstring": true,
    "geminiCli.temperature": 0.5
  },
  "[typescript]": {
    "geminiCli.enableTypeGeneration": true,
    "geminiCli.strictMode": true
  }
}`}</p>
                </div>
              </div>

              <div className="card">
                <h3 className="font-semibold mb-3">Custom Commands</h3>
                <div className="bg-neutral-dark text-white p-3 rounded-lg font-code text-sm">
                  <p className="text-green-400"># keybindings.json</p>
                  <p>{`[
  {
    "key": "ctrl+alt+d",
    "command": "geminiCli.generateDocumentation",
    "when": "editorTextFocus"
  },
  {
    "key": "ctrl+alt+r",
    "command": "geminiCli.refactorCode",
    "when": "editorHasSelection"
  }
]`}</p>
                </div>
              </div>
            </div>
          </section>

          {/* Troubleshooting */}
          <section className="mb-12">
            <h2 className="text-h2 mb-4">Troubleshooting</h2>
            
            <div className="space-y-6">
              <div className="card">
                <h3 className="font-semibold mb-3">Common Issues</h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold text-red-600 mb-2">Extension not loading</p>
                    <ul className="text-sm text-neutral-gray space-y-1">
                      <li>• Check VS Code version compatibility</li>
                      <li>• Reload window (Ctrl+Shift+P → "Reload Window")</li>
                      <li>• Check extension is enabled in Extensions view</li>
                      <li>• Restart VS Code completely</li>
                    </ul>
                  </div>
                  
                  <div>
                    <p className="font-semibold text-red-600 mb-2">API connection errors</p>
                    <ul className="text-sm text-neutral-gray space-y-1">
                      <li>• Verify API key is correctly set</li>
                      <li>• Check internet connection</li>
                      <li>• Test API key with command line tool</li>
                      <li>• Check proxy settings if behind firewall</li>
                    </ul>
                  </div>
                  
                  <div>
                    <p className="font-semibold text-red-600 mb-2">Performance issues</p>
                    <ul className="text-sm text-neutral-gray space-y-1">
                      <li>• Reduce context file patterns</li>
                      <li>• Disable auto-suggest for large files</li>
                      <li>• Increase timeout settings</li>
                      <li>• Close other resource-intensive extensions</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="card">
                <h3 className="font-semibold mb-3">Debug Mode</h3>
                <div className="bg-neutral-dark text-white p-3 rounded-lg font-code text-sm">
                  <p className="text-green-400"># Enable debug logging</p>
                  <p>"geminiCli.logLevel": "debug"</p>
                  <p className="text-green-400 mt-2"># View logs</p>
                  <p># View &gt; Output &gt; Select "Gemini CLI" from dropdown</p>
                </div>
              </div>
            </div>
          </section>

          {/* Tips and Best Practices */}
          <section className="mb-12">
            <h2 className="text-h2 mb-4">Tips and Best Practices</h2>
            
            <div className="space-y-4">
              <div className="card">
                <h3 className="font-semibold mb-2 text-green-600">✅ Best Practices</h3>
                <ul className="space-y-2 text-sm">
                  <li>• Use project-specific settings for different codebases</li>
                  <li>• Configure context files to include relevant documentation</li>
                  <li>• Set appropriate temperature values for different tasks</li>
                  <li>• Use custom prompts for repetitive tasks</li>
                  <li>• Regularly update the extension for new features</li>
                </ul>
              </div>
              
              <div className="card">
                <h3 className="font-semibold mb-2 text-blue-600">💡 Pro Tips</h3>
                <ul className="space-y-2 text-sm">
                  <li>• Select specific code before using "Explain" for targeted help</li>
                  <li>• Use the chat for complex architectural questions</li>
                  <li>• Combine with Git integration for commit message generation</li>
                  <li>• Set up snippets for common Gemini prompts</li>
                  <li>• Use workspace settings for team consistency</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Next Steps */}
          <div className="bg-blue-50 rounded-card p-6">
            <h3 className="text-h3 mb-3">Ready to Get Started?</h3>
            <p className="text-neutral-gray mb-4">
              Install the extension and enhance your development workflow:
            </p>
            <div className="flex gap-4 flex-wrap">
              <a href="vscode:extension/google.gemini-cli" className="btn-primary">
                Install Extension
              </a>
              <Link href="/qa/get-api-key" className="btn-secondary">
                Get API Key
              </Link>
              <Link href="/tutorials/getting-started" className="btn-secondary">
                Getting Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}