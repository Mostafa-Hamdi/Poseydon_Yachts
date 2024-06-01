import React from 'react'
import BasicCard from '../../standard/BasicCard'
import MainCard from '@/app/luxurious/MainCard'
import { img48, img49} from '../../assets'
const SelectYachts = () => {
  return (
    <div className='select-yacht'>
        <div className="select-yacht-container">
            <BasicCard mainImg={img48} name="131ft Lucien" rooms="7" price="From 14000 AED /Hour" link="/luxurious/131ft"/>
            <MainCard mainImg={img49} name="137ft Ak Royalty" rooms="5" price="From 15000 AED /Hour" link="/luxurious/137ft"/>
        </div> 
    </div>
  )
}

export default SelectYachts