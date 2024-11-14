import { Button } from '@/components/Button'
import { Logo } from '@/components/Logo'
import { SlimLayout } from '@/components/SlimLayout'
import Link from 'next/link'
import React from 'react'

const Page = () => {
  return (
    <SlimLayout>
      <div className="flex">
        <Link href="/" aria-label="Home">
          <Logo className="h-10 w-auto" />
        </Link>
      </div>
      <h2 className="mt-20 text-lg font-semibold text-gray-900">
        Vielen Dank. Wir haben deine Reservierung erhalten. Bitte prüfe dein
        Postfach und bestätige deine E-Mail-Adresse.
      </h2>
      <p className="mt-3">Dein Team von Arbispotter.com</p>
      <Button href="/" className="mt-10">
        Zurück
      </Button>
    </SlimLayout>
  )
}

export default Page
