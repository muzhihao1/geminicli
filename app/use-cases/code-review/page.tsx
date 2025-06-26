import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Code Review & Analysis - Gemini CLI Use Cases',
  description: 'Learn how to use Gemini CLI for automated code review, bug detection, and code quality analysis',
}

export default function CodeReviewPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-h1 mb-4">Code Review & Analysis</h1>
          <p className="text-lg text-neutral-gray mb-12">
            Enhance your code review process with AI-powered analysis, bug detection, and quality assessment using Gemini CLI.
          </p>

          <section className="mb-12">
            <h2 className="text-h2 mb-4">Quick Start</h2>
            <div className="card">
              <h3 className="font-semibold mb-3">Basic Code Review</h3>
              <div className="bg-neutral-dark text-white p-3 rounded-lg font-code text-sm mb-3">
                <p>gemini "Review this code for bugs and improvements" &lt; script.js</p>
              </div>
              <p className="text-sm text-neutral-gray">
                This command analyzes your code and provides suggestions for improvements, bug fixes, and best practices.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-h2 mb-4">Common Review Scenarios</h2>
            <div className="space-y-6">
              
              <div className="card">
                <h3 className="font-semibold mb-3">🐛 Bug Detection</h3>
                <div className="bg-neutral-dark text-white p-3 rounded-lg font-code text-sm mb-3">
                  <p>gemini "Find potential bugs and security issues" &lt; auth.js</p>
                </div>
                <p className="text-sm text-neutral-gray">
                  Identify potential bugs, security vulnerabilities, and performance bottlenecks before they reach production.
                </p>
              </div>

              <div className="card">
                <h3 className="font-semibold mb-3">📊 Code Quality Assessment</h3>
                <div className="bg-neutral-dark text-white p-3 rounded-lg font-code text-sm mb-3">
                  <p>gemini "Assess code quality and suggest improvements" &lt; component.tsx</p>
                </div>
                <p className="text-sm text-neutral-gray">
                  Evaluate code quality, maintainability, and adherence to best practices and coding standards.
                </p>
              </div>
            </div>
          </section>

          <div className="bg-blue-50 rounded-card p-6">
            <h3 className="text-h3 mb-3">Enhance Your Code Review Process</h3>
            <div className="flex gap-4 flex-wrap">
              <Link href="/use-cases/automation" className="btn-primary">
                Automation Workflows
              </Link>
              <Link href="/qa/custom-tools" className="btn-secondary">
                Custom Review Tools
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}