import { calculateNetPrice } from '@/app/util/calculateNetPrice'
import { roundToTwoDecimals } from '@/app/util/roundToTwoDecimals'
import clientPool from '@/server/mongoPool'
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/16/solid'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const AznDeal = async ({ ean, shop }: { ean: string; shop: string }) => {
  const mongo = await clientPool['NEXT_MONGO']
  const db = mongo.db('arbispotter')
  const col = db.collection('products')

  const product = await col.findOne({
    eanList: ean,
    sdmn: shop,
  })

  if (!product) return null

  const { bsr, prc, a_mrgn, img, nm, eanList } = product

  const netPrice = calculateNetPrice(prc, product.tax)

  const roi = roundToTwoDecimals((a_mrgn / netPrice) * 100)

  return (
    <div className="relative h-full grid max-w-md overflow-hidden rounded-lg border border-gray-200 bg-white shadow-lg transition-transform duration-300 hover:scale-105">
      <div className="bg-gradient-to-br from-yellow-100 to-white px-4 py-2">
        <h3 className="text-lg font-bold text-gray-900">
          Amazon Deal des Tages
        </h3>
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
            href={product.lnk}
            target="_blank"
            className="relative text-lg font-semibold text-blue-600 hover:underline"
          >
            {product.mnfctr} {product.nm}{' '}
            <ArrowTopRightOnSquareIcon className="absolute inline h-4 w-4" />
          </Link>
          <div className="mb-2 text-lg font-bold text-green-700">
            Nettogewinn: {product.a_mrgn} €
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
              {product.a_mrgn_pct}%
            </span>
          </div>

          <div className="mb-4 flex flex-wrap items-center justify-center gap-3 text-sm">
            <p className="flex items-center gap-1">
              <span className="font-medium">Einkauf:</span> {product.prc} €
            </p>
            <p className="flex items-center gap-1">
              <span className="font-medium">Verkauf:</span>
              <span className="font-semibold text-red-600">
                {product.a_prc} €
              </span>
            </p>
          </div>
          {bsr && bsr.length ? (
            <div className="mb-4 flex flex-row justify-center gap-1 text-sm text-gray-700">
              <span className="font-semibold">Bestseller-Rank:</span>
              <div className="mt-1 flex flex-wrap gap-2">
                {bsr.map((item: any) => (
                  <span
                    key={item.number + item.category}
                    className="inline-block rounded-full bg-yellow-50 px-2 py-0.5 text-xs font-medium text-gray-800 shadow-sm"
                  >
                    Nr. {item.number.toLocaleString('de-DE')} in {item.category}
                  </span>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </div>
      <div className="mt-auto">
        <a
          href={'https://www.amazon.de/dp/' + product.asin}
          target="_blank"
          className="block w-full rounded-md bg-yellow-500 px-4 py-2 text-center text-sm font-bold text-white hover:bg-yellow-600"
        >
          Zum Angebot auf Amazon
        </a>
      </div>
    </div>
  )
}

export default AznDeal
