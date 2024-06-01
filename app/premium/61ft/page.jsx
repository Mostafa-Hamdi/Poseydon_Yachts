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
import {  ft61img1,
  ft61img2,
  ft61img3,
  ft61img4,
  ft61img5,
  ft61img6,
  ft61img7,
  ft61img8,
  ft61img9,
  ft61img10,
  ft61img11,
  ft61img12,
  ft61img13} from '@/app/assets'
import WhatsLink from '@/app/components/WhatsLink'
const page = () => {
  return (
    <div className='yacht-page'>
        <Header/>
        <LandingYachtPage categoryName="premium" category="Premium" yachtName="61ft Majesty" 
        images={[ ft61img1,
          ft61img2,
          ft61img3,
          ft61img4,
          ft61img5,
          ft61img6,
          ft61img7,
          ft61img8,
          ft61img9,
          ft61img10,
          ft61img11,
          ft61img12,
          ft61img13]}/>
        <YachtDetails brand="Majesty" size="61ft" capacity="30" 
        feat1="Soft Drinks, Water, Ice Cubes"
         feat2="Disposable cutleries (plates, forks, cups)" 
         feat3="Tea, Coffee"
         feat4="Towels, Flybridge Tables, Microwave, Fridge, Cooler Box, Sun Beds" 
         feat5="Music System (via bluetooth)" 
         feat6="E-grill (upon request) , Fully Equipped Kitchen" 
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