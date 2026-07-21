import type { Metadata } from 'next'
import './globals.css'
import { Big_Shoulders_Display, IBM_Plex_Sans, Newsreader } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'

const display = Big_Shoulders_Display({
  subsets: ['latin'],
  weight: ['700', '900'],
  variable: '--font-display',
  display: 'swap',
})

const body = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-body',
  display: 'swap',
})

const serif = Newsreader({
  subsets: ['latin'],
  weight: ['400'],
  style: ['italic'],
  variable: '--font-serif',
  display: 'swap',
})

const description =
  'Independent commercial and product advisory for betting and gaming operators, suppliers, and investors. Led by Sam Depoortere — run the operator P&L, built the supplier platform.'

export const metadata: Metadata = {
  title: 'Kerdomax — Commercial & Product Advisory for Betting and Gaming',
  description,
  icons: {
    icon: `data:image/svg+xml,${encodeURIComponent(
      "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><rect width='32' height='32' rx='7' fill='#0f2a2c'/><text x='16' y='23' font-family='Arial Black,Arial' font-size='20' font-weight='900' fill='#ff6b4a' text-anchor='middle'>K</text></svg>",
    )}`,
  },
  openGraph: {
    title: 'Kerdomax — Commercial & Product Advisory for Betting and Gaming',
    description:
      'Run the operator P&L, built the supplier platform. Independent advisory for operators, suppliers and the investors backing them.',
    url: 'https://kerdomax.com',
    siteName: 'Kerdomax',
    type: 'website',
    locale: 'en',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kerdomax — Commercial & Product Advisory for Betting and Gaming',
    description:
      'Run the operator P&L, built the supplier platform. Independent advisory for operators, suppliers and investors.',
  },
  robots: { index: true, follow: true },
}

export const viewport = {
  themeColor: '#0f2a2c',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${serif.variable}`}
      style={{ background: '#f4f3f0' }}
    >
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
