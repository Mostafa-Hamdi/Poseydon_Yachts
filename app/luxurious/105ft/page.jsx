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
import {    ft105img1,
  ft105img2,
  ft105img3,
  ft105img4,
  ft105img5,
  ft105img6,
  ft105img7,
  ft105img8,
  ft105img9,
  ft105img10,
  ft105img11,
  ft105img12,
  ft105img13,
  ft105img14,
  ft105img15,
  ft105img16,
  ft105img17,
  ft105img18,
  ft105img19,
  ft105img20,} from '@/app/assets'
import WhatsLink from '@/app/components/WhatsLink'
const page = () => {
  return (
    <div className='yacht-page'>
        <Header/>
        <LandingYachtPage categoryName="luxurious" category="Luxurious" yachtName="105 ft Dolce Vita" 
        images={[ft105img1,
          ft105img2,
          ft105img3,
          ft105img4,
          ft105img5,
          ft105img6,
          ft105img7,
          ft105img8,
          ft105img9,
          ft105img10,
          ft105img11,
          ft105img12,
          ft105img13,
          ft105img14,
          ft105img15,
          ft105img16,
          ft105img17,
          ft105img18,
          ft105img19,
          ft105img20,]}/>
        <YachtDetails brand="Numarine" size="105 ft" capacity="18" 
        feat1="Water & Ice, сarbonated drinks"
         feat2="Tea, natural coffee" 
         feat3="Plates, cups and cutlery, Fresh towels"
         feat4="Fruits, nuts" 
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