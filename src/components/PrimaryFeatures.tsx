'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Tab } from '@headlessui/react'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import screenshot1 from '@/images/screenshots/screenshot-1.svg'
import screenshot2 from '@/images/screenshots/screenshot-2.svg'
import screenshot3 from '@/images/screenshots/screenshot-3.svg'
import screenshot1Mobil from '@/images/screenshots/screenshot-1-mobil.svg'
import screenshot2Mobil from '@/images/screenshots/screenshot-2-mobil.svg'
import screenshot3Mobil from '@/images/screenshots/screenshot-3-mobil.svg'
import useIsLargeScreen from '@/hooks/useIsLargeScreen'

const features = [
  {
    title: 'Zeit ist Geld!',
    description: `Vergiss stundenlanges Durchsuchen verschiedener Online-Händler und Prospekte. arbispotter reduziert den Sourcing-Prozess auf das Wesentliche: den Einkauf! Mit uns erkennst du auf einen Blick, welche Händler oder Shops Artikel anbieten, die du mit Gewinn auf Amazon, eBay oder anderen Plattformen verkaufen kannst.`,
    image: screenshot1,
    mobile: screenshot1Mobil,
    mobileObjectPosition: 'object-[0px]',
  },
  {
    title: 'Vorsprung durch fundierte Daten.',
    description: `Unsere Technologie ermöglicht es, Produkte nicht nur auf einer, sondern auf mehreren Plattformen gleichzeitig zu vergleichen. Ob es sich um E-Shops, Amazon oder eBay-Angebote handelt – wir bieten dir die Daten, die du benötigst, um fundierte Entscheidungen zu treffen und deine Margen zu maximieren.
`,
    image: screenshot2,
    mobile: screenshot2Mobil,
    mobileObjectPosition: 'object-[-1px]',
  },
  {
    title: 'Alles auf einen Blick',
    description: `Mit unserer einzigartigen Fähigkeit, Online-Angebote  mit Bezug auf eBay und Amazon zu analysieren, erhältst du Zugang zu Markteinblicken, die es nirgendwo gibt. Unser Tool deckt ein breites Spektrum an Quellen ab und bietet eine unvergleichliche Perspektive auf potenzielle Arbitrage-Möglichkeiten.`,
    image: screenshot3,
    mobile: screenshot3Mobil,
    mobileObjectPosition: 'object-[0px]',
  },
]

export function PrimaryFeatures() {
  let [tabOrientation, setTabOrientation] = useState<'horizontal' | 'vertical'>(
    'horizontal',
  )
  const isLargeScreen = useIsLargeScreen()
  console.log('isLargeScreen:', isLargeScreen)

  useEffect(() => {
    let lgMediaQuery = window.matchMedia('(min-width: 1024px)')

    function onMediaQueryChange({ matches }: { matches: boolean }) {
      setTabOrientation(matches ? 'vertical' : 'horizontal')
    }

    onMediaQueryChange(lgMediaQuery)
    lgMediaQuery.addEventListener('change', onMediaQueryChange)

    return () => {
      lgMediaQuery.removeEventListener('change', onMediaQueryChange)
    }
  }, [])

  return (
    <section
      id="features"
      aria-label="Features for running your books"
      className="relative overflow-hidden bg-secondary-950 pb-28 pt-20 sm:py-32"
    >
      <Container className="relative">
        <div className="max-w-2xl md:mx-auto md:text-center xl:max-w-none">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl md:text-5xl">
            Schnelle Deals, profitabel und einfach.
          </h2>
          <p className="mt-6 text-lg tracking-tight text-blue-100">
            Schnelligkeit, die richtigen Produkte und profitable Margen sind im
            Onlinehandel entscheidend. Arbispotter ist dein Algorithmus
            basiertes Sourcingtool und scannt für dich Millionen Produkte in
            kürzester Zeit. Spare Zeit, Nerven und Geld.
          </p>
        </div>
        <Tab.Group
          as="div"
          className="mt-16 grid grid-cols-1 items-center gap-y-2 pt-10 sm:gap-y-6 md:mt-20 lg:grid-cols-12 lg:pt-0"
          vertical={tabOrientation === 'vertical'}
        >
          {({ selectedIndex }) => (
            <>
              <div className="-mx-4 flex overflow-x-auto pb-4 sm:mx-0 sm:overflow-visible sm:pb-0 lg:col-span-5">
                <Tab.List className="relative z-10 flex gap-x-4 whitespace-nowrap px-4 sm:mx-auto sm:px-0 lg:mx-0 lg:block lg:gap-x-0 lg:gap-y-1 lg:whitespace-normal">
                  {features.map((feature, featureIndex) => (
                    <div
                      key={feature.title}
                      className={clsx(
                        'group relative rounded-full px-4 py-1 lg:rounded-l-xl lg:rounded-r-none lg:p-6',
                        selectedIndex === featureIndex
                          ? 'bg-white lg:bg-white/10 lg:ring-1 lg:ring-inset lg:ring-white/10'
                          : 'hover:bg-white/10 lg:hover:bg-white/5',
                      )}
                    >
                      <h3>
                        <Tab
                          className={clsx(
                            'font-display text-lg ui-not-focus-visible:outline-none',
                            selectedIndex === featureIndex
                              ? 'text-blue-600 lg:text-white'
                              : 'text-blue-100 hover:text-white lg:text-white',
                          )}
                        >
                          <span className="absolute inset-0 rounded-full lg:rounded-l-xl lg:rounded-r-none" />
                          {feature.title}
                        </Tab>
                      </h3>
                      <p
                        className={clsx(
                          'mt-2 hidden text-sm lg:block',
                          selectedIndex === featureIndex
                            ? 'text-white'
                            : 'text-blue-100 group-hover:text-white',
                        )}
                      >
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </Tab.List>
              </div>
              <Tab.Panels className="lg:col-span-7">
                {features.map((feature) => (
                  <Tab.Panel key={feature.title} unmount={false}>
                    <div className="relative sm:px-6 lg:hidden">
                      <div className="absolute -inset-x-4 bottom-[-4.25rem] top-[-6.5rem] bg-white/10 ring-1 ring-inset ring-white/10 sm:inset-x-0 sm:rounded-t-xl" />
                      <p className="relative mx-auto max-w-2xl text-base text-white sm:text-center">
                        {feature.description}
                      </p>
                    </div>
                    <div className="relative mt-10 w-[376px] overflow-hidden rounded-xl bg-slate-50 shadow-xl shadow-blue-900/20 sm:w-auto lg:mt-0 lg:w-[67.8125rem]">
                      {/* <div className="absolute h-full w-full flex items-center justify-center text-black">
                        <div className='text-black text-center text-3xl z-50'>Coming soon :)</div>
                      </div> */}

                      <Image
                        className={`w-full ${
                          isLargeScreen ? '' : feature.mobileObjectPosition
                        } md:object-[-4px]}`}
                        src={isLargeScreen ? feature.image : feature.mobile}
                        alt="Screenshot of the app"
                        priority
                        sizes="(min-width: 1024px) 67.8125rem, (min-width: 640px) 100vw, 376px"
                      />
                    </div>
                  </Tab.Panel>
                ))}
              </Tab.Panels>
            </>
          )}
        </Tab.Group>
      </Container>
    </section>
  )
}
