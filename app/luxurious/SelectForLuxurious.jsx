"use client";
import React from 'react'
import { img22, img23, img24, img25, img26, img27, img28, img29, img30, img31, img32, img33, img34, img35, img36, img37, img38, img39, img40, img41, img42, img43, img44, img444, img45, img46, img47, img48, img49 } from '../assets';
import SliderCard from './SliderCard';
import MainCard from './MainCard';

const SelectForLuxurious = () => {
  return (
    <div className='select-yacht'>
        <div className="select-yacht-container">
            <MainCard mainImg={img22} name="60ft OutLaw" rooms="3" price="From 2000 AED /Hour" link="/luxurious/60ftLaw"/>
            <SliderCard img1={img23} img2={img24} img3={img25} img4={img26} name="70 ft My Serenity" price="From 3000 AED /Hour" link="/luxurious/70ft"/>
            <SliderCard img1={img27} img2={img28} img3={img29} img4={img30} name="90 ft Notorious" price="From 4000 AED /Hour" link="/luxurious/90ft"/>
            <SliderCard img1={img31} img2={img32} img3={img33} img4={img34} name="85 ft Aicon" price="From 4000 AED /Hour" link="/luxurious/85ft"/>
            <MainCard mainImg={img35} name="84ft Pershing" rooms="4" price="From 12499 AED /Hour" link="/luxurious/84ft"/>
            <MainCard mainImg={img36} name="78ft Ferretti" rooms="4" price="From 5000 AED /Hour" link="/luxurious/78ft"/>
            <MainCard mainImg={img37} name="67ft Ferretti" rooms="3" price="From 2598 AED /Hour" link="/luxurious/67ft"/>
            <MainCard mainImg={img444} name="54 ft Pershing" rooms="3" price="From 2500 AED /Hour" link="/luxurious/54ft"/>
            <MainCard mainImg={img38} name="90ft Haigan" rooms="4" price="From 3750 AED /Hour" link="/luxurious/90ftHaigan"/>
            <MainCard mainImg={img39} name="92ft UD30" rooms="5" price="From 7800 AED /Hour" link="/luxurious/92ft"/>
            <MainCard mainImg={img40} name="105 ft Dolce Vita" rooms="4" price="From 8000 AED /Hour" link="/luxurious/105ft"/>
            <MainCard mainImg={img41} name="107 ft Tatti" rooms="5" price="From 8199 AED /Hour" link="/luxurious/107ft"/>
            <MainCard mainImg={img42} name="108ft Lady Maya" rooms="3" price="From 7800 AED /Hour" link="/luxurious/108ft"/>
            <SliderCard img1={img43} img2={img44} img3={img45} img4={img46} name="115FT El Legende" person="3" rooms="3"  price="From 15000 AED /Hour" link="/luxurious/115ft"/>
            <MainCard mainImg={img47} name="130ft Saffurriya" rooms="4" price="From 15000 AED /Hour" link="/luxurious/130ft"/>
            <MainCard mainImg={img48} name="131ft Lucien" rooms="7" price="From 14000 AED /Hour" link="/luxurious/131ft"/>
            <MainCard mainImg={img49} name="137ft Ak Royalty" rooms="5" price="From 15000 AED /Hour" link="/luxurious/137ft"/>
        </div> 
    </div>
  )
}

export default SelectForLuxurious;