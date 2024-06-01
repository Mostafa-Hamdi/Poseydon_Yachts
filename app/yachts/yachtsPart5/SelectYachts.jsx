import React from 'react'
import SliderCard from '@/app/luxurious/SliderCard'
import BasicCard from '../../standard/BasicCard'
import MainCard from '@/app/luxurious/MainCard'
import { img39, img40,img41, img42,img43,img44 ,img45 ,img46,img47 } from '../../assets'
const SelectYachts = () => {
  return (
    <div className='select-yacht'>
        <div className="select-yacht-container">
            <BasicCard mainImg={img39} name="92ft UD30" rooms="5" price="From 7800 AED /Hour" link="/luxurious/92ft"/>
            <MainCard mainImg={img40} name="105 ft Dolce Vita" rooms="4" price="From 8000 AED /Hour"  link="/luxurious/105ft"/>
            <BasicCard mainImg={img41} name="107 ft Tatti" rooms="5" price="From 8199 AED /Hour" link="/luxurious/107ft"/>
            <BasicCard mainImg={img42} name="108ft Lady Maya" rooms="3" price="From 7800 AED /Hour" link="/luxurious/108ft"/>
            <SliderCard img1={img43} img2={img44} img3={img45} img4={img46} name="115FT El Legende" person="3" rooms="3"  price="From 15000 AED /Hour" link="/luxurious/115ft"/>
            <BasicCard mainImg={img47} name="130ft Saffurriya" rooms="4" price="From 15000 AED /Hour" link="/luxurious/130ft" />
        </div> 
    </div>
  )
}

export default SelectYachts