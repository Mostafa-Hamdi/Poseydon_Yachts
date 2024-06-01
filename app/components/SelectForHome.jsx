"use client";
import React from 'react'
import SliderCard from '../luxurious/SliderCard';
import SliderCard5 from './SliderCard5';
import SliderCard3 from './SliderCard3';
import { image1, image10, image11, image12, image13, image14, image15, image16, image17, image18,image19, image2, image20, image21, image22, image23, image3, image4, image5, image6, image7, image8, image9,img34 } from '../assets';

const SelectForHome = () => {
  return (
    <div className='select-yacht'>
        <div className="select-yacht-container home">
            <SliderCard img1={image1} img2={image2} img3={image3} img4={image4} name="80ft Majesty" price="From 1300 AED /Hour" link="/standard/80ft"/>
            <SliderCard img1={image5} img2={image6} img3={image7} img4={image8} name="118 ft Poseidon" rooms="1" price="From 6000 AED /Hour" link="/premium/118ft"/>
            <SliderCard img1={image9} img2={image10} img3={image11} img4={image12} name="70 ft My Serenity" rooms="3" price="From 3000 AED /Hour" link="/luxurious/70ft"/>
            <SliderCard img1={image13} img2={image14} img3={image15} img4={image16} name="90 ft Notorious" rooms="3" price="From 4000 AED /Hour" link="/luxurious/90ft"/>
            <SliderCard5 img1={image17} img2={image18} img3={image19} img4={image20} img5={image21} rooms="3" name="85 ft Aicon" price="From 4000 AED /Hour" link="/luxurious/85ft"/>
            <SliderCard3 img1={image22} img2={image23} img3={image22} name="115ft El Legende" rooms="3" person="3" price="From 15000 AED /Hour" link="/luxurious/115ft"/>
        </div> 
    </div>
  )
}

export default SelectForHome;