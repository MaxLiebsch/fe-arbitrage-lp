import { Aladin, Inter, Lexend, Poppins } from 'next/font/google'
import clsx from 'clsx'

import '@/styles/tailwind.css'
import { type Metadata } from 'next'
import PlausibleProvider from 'next-plausible'
export const metadata: Metadata = {
  title: {
    template: '%s - Arbispotter',
    default: 'Arbispotter - Move Fast, Earn Easy',
  },
  description: 'Wir machen Product Sourcing schnell, einfach und intelligent.',
}

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const lexend = Lexend({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lexend',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={clsx(
        'h-full scroll-smooth bg-white antialiased',
        inter.variable,
        lexend.variable,
      )}
    >
      <head>
        <PlausibleProvider
          selfHosted={true}
          enabled={true}
          trackOutboundLinks={true}
          taggedEvents={true}
          trackLocalhost={true}
          revenue={true}
          domain={process.env.NEXT_PUBLIC_DOMAIN!}
          customDomain={process.env.NEXT_PUBLIC_PLAUSIBLE_URL!}
        />
      </head>
      <body className="flex h-full flex-col">{children}</body>
    </html>
  )
}
