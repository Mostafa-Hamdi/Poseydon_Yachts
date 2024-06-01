// import { faSquareWhatsapp } from '@fortawesome/free-brands-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Image from 'next/image'
import { whatsIcon } from '../assets'
import Link from 'next/link'

const WhatsLink = () => {
  return (
    <div className='whats-link'>
        <Link href="https://wa.me/+971545407884?text=I%20want%20to%20book%20this%20yacht%20https://poseidonyachtsdubai.com/yachts/118-ft-poseidon/">
          <p>WhatsApp us</p>
          <Image src={whatsIcon} alt=''/>
        </Link>
    </div>
  )
}

export default WhatsLink