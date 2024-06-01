"use client";
import React from 'react'
import MediaCard from './CardYacht'
import BasicCard from './BasicCard'
import { img1, img2, img3, img4, img5, img6, img7, img8 } from '../assets';

const SelectYachtStandard = () => {
  return (
    <div className='select-yacht'>
        <div className="select-yacht-container">
            <MediaCard img1={img1} img2={img2} img3={img3} img4={img4} name="80ft Majesty" price="From 1300 AED /Hour" link="/standard/80ft"/>
            <BasicCard mainImg={img5} name="56ft Majesty" price="From 700 AED /Hour" link="/standard/56ft"/>
            <BasicCard mainImg={img6} name="48ft Majesty" rooms="3" price="From 650 AED /Hour" link="/standard/48ft"/>
            <BasicCard mainImg={img7} name="60ft Majesty" rooms="3" price="From 750 AED /Hour" link="/standard/60ft"/>
            <BasicCard mainImg={img8} name="44ft Majesty" rooms="3" price="From 550 AED /Hour" link="/standard/44ft"/>
        </div> 
    </div>
  )
}

export default SelectYachtStandard;