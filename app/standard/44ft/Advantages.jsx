import React from 'react'
import Image from 'next/image'
import { bathroom, bed, drinks, paper } from '@/app/assets'
const Advantages = () => {
  return (
    <div className='advantages'>
        <div className='container'>
            <div className="adv">
                <Image src={bathroom} alt=''/>
                <h5><strong>Luxury Bathroom​</strong></h5>
            </div>
            <div className="adv">
                <Image src={bed} alt=''/>
                <h5><strong> Luxury Bed​</strong></h5>
            </div>
            <div className="adv">
                <Image src={drinks} alt=''/>
                <h5><strong>Soft drinks, water, ice</strong></h5>
            </div>
            <div className="adv">
                <Image src={paper} alt=''/>
                <h5><strong>Fresh Towels, Paper</strong></h5>
            </div>
        </div>
    </div>
  )
}

export default Advantages