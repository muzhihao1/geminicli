import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Team Collaboration - Gemini CLI Use Cases',
  description: 'Improve team collaboration and communication with Gemini CLI',
}

export default function CollaborationPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-h1 mb-4">Team Collaboration</h1>
          <p className="text-lg text-neutral-gray mb-12">
            Enhance team collaboration, knowledge sharing, and communication with AI-powered assistance.
          </p>

          {/* Collaboration Examples */}
          <section className="mb-12">
            <h2 className="text-h2 mb-4">Collaboration Examples</h2>
            <div className="space-y-4">
              
              <div className="card">
                <h3 className="font-semibold mb-3">📝 Code Review Assistance</h3>
                <div className="bg-neutral-dark text-white p-3 rounded-lg font-code text-sm">
                  <p>gemini "Generate constructive code review comments" &lt; changes.diff</p>
                  <p>gemini "Explain the impact of these changes" &lt; pull-request.patch</p>
                </div>
              </div>

              <div className="card">
                <h3 className="font-semibold mb-3">💬 Communication Enhancement</h3>
                <div className="bg-neutral-dark text-white p-3 rounded-lg font-code text-sm">
                  <p>gemini "Summarize this technical discussion for stakeholders"</p>
                  <p>gemini "Create a project status update from recent commits"</p>
                </div>
              </div>

              <div className="card">
                <h3 className="font-semibold mb-3">🎯 Knowledge Sharing</h3>
                <div className="bg-neutral-dark text-white p-3 rounded-lg font-code text-sm">
                  <p>gemini "Create a knowledge base entry for this solution" &lt; solution.js</p>
                  <p>gemini "Document lessons learned from this project" . &gt; lessons-learned.md</p>
                </div>
              </div>
            </div>
          </section>

          {/* Team Workflows */}
          <section className="mb-12">
            <h2 className="text-h2 mb-4">Team Workflow Integration</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <div className="card">
                <h3 className="font-semibold mb-3">📊 Sprint Planning</h3>
                <p className="text-sm text-neutral-gray mb-3">Generate sprint summaries and planning docs</p>
                <div className="bg-neutral-light p-2 rounded text-xs font-code">
                  gemini "Create sprint retrospective from git history"
                </div>
              </div>

              <div className="card">
                <h3 className="font-semibold mb-3">📋 Meeting Preparation</h3>
                <p className="text-sm text-neutral-gray mb-3">Prepare technical meeting materials</p>
                <div className="bg-neutral-light p-2 rounded text-xs font-code">
                  gemini "Generate technical discussion points"
                </div>
              </div>

              <div className="card">
                <h3 className="font-semibold mb-3">🔄 Handoff Documentation</h3>
                <p className="text-sm text-neutral-gray mb-3">Create handoff documentation</p>
                <div className="bg-neutral-light p-2 rounded text-xs font-code">
                  gemini "Create handoff guide for this feature"
                </div>
              </div>

              <div className="card">
                <h3 className="font-semibold mb-3">📚 Team Training</h3>
                <p className="text-sm text-neutral-gray mb-3">Generate training materials</p>
                <div className="bg-neutral-light p-2 rounded text-xs font-code">
                  gemini "Create training guide for new patterns"
                </div>
              </div>
            </div>
          </section>

          {/* Cross-team Communication */}
          <section className="mb-12">
            <h2 className="text-h2 mb-4">Cross-team Communication</h2>
            <div className="card">
              <h3 className="font-semibold mb-3">Stakeholder Communication Script</h3>
              <div className="bg-neutral-dark text-white p-3 rounded-lg font-code text-sm">
                <p>#!/bin/bash</p>
                <p># generate-status-update.sh</p>
                <p>echo "Generating project status update..."</p>
                <p>git log --since="1 week ago" --oneline &gt; recent-commits.txt</p>
                <p>gemini "Create executive summary from recent development activity" &lt; recent-commits.txt &gt; status-update.md</p>
                <p>gemini "Identify risks and blockers from recent work" &lt; recent-commits.txt &gt; risks-and-blockers.md</p>
                <p>echo "Status update generated!"</p>
              </div>
            </div>
          </section>

          {/* Next Steps */}
          <div className="bg-blue-50 rounded-card p-6">
            <h3 className="text-h3 mb-3">Enhance Team Collaboration</h3>
            <div className="flex gap-4 flex-wrap">
              <Link href="/use-cases/learning" className="btn-primary">
                Learning & Education
              </Link>
              <Link href="/use-cases/code-review" className="btn-secondary">
                Code Review
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}