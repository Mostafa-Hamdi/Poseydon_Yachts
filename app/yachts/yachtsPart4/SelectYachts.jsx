import React from 'react'
import MediaCard from '../../standard/CardYacht'
import BasicCard from '../../standard/BasicCard'
import { img31, img32,img33, img34,img35,img36 ,img37 ,img444,img38 } from '../../assets'
const SelectYachts = () => {
  return (
    <div className='select-yacht'>
        <div className="select-yacht-container">
            <MediaCard img1={img31} img2={img32} img3={img33} img4={img34} name="85 ft Aicon" price="From 4000 AED /Hour" link="/luxurious/85ft"/>
            <BasicCard mainImg={img35} name="84ft Pershing" rooms="4" price="From 12499 AED /Hour" link="/luxurious/84ft"/>
            <BasicCard mainImg={img36} name="78ft Ferretti" rooms="4" price="From 5000 AED /Hour" link="/luxurious/78ft"/>
            <BasicCard mainImg={img37} name="67ft Ferretti" rooms="3" price="From 2598 AED /Hour" link="/luxurious/67ft"/>
            <BasicCard mainImg={img444} name="54 ft Pershing" rooms="3" price="From 2500 AED /Hour" link="/luxurious/54ft"/>
            <BasicCard mainImg={img38} name="90ft Haigan" rooms="4" price="From 3750 AED /Hour" link="/luxurious/90ftHaigan"/>
        </div> 
    </div>
  )
}

export default SelectYachts