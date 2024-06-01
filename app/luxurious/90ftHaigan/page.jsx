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
import {      ftl90img1,
  ftl90img2,
  ftl90img3,
  ftl90img4,
  ftl90img5,
  ftl90img6,
  ftl90img7,
  ftl90img8,} from '@/app/assets'
import WhatsLink from '@/app/components/WhatsLink'
const page = () => {
  return (
    <div className='yacht-page'>
        <Header/>
        <LandingYachtPage categoryName="luxurious" category="Luxurious" yachtName="90ft Haigan" 
        images={[ ftl90img1,
          ftl90img2,
          ftl90img3,
          ftl90img4,
          ftl90img5,
          ftl90img6,
          ftl90img7,
          ftl90img8,]}/>
        <YachtDetails brand="MARINE HOLLAND" size="90 ft" capacity="25" 
        feat1="Water and ice, carbonated drinks"
         feat2="Tea, natural coffee" 
         feat3="Fresh towels"
         feat4="Music stereo system (AUX, USB)" 
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