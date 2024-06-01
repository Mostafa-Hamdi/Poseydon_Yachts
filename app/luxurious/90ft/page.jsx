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
import {      ft85img1,
  ft85img2,
  ft85img4,
  ft85img6,
  ft85img7,
  ft85img8,
  ft85img9,
  ft85img10,
  ft85img11,
  ft85img12,
  ft85img13,
  ft85img15,} from '@/app/assets'
import WhatsLink from '@/app/components/WhatsLink'
const page = () => {
  return (
    <div className='yacht-page'>
        <Header/>
        <LandingYachtPage categoryName="luxurious" category="Luxurious" yachtName="85 ft Aicon" 
        images={[ft85img1,
          ft85img2,
          ft85img4,
          ft85img6,
          ft85img7,
          ft85img8,
          ft85img9,
          ft85img10,
          ft85img11,
          ft85img12,
          ft85img13,
          ft85img15,]}/>
        <YachtDetails brand="SunSeeker" size="90 ft" capacity="20" 
        feat1="European team (French, South Africa)"
         feat2="Soft drinks, water & ice;" 
         feat3="Fruit Platter"
         feat4="Music stereo system (via Bluetooth or AUX)" 
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