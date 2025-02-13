import { Aladin, Inter, Lexend, Poppins } from 'next/font/google'
import clsx from 'clsx'

import '@/styles/tailwind.css'
import { type Metadata } from 'next'
import PlausibleProvider from 'next-plausible'
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";
import StoryblokProvider from '@/components/StoryBlokProvider'

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

const components = {};

/** 2. Initialize it as usual */
storyblokInit({
  accessToken: process.env.STORYBLOK_PREVIEW_TOKEN,
  use: [apiPlugin],
  components
});


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <StoryblokProvider>
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
            domain={process.env.NEXT_PUBLIC_DOMAIN!}
            enabled={true}
          />
        </head>
        <body className="flex h-full flex-col">{children}</body>
      </html>
    </StoryblokProvider>
  )
}
