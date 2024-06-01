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
import {     ft54img1,
  ft54img2,
  ft54img3,
  ft54img4,
  ft54img5,
  ft54img6,
  ft54img7,
  ft54img8,
  ft54img9,
  ft54img10,
  ft54img11,
  ft54img12,
  ft54img13,
  ft54img14,
  ft54img15,
  ft54img16,
  ft54img17,
  ft54img18,} from '@/app/assets'
import WhatsLink from '@/app/components/WhatsLink'
const page = () => {
  return (
    <div className='yacht-page page54ft'>
        <Header/>
        <LandingYachtPage categoryName="luxurious" category="Luxurious" yachtName="54 ft Pershing" 
        images={[   ft54img1,
          ft54img2,
          ft54img3,
          ft54img4,
          ft54img5,
          ft54img6,
          ft54img7,
          ft54img8,
          ft54img9,
          ft54img10,
          ft54img11,
          ft54img12,
          ft54img13,
          ft54img14,
          ft54img15,
          ft54img16,
          ft54img17,
          ft54img18,]} />
        <YachtDetails brand="2023" size="54ft" capacity="12" 
        feat1="Soft drinks"
         feat2="Still & sparkling water" 
         feat3="Fruit platter, nuts"
         feat4="Nespresso coffee" 
         feat5="Fresh towels, E–Grill (upon request)" 
         feat6="Music stereo system" 
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