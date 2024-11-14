'use client'
import { Button } from '@/components/Button'
import { Logo } from '@/components/Logo'

import { SlimLayout } from '@/components/SlimLayout'
import Link from 'next/link'
import React, { useEffect } from 'react'

const Page = () => {
  useEffect(()=> {
    localStorage.removeItem('ckid')
  },[])
  return (
    <SlimLayout>
      <div className="flex">
        <Link href="/" aria-label="Home">
          <Logo className="h-10 w-auto" />
        </Link>
      </div>
      <h2 className="mt-20 text-lg font-semibold text-gray-900">
        Vielen Dank. Email wurde erfolgreich bestätigt.
      </h2>
      <p className="mt-3">Dein Team von Arbispotter.com</p>
      <Button href="/" className="mt-10">
        Zurück
      </Button>
      
    </SlimLayout>
  )
}

export default Page
