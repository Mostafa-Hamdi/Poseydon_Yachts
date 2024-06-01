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
import {   ftl60img1,
  ftl60img2,
  ftl60img3,
  ftl60img4,
  ftl60img5,
  ftl60img6,
  ftl60img7,
  ftl60img8,
  ftl60img9,
  ftl60img10,
  ftl60img11,
  ftl60img12,} from '@/app/assets'
import WhatsLink from '@/app/components/WhatsLink'
const page = () => {
  return (
    <div className='yacht-page'>
        <Header/>
        <LandingYachtPage categoryName="luxurious" category="Luxurious" yachtName="60ft OutLaw" 
        images={[ ftl60img1,
          ftl60img2,
          ftl60img3,
          ftl60img4,
          ftl60img5,
          ftl60img6,
          ftl60img7,
          ftl60img8,
          ftl60img9,
          ftl60img10,
          ftl60img11,
          ftl60img12,]} />
        <YachtDetails brand="Sunseeker" size="60 ft" capacity="12" 
        feat1="Soft Drinks , Still/ sparking water , Ice"
         feat2="Fruit platter , Nuts, Nespresso coffee" 
         feat3="Towels"
         feat4="E-Grill (upon request)" 
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