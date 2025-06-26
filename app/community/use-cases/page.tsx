import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Community Use Cases - Gemini CLI',
  description: 'Real-world applications and success stories from the Gemini CLI community',
}

export default function CommunityUseCasesPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-h1 mb-4">Community Use Cases</h1>
          <p className="text-lg text-neutral-gray mb-12">
            Discover how developers worldwide are using Gemini CLI to solve real-world problems and enhance their workflows.
          </p>

          {/* Success Stories */}
          <section className="mb-12">
            <h2 className="text-h2 mb-6">Success Stories</h2>
            <div className="space-y-6">
              
              <div className="card bg-blue-50">
                <h3 className="text-h4 mb-2">Startup Accelerates Development by 300%</h3>
                <p className="text-neutral-gray mb-3">
                  "By integrating Gemini CLI into our development workflow, we reduced code review time from hours to minutes and caught bugs before they reached production."
                </p>
                <div className="text-sm">
                  <span className="font-medium">TechStart Inc.</span> • Series A Startup • 15 developers
                </div>
                <div className="flex gap-2 mt-3">
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">code-review</span>
                  <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">productivity</span>
                </div>
              </div>

              <div className="card bg-green-50">
                <h3 className="text-h4 mb-2">Enterprise Automates Documentation</h3>
                <p className="text-neutral-gray mb-3">
                  "Gemini CLI helped us maintain up-to-date documentation for our 50+ microservices automatically, saving our team 20 hours per week."
                </p>
                <div className="text-sm">
                  <span className="font-medium">Global Corp</span> • Fortune 500 • 200+ developers
                </div>
                <div className="flex gap-2 mt-3">
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">documentation</span>
                  <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">automation</span>
                </div>
              </div>

              <div className="card bg-purple-50">
                <h3 className="text-h4 mb-2">Open Source Project Improves Code Quality</h3>
                <p className="text-neutral-gray mb-3">
                  "Using Gemini CLI for automated code analysis helped our open source project maintain consistent quality across 100+ contributors."
                </p>
                <div className="text-sm">
                  <span className="font-medium">OpenDev Project</span> • Open Source • 100+ contributors
                </div>
                <div className="flex gap-2 mt-3">
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">open-source</span>
                  <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded">quality</span>
                </div>
              </div>
            </div>
          </section>

          {/* Use Case Categories */}
          <section className="mb-12">
            <h2 className="text-h2 mb-6">Popular Use Case Categories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <div className="card">
                <h3 className="text-h4 mb-2">🚀 Startup Workflows</h3>
                <p className="text-sm text-neutral-gray">Fast development, code quality, rapid prototyping</p>
              </div>

              <div className="card">
                <h3 className="text-h4 mb-2">🏢 Enterprise Integration</h3>
                <p className="text-sm text-neutral-gray">Large-scale automation, compliance, documentation</p>
              </div>

              <div className="card">
                <h3 className="text-h4 mb-2">🌟 Open Source</h3>
                <p className="text-sm text-neutral-gray">Community collaboration, contributor onboarding</p>
              </div>

              <div className="card">
                <h3 className="text-h4 mb-2">🎓 Education</h3>
                <p className="text-sm text-neutral-gray">Teaching code, learning assistance, tutoring</p>
              </div>
            </div>
          </section>

          {/* Share Your Story */}
          <div className="bg-orange-50 rounded-card p-6">
            <h3 className="text-h3 mb-3">Share Your Success Story</h3>
            <p className="text-neutral-gray mb-4">
              Help inspire others by sharing how Gemini CLI has transformed your development workflow.
            </p>
            <div className="flex gap-4 flex-wrap">
              <Link href="/contribute" className="btn-primary bg-orange-500 hover:bg-orange-600">
                Share Your Story
              </Link>
              <Link href="/use-cases" className="btn-secondary">
                View Official Use Cases
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}