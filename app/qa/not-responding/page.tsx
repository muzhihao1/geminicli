import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Gemini CLI Not Responding - Troubleshooting Guide',
  description: 'Fix issues when Gemini CLI is not responding or hanging. Complete troubleshooting guide.',
}

export default function NotRespondingPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-h1 mb-4">Gemini CLI Not Responding</h1>
          <p className="text-lg text-neutral-gray mb-12">
            Troubleshoot and fix issues when Gemini CLI hangs, freezes, or becomes unresponsive.
          </p>

          {/* Quick Fixes */}
          <section className="mb-12">
            <h2 className="text-h2 mb-4">Quick Fixes</h2>
            <div className="card">
              <div className="space-y-4">
                <div>
                  <p className="font-semibold mb-2">1. Force quit and restart:</p>
                  <div className="bg-neutral-dark text-white p-3 rounded-lg font-code text-sm">
                    <p className="text-green-400"># Kill hanging process</p>
                    <p>pkill -f gemini</p>
                    <p>killall gemini-cli</p>
                    <p className="text-green-400 mt-2"># Or use Ctrl+C if still in terminal</p>
                    <p>^C</p>
                  </div>
                </div>
                
                <div>
                  <p className="font-semibold mb-2">2. Check system resources:</p>
                  <div className="bg-neutral-dark text-white p-3 rounded-lg font-code text-sm">
                    <p className="text-green-400"># Check CPU and memory usage</p>
                    <p>top -p $(pgrep gemini)</p>
                    <p>htop  # if available</p>
                    <p className="text-green-400 mt-2"># Check disk space</p>
                    <p>df -h</p>
                  </div>
                </div>
                
                <div>
                  <p className="font-semibold mb-2">3. Test with simple command:</p>
                  <div className="bg-neutral-dark text-white p-3 rounded-lg font-code text-sm">
                    <p>gemini --version</p>
                    <p>gemini "Hello, world!"</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Common Causes */}
          <section className="mb-12">
            <h2 className="text-h2 mb-4">Common Causes and Solutions</h2>
            
            <div className="space-y-6">
              <div className="card">
                <h3 className="font-semibold mb-3 text-red-600">❌ Network Timeout</h3>
                <div className="bg-red-50 p-4 rounded-lg border border-red-200 mb-4">
                  <p className="text-sm text-red-700">
                    <strong>Symptoms:</strong> CLI hangs during API calls, no response for extended periods
                  </p>
                </div>
                
                <h4 className="font-semibold mb-2">Solutions:</h4>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm mb-2"><strong>1. Check internet connection:</strong></p>
                    <div className="bg-neutral-dark text-white p-3 rounded-lg font-code text-sm">
                      <p>ping google.com</p>
                      <p>curl -I https://generativelanguage.googleapis.com</p>
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-sm mb-2"><strong>2. Increase timeout:</strong></p>
                    <div className="bg-neutral-dark text-white p-3 rounded-lg font-code text-sm">
                      <p>gemini --timeout 60000 "your prompt"</p>
                      <p>gemini config set timeout 60000</p>
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-sm mb-2"><strong>3. Configure proxy if needed:</strong></p>
                    <div className="bg-neutral-dark text-white p-3 rounded-lg font-code text-sm">
                      <p>export HTTP_PROXY=http://proxy.company.com:8080</p>
                      <p>export HTTPS_PROXY=http://proxy.company.com:8080</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card">
                <h3 className="font-semibold mb-3 text-red-600">❌ Memory Issues</h3>
                <div className="bg-red-50 p-4 rounded-lg border border-red-200 mb-4">
                  <p className="text-sm text-red-700">
                    <strong>Symptoms:</strong> System becomes slow, CLI freezes with large files or complex requests
                  </p>
                </div>
                
                <h4 className="font-semibold mb-2">Solutions:</h4>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm mb-2"><strong>1. Check memory usage:</strong></p>
                    <div className="bg-neutral-dark text-white p-3 rounded-lg font-code text-sm">
                      <p>free -h  # Linux</p>
                      <p>vm_stat  # macOS</p>
                      <p>wmic OS get TotalVisibleMemorySize,FreePhysicalMemory  # Windows</p>
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-sm mb-2"><strong>2. Reduce request size:</strong></p>
                    <div className="bg-neutral-dark text-white p-3 rounded-lg font-code text-sm">
                      <p>gemini --max-tokens 1000 "shorter prompt"</p>
                      <p>gemini --chunk-size 1MB large-file.txt</p>
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-sm mb-2"><strong>3. Close other applications:</strong></p>
                    <p className="text-sm text-neutral-gray">Free up system memory by closing unnecessary applications</p>
                  </div>
                </div>
              </div>

              <div className="card">
                <h3 className="font-semibold mb-3 text-red-600">❌ API Rate Limiting</h3>
                <div className="bg-red-50 p-4 rounded-lg border border-red-200 mb-4">
                  <p className="text-sm text-red-700">
                    <strong>Symptoms:</strong> CLI hangs after several requests, especially in batch operations
                  </p>
                </div>
                
                <h4 className="font-semibold mb-2">Solutions:</h4>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm mb-2"><strong>1. Add delays between requests:</strong></p>
                    <div className="bg-neutral-dark text-white p-3 rounded-lg font-code text-sm">
                      <p>gemini --rate-limit 60 "request 1"</p>
                      <p>sleep 1 && gemini "request 2"</p>
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-sm mb-2"><strong>2. Use batch mode with throttling:</strong></p>
                    <div className="bg-neutral-dark text-white p-3 rounded-lg font-code text-sm">
                      <p>gemini batch --throttle 1s "*.js" "process files"</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card">
                <h3 className="font-semibold mb-3 text-red-600">❌ Configuration Issues</h3>
                <div className="bg-red-50 p-4 rounded-lg border border-red-200 mb-4">
                  <p className="text-sm text-red-700">
                    <strong>Symptoms:</strong> CLI starts but hangs on first command, inconsistent behavior
                  </p>
                </div>
                
                <h4 className="font-semibold mb-2">Solutions:</h4>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm mb-2"><strong>1. Validate configuration:</strong></p>
                    <div className="bg-neutral-dark text-white p-3 rounded-lg font-code text-sm">
                      <p>gemini config validate</p>
                      <p>gemini config show</p>
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-sm mb-2"><strong>2. Reset to defaults:</strong></p>
                    <div className="bg-neutral-dark text-white p-3 rounded-lg font-code text-sm">
                      <p>gemini config reset</p>
                      <p># Or manually delete config file</p>
                      <p>rm ~/.config/gemini-cli/config.json</p>
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-sm mb-2"><strong>3. Test with minimal config:</strong></p>
                    <div className="bg-neutral-dark text-white p-3 rounded-lg font-code text-sm">
                      <p>gemini --no-config --api-key YOUR_KEY "test"</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Diagnostic Commands */}
          <section className="mb-12">
            <h2 className="text-h2 mb-4">Diagnostic Commands</h2>
            <div className="card">
              <div className="space-y-4">
                <div>
                  <p className="font-semibold mb-2">System diagnostics:</p>
                  <div className="bg-neutral-dark text-white p-3 rounded-lg font-code text-sm">
                    <p className="text-green-400"># Check system resources</p>
                    <p>gemini diagnostics --system</p>
                    <p className="text-green-400 mt-2"># Check network connectivity</p>
                    <p>gemini diagnostics --network</p>
                    <p className="text-green-400 mt-2"># Check configuration</p>
                    <p>gemini diagnostics --config</p>
                  </div>
                </div>
                
                <div>
                  <p className="font-semibold mb-2">Debug mode:</p>
                  <div className="bg-neutral-dark text-white p-3 rounded-lg font-code text-sm">
                    <p>gemini --debug --verbose "test command"</p>
                    <p>gemini --trace "test command"</p>
                  </div>
                </div>
                
                <div>
                  <p className="font-semibold mb-2">Log analysis:</p>
                  <div className="bg-neutral-dark text-white p-3 rounded-lg font-code text-sm">
                    <p className="text-green-400"># View recent logs</p>
                    <p>gemini logs --tail 50</p>
                    <p>gemini logs --level error</p>
                    <p className="text-green-400 mt-2"># Clear logs</p>
                    <p>gemini logs --clear</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Process Management */}
          <section className="mb-12">
            <h2 className="text-h2 mb-4">Process Management</h2>
            
            <div className="space-y-6">
              <div className="card">
                <h3 className="font-semibold mb-3">Finding Hanging Processes</h3>
                <div className="bg-neutral-dark text-white p-3 rounded-lg font-code text-sm">
                  <p className="text-green-400"># Find Gemini CLI processes</p>
                  <p>ps aux | grep gemini</p>
                  <p>pgrep -fl gemini</p>
                  <p className="text-green-400 mt-2"># Check process tree</p>
                  <p>pstree -p $(pgrep gemini)</p>
                  <p className="text-green-400 mt-2"># Monitor process activity</p>
                  <p>strace -p $(pgrep gemini)  # Linux</p>
                  <p>dtruss -p $(pgrep gemini)  # macOS</p>
                </div>
              </div>

              <div className="card">
                <h3 className="font-semibold mb-3">Graceful Termination</h3>
                <div className="bg-neutral-dark text-white p-3 rounded-lg font-code text-sm">
                  <p className="text-green-400"># Send SIGTERM (graceful)</p>
                  <p>kill $(pgrep gemini)</p>
                  <p className="text-green-400 mt-2"># Send SIGKILL (force)</p>
                  <p>kill -9 $(pgrep gemini)</p>
                  <p className="text-green-400 mt-2"># Kill all related processes</p>
                  <p>pkill -f "gemini.*"</p>
                </div>
              </div>

              <div className="card">
                <h3 className="font-semibold mb-3">Timeout Management</h3>
                <div className="bg-neutral-dark text-white p-3 rounded-lg font-code text-sm">
                  <p className="text-green-400"># Set command timeout</p>
                  <p>timeout 30s gemini "long running command"</p>
                  <p className="text-green-400 mt-2"># Kill after specific time</p>
                  <p>timeout --kill-after=5s 30s gemini "command"</p>
                  <p className="text-green-400 mt-2"># Use with retry</p>
                  <p>timeout 30s gemini "command" || echo "Command timed out"</p>
                </div>
              </div>
            </div>
          </section>

          {/* Prevention Strategies */}
          <section className="mb-12">
            <h2 className="text-h2 mb-4">Prevention Strategies</h2>
            
            <div className="space-y-6">
              <div className="card">
                <h3 className="font-semibold mb-3">Resource Monitoring</h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm mb-2"><strong>Set up monitoring:</strong></p>
                    <div className="bg-neutral-dark text-white p-3 rounded-lg font-code text-sm">
                      <p>gemini config set monitoring.enabled true</p>
                      <p>gemini config set monitoring.memoryLimit "2GB"</p>
                      <p>gemini config set monitoring.timeoutWarning 30000</p>
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-sm mb-2"><strong>Use resource limits:</strong></p>
                    <div className="bg-neutral-dark text-white p-3 rounded-lg font-code text-sm">
                      <p>ulimit -m 2097152  # 2GB memory limit</p>
                      <p>ulimit -t 300      # 5 minute CPU time limit</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card">
                <h3 className="font-semibold mb-3">Safe Operation Practices</h3>
                <ul className="space-y-2 text-sm">
                  <li>• Test commands with small inputs first</li>
                  <li>• Use timeouts for potentially long-running operations</li>
                  <li>• Monitor system resources before large operations</li>
                  <li>• Use batch operations with appropriate throttling</li>
                  <li>• Keep the CLI updated to the latest version</li>
                </ul>
              </div>

              <div className="card">
                <h3 className="font-semibold mb-3">Configuration Best Practices</h3>
                <div className="bg-neutral-dark text-white p-3 rounded-lg font-code text-sm">
                  <p>{`{
  "timeout": 30000,
  "maxTokens": 2048,
  "retryAttempts": 3,
  "retryDelay": 1000,
  "monitoring": {
    "enabled": true,
    "memoryWarning": "1GB",
    "timeoutWarning": 25000
  }
}`}</p>
                </div>
              </div>
            </div>
          </section>

          {/* Recovery Steps */}
          <section className="mb-12">
            <h2 className="text-h2 mb-4">Recovery Steps</h2>
            <div className="card">
              <div className="space-y-4">
                <div>
                  <p className="font-semibold mb-2">Complete recovery procedure:</p>
                  <div className="bg-neutral-dark text-white p-3 rounded-lg font-code text-sm">
                    <p className="text-green-400"># 1. Stop all processes</p>
                    <p>pkill -f gemini</p>
                    <p className="text-green-400 mt-2"># 2. Clear temporary files</p>
                    <p>rm -rf ~/.cache/gemini-cli/*</p>
                    <p>rm -rf /tmp/gemini-*</p>
                    <p className="text-green-400 mt-2"># 3. Reset configuration</p>
                    <p>gemini config reset</p>
                    <p className="text-green-400 mt-2"># 4. Test basic functionality</p>
                    <p>gemini --version</p>
                    <p>gemini "Hello, world!"</p>
                  </div>
                </div>
                
                <div>
                  <p className="font-semibold mb-2">If problems persist:</p>
                  <div className="bg-neutral-dark text-white p-3 rounded-lg font-code text-sm">
                    <p className="text-green-400"># Reinstall Gemini CLI</p>
                    <p>npm uninstall -g @google/gemini-cli</p>
                    <p>npm install -g @google/gemini-cli</p>
                    <p className="text-green-400 mt-2"># Clear npm cache</p>
                    <p>npm cache clean --force</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Getting Help */}
          <section className="mb-12">
            <h2 className="text-h2 mb-4">Getting Help</h2>
            <div className="card">
              <div className="space-y-4">
                <div>
                  <p className="font-semibold mb-2">Collect diagnostic information:</p>
                  <div className="bg-neutral-dark text-white p-3 rounded-lg font-code text-sm">
                    <p>gemini diagnostics --full &gt; diagnostics.txt</p>
                    <p>gemini logs --export logs.txt</p>
                    <p>gemini config show &gt; config.txt</p>
                  </div>
                </div>
                
                <div>
                  <p className="font-semibold mb-2">System information:</p>
                  <div className="bg-neutral-dark text-white p-3 rounded-lg font-code text-sm">
                    <p>uname -a  # System info</p>
                    <p>node --version  # Node.js version</p>
                    <p>npm --version   # npm version</p>
                    <p>gemini --version  # CLI version</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Next Steps */}
          <div className="bg-blue-50 rounded-card p-6">
            <h3 className="text-h3 mb-3">Next Steps</h3>
            <p className="text-neutral-gray mb-4">
              If you're still experiencing issues, try these resources:
            </p>
            <div className="flex gap-4 flex-wrap">
              <Link href="/qa/debug-issues" className="btn-primary">
                Debug Common Issues
              </Link>
              <Link href="/qa/auth-errors" className="btn-secondary">
                Authentication Errors
              </Link>
              <Link href="/community" className="btn-secondary">
                Get Community Help
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}