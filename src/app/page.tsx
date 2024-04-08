import { CallToAction } from '@/components/CallToAction'
import { FAQSimple } from '@/components/FAQSimple'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Pricing } from '@/components/Pricing'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import { Testimonials } from '@/components/Testimonials'
import { useEffect } from 'react'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <PrimaryFeatures />
        <CallToAction />
        <Pricing />
        {/* <SecondaryFeatures /> */}
        <FAQSimple />
        {/* <Faqs /> */}
      </main>
      <Footer />
    </>
  )
}
