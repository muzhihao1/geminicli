import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Community - Gemini CLI All in One',
  description: 'Join the Gemini CLI community to connect, learn, and share with other developers',
}

const communityChannels = [
  {
    name: 'GitHub Discussions',
    description: 'Official discussions on the Gemini CLI repository',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
      </svg>
    ),
    url: 'https://github.com/google/gemini-cli/discussions',
    members: '2.5k+',
    activity: 'Very Active',
  },
  {
    name: 'Discord Server',
    description: 'Real-time chat with the Gemini CLI community',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
      </svg>
    ),
    url: 'https://discord.gg/gemini-cli',
    members: '5k+',
    activity: 'Active',
  },
  {
    name: 'Stack Overflow',
    description: 'Q&A with the gemini-cli tag',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M15.725 0l-1.72 1.277 6.39 8.588 1.716-1.277L15.725 0zm-3.94 3.418l-1.369 1.644 8.225 6.85 1.369-1.644-8.225-6.85zm-3.15 4.465l-.905 1.94 9.702 4.517.904-1.94-9.701-4.517zm-1.85 4.86l-.44 2.093 10.473 2.201.44-2.092-10.473-2.203zM1.89 15.47V24h19.19v-8.53h-2.133v6.397H4.021v-6.396H1.89zm4.265 2.133v2.13h10.66v-2.13H6.154Z"/>
      </svg>
    ),
    url: 'https://stackoverflow.com/questions/tagged/gemini-cli',
    members: '1k+',
    activity: 'Growing',
  },
  {
    name: 'Reddit Community',
    description: 'r/GeminiCLI subreddit for discussions and news',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12a12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547l-.8 3.747c1.824.07 3.48.632 4.674 1.488c.308-.309.73-.491 1.207-.491c.968 0 1.754.786 1.754 1.754c0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87c-3.874 0-7.004-2.176-7.004-4.87c0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754c.463 0 .898.196 1.207.49c1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197a.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248c.687 0 1.248-.561 1.248-1.249c0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25c0 .687.561 1.248 1.249 1.248c.688 0 1.249-.561 1.249-1.249c0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094a.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913c.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463a.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73c-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/>
      </svg>
    ),
    url: 'https://reddit.com/r/geminicli',
    members: '3k+',
    activity: 'Active',
  },
]

const communityStats = [
  { label: 'Total Members', value: '10k+', icon: '👥' },
  { label: 'Countries', value: '50+', icon: '🌍' },
  { label: 'Contributors', value: '200+', icon: '💻' },
  { label: 'Monthly Active', value: '5k+', icon: '📊' },
]

export default function CommunityPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-h1 mb-4">Community</h1>
          <p className="text-lg text-neutral-gray mb-12 max-w-3xl">
            Connect with thousands of developers using Gemini CLI. Share knowledge, get help, 
            and contribute to the growing ecosystem.
          </p>

          {/* Community Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {communityStats.map((stat) => (
              <div key={stat.label} className="text-center p-6 bg-neutral-light rounded-card">
                <span className="text-4xl mb-2 block">{stat.icon}</span>
                <div className="text-2xl font-bold text-neutral-dark">{stat.value}</div>
                <div className="text-sm text-neutral-gray">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Community Channels */}
          <section className="mb-12">
            <h2 className="text-h2 mb-6">Join the Conversation</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {communityChannels.map((channel) => (
                <Link
                  key={channel.name}
                  href={channel.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card hover:shadow-card-hover transition-shadow group"
                >
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-google-blue/10 rounded-lg flex items-center justify-center text-google-blue mr-4">
                      {channel.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-h3 mb-1 group-hover:text-google-blue transition-colors">
                        {channel.name}
                      </h3>
                      <p className="text-neutral-gray mb-3">{channel.description}</p>
                      <div className="flex items-center gap-4 text-sm">
                        <span className="flex items-center gap-1">
                          <span className="text-neutral-gray">Members:</span>
                          <span className="font-medium">{channel.members}</span>
                        </span>
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          channel.activity === 'Very Active' 
                            ? 'bg-green-100 text-green-800' 
                            : channel.activity === 'Active'
                            ? 'bg-blue-100 text-blue-800'
                            : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {channel.activity}
                        </span>
                      </div>
                    </div>
                    <svg className="w-5 h-5 text-neutral-gray opacity-0 group-hover:opacity-100 transition-opacity" 
                         fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* Ways to Contribute */}
          <section className="mb-12">
            <h2 className="text-h2 mb-6">Ways to Contribute</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="card">
                <div className="w-12 h-12 bg-google-blue/10 rounded-lg flex items-center justify-center text-google-blue mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="text-h3 mb-2">Code Contributions</h3>
                <p className="text-neutral-gray mb-4">
                  Submit pull requests, fix bugs, or add new features to Gemini CLI.
                </p>
                <Link href="https://github.com/google/gemini-cli/contribute" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-google-blue hover:underline">
                  Contribution Guide →
                </Link>
              </div>

              <div className="card">
                <div className="w-12 h-12 bg-google-green/10 rounded-lg flex items-center justify-center text-google-green mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-h3 mb-2">Documentation</h3>
                <p className="text-neutral-gray mb-4">
                  Help improve docs, write tutorials, or translate content.
                </p>
                <Link href="/contribute/docs" className="text-google-blue hover:underline">
                  Documentation Guide →
                </Link>
              </div>

              <div className="card">
                <div className="w-12 h-12 bg-google-yellow/10 rounded-lg flex items-center justify-center text-google-yellow mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                          d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-h3 mb-2">Community Support</h3>
                <p className="text-neutral-gray mb-4">
                  Answer questions, share knowledge, and help other users.
                </p>
                <Link href="/contribute/support" className="text-google-blue hover:underline">
                  Support Guide →
                </Link>
              </div>
            </div>
          </section>

          {/* Community Guidelines */}
          <section className="p-8 bg-blue-50 rounded-card">
            <h2 className="text-h2 mb-4">Community Guidelines</h2>
            <p className="text-neutral-gray mb-6">
              We're committed to providing a welcoming and supportive environment for all members.
            </p>
            <ul className="space-y-3 text-neutral-dark">
              <li className="flex items-start">
                <span className="text-google-blue mr-2">✓</span>
                <span>Be respectful and inclusive to all community members</span>
              </li>
              <li className="flex items-start">
                <span className="text-google-blue mr-2">✓</span>
                <span>Share knowledge and help others learn</span>
              </li>
              <li className="flex items-start">
                <span className="text-google-blue mr-2">✓</span>
                <span>Provide constructive feedback and suggestions</span>
              </li>
              <li className="flex items-start">
                <span className="text-google-blue mr-2">✓</span>
                <span>Follow the code of conduct in all interactions</span>
              </li>
            </ul>
            <Link href="/code-of-conduct" className="inline-block mt-6 text-google-blue hover:underline">
              Read Full Code of Conduct →
            </Link>
          </section>
        </div>
      </div>
    </div>
  )
}