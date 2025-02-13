/** 1. Tag it as a client component */
'use client'
import { storyblokInit, apiPlugin } from '@storyblok/react/rsc'


const components = {};


/** 2. Initialize it as usual */
storyblokInit({
  accessToken: process.env.STORYBLOK_PREVIEW_TOKEN,
  use: [apiPlugin],
  components
});

export default function StoryblokProvider({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
