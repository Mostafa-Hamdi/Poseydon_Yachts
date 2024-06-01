import { lead } from '@/app/assets'
import React from 'react'
import Image from 'next/image'
const Heading = () => {
  return (
    <div className='heading'>
        <h3>
            Request
            <Image src={lead} alt=''/>
            Booking
        </h3>
    </div>
  )
}

export default Heading