import { Container } from '@/components/Container'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import PrivacyComponent from '@/components/PrivacyComponent'
import React from 'react'

const Page = () => {
  return (
    <>
      <Header />
      <main>
        <Container className="pt-4Z pb-16">
          <PrivacyComponent />
        </Container>
      </main>
      <Footer />
    </>
  )
}

export default Page
