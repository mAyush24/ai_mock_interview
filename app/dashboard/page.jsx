import { UserButton } from '@clerk/nextjs'
import React from 'react'

function dashboard() {
  return (
    <div>
      <p className='text-2xl'>Welcome to the dashboard!</p>
      <UserButton />

    </div>
  )
}

export default dashboard