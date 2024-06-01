"use client";
import React from 'react';
import BasicCard from '../standard/BasicCard';
import MediaCard from '../standard/CardYacht';
import { img9,img10,img11,img12,img13,img14,img15,img16,img17,img18,img19,img20,img21} from '../assets';
const SelectYachtPremium = () => {
  return (
    <div className='select-yacht'>
        <div className="select-yacht-container">
            <MediaCard img1={img9} img2={img10} img3={img11} img4={img12} name="118 ft Poseidon" rooms="1" price="From 6000 AED /Hour" link="/premium/118ft"/>
            <BasicCard mainImg={img13} name="110 ft Benetti" rooms="3" price="From 4000 AED /Hour" link="/premium/110ft"/>
            <BasicCard mainImg={img14} name="101ft Majesty" rooms="4" price="From 2400 AED /Hour" link="/premium/101ft"/>
            <BasicCard mainImg={img15} name="82ft SanLorenzo" rooms="3" price="From 2000 AED /Hour" link="/premium/82ft"/>
            <BasicCard mainImg={img16} name="68ft Azimut" rooms="3" price="From 1200 AED /Hour" link="/premium/68ft"/>
            <BasicCard mainImg={img17} name="62ft Lucky Star" rooms="3" price="From 1100 AED /Hour" link="/premium/62ft_star"/>
            <BasicCard mainImg={img18} name="62ft Freedom" rooms="3" price="From 950 AED /Hour" link="/premium/62ft"/>
            <BasicCard mainImg={img19} name="61ft Majesty" rooms="3" price="From 1100 AED /Hour" link="/premium/61ft"/>
            <BasicCard mainImg={img20} name="56ft Majesty" price="From 1000 AED /Hour" link="/premium/56ft"/>
            <BasicCard mainImg={img21} name="50ft Azimut" price="From 650 AED /Hour" link="/premium/50ft"/>
        </div> 
    </div>
  )
}

export default SelectYachtPremium