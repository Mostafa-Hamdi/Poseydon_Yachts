import React from 'react'
import MediaCard from '../standard/CardYacht'
import BasicCard from '../standard/BasicCard'
import { img1, img2,img3, img4,img5,img6, img7,img9,img10,img11,img12,img13 } from '../assets'
const SelectYachts = () => {
  return (
    <div className='select-yacht'>
        <div className="select-yacht-container">
            <MediaCard img1={img1} img2={img2} img3={img3} img4={img4} name="80ft Majesty" price="From 1300 AED /Hour" link="/standard/80ft"/>
            <BasicCard mainImg={img5} name="56ft Majesty" price="From 700 AED /Hour" link="/standard/56ft"/>
            <BasicCard mainImg={img6} name="48ft Majesty" rooms="3" price="From 650 AED /Hour" link="/standard/48ft"/>
            <BasicCard mainImg={img7} name="60ft Majesty" rooms="3" price="From 750 AED /Hour" link="/standard/60ft"/>
            <MediaCard img1={img9} img2={img10} img3={img11} img4={img12} name="118 ft Poseidon" rooms="1" price="From 6000 AED /Hour" link="/premium/118ft"/>
            <BasicCard mainImg={img13} name="110 ft Benetti" rooms="3" price="From 4000 AED /Hour" link="/premium/110ft"/>
        </div> 
    </div>
  )
}

export default SelectYachts