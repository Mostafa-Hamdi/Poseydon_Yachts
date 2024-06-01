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
import {   ft50img1,
  ft50img2,
  ft50img3,
  ft50img4,
  ft50img5,
  ft50img6,
  ft50img7,
  ft50img8,
  ft50img9,
  ft50img10,
  ft50img11,
  ft50img12,
  ft50img13,
  ft50img14,
  ft50img15,
  ft50img16,
  ft50img17,
  ft50img18,} from '@/app/assets'
import WhatsLink from '@/app/components/WhatsLink'
const page = () => {
  return (
    <div className='yacht-page'>
        <Header/>
        <LandingYachtPage categoryName="premium" category="Premium" yachtName="50ft Azimut" 
        images={[ft50img1,ft50img2, ft50img3,  ft50img4, ft50img5, ft50img6,
          ft50img7,   ft50img8,  ft50img9,   ft50img10,  ft50img11,  ft50img12,  ft50img13, ft50img14,ft50img15,ft50img16,ft50img17,ft50img18,]}/>
        <YachtDetails brand="Azimut" size="50ft" capacity="17" 
        feat1="Water, Ice"
         feat2="Disposable plates and cups, cutlery" 
         feat3="Music Stereo System (Via Bluetooth Or AUX)"
         feat4="Grill equipment (upon request)" 
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