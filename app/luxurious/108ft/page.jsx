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
import {    ft108img1,
  ft108img2, ft108img3, ft108img4, ft108img5, ft108img6, ft108img7,
  ft108img8, ft108img9,ft108img10, ft108img11, ft108img12,  ft108img13, ft108img14,ft108img15,ft108img16, ft108img17,
  ft108img18, ft108img19, ft108img20, ft108img21,  ft108img22, ft108img23,
  ft108img24, ft108img25, ft108img26, ft108img27,  ft108img28,ft108img29, ft108img30,
  ft108img31, ft108img32, ft108img33, ft108img34, ft108img35, ft108img36,
  ft108img37,  ft108img38,  ft108img39, ft108img40,
  ft108img41, ft108img42,ft108img43, ft108img44,
  ft108img45,} from '@/app/assets'
import WhatsLink from '@/app/components/WhatsLink'
const page = () => {
  return (
    <div className='yacht-page'>
        <Header/>
        <LandingYachtPage categoryName="luxurious" category="Luxurious" yachtName="108ft Lady Maya" 
        images={[ft108img1,
          ft108img2, ft108img3, ft108img4, ft108img5, ft108img6, ft108img7,
          ft108img8, ft108img9,ft108img10, ft108img11, ft108img12,  ft108img13, ft108img14,ft108img15,ft108img16, ft108img17,
          ft108img18, ft108img19, ft108img20, ft108img21,  ft108img22, ft108img23,
          ft108img24, ft108img25, ft108img26, ft108img27,  ft108img28,ft108img29, ft108img30,
          ft108img31, ft108img32, ft108img33, ft108img34, ft108img35, ft108img36,
          ft108img37,  ft108img38,  ft108img39, ft108img40,
          ft108img41, ft108img42,ft108img43, ft108img44,
          ft108img45,]}/>
        <YachtDetails brand="Baglietto" size="108 ft" capacity="20" 
        feat1="Soft drinks"
         feat2="Water and ice" 
         feat3="Fresh towels"
         feat4="Plates, cups and cutlery" 
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