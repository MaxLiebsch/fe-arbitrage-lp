import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { ReactNode, useEffect, useState } from 'react'
import Image from 'next/image'
import backgroundImage from '@/images/background-pricing.svg'

const features = [
  `Unterstützte Platformen:
  <ul>
  <li>- Amazon</li>
  <li>- Ebay</li>
  <li>- Kaufland (Coming soon)</li></ul>`,

  'Onlineshop-Vergleich (über 1,4 Millionen Produkte)',
  'Sales-Monitor',
  'Amazon Flips',
  'Wholesale Analyse / Großhandellisten Analyse',
  'KI-gestützte Matchvalidierung und Bündelerkennung',
  'Export zu ArbitrageOne',
  'Kostenloser Support',
]

function CheckIcon({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      aria-hidden="true"
      className={clsx(
        'h-6 w-6 flex-none fill-current stroke-current',
        className,
      )}
      {...props}
    >
      <path
        d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
        strokeWidth={0}
      />
      <circle
        cx={12}
        cy={12}
        r={8.25}
        fill="none"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function Plan({
  name,
  price,
  description,
  href,
  features,
  featured = undefined,
}: {
  name: ReactNode
  price: ReactNode
  description: ReactNode
  href: string
  features: Array<string>
  featured?: string
}) {
  return (
    <section
      className={clsx(
        'relative',
        'flex flex-col items-center rounded-3xl px-6 sm:px-8',
        featured
          ? 'order-first bg-gradient-to-t from-secondary-800 to-secondary-400 py-8 lg:order-none'
          : 'border border-primary-400 lg:py-8',
      )}
    >
      {featured ? (
        <span className="absolute -right-0 -top-5 inline-flex items-center rounded-full bg-gray-50 px-8 py-1 text-lg font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10 md:-right-6 md:-top-6">
          {featured}
        </span>
      ) : (
        <></>
      )}
      <h3 className="font-display text-lg text-white">{name}</h3>
      <p
        className={clsx('mt-2 text-xl', featured ? 'text-white' : 'text-white')}
      >
        {description}
      </p>
      <div className="order-first font-display text-5xl font-light tracking-tight text-white">
        {price}
      </div>
      <ul
        role="list"
        className={clsx(
          'order-last mt-10 flex flex-col gap-y-3 text-sm',
          featured ? 'text-white' : 'text-primary-200',
        )}
      >
        {features.map((feature) => (
          <li key={feature} className="flex">
            <CheckIcon
              className={featured ? 'text-white' : 'text-primary-400'}
            />
            <span
              className="ml-4"
              dangerouslySetInnerHTML={{ __html: feature }}
            ></span>
          </li>
        ))}
      </ul>
      <Button
        href={href}
        variant={featured ? 'solid' : 'outline'}
        color={'slate'}
        className="mt-8"
        aria-label={`Get started with the ${name} plan for ${price}`}
      >
        Jetzt Platz sichern
      </Button>
    </section>
  )
}

export function Pricing() {
  // const [plans, setPlans] = useState([])

  // useEffect(()=>{
  //   fetch('http://localhost:3001/app/api/plans')
  //   .then(res=>res.json())
  //   .then(data=>setPlans(data.data))
  // },[])


  return (
    <section
      id="pricing"
      aria-label="Pricing"
      className="relative overflow-hidden bg-secondary-950 py-20 sm:py-32"
    >
      <div className="absolute -left-[7rem] -top-4 h-[180%] w-[180%] bg-secondary-950 bg-no-repeat lg:-left-[69rem] lg:-top-4">
        <Image
          className="bg-no-repeat"
          src={backgroundImage}
          alt=""
          fill
          style={{ objectFit: 'contain' }}
          unoptimized
        />
      </div>
      <Container>
        <div className="md:text-center">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
            <span className="relative whitespace-nowrap">
              {/* <SwirlyDoodle className="absolute left-0 top-1/2 h-[1em] w-full fill-secondary-700" /> */}
              <span className="whitespace-break-spaces md:whitespace-normal">
                Transparente Preise ohne versteckte Kosten!
              </span>
            </span>{' '}
          </h2>
          <div className="relative flex justify-center">
            <p className="mt-4 max-w-2xl text-lg text-white">
              Wir ermöglichen mit unseren einfachen Preismodellen volle
              Flexibilität. Starte jetzt und sicher dir für kurze Zeit exklusive
              Rabatte.
            </p>
          </div>
        </div>
        <div className="-mx-4 mt-16 grid max-w-2xl grid-cols-1 gap-y-10 sm:mx-auto lg:-mx-8 lg:max-w-none lg:grid-cols-3 xl:mx-0 xl:gap-x-8">
          <Plan
            featured='Early Bird'
            name={
              <div className="text-3xl text-silver-chalice-400 line-through">
                149€
              </div>
            }
            price={
              <div className="relative">
                79€/<span className="text-3xl">Monat</span>
                <span className="absolute -bottom-2 -right-1 text-xs">
                  exkl. MwSt.
                </span>
              </div>
            }
            description={
              <span>
                im Early Bird Abo
                <br />
                <span className="text-xs">limitiert auf 30 Plätze</span>
              </span>
            }
            href="/register"
            features={features}
          />
          <Plan
            name={
              <div className="text-3xl text-silver-chalice-400 line-through">
                199€
              </div>
            }
            price={
              <div className="relative">
                149€/<span className="text-3xl">Monat</span>
                <span className="absolute -bottom-2 -right-1 text-xs">
                  exkl. MwSt.
                </span>
              </div>
            }
            description="im Monatsabo"
            href="/register"
            features={features}
          />
          <Plan
            name={
              <div className="text-3xl text-silver-chalice-300 line-through">
                149€
              </div>
            }
            price={
              <div className="relative">
                99€/<span className="text-3xl">Monat</span>
                <span className="absolute -bottom-2 -right-1 text-xs">
                  exkl. MwSt.
                </span>
              </div>
            }
            description="im Jahresabo"
            href="/register"
            features={features}
          />
          {/* <Plan
            name="Enterprise"
            price="349€"
            description="For even the biggest enterprise companies."
            href="/register"
            features={[
              'Send unlimited quotes and invoices',
              'Connect up to 15 bank accounts',
              'Track up to 200 expenses per month',
              'Automated payroll support',
              'Export up to 25 reports, including TPS',
            ]}
          /> */}
        </div>
      </Container>
    </section>
  )
}
