import { Montserrat } from 'next/font/google'
import './globals.css'
import { Analytics } from '@vercel/analytics/react'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-montserrat',
  display: 'swap',
})

export const metadata = {
  title: 'KERDOMAX — AI-powered optimization for Greek short-term rentals',
  description: 'Dynamic pricing, listing optimization, and intelligent guest communication — built for Greek hosts. Maximize your rental revenue with AI.',
  openGraph: {
    title: 'KERDOMAX — AI-powered optimization for Greek short-term rentals',
    description: 'Dynamic pricing, listing optimization, and intelligent guest communication — built for Greek hosts.',
    url: 'https://kerdomax.com',
    siteName: 'KERDOMAX',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KERDOMAX — AI-powered optimization for Greek short-term rentals',
    description: 'Dynamic pricing, listing optimization, and intelligent guest communication — built for Greek hosts.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body className="font-montserrat">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
