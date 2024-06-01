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
import {        ft84img1,
  ft84img2,
  ft84img3,
  ft84img4,
  ft84img5,
  ft84img6,
  ft84img7,
  ft84img8,
  ft84img9,
  ft84img10,
  ft84img11,
  ft84img12,
  ft84img13,
  ft84img14,
  ft84img15,
  ft84img16,
  ft84img17,
  ft84img18,
  ft84img19,
  ft84img20,
  ft84img21,
  ft84img22,
  ft84img23,
  ft84img24,
  ft84img25,} from '@/app/assets'
import WhatsLink from '@/app/components/WhatsLink'
const page = () => {
  return (
    <div className='yacht-page'>
        <Header/>
        <LandingYachtPage categoryName="luxurious" category="Luxurious" yachtName="84ft Pershing" 
        images={[ ft84img1,
          ft84img2,
          ft84img3,
          ft84img4,
          ft84img5,
          ft84img6,
          ft84img7,
          ft84img8,
          ft84img9,
          ft84img10,
          ft84img11,
          ft84img12,
          ft84img13,
          ft84img14,
          ft84img15,
          ft84img16,
          ft84img17,
          ft84img18,
          ft84img19,
          ft84img20,
          ft84img21,
          ft84img22,
          ft84img23,
          ft84img24,
          ft84img25,]}/>
        <YachtDetails brand="Pershing" size="84 ft" capacity="16" 
        feat1="Premium still/sparkling water"
         feat2="Mixed soft drinks" 
         feat3="Signature fruits platter"
         feat4="Refreshing towels" 
         feat5="Hermes toiletries" 
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