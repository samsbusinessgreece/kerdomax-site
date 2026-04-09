import type { Metadata } from 'next'
import './globals.css'
import { Analytics } from '@vercel/analytics/react'

export const metadata: Metadata = {
  title: 'KERDOMAX — AI Revenue Optimization for Greek Short-Term Rental Hosts',
  description:
    'Dynamic pricing, listing optimization, and intelligent guest communication — built exclusively for the Greek short-term rental market. Stop leaving revenue on the table.',
  openGraph: {
    title: 'KERDOMAX — AI Revenue Optimization for Greek Hosts',
    description:
      'Dynamic pricing, listing optimization, and intelligent guest communication — built for Greek STR hosts.',
    url: 'https://kerdomax.com',
    siteName: 'KERDOMAX',
    type: 'website',
    locale: 'el_GR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KERDOMAX — AI Revenue Optimization for Greek Hosts',
    description:
      'Dynamic pricing, listing optimization, and intelligent guest communication — built for Greek STR hosts.',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
