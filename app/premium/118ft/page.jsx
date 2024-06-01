"use client"
import Footer from '@/app/components/Footer'
import Header from '@/app/components/Header'
import Select from '@/app/components/Select'
import React from 'react'
import LandingYachtPage from '@/app/standard/44ft/LandingYachtPage'
import { ft118img1, ft118img10, ft118img11, ft118img12, ft118img13, ft118img14, ft118img15, ft118img16, ft118img2, ft118img3, ft118img4, ft118img5, ft118img6, ft118img7, ft118img8, ft118img9 } from '@/app/assets'
import YachtDetails from './YachtDetails'
import Heading from '../../standard/44ft/Heading'
import Heading2 from '../../standard/44ft/Heading2'
import YachtForm from '../../standard/44ft/YachtForm'
import Advantages from '../../standard/44ft//Advantages'
import AdvantageSlider from '../../standard/44ft/AdvantageSlider'
import WhatsLink from '@/app/components/WhatsLink'
const page = () => {
  return (
    <div className='yacht-page yacht-ft80'>
        <Header/>
        <LandingYachtPage categoryName="premium" category="Premium" yachtName="118 ft Poseidon" 
        images={[ft118img1,ft118img2, ft118img3, ft118img4, ft118img5, ft118img6, ft118img7, ft118img8, ft118img9, ft118img10, ft118img11, ft118img12, ft118img13, ft118img14, ft118img15, ft118img16 ]}/>
        <YachtDetails brand="Poseidon" size="118 ft" 
        feat1="Water and ice, carbonated drinks"
         feat2="Tea, natural coffee" 
         feat3="Fresh towels "
         feat4="Music stereo system (AUX, USB) "
         feat5="E-grill (upon request)"
         feat6="Fully Equipped Kitchen "
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