import { getStoryblokApi } from '@storyblok/react/rsc'
import React from 'react'
import AznDeal from './AznDeal'
import EbyDeal from './EbyDeal'

const Deals = async () => {
  const { data } = await fetchData()
  const today = new Date().getDay()

  const dealOfToday = data.story.content.body.filter(
    (i: any) => Number(i.weekday) === today,
  )

  if (!dealOfToday.length) return null

  return (
    <div className="right-[3%] top-0 z-50 grid place-items-center gap-4 p-4 md:grid-cols-2 3xl:absolute 3xl:grid-cols-1 3xl:grid-rows-2">
      {dealOfToday.map((deal: any) => {
        if (deal.target === 'a') {
          return <AznDeal key={deal.ean} ean={deal.ean} shop={deal.shop} />
        } else {
          return <EbyDeal key={deal.ean} ean={deal.ean} shop={deal.shop} />
        }
      })}
    </div>
  )
}

export async function fetchData() {
  let sbParams = { version: process.env.VERSION as 'draft' | 'published' }

  const storyblokApi = getStoryblokApi()
  return storyblokApi.get(`cdn/stories/deals`, sbParams, { cache: 'no-cache' })
}

export default Deals
