import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Configuration Templates - Gemini CLI All in One',
  description: 'Pre-configured templates for common Gemini CLI scenarios and use cases',
}

export default function ConfigTemplatesPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-h1 mb-4">Configuration Templates</h1>
          <p className="text-lg text-neutral-gray mb-12">
            Ready-to-use configuration templates for common scenarios. Get started quickly with pre-configured settings optimized for specific use cases.
          </p>

          {/* Template Categories */}
          <section className="mb-12">
            <h2 className="text-h2 mb-4">Template Categories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              
              <div className="card hover:shadow-card-hover transition-shadow">
                <div className="text-center mb-4">
                  <div className="text-4xl mb-2">👨‍💻</div>
                  <h3 className="font-semibold">Development</h3>
                </div>
                <ul className="text-sm text-neutral-gray space-y-1">
                  <li>• Personal coding projects</li>
                  <li>• Code review and analysis</li>
                  <li>• Learning and experimentation</li>
                </ul>
              </div>

              <div className="card hover:shadow-card-hover transition-shadow">
                <div className="text-center mb-4">
                  <div className="text-4xl mb-2">🏢</div>
                  <h3 className="font-semibold">Enterprise</h3>
                </div>
                <ul className="text-sm text-neutral-gray space-y-1">
                  <li>• Team collaboration</li>
                  <li>• Security and compliance</li>
                  <li>• Production environments</li>
                </ul>
              </div>

              <div className="card hover:shadow-card-hover transition-shadow">
                <div className="text-center mb-4">
                  <div className="text-4xl mb-2">🎓</div>
                  <h3 className="font-semibold">Education</h3>
                </div>
                <ul className="text-sm text-neutral-gray space-y-1">
                  <li>• Learning programming</li>
                  <li>• Teaching assistance</li>
                  <li>• Academic projects</li>
                </ul>
              </div>

              <div className="card hover:shadow-card-hover transition-shadow">
                <div className="text-center mb-4">
                  <div className="text-4xl mb-2">⚡</div>
                  <h3 className="font-semibold">Performance</h3>
                </div>
                <ul className="text-sm text-neutral-gray space-y-1">
                  <li>• High-throughput scenarios</li>
                  <li>• Batch processing</li>
                  <li>• Resource optimization</li>
                </ul>
              </div>

              <div className="card hover:shadow-card-hover transition-shadow">
                <div className="text-center mb-4">
                  <div className="text-4xl mb-2">🔒</div>
                  <h3 className="font-semibold">Security</h3>
                </div>
                <ul className="text-sm text-neutral-gray space-y-1">
                  <li>• Security auditing</li>
                  <li>• Compliance requirements</li>
                  <li>• Restricted environments</li>
                </ul>
              </div>

              <div className="card hover:shadow-card-hover transition-shadow">
                <div className="text-center mb-4">
                  <div className="text-4xl mb-2">🚀</div>
                  <h3 className="font-semibold">CI/CD</h3>
                </div>
                <ul className="text-sm text-neutral-gray space-y-1">
                  <li>• Automated workflows</li>
                  <li>• Pipeline integration</li>
                  <li>• Deployment automation</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Development Templates */}
          <section className="mb-12">
            <h2 className="text-h2 mb-4">Development Templates</h2>
            
            <div className="space-y-6">
              <div className="card">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold">Basic Developer Config</h3>
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Beginner</span>
                </div>
                <p className="text-neutral-gray mb-4">Perfect for individual developers getting started with Gemini CLI</p>
                <div className="bg-neutral-dark text-white p-4 rounded-lg font-code text-sm mb-4">
                  <p>{`{
  "apiKey": "\${GOOGLE_AI_API_KEY}",
  "model": "gemini-pro",
  "temperature": 0.7,
  "maxTokens": 2048,
  
  "output": {
    "format": "markdown",
    "highlighting": true,
    "pager": "auto"
  },
  
  "aliases": {
    "explain": "Explain this code: ",
    "review": "Review this code for issues: ",
    "optimize": "Optimize this code: ",
    "test": "Generate unit tests for: ",
    "docs": "Generate documentation for: "
  }
}`}</p>
                </div>
                <button className="btn-secondary text-sm">
                  Copy Template
                </button>
              </div>

              <div className="card">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold">Full-Stack Developer Config</h3>
                  <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">Intermediate</span>
                </div>
                <p className="text-neutral-gray mb-4">Comprehensive setup for full-stack development with MCP servers</p>
                <div className="bg-neutral-dark text-white p-4 rounded-lg font-code text-sm mb-4">
                  <p>{`{
  "apiKey": "\${GOOGLE_AI_API_KEY}",
  "model": "gemini-pro",
  "temperature": 0.6,
  "maxTokens": 4096,
  
  "mcpServers": {
    "filesystem": {
      "command": "npx",
      "args": ["@modelcontextprotocol/server-filesystem", "./src"]
    },
    "git": {
      "command": "npx", 
      "args": ["@modelcontextprotocol/server-git", "."]
    },
    "sqlite": {
      "command": "npx",
      "args": ["@modelcontextprotocol/server-sqlite", "./database.db"]
    }
  },
  
  "aliases": {
    "frontend": "Help with this frontend code: ",
    "backend": "Review this backend logic: ",
    "api": "Design an API for: ",
    "db": "Write SQL query for: ",
    "deploy": "Help with deployment: "
  },
  
  "safety": {
    "blockThreshold": "BLOCK_MEDIUM_AND_ABOVE"
  }
}`}</p>
                </div>
                <button className="btn-secondary text-sm">Copy Template</button>
              </div>

              <div className="card">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold">Data Science Config</h3>
                  <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">Intermediate</span>
                </div>
                <p className="text-neutral-gray mb-4">Optimized for data analysis, machine learning, and research</p>
                <div className="bg-neutral-dark text-white p-4 rounded-lg font-code text-sm mb-4">
                  <p>{`{
  "apiKey": "\${GOOGLE_AI_API_KEY}",
  "model": "gemini-pro",
  "temperature": 0.3,
  "maxTokens": 8192,
  
  "mcpServers": {
    "filesystem": {
      "command": "npx",
      "args": ["@modelcontextprotocol/server-filesystem", "./data", "./notebooks"]
    },
    "sqlite": {
      "command": "npx",
      "args": ["@modelcontextprotocol/server-sqlite", "./analysis.db"]
    }
  },
  
  "aliases": {
    "analyze": "Analyze this dataset: ",
    "visualize": "Create visualization for: ",
    "model": "Help with machine learning model: ",
    "stats": "Perform statistical analysis on: ",
    "clean": "Clean and preprocess this data: "
  },
  
  "output": {
    "format": "markdown",
    "includeCharts": true
  }
}`}</p>
                </div>
                <button className="btn-secondary text-sm">Copy Template</button>
              </div>
            </div>
          </section>

          {/* Enterprise Templates */}
          <section className="mb-12">
            <h2 className="text-h2 mb-4">Enterprise Templates</h2>
            
            <div className="space-y-6">
              <div className="card">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold">Team Collaboration Config</h3>
                  <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm">Advanced</span>
                </div>
                <p className="text-neutral-gray mb-4">Standardized configuration for development teams</p>
                <div className="bg-neutral-dark text-white p-4 rounded-lg font-code text-sm mb-4">
                  <p>{`{
  "apiKey": "\${GEMINI_API_KEY}",
  "model": "gemini-pro",
  "temperature": 0.5,
  "maxTokens": 4096,
  "timeout": 45000,
  
  "mcpServers": {
    "git": {
      "command": "npx",
      "args": ["@modelcontextprotocol/server-git", "."]
    },
    "filesystem": {
      "command": "npx",
      "args": ["@modelcontextprotocol/server-filesystem", "./src", "./docs"],
      "env": {
        "MCP_FILESYSTEM_ALLOWED_PATHS": "./src:./docs:./tests"
      }
    }
  },
  
  "aliases": {
    "pr-review": "Review this pull request: ",
    "commit-msg": "Generate commit message for: ",
    "code-review": "Perform code review following team standards: ",
    "refactor": "Refactor following team guidelines: ",
    "document": "Document according to team standards: "
  },
  
  "safety": {
    "blockThreshold": "BLOCK_LOW_AND_ABOVE",
    "categories": ["HARM_CATEGORY_HARASSMENT", "HARM_CATEGORY_DANGEROUS_CONTENT"]
  },
  
  "logging": {
    "level": "info",
    "includeTimestamps": true,
    "auditTrail": true
  }
}`}</p>
                </div>
                <button className="btn-secondary text-sm">Copy Template</button>
              </div>

              <div className="card">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold">Security-First Config</h3>
                  <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm">Advanced</span>
                </div>
                <p className="text-neutral-gray mb-4">High-security configuration for sensitive environments</p>
                <div className="bg-neutral-dark text-white p-4 rounded-lg font-code text-sm mb-4">
                  <p>{`{
  "apiKey": "\${GEMINI_API_KEY}",
  "model": "gemini-pro",
  "temperature": 0.2,
  "maxTokens": 2048,
  "timeout": 30000,
  
  "security": {
    "enableAuditLog": true,
    "logAllRequests": true,
    "restrictedPaths": ["/etc", "/var", "/root"],
    "allowedFileTypes": [".js", ".ts", ".py", ".md"],
    "maxFileSize": "1MB"
  },
  
  "safety": {
    "blockThreshold": "BLOCK_LOW_AND_ABOVE",
    "categories": [
      "HARM_CATEGORY_HARASSMENT",
      "HARM_CATEGORY_HATE_SPEECH", 
      "HARM_CATEGORY_SEXUALLY_EXPLICIT",
      "HARM_CATEGORY_DANGEROUS_CONTENT"
    ]
  },
  
  "aliases": {
    "security-review": "Perform security review: ",
    "vulnerability-scan": "Scan for vulnerabilities: ",
    "compliance-check": "Check compliance with standards: "
  },
  
  "logging": {
    "level": "debug",
    "file": "/var/log/gemini-cli.log",
    "includeUserInfo": true,
    "includeRequestDetails": true
  }
}`}</p>
                </div>
                <button className="btn-secondary text-sm">Copy Template</button>
              </div>
            </div>
          </section>

          {/* Specialized Templates */}
          <section className="mb-12">
            <h2 className="text-h2 mb-4">Specialized Templates</h2>
            
            <div className="space-y-6">
              <div className="card">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold">CI/CD Pipeline Config</h3>
                  <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">Intermediate</span>
                </div>
                <p className="text-neutral-gray mb-4">Optimized for automated workflows and pipeline integration</p>
                <div className="bg-neutral-dark text-white p-4 rounded-lg font-code text-sm mb-4">
                  <p>{`{
  "apiKey": "\${GEMINI_API_KEY}",
  "model": "gemini-pro",
  "temperature": 0.1,
  "maxTokens": 1024,
  "timeout": 60000,
  "retryAttempts": 3,
  
  "output": {
    "format": "json",
    "quiet": true,
    "includeSummary": false
  },
  
  "aliases": {
    "test-analysis": "Analyze test results: ",
    "deployment-check": "Check deployment readiness: ",
    "changelog": "Generate changelog from commits: ",
    "release-notes": "Create release notes: "
  },
  
  "monitoring": {
    "enabled": true,
    "metricsEndpoint": "\${METRICS_ENDPOINT}",
    "alertOnFailure": true
  }
}`}</p>
                </div>
                <button className="btn-secondary text-sm">Copy Template</button>
              </div>

              <div className="card">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold">Educational Config</h3>
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Beginner</span>
                </div>
                <p className="text-neutral-gray mb-4">Designed for learning and teaching programming concepts</p>
                <div className="bg-neutral-dark text-white p-4 rounded-lg font-code text-sm mb-4">
                  <p>{`{
  "apiKey": "\${GOOGLE_AI_API_KEY}",
  "model": "gemini-pro",
  "temperature": 0.8,
  "maxTokens": 3072,
  
  "output": {
    "format": "markdown",
    "highlighting": true,
    "verbose": true,
    "includeExplanations": true
  },
  
  "aliases": {
    "learn": "Explain this concept step by step: ",
    "practice": "Give me practice problems for: ",
    "debug-help": "Help me understand this error: ",
    "concept": "Explain the concept of: ",
    "example": "Show me examples of: ",
    "beginner": "Explain like I'm a beginner: "
  },
  
  "safety": {
    "blockThreshold": "BLOCK_MEDIUM_AND_ABOVE",
    "educationalMode": true
  }
}`}</p>
                </div>
                <button className="btn-secondary text-sm">Copy Template</button>
              </div>

              <div className="card">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold">Performance Optimized Config</h3>
                  <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm">Advanced</span>
                </div>
                <p className="text-neutral-gray mb-4">Optimized for high-throughput and batch processing</p>
                <div className="bg-neutral-dark text-white p-4 rounded-lg font-code text-sm mb-4">
                  <p>{`{
  "apiKey": "\${GOOGLE_AI_API_KEY}",
  "model": "gemini-pro",
  "temperature": 0.3,
  "maxTokens": 1024,
  "timeout": 120000,
  "retryAttempts": 5,
  
  "batch": {
    "enabled": true,
    "maxConcurrent": 10,
    "throttleMs": 100,
    "resumeOnFailure": true
  },
  
  "performance": {
    "cacheEnabled": true,
    "cacheTTL": 3600,
    "compressRequests": true,
    "streamResponses": true
  },
  
  "output": {
    "format": "json",
    "quiet": true,
    "buffered": true
  }
}`}</p>
                </div>
                <button className="btn-secondary text-sm">Copy Template</button>
              </div>
            </div>
          </section>

          {/* Usage Instructions */}
          <section className="mb-12">
            <h2 className="text-h2 mb-4">How to Use Templates</h2>
            
            <div className="space-y-6">
              <div className="card">
                <h3 className="font-semibold mb-3">Method 1: Direct Copy</h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm mb-2"><strong>1. Copy template content</strong></p>
                  </div>
                  
                  <div>
                    <p className="text-sm mb-2"><strong>2. Create config file:</strong></p>
                    <div className="bg-neutral-dark text-white p-3 rounded-lg font-code text-sm">
                      <p># Create in project directory</p>
                      <p>touch gemini.config.json</p>
                      <p># Or in user config directory</p>
                      <p>mkdir -p ~/.config/gemini-cli</p>
                      <p>touch ~/.config/gemini-cli/config.json</p>
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-sm mb-2"><strong>3. Paste and customize</strong></p>
                    <p className="text-xs text-neutral-gray">Replace placeholder values like API keys and paths</p>
                  </div>
                </div>
              </div>

              <div className="card">
                <h3 className="font-semibold mb-3">Method 2: CLI Command</h3>
                <div className="bg-neutral-dark text-white p-3 rounded-lg font-code text-sm">
                  <p className="text-green-400"># Download and apply template</p>
                  <p>gemini config template apply developer-basic</p>
                  <p className="text-green-400 mt-2"># List available templates</p>
                  <p>gemini config template list</p>
                  <p className="text-green-400 mt-2"># Preview template</p>
                  <p>gemini config template show enterprise-security</p>
                </div>
              </div>

              <div className="card">
                <h3 className="font-semibold mb-3">Method 3: Interactive Setup</h3>
                <div className="bg-neutral-dark text-white p-3 rounded-lg font-code text-sm">
                  <p className="text-green-400"># Start interactive template wizard</p>
                  <p>gemini config init --template</p>
                  <p className="text-green-400 mt-2"># Answer prompts to customize template</p>
                  <p># Wizard will guide you through the process</p>
                </div>
              </div>
            </div>
          </section>

          {/* Customization Guide */}
          <section className="mb-12">
            <h2 className="text-h2 mb-4">Template Customization</h2>
            <div className="card">
              <div className="space-y-4">
                <div>
                  <p className="font-semibold mb-2">Common customizations:</p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <span className="text-google-blue mr-2">•</span>
                      <span><strong>API Key:</strong> Replace ${'${GOOGLE_AI_API_KEY}'} with your actual key or environment variable</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-google-blue mr-2">•</span>
                      <span><strong>Model:</strong> Choose between gemini-pro, gemini-pro-vision, or gemini-ultra</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-google-blue mr-2">•</span>
                      <span><strong>Temperature:</strong> Adjust creativity (0.0 = deterministic, 1.0 = creative)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-google-blue mr-2">•</span>
                      <span><strong>Paths:</strong> Update file and directory paths to match your project structure</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-google-blue mr-2">•</span>
                      <span><strong>Aliases:</strong> Add custom shortcuts for your common tasks</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <p className="font-semibold mb-2">Validation:</p>
                  <div className="bg-neutral-dark text-white p-3 rounded-lg font-code text-sm">
                    <p>gemini config validate</p>
                    <p>gemini config test</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Next Steps */}
          <div className="bg-blue-50 rounded-card p-6">
            <h3 className="text-h3 mb-3">Ready to Configure?</h3>
            <p className="text-neutral-gray mb-4">
              Choose a template that fits your use case and start using Gemini CLI:
            </p>
            <div className="flex gap-4 flex-wrap">
              <Link href="/qa/config-files" className="btn-primary">
                Configuration Guide
              </Link>
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