import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Learning & Education - Gemini CLI Use Cases',
  description: 'Enhance learning and education with AI-powered code explanations and tutorials',
}

export default function LearningPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-h1 mb-4">Learning & Education</h1>
          <p className="text-lg text-neutral-gray mb-12">
            Accelerate learning and understanding with AI-powered explanations, tutorials, and educational content generation.
          </p>

          {/* Learning Scenarios */}
          <section className="mb-12">
            <h2 className="text-h2 mb-4">Learning Scenarios</h2>
            <div className="space-y-4">
              
              <div className="card">
                <h3 className="font-semibold mb-3">🎯 Code Explanation</h3>
                <div className="bg-neutral-dark text-white p-3 rounded-lg font-code text-sm">
                  <p>gemini "Explain this code step by step for a beginner" &lt; algorithm.js</p>
                  <p>gemini "What does this React component do?" &lt; Component.tsx</p>
                </div>
              </div>

              <div className="card">
                <h3 className="font-semibold mb-3">📖 Concept Learning</h3>
                <div className="bg-neutral-dark text-white p-3 rounded-lg font-code text-sm">
                  <p>gemini "Explain design patterns used in this code"</p>
                  <p>gemini "Compare different approaches to solve this problem"</p>
                </div>
              </div>

              <div className="card">
                <h3 className="font-semibold mb-3">🏆 Best Practices</h3>
                <div className="bg-neutral-dark text-white p-3 rounded-lg font-code text-sm">
                  <p>gemini "Show best practices for this type of code" &lt; example.py</p>
                  <p>gemini "How can this code be improved?" &lt; draft.js</p>
                </div>
              </div>
            </div>
          </section>

          {/* Educational Content */}
          <section className="mb-12">
            <h2 className="text-h2 mb-4">Educational Content Generation</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <div className="card">
                <h3 className="font-semibold mb-3">📚 Tutorial Creation</h3>
                <p className="text-sm text-neutral-gray mb-3">Generate step-by-step tutorials</p>
                <div className="bg-neutral-light p-2 rounded text-xs font-code">
                  gemini "Create a tutorial for this feature"
                </div>
              </div>

              <div className="card">
                <h3 className="font-semibold mb-3">❓ Quiz Generation</h3>
                <p className="text-sm text-neutral-gray mb-3">Create practice questions</p>
                <div className="bg-neutral-light p-2 rounded text-xs font-code">
                  gemini "Generate quiz questions about this code"
                </div>
              </div>

              <div className="card">
                <h3 className="font-semibold mb-3">🔍 Code Examples</h3>
                <p className="text-sm text-neutral-gray mb-3">Generate learning examples</p>
                <div className="bg-neutral-light p-2 rounded text-xs font-code">
                  gemini "Show examples of this pattern"
                </div>
              </div>

              <div className="card">
                <h3 className="font-semibold mb-3">📝 Study Guides</h3>
                <p className="text-sm text-neutral-gray mb-3">Create comprehensive study materials</p>
                <div className="bg-neutral-light p-2 rounded text-xs font-code">
                  gemini "Create a study guide for this topic"
                </div>
              </div>
            </div>
          </section>

          {/* Onboarding */}
          <section className="mb-12">
            <h2 className="text-h2 mb-4">Team Onboarding</h2>
            <div className="card">
              <h3 className="font-semibold mb-3">New Developer Onboarding Script</h3>
              <div className="bg-neutral-dark text-white p-3 rounded-lg font-code text-sm">
                <p>#!/bin/bash</p>
                <p># onboard-new-dev.sh</p>
                <p>echo "Generating onboarding materials..."</p>
                <p>gemini "Create a comprehensive onboarding guide for this project" . &gt; onboarding-guide.md</p>
                <p>gemini "Explain the project architecture and key components" . &gt; architecture-overview.md</p>
                <p>gemini "List common development tasks and workflows" . &gt; dev-workflows.md</p>
                <p>echo "Onboarding materials created!"</p>
              </div>
            </div>
          </section>

          {/* Next Steps */}
          <div className="bg-blue-50 rounded-card p-6">
            <h3 className="text-h3 mb-3">More Learning Resources</h3>
            <div className="flex gap-4 flex-wrap">
              <Link href="/use-cases/collaboration" className="btn-primary">
                Team Collaboration
              </Link>
              <Link href="/use-cases/documentation" className="btn-secondary">
                Documentation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}