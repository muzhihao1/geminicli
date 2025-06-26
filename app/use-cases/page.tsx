import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Use Cases - Gemini CLI All in One',
  description: 'Discover real-world use cases and practical applications for Gemini CLI in your development workflow',
}

const useCases = [
  {
    title: 'Code Review & Analysis',
    icon: '🔍',
    description: 'Automate code review processes with AI-powered analysis',
    examples: [
      'Bug detection and security analysis',
      'Code quality assessment',
      'Best practice recommendations',
      'Performance optimization suggestions'
    ],
    href: '/use-cases/code-review'
  },
  {
    title: 'Documentation Generation',
    icon: '📚',
    description: 'Generate comprehensive documentation automatically',
    examples: [
      'API documentation from code',
      'README file generation',
      'Inline code comments',
      'User guides and tutorials'
    ],
    href: '/use-cases/documentation'
  },
  {
    title: 'Learning & Education',
    icon: '🎓',
    description: 'Enhance learning with AI-powered explanations',
    examples: [
      'Code explanation and tutorials',
      'Concept clarification',
      'Best practice learning',
      'Technology comparisons'
    ],
    href: '/use-cases/learning'
  },
  {
    title: 'Automation & Scripting',
    icon: '⚡',
    description: 'Automate repetitive development tasks',
    examples: [
      'Batch file processing',
      'CI/CD integration',
      'Automated testing workflows',
      'Deployment scripts'
    ],
    href: '/use-cases/automation'
  },
  {
    title: 'Data Processing',
    icon: '📊',
    description: 'Analyze and transform data efficiently',
    examples: [
      'Log file analysis',
      'Data format conversion',
      'Report generation',
      'Configuration validation'
    ],
    href: '/use-cases/data-processing'
  },
  {
    title: 'Team Collaboration',
    icon: '👥',
    description: 'Improve team workflow and communication',
    examples: [
      'Code review assistance',
      'Knowledge sharing',
      'Onboarding new developers',
      'Technical decision support'
    ],
    href: '/use-cases/collaboration'
  }
]

const industries = [
  {
    name: 'Web Development',
    description: 'Frontend, backend, and full-stack development workflows',
    icon: '🌐'
  },
  {
    name: 'Mobile Development',
    description: 'iOS, Android, and cross-platform app development',
    icon: '📱'
  },
  {
    name: 'DevOps & Infrastructure',
    description: 'Deployment, monitoring, and infrastructure management',
    icon: '🛠️'
  },
  {
    name: 'Data Science',
    description: 'Data analysis, machine learning, and research',
    icon: '🔬'
  },
  {
    name: 'Enterprise Software',
    description: 'Large-scale applications and system integration',
    icon: '🏢'
  },
  {
    name: 'Open Source',
    description: 'Community projects and open source contributions',
    icon: '🌟'
  }
]

export default function UseCasesPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-h1 mb-4">Use Cases</h1>
          <p className="text-lg text-neutral-gray mb-12 max-w-3xl">
            Discover how Gemini CLI can transform your development workflow with real-world use cases and practical applications across different scenarios.
          </p>

          {/* Main Use Cases */}
          <section className="mb-16">
            <h2 className="text-h2 mb-8">Popular Use Cases</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {useCases.map((useCase) => (
                <Link
                  key={useCase.title}
                  href={useCase.href}
                  className="group card hover:shadow-xl transition-all duration-300 hover:border-google-blue/20"
                >
                  <div className="flex items-center mb-4">
                    <span className="text-3xl mr-3">{useCase.icon}</span>
                    <h3 className="text-h4 group-hover:text-google-blue transition-colors">
                      {useCase.title}
                    </h3>
                  </div>
                  <p className="text-neutral-gray mb-4">{useCase.description}</p>
                  <ul className="space-y-1 mb-4">
                    {useCase.examples.map((example, index) => (
                      <li key={index} className="text-sm text-neutral-gray flex items-start">
                        <span className="text-google-green mr-2 mt-0.5">•</span>
                        {example}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center text-google-blue text-sm font-medium">
                    Learn more
                    <svg className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" 
                         fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                            d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* Industries */}
          <section className="mb-16">
            <h2 className="text-h2 mb-8">Industries & Domains</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {industries.map((industry) => (
                <div key={industry.name} className="card">
                  <div className="flex items-center mb-3">
                    <span className="text-2xl mr-3">{industry.icon}</span>
                    <h3 className="text-h5">{industry.name}</h3>
                  </div>
                  <p className="text-sm text-neutral-gray">{industry.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Success Stories */}
          <section className="mb-16">
            <h2 className="text-h2 mb-8">Success Stories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              <div className="card bg-blue-50">
                <h3 className="text-h4 mb-3">50% Faster Code Reviews</h3>
                <p className="text-neutral-gray mb-4">
                  "Using Gemini CLI for automated code analysis has cut our review time in half while catching more issues."
                </p>
                <p className="text-sm font-medium text-google-blue">— Senior Developer at Tech Startup</p>
              </div>

              <div className="card bg-green-50">
                <h3 className="text-h4 mb-3">Automated Documentation</h3>
                <p className="text-neutral-gray mb-4">
                  "Our API documentation is now always up-to-date thanks to automated generation with Gemini CLI."
                </p>
                <p className="text-sm font-medium text-google-green">— DevOps Engineer at Enterprise</p>
              </div>

              <div className="card bg-purple-50">
                <h3 className="text-h4 mb-3">Enhanced Learning</h3>
                <p className="text-neutral-gray mb-4">
                  "New team members get up to speed 3x faster with AI-powered code explanations."
                </p>
                <p className="text-sm font-medium text-purple-600">— Engineering Manager</p>
              </div>

              <div className="card bg-orange-50">
                <h3 className="text-h4 mb-3">Streamlined Workflow</h3>
                <p className="text-neutral-gray mb-4">
                  "Gemini CLI has become an essential part of our development pipeline, saving hours daily."
                </p>
                <p className="text-sm font-medium text-orange-600">— Full Stack Developer</p>
              </div>
            </div>
          </section>

          {/* Getting Started */}
          <div className="bg-gradient-to-r from-google-blue to-google-green rounded-card p-8 text-white text-center">
            <h3 className="text-h3 mb-4">Ready to Transform Your Workflow?</h3>
            <p className="text-lg mb-6 opacity-90">
              Start with our quick setup guide and discover how Gemini CLI can enhance your development process.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link href="/quick-start" className="bg-white text-google-blue px-6 py-3 rounded-button font-medium hover:bg-neutral-light transition-colors">
                Get Started
              </Link>
              <Link href="/qa" className="border border-white text-white px-6 py-3 rounded-button font-medium hover:bg-white/10 transition-colors">
                View Q&A Hub
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}