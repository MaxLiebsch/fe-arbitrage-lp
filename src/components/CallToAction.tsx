import Image from 'next/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-call-to-action.jpg'

export function CallToAction() {
  return (
    <section
      id="get-started-today"
      className="relative overflow-hidden bg-blue-600 py-32"
    >
      <Image
        className="absolute left-1/2 top-1/2 max-w-none -translate-x-1/2 -translate-y-1/2"
        src={backgroundImage}
        alt=""
        width={2347}
        height={1244}
        unoptimized
      />
      <Container className="relative">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="font-display text-3xl tracking-tight text-secondary-950 sm:text-4xl">
            Transformiere dein Arbitrage-Business und sei der Konkurrenz mit
            arbispotter einen Schritt voraus! 
          </h2>
          <p className="mt-4 text-lg tracking-tight text-secondary-950">
            Registriere dich jetzt und
            erhalten exklusive Einblicke und Updates zur Plattform.
          </p>
          <Button href="/register" color="slate" className="mt-10">
            Jetzt starten
          </Button>
        </div>
      </Container>
    </section>
  )
}
