import InfoBar from '@/components/inforbar'
import BillingSettings from '@/components/settings/billing-settings'
import React from 'react'

type Props = {}

const Page = (props: Props) => {
  return (
    <>
      <InfoBar />
      <div className="overflow-y-auto w-full chat-window flex-1 h-0 flex flex-col gap-10">
        <BillingSettings />
      </div>
    </>
  )
}

export default Page