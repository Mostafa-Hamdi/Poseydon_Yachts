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
import {     ft70img1,
  ft70img2,
  ft70img3,
  ft70img4,
  ft70img5,
  ft70img6,
  ft70img7,
  ft70img8,
  ft70img9,
  ft70img10,} from '@/app/assets'
import WhatsLink from '@/app/components/WhatsLink'
const page = () => {
  return (
    <div className='yacht-page'>
        <Header/>
        <LandingYachtPage categoryName="luxurious" category="Luxurious" yachtName="70 ft My Serenity" 
        images={[ft70img1,
          ft70img2,
          ft70img3,
          ft70img4,
          ft70img5,
          ft70img6,
          ft70img7,
          ft70img8,
          ft70img9,
          ft70img10,]}/>
        <YachtDetails brand="SunSeeker" size="70" capacity="12" 
        feat1="Soft Drinks , Still sparking water , Ice"
         feat2="Fruit platter" 
         feat3="Nuts, Nespresso coffee"
         feat4="Towels, E-Grill (upon request)" 
         feat5="Music system, TV" 
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