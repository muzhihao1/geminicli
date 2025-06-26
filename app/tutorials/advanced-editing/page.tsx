import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Advanced Code Editing Tutorial - Gemini CLI',
  description: 'Master advanced code editing and manipulation techniques with Gemini CLI',
}

export default function AdvancedEditingTutorial() {
  return (
    <div className="pt-24 pb-16">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-h1 mb-4">Advanced Code Editing</h1>
          <p className="text-lg text-neutral-gray mb-12">
            Master complex code manipulation, refactoring, and editing techniques using Gemini CLI's advanced features.
          </p>

          {/* Advanced Techniques */}
          <section className="mb-12">
            <h2 className="text-h2 mb-6">Advanced Techniques</h2>
            <div className="space-y-6">
              
              <div className="card">
                <h3 className="text-h4 mb-3">🔄 Large-scale Refactoring</h3>
                <div className="bg-neutral-dark text-white p-3 rounded-lg font-code text-sm mb-3">
                  <p>gemini "Refactor this codebase to use TypeScript" --recursive src/</p>
                  <p>gemini "Convert class components to hooks" components/*.jsx</p>
                </div>
                <p className="text-sm text-neutral-gray">
                  Apply consistent changes across multiple files and directories.
                </p>
              </div>

              <div className="card">
                <h3 className="text-h4 mb-3">🎯 Context-aware Editing</h3>
                <div className="bg-neutral-dark text-white p-3 rounded-lg font-code text-sm mb-3">
                  <p>gemini "Update this function to match the new API schema" --context api-schema.json function.js</p>
                </div>
                <p className="text-sm text-neutral-gray">
                  Use external context files to inform editing decisions.
                </p>
              </div>

              <div className="card">
                <h3 className="text-h4 mb-3">⚡ Performance Optimization</h3>
                <div className="bg-neutral-dark text-white p-3 rounded-lg font-code text-sm mb-3">
                  <p>gemini "Optimize this code for memory usage and speed" --profile performance algorithm.py</p>
                </div>
                <p className="text-sm text-neutral-gray">
                  Focus editing on specific performance aspects.
                </p>
              </div>
            </div>
          </section>

          {/* Code Patterns */}
          <section className="mb-12">
            <h2 className="text-h2 mb-6">Working with Code Patterns</h2>
            <div className="card">
              <h3 className="text-h4 mb-3">Pattern-based Refactoring</h3>
              <div className="bg-neutral-dark text-white p-3 rounded-lg font-code text-sm">
                <p>#!/bin/bash</p>
                <p># Apply design patterns across codebase</p>
                <p>find src -name "*.js" | while read file; do</p>
                <p>  gemini "Apply observer pattern where appropriate" &lt; "$file" &gt; "$file.tmp"</p>
                <p>  mv "$file.tmp" "$file"</p>
                <p>done</p>
              </div>
            </div>
          </section>

          {/* Next Steps */}
          <div className="bg-blue-50 rounded-card p-6">
            <h3 className="text-h3 mb-3">Continue Learning</h3>
            <div className="flex gap-4 flex-wrap">
              <Link href="/tutorials/automation" className="btn-primary">
                Automation Tutorial
              </Link>
              <Link href="/qa/custom-tools" className="btn-secondary">
                Custom Tools
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}