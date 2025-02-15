import React, { Suspense } from 'react'
import SpacePe from './spacepe'

const Page = () => {
  return (
    <Suspense fallback={<div className='h-[100vh]'>loading...</div>}>
    <SpacePe/>
    </Suspense>
  )
}

export default Page