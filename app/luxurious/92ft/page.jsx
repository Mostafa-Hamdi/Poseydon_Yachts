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
import {    ft92img1,
  ft92img2,
  ft92img3,
  ft92img4,
  ft92img5,
  ft92img6,
  ft92img7,
  ft92img8,
  ft92img9,
  ft92img10,
  ft92img11,
  ft92img12,
  ft92img13,
  ft92img14,
  ft92img15,
  ft92img16,
  ft92img17,} from '@/app/assets'
import WhatsLink from '@/app/components/WhatsLink'
const page = () => {
  return (
    <div className='yacht-page'>
        <Header/>
        <LandingYachtPage categoryName="luxurious" category="Luxurious" yachtName="92ft UD30" 
        images={[ft92img1,
          ft92img2,
          ft92img3,
          ft92img4,
          ft92img5,
          ft92img6,
          ft92img7,
          ft92img8,
          ft92img9,
          ft92img10,
          ft92img11,
          ft92img12,
          ft92img13,
          ft92img14,
          ft92img15,
          ft92img16,
          ft92img17,]}/>
        <YachtDetails brand="SunSeeker" size="92 ft" capacity="20" 
        feat1="Soft Drinks , Water, Ice cubes"
         feat2="Paper Napkins, Disposable plates and cups, Cutlery" 
         feat3="Fresh Towels, E-Grill (upon request)"
         feat4="Music stereo system (via Bluetooth or AUX), TV" 
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