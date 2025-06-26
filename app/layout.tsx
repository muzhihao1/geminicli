import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import GoogleAnalytics from '@/components/GoogleAnalytics'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Gemini CLI All in One - Your Complete Guide to Google\'s AI CLI',
  description: 'From installation to advanced usage, from official docs to community resources - find everything you need for Gemini CLI in one place',
  keywords: 'Gemini CLI, Google Gemini, command line tool, AI CLI, Gemini terminal, Gemini tutorial',
  authors: [{ name: 'Gemini CLI All in One' }],
  openGraph: {
    title: 'Gemini CLI All in One',
    description: 'Your one-stop solution for all Gemini CLI needs',
    url: 'https://geminicli.one',
    siteName: 'Gemini CLI All in One',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gemini CLI All in One',
    description: 'Your one-stop solution for all Gemini CLI needs',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <link rel="canonical" href="https://geminicli.one" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'Gemini CLI All in One',
              url: 'https://geminicli.one',
              description: 'Your one-stop solution for all Gemini CLI needs',
              potentialAction: {
                '@type': 'SearchAction',
                target: {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://geminicli.one/search?q={search_term_string}'
                },
                'query-input': 'required name=search_term_string'
              }
            })
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <GoogleAnalytics />
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}