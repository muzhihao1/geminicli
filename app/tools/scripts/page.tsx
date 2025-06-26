import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Shell Scripts Collection - Gemini CLI All in One',
  description: 'Useful shell scripts and automation tools for common Gemini CLI tasks',
}

export default function ScriptsPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-h1 mb-4">Shell Scripts Collection</h1>
          <p className="text-lg text-neutral-gray mb-12">
            Ready-to-use shell scripts and automation tools to streamline your Gemini CLI workflow.
          </p>

          {/* Script Categories */}
          <section className="mb-12">
            <h2 className="text-h2 mb-4">Script Categories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              
              <div className="card text-center">
                <div className="text-4xl mb-3">🚀</div>
                <h3 className="font-semibold mb-2">Setup & Installation</h3>
                <p className="text-sm text-neutral-gray">Scripts for initial setup and configuration</p>
              </div>

              <div className="card text-center">
                <div className="text-4xl mb-3">🔄</div>
                <h3 className="font-semibold mb-2">Batch Processing</h3>
                <p className="text-sm text-neutral-gray">Process multiple files and directories</p>
              </div>

              <div className="card text-center">
                <div className="text-4xl mb-3">🛠️</div>
                <h3 className="font-semibold mb-2">Development Tools</h3>
                <p className="text-sm text-neutral-gray">Helper scripts for development workflow</p>
              </div>
            </div>
          </section>

          {/* Example Script */}
          <section className="mb-12">
            <h2 className="text-h2 mb-4">Quick Setup Script</h2>
            <div className="card">
              <p className="text-neutral-gray mb-4">Automated installation and initial configuration</p>
              <div className="bg-neutral-dark text-white p-4 rounded-lg font-code text-sm">
                <p className="text-green-400">#!/bin/bash</p>
                <p># Gemini CLI Quick Setup Script</p>
                <p>npm install -g @google/gemini-cli</p>
                <p>echo "Setup complete!"</p>
              </div>
            </div>
          </section>

          {/* Next Steps */}
          <div className="bg-blue-50 rounded-card p-6">
            <h3 className="text-h3 mb-3">Ready to Automate?</h3>
            <p className="text-neutral-gray mb-4">
              Start automating your Gemini CLI workflow:
            </p>
            <div className="flex gap-4 flex-wrap">
              <Link href="/qa/automation" className="btn-primary">
                Automation Guide
              </Link>
              <Link href="/qa/batch-ops" className="btn-secondary">
                Batch Operations
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}