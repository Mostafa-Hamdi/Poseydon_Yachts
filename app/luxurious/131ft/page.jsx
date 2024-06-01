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
import {   ft131img1,
  ft131img2,
  ft131img3,
  ft131img4,
  ft131img5,
  ft131img6,
  ft131img7,
  ft131img8,
  ft131img9,
  ft131img10,
  ft131img11,
  ft131img12,
  ft131img13,
  ft131img14,
  ft131img15,} from '@/app/assets'
import WhatsLink from '@/app/components/WhatsLink'
const page = () => {
  return (
    <div className='yacht-page'>
        <Header/>
        <LandingYachtPage categoryName="luxurious" category="Luxurious" yachtName="131ft Lucien" 
        images={[ft131img1,
          ft131img2,
          ft131img3,
          ft131img4,
          ft131img5,
          ft131img6,
          ft131img7,
          ft131img8,
          ft131img9,
          ft131img10,
          ft131img11,
          ft131img12,
          ft131img13,
          ft131img14,
          ft131img15,]}/>
        <YachtDetails brand="Sunseeker" size="131ft" capacity="35" 
        feat1="Water and ice, soft drinks"
         feat2="Fruit platter, nuts Fresh towels" 
         feat3="Music stereo system (ia AUX, USB)"
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