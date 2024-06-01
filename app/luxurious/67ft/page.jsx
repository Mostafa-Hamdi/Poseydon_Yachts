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
import {  ft67img1,
  ft67img2,
  ft67img3,
  ft67img4,
  ft67img5,
  ft67img6,
  ft67img7,
  ft67img8,
  ft67img9,
  ft67img10,
  ft67img11,
  ft67img12,
  ft67img13,
  ft67img14,
  ft67img15,
  ft67img16,} from '@/app/assets'
import WhatsLink from '@/app/components/WhatsLink'
const page = () => {
  return (
    <div className='yacht-page'>
        <Header/>
        <LandingYachtPage categoryName="luxurious" category="Luxurious" yachtName="67ft Ferretti" 
        images={[ft67img1,
          ft67img2,
          ft67img3,
          ft67img4,
          ft67img5,
          ft67img6,
          ft67img7,
          ft67img8,
          ft67img9,
          ft67img10,
          ft67img11,
          ft67img12,
          ft67img13,
          ft67img14,
          ft67img15,
          ft67img16,]}/>
        <YachtDetails brand="SunSeeker" size="67ft" capacity="12" 
        feat1="Soft drinks"
         feat2="Still and sparkling water" 
         feat3="Fruit platter, nuts"
         feat4="Nespresso coffee" 
         feat5="E–Grill (upon request)" 
         feat6="Fresh towels" 
         feat7="Music stereo system (via Bluetooth or AUX)" 
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