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
            Impressum
          </h1>
          <h2 className="mt-10 text-lg font-semibold text-gray-900">
            Information according to § 5 TMG
          </h2>
          <p>
            DipMax Export GmbH <br />
            Stubenrauchstrasse 31
            <br /> 12161 Berlin
          </p>
          <h2 className="mt-10 text-lg font-semibold text-gray-900">
            Commercial register entry
          </h2>
          <p>
            Registry Court: Berlin-Charlottenburg <br />
            Register number: HR B 242210
            <br />
            TAX Number: DE352978171
            <br /> TIN Number: 29/262/32481
          </p>
          <h2 className="mt-10 text-lg font-semibold text-gray-900">Contact</h2>
          <p>Mail: info[at]arbispotter.com</p>
        </Container>
      </main>
      <Footer />
    </>
  )
}

export default Page
