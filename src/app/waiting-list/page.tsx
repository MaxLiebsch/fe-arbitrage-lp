import { TextField } from '@/components/Fields'
import { Logo } from '@/components/Logo'
import NLForm from '@/components/NLForm'
import { SlimLayout } from '@/components/SlimLayout'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <SlimLayout>
      <div className="flex">
        <Link href="/" aria-label="Home">
          <Logo className="h-10 w-auto" />
        </Link>
      </div>
      <h2 className="mt-20 text-lg font-semibold text-gray-900">
        Jetzt starten
      </h2>
      <NLForm />
    </SlimLayout>
  )
}

export default page
