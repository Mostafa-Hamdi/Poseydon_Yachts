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
import {     ft115img1,
  ft115img2,
  ft115img3,
  ft115img4,
  ft115img5, ft115img6,ft115img7,ft115img8, ft115img9, ft115img10, ft115img11, ft115img12,ft115img13,  ft115img14,
  ft115img15,ft115img16, ft115img17, ft115img18, ft115img19, ft115img20,ft115img21, ft115img22,ft115img23,
  ft115img24, ft115img25,  ft115img26,  ft115img27, ft115img28,  ft115img29, ft115img30,  ft115img31, ft115img32,
  ft115img33,} from '@/app/assets'
import WhatsLink from '@/app/components/WhatsLink'
const page = () => {
  return (
    <div className='yacht-page'>
        <Header/>
        <LandingYachtPage categoryName="luxurious" category="Luxurious" yachtName="115ft El Legende" 
        images={[ ft115img1,
          ft115img2,
          ft115img3,
          ft115img4,
          ft115img5, ft115img6,ft115img7,ft115img8, ft115img9, ft115img10, ft115img11, ft115img12,ft115img13,  ft115img14,
          ft115img15,ft115img16, ft115img17, ft115img18, ft115img19, ft115img20,ft115img21, ft115img22,ft115img23,
          ft115img24, ft115img25,  ft115img26,  ft115img27, ft115img28,  ft115img29, ft115img30,  ft115img31, ft115img32,
          ft115img33,]}/>
        <YachtDetails brand="SunSeeker" size="115 ft" capacity="20" 
        feat1="Soft drinks ,Still and sparkling water,ice"
         feat2="Music speakers" 
         feat3="E–Grill (upon request)"
         feat4="Fully equipped kitchen" 
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