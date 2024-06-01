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
import {     ft107img1,
  ft107img2,
  ft107img3,
  ft107img4,
  ft107img5,
  ft107img6,
  ft107img7,
  ft107img8,
  ft107img9,
  ft107img10,
  ft107img11,
  ft107img12,
  ft107img13,
  ft107img14,
  ft107img15,} from '@/app/assets'
import WhatsLink from '@/app/components/WhatsLink'
const page = () => {
  return (
    <div className='yacht-page'>
        <Header/>
        <LandingYachtPage categoryName="luxurious" category="Luxurious" yachtName="107 ft Tatti" 
        images={[ft107img1,
          ft107img2,
          ft107img3,
          ft107img4,
          ft107img5,
          ft107img6,
          ft107img7,
          ft107img8,
          ft107img9,
          ft107img10,
          ft107img11,
          ft107img12,
          ft107img13,
          ft107img14,
          ft107img15,]}/>
        <YachtDetails brand="Gems" size="107 ft" capacity="25" 
        feat1="Soft Drinks (Unlimited Coke and sprite) Water, Ice cubes"
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