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
import {     ft130img1,
  ft130img2,
  ft130img3,
  ft130img4,
  ft130img5,
  ft130img6,
  ft130img7,
  ft130img8,
  ft130img9,
  ft130img10,
  ft130img11,
  ft130img12,
  ft130img13,
  ft130img14,} from '@/app/assets'
import WhatsLink from '@/app/components/WhatsLink'
const page = () => {
  return (
    <div className='yacht-page page130ft'>
        <Header/>
        <LandingYachtPage categoryName="luxurious" category="Luxurious" yachtName="130ft Saffuriya" 
        images={[ft130img1,
          ft130img2,
          ft130img3,
          ft130img4,
          ft130img5,
          ft130img6,
          ft130img7,
          ft130img8,
          ft130img9,
          ft130img10,
          ft130img11,
          ft130img12,
          ft130img13,
          ft130img14,]} />
        <YachtDetails size="130 ft" capacity="25" 
        feat1="Kitchen Fully Equipped"
         feat2="BBQ, Music speakers" 
         feat3="Water, ice and softdrinks"
         feat4="Chips and Nuts" 
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