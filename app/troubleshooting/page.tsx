import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Troubleshooting - Gemini CLI All in One',
  description: 'Fix common Gemini CLI issues with our comprehensive troubleshooting guide',
}

const troubleshootingCategories = [
  {
    title: 'Installation Issues',
    icon: '⚠️',
    issues: [
      {
        problem: 'npm install fails with permission errors',
        solution: 'Try using npm with sudo or configure npm to use a different directory',
        code: 'sudo npm install -g @google/gemini-cli',
        tags: ['npm', 'permissions'],
      },
      {
        problem: 'Command not found after installation',
        solution: 'Ensure npm bin directory is in your PATH',
        code: 'export PATH=$PATH:$(npm bin -g)',
        tags: ['path', 'command'],
      },
      {
        problem: 'Version conflicts with existing packages',
        solution: 'Clear npm cache and reinstall',
        code: 'npm cache clean --force && npm install -g @google/gemini-cli',
        tags: ['npm', 'cache'],
      },
    ],
  },
  {
    title: 'Authentication Errors',
    icon: '🔐',
    issues: [
      {
        problem: 'Invalid API key error',
        solution: 'Verify your API key is correct and has proper permissions',
        code: 'gemini config set api-key YOUR_VALID_API_KEY',
        tags: ['api-key', 'auth'],
      },
      {
        problem: 'API key not found',
        solution: 'Ensure environment variable is set correctly',
        code: 'export GEMINI_API_KEY="your-api-key-here"',
        tags: ['env', 'api-key'],
      },
      {
        problem: 'Authentication timeout',
        solution: 'Check your network connection and firewall settings',
        code: 'curl -I https://generativelanguage.googleapis.com',
        tags: ['network', 'timeout'],
      },
    ],
  },
  {
    title: 'Runtime Errors',
    icon: '❌',
    issues: [
      {
        problem: 'Rate limit exceeded',
        solution: 'Wait for the rate limit to reset or upgrade your API plan',
        code: '# Check your current usage\ngemini usage --show-limits',
        tags: ['rate-limit', 'quota'],
      },
      {
        problem: 'Context length exceeded',
        solution: 'Reduce the input size or split into smaller chunks',
        code: '# Use --max-tokens to limit response\ngemini chat --max-tokens 1000',
        tags: ['context', 'tokens'],
      },
      {
        problem: 'Unexpected response format',
        solution: 'Update to the latest version of Gemini CLI',
        code: 'npm update -g @google/gemini-cli',
        tags: ['update', 'format'],
      },
    ],
  },
  {
    title: 'Performance Issues',
    icon: '🐌',
    issues: [
      {
        problem: 'Slow response times',
        solution: 'Check network latency and consider using a closer API endpoint',
        code: '# Test network latency\nping generativelanguage.googleapis.com',
        tags: ['performance', 'network'],
      },
      {
        problem: 'High memory usage',
        solution: 'Limit concurrent operations and clear cache',
        code: 'gemini cache clear',
        tags: ['memory', 'cache'],
      },
      {
        problem: 'Hanging or frozen commands',
        solution: 'Use timeout flags and check for blocking operations',
        code: 'gemini chat --timeout 30',
        tags: ['timeout', 'hanging'],
      },
    ],
  },
]

export default function TroubleshootingPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-h1 mb-4">Troubleshooting</h1>
          <p className="text-lg text-neutral-gray mb-12 max-w-3xl">
            Having issues with Gemini CLI? Find solutions to common problems and get back to coding quickly.
          </p>

          {/* Quick Diagnostic */}
          <div className="mb-12 p-6 bg-blue-50 rounded-card">
            <h2 className="text-h3 mb-4">Quick Diagnostic</h2>
            <p className="text-neutral-gray mb-4">
              Run this command to check your Gemini CLI installation and configuration:
            </p>
            <div className="bg-neutral-dark text-white p-4 rounded-lg font-code">
              <p>gemini doctor</p>
            </div>
          </div>

          {/* Troubleshooting Categories */}
          <div className="space-y-12">
            {troubleshootingCategories.map((category) => (
              <section key={category.title}>
                <div className="flex items-center mb-6">
                  <span className="text-3xl mr-3">{category.icon}</span>
                  <h2 className="text-h2">{category.title}</h2>
                </div>

                <div className="space-y-6">
                  {category.issues.map((issue, index) => (
                    <div key={index} className="card">
                      <div className="flex items-start">
                        <div className="flex-shrink-0 w-8 h-8 bg-google-red/10 rounded-full flex items-center justify-center mr-4">
                          <span className="text-google-red font-bold">!</span>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-neutral-dark mb-2">
                            {issue.problem}
                          </h3>
                          <p className="text-neutral-gray mb-4">{issue.solution}</p>
                          
                          {issue.code && (
                            <div className="bg-neutral-dark text-white p-3 rounded-lg font-code text-sm mb-4">
                              <pre>{issue.code}</pre>
                            </div>
                          )}

                          <div className="flex flex-wrap gap-2">
                            {issue.tags.map((tag) => (
                              <span key={tag} className="px-2 py-1 bg-neutral-light text-xs rounded">
                                #{tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>

          {/* Debug Mode */}
          <div className="mt-12 p-6 bg-yellow-50 rounded-card">
            <h3 className="text-h3 mb-4">Enable Debug Mode</h3>
            <p className="text-neutral-gray mb-4">
              For more detailed error information, run Gemini CLI in debug mode:
            </p>
            <div className="bg-neutral-dark text-white p-4 rounded-lg font-code">
              <p className="text-green-400"># Enable debug logging</p>
              <p>export GEMINI_DEBUG=true</p>
              <p className="text-green-400 mt-2"># Or use the debug flag</p>
              <p>gemini --debug [command]</p>
            </div>
          </div>

          {/* Still Need Help? */}
          <div className="mt-12 text-center p-8 bg-neutral-light rounded-card">
            <h3 className="text-h3 mb-4">Still having issues?</h3>
            <p className="text-neutral-gray mb-6">
              If you can't find a solution here, get help from the community or report a bug.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/community" className="btn-primary">
                Ask the Community
              </Link>
              <Link 
                href="https://github.com/google/gemini-cli/issues" 
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                Report a Bug
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}