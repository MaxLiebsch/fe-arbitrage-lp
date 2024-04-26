import { Container } from '@/components/Container'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import React from 'react'

const Page = () => {
  return (
    <>
      <Header />
      <main>
        <Container className="pt-4Z pb-16 lg:pt-32">
          <h1 className="font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl">
           Nutzungsbedingungen 
          </h1>
          <p>Coming soon</p>
          <h2 className="mt-10 text-lg font-semibold text-gray-900">Contact</h2>
          <p>Mail: info[at]arbispotter.com</p>
        </Container>
      </main>
      <Footer />
    </>
  )
}

export default Page