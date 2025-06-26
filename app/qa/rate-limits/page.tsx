import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Rate Limit Errors - Gemini CLI All in One',
  description: 'Learn how to handle and fix rate limit errors when using Gemini CLI',
}

export default function RateLimitsPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-h1 mb-4">Fixing Rate Limit Errors</h1>
          <p className="text-lg text-neutral-gray mb-12">
            Understand and resolve rate limit errors to ensure smooth operation of Gemini CLI within API quotas.
          </p>

          <section className="mb-12">
            <h2 className="text-h2 mb-4">Understanding Rate Limits</h2>
            <div className="card">
              <p className="mb-4">
                Rate limits protect the Google AI API from overuse. Common limits include:
              </p>
              <ul className="space-y-2">
                <li>• <strong>Requests per minute (RPM):</strong> Maximum API calls per minute</li>
                <li>• <strong>Tokens per minute (TPM):</strong> Maximum tokens processed per minute</li>
                <li>• <strong>Requests per day (RPD):</strong> Daily API call limit</li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-h2 mb-4">Quick Fixes</h2>
            <div className="space-y-4">
              
              <div className="card">
                <h3 className="font-semibold mb-3">1. Wait and Retry</h3>
                <p className="text-sm text-neutral-gray mb-3">
                  The simplest solution is to wait a few minutes before retrying:
                </p>
                <div className="bg-neutral-dark text-white p-3 rounded-lg font-code text-sm">
                  <p>sleep 60 && gemini "your command here"</p>
                </div>
              </div>

              <div className="card">
                <h3 className="font-semibold mb-3">2. Use Smaller Prompts</h3>
                <p className="text-sm text-neutral-gray mb-3">
                  Break large prompts into smaller chunks.
                </p>
              </div>
            </div>
          </section>

          <div className="bg-blue-50 rounded-card p-6">
            <h3 className="text-h3 mb-3">Need More Help?</h3>
            <div className="flex gap-4 flex-wrap">
              <Link href="/qa/debug-issues" className="btn-primary">
                Debug Common Issues
              </Link>
              <Link href="/community" className="btn-secondary">
                Ask the Community
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}