import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Data Processing - Gemini CLI Use Cases',
  description: 'Process and analyze data efficiently using Gemini CLI',
}

export default function DataProcessingPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-h1 mb-4">Data Processing</h1>
          <p className="text-lg text-neutral-gray mb-12">
            Transform, analyze, and process data efficiently with AI-powered assistance from Gemini CLI.
          </p>

          {/* Data Processing Examples */}
          <section className="mb-12">
            <h2 className="text-h2 mb-4">Data Processing Examples</h2>
            <div className="space-y-4">
              
              <div className="card">
                <h3 className="font-semibold mb-3">📊 Log Analysis</h3>
                <div className="bg-neutral-dark text-white p-3 rounded-lg font-code text-sm">
                  <p>gemini "Analyze error patterns in this log file" &lt; app.log</p>
                  <p>gemini "Extract key metrics from web server logs" &lt; access.log</p>
                </div>
              </div>

              <div className="card">
                <h3 className="font-semibold mb-3">🔄 Format Conversion</h3>
                <div className="bg-neutral-dark text-white p-3 rounded-lg font-code text-sm">
                  <p>gemini "Convert this JSON to CSV format" &lt; data.json &gt; data.csv</p>
                  <p>gemini "Transform this XML to YAML" &lt; config.xml &gt; config.yaml</p>
                </div>
              </div>

              <div className="card">
                <h3 className="font-semibold mb-3">📈 Data Analysis</h3>
                <div className="bg-neutral-dark text-white p-3 rounded-lg font-code text-sm">
                  <p>gemini "Summarize trends in this dataset" &lt; sales-data.csv</p>
                  <p>gemini "Find anomalies in this time series data" &lt; metrics.json</p>
                </div>
              </div>
            </div>
          </section>

          {/* Batch Processing */}
          <section className="mb-12">
            <h2 className="text-h2 mb-4">Batch Data Processing</h2>
            <div className="card">
              <h3 className="font-semibold mb-3">Mass Data Transformation</h3>
              <div className="bg-neutral-dark text-white p-3 rounded-lg font-code text-sm">
                <p>#!/bin/bash</p>
                <p># process-data-files.sh</p>
                <p>for file in data/*.json; do</p>
                <p>  echo "Processing $file..."</p>
                <p>  gemini "Clean and normalize this data" &lt; "$file" &gt; "processed/$(basename "$file")"</p>
                <p>done</p>
              </div>
            </div>
          </section>

          {/* Next Steps */}
          <div className="bg-blue-50 rounded-card p-6">
            <h3 className="text-h3 mb-3">More Data Use Cases</h3>
            <div className="flex gap-4 flex-wrap">
              <Link href="/use-cases/collaboration" className="btn-primary">
                Team Collaboration
              </Link>
              <Link href="/qa/file-operations" className="btn-secondary">
                File Operations
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}