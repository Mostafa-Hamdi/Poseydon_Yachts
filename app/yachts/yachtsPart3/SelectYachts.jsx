import React from 'react'
import BasicCard from '../../standard/BasicCard'
// import MainCard from '@/app/luxurious/MainCard'
import MediaCard from '@/app/standard/CardYacht'
import { img19, img20,img21, img22,img23,img24, img25,img26, img27,img28,img29,img30} from '../../assets'
const SelectYachts = () => {
  return (
    <div className='select-yacht'>
        <div className="select-yacht-container">
        <BasicCard mainImg={img19} name="61ft Majesty" rooms="3" price="From 1100 AED /Hour" link="/premium/61ft"/>
            <BasicCard mainImg={img20} name="56ft Majesty" price="From 1000 AED /Hour" link="/premium/56ft"/>
            <BasicCard mainImg={img21} name="50ft Azimut" price="From 650 AED /Hour" link="/premium/50ft"/>
            <BasicCard mainImg={img22} name="60ft OutLaw" rooms="3" price="From 2000 AED /Hour" link="/luxurious/60ftLaw"/>
            <MediaCard img1={img23} img2={img24} img3={img25} img4={img26} name="70 ft My Serenity" price="From 3000 AED /Hour" link="/luxurious/70ft"/>
            <MediaCard img1={img27} img2={img28} img3={img29} img4={img30} name="90 ft Notorious" price="From 4000 AED /Hour" link="/luxurious/90ft"/>
        </div> 
    </div>
  )
}

export default SelectYachts