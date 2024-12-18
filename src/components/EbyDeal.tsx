import { calculateNetPrice } from '@/app/util/calculateNetPrice'
import { roundToTwoDecimals } from '@/app/util/roundToTwoDecimals'
import clientPool from '@/server/mongoPool'
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/16/solid'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const EbyDeal = async ({ ean, shop }: { ean: string; shop: string }) => {
  const mongo = await clientPool['NEXT_MONGO']
  const db = mongo.db('arbispotter')
  const col = db.collection('products')

  const product = await col.findOne({
    eanList: ean,
    sdmn: shop,
  })

  if (!product) return null

  const {
    ebyCategories,
    prc,
    e_mrgn,
    e_mrgn_pct,
    tax,
    img,
    nm,
    lnk,
    mnfctr,
    e_prc,
    esin,
    eanList,
  } = product

  const netPrice = calculateNetPrice(prc, tax)

  const roi = roundToTwoDecimals((e_mrgn / netPrice) * 100)

  return (
    <div className="relative h-full grid max-w-md overflow-hidden rounded-lg border border-gray-200 bg-white shadow-lg transition-transform duration-300 hover:scale-105">
      <div className="bg-gradient-to-br from-lime-100 to-white px-4 py-2">
        <h3 className="text-lg font-bold text-gray-900">Ebay Deal des Tages</h3>
        <p className="text-sm text-gray-700">Exklusiver Deal nur heute!</p>
      </div>
      <div className="mx-4 mt-4 flex items-start gap-4">
        <div className="flex flex-col items-center">
          <Image
            src={img}
            alt={nm}
            width={80}
            height={80}
            className="rounded-md border border-gray-300 p-2"
          />
          <div>
            {eanList && eanList.length ? (
              <div className="flex flex-row justify-center gap-1 text-sm text-gray-700">
                <div className="mt-1 flex flex-wrap gap-2">
                  {eanList.map((item: any) => (
                    <span
                      key={item}
                      className="inline-block rounded-full bg-yellow-50 px-2 py-0.5 text-xs font-medium text-gray-800 shadow-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        </div>
        <div className="flex-1">
          <Link
            href={lnk}
            target="_blank"
            className="relative text-lg font-semibold text-blue-600 hover:underline"
          >
            {mnfctr} {nm}{' '}
            <ArrowTopRightOnSquareIcon className="absolute inline h-4 w-4" />
          </Link>
          <div className="mb-2 text-lg font-bold text-green-700">
            Nettogewinn: {e_mrgn} €
          </div>
          <div>
            <div className="mb-2 text-sm text-gray-800">
              Return on Investment:
              <span className="ml-1 inline-block rounded-full bg-green-100 px-2 py-0.5 text-xs font-semibold text-green-700">
                {roi}%
              </span>
            </div>
          </div>
          <div className="mb-2 text-sm text-gray-800">
            Nettomarge:
            <span className="ml-1 inline-block rounded-full bg-green-100 px-2 py-0.5 text-xs font-semibold text-green-700">
              {e_mrgn_pct}%
            </span>
          </div>

          <div className="mb-4 flex flex-wrap items-center justify-center gap-3 text-sm">
            <p className="flex items-center gap-1">
              <span className="font-medium">Einkauf:</span> {prc} €
            </p>
            <p className="flex items-center gap-1">
              <span className="font-medium">Verkauf:</span>
              <span className="font-semibold text-red-600">{e_prc} €</span>
            </p>
          </div>
          {ebyCategories && ebyCategories.length ? (
            <div className="mb-4 flex flex-row justify-center gap-1 text-sm text-gray-700">
              <span className="font-semibold">Kategorie:</span>
              <div className="mt-1 flex flex-wrap gap-2">
                {ebyCategories.map((category: any) => (
                  <span
                    key={category.id + category.category}
                    className="inline-block rounded-full bg-yellow-50 px-2 py-0.5 text-xs font-medium text-gray-800 shadow-sm"
                  >
                    {category.category}
                  </span>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </div>
      <div className="mt-auto">
        <a
          href={'https://www.ebay.de/itm/' + esin}
          target="_blank"
          className="block w-full rounded-md bg-lime-500 px-4 py-2 text-center text-sm font-bold text-white hover:bg-lime-600"
        >
          Zum Angebot auf Ebay
        </a>
      </div>
    </div>
  )
}

export default EbyDeal
