"use client"
import Footer from '@/app/components/Footer'
import Header from '@/app/components/Header'
import Select from '@/app/components/Select'
import React from 'react'
import LandingYachtPage from '@/app/standard/44ft/LandingYachtPage'
import YachtDetails from './YachtDetails'
import Heading from '../../standard/44ft/Heading'
import Heading2 from '../../standard/44ft/Heading2'
import YachtForm from '../../standard/44ft/YachtForm'
import Advantages from '../../standard/44ft//Advantages'
import AdvantageSlider from '../../standard/44ft/AdvantageSlider'
import {     ft90img1,
  ft90img2,
  ft90img3,
  ft90img4,
  ft90img5,
  ft90img6,
  ft90img7,
  ft90img8,
  ft90img9,
  ft90img10,
  ft90img11,
  ft90img12,
  ft90img13,
  ft90img14,
  ft90img15,
  ft90img16,
  ft90img17,
  ft90img18,
  ft90img19,} from '@/app/assets'
import WhatsLink from '@/app/components/WhatsLink'
const page = () => {
  return (
    <div className='yacht-page'>
        <Header/>
        <LandingYachtPage categoryName="luxurious" category="Luxurious" yachtName="90 ft Notorious" 
        images={[ft90img1,
          ft90img2,
          ft90img3,
          ft90img4,
          ft90img5,
          ft90img6,
          ft90img7,
          ft90img8,
          ft90img9,
          ft90img10,
          ft90img11,
          ft90img12,
          ft90img13,
          ft90img14,
          ft90img15,
          ft90img16,
          ft90img17,
          ft90img18,
          ft90img19,]}/>
        <YachtDetails brand="Aicon" size="85 ft" capacity="20" 
        feat1="Water, Soft Drinks , Ice"
         feat2="Chips, Nuts, Fruits" 
         feat3="Fully Equipped Kitchen"
         feat4="Music speakers" 
         feat5="Jacuzzi" 
         />
        <Heading/>
        <YachtForm/>
         <Heading2/>
         <Advantages/>
         <Advantages/>
         <AdvantageSlider/>
        <Select
        linkTrue={true}
        link="/contact"
        linkName="Contact Us Now !"
        name="set-sail"
        span="Set Sail With Us"
        heading1="Discover The Ultimate Yachting Experience Today!"
        heading2=""
        paragraph="Dive into the ultimate yachting experience today, where each moment on the open sea is a"
        paragraph2="celebration of opulence and extraordinary memories waiting to be made."
        paragraph3="Your journey into sea-centric luxury begins now – reserve your Poseidon Yacht for an unforgettable maritime odyssey."
      />
        <Footer/>
        <WhatsLink/>
    </div>
  )
}

export default page