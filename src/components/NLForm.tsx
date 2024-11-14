'use client'
import React, { useEffect, useState } from 'react'
import { TextField } from './Fields'
import { Button } from './Button'
import Script from 'next/script'

const createDataOptions = (appAddress: string) => {
  const data = {
    settings: {
      after_subscribe: {
        action: 'redirect',
        success_message: 'Vielen Dank! Wir haben deine Reservierung erhalten.',
        redirect_url: `${appAddress}/waiting-list/success`,
      },
      analytics: {
        google: null,
        fathom: null,
        facebook: null,
        segment: null,
        pinterest: null,
        sparkloop: null,
        googletagmanager: null,
      },
      modal: {
        trigger: 'timer',
        scroll_percentage: null,
        timer: 5,
        devices: 'all',
        show_once_every: 15,
      },
      powered_by: {
        show: true,
        url: 'https://convertkit.com/features/forms?utm_campaign=poweredby&amp;utm_content=form&amp;utm_medium=referral&amp;utm_source=dynamic',
      },
      recaptcha: { enabled: false },
      return_visitor: { action: 'show', custom_content: '' },
      slide_in: {
        display_in: 'bottom_right',
        trigger: 'timer',
        scroll_percentage: null,
        timer: 5,
        devices: 'all',
        show_once_every: 15,
      },
      sticky_bar: {
        display_in: 'top',
        trigger: 'timer',
        scroll_percentage: null,
        timer: 5,
        devices: 'all',
        show_once_every: 15,
      },
    },
    version: '5',
  }

  return JSON.stringify(data)
}

const NLForm = () => {
  const [appAddress, setAppAddress] = useState('http://localhost:3001')
  const [formInfo, setFormInfo] = useState({
    dataSvForm: '6305429',
    dataUid: '707b4f575a',
  })
  useEffect(() => {
    console.log(createDataOptions(appAddress))
    if (process.env.NODE_ENV === 'production') {
      setFormInfo({ dataSvForm: '6563305', dataUid: '45802298bc' })
      window.location.hostname === 'staging.arbispotter.com'
        ? setAppAddress('https://staging.arbispotter.com')
        : setAppAddress('https://arbispotter.com')
    }
  }, [appAddress, setAppAddress, setFormInfo, formInfo])
  return (
    <>
      <Script src="https://f.convertkit.com/ckjs/ck.5.js"></Script>
      <form
        action={`https://app.convertkit.com/forms/${formInfo.dataSvForm}/subscriptions`}
        className="seva-form formkit-form mt-3 flex h-full flex-col"
        method="post"
        data-sv-form={formInfo.dataSvForm}
        data-uid={formInfo.dataUid}
        data-format="inline"
        data-version="5"
        data-options={createDataOptions(appAddress)}
        min-width="400 500 600 700 800"
      >
        <TextField
          label="Email Addresse"
          aria-label="Email Addresse"
          name="email_address"
          type="email"
          autoComplete="email"
          required
        />
        <div>
          <Button
            data-element="submit"
            type="submit"
            variant="solid"
            color="blue"
            className="mt-3 w-full"
          >
            <div className="formkit-spinner">
              <div />
              <div />
              <div />
            </div>
            <span>
              In die Warteliste eintragen <span aria-hidden="true">&rarr;</span>
            </span>
          </Button>
        </div>
      </form>
    </>
  )
}

export default NLForm
