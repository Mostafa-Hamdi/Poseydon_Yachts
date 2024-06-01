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
import {   ft62img1,
  ft62img2,
  ft62img3,
  ft62img4,
  ft62img5,
  ft62img6,
 ft62img7,  ft62img8,
  ft62img9, ft62img10,  ft62img11, ft62img12, ft62img13, ft62img14,  ft62img15,ft62img16,ft62img17, ft62img18, ft62img19,ft62img20,
ft62img21,
  ft62img22,
  ft62img23,} from '@/app/assets'
import WhatsLink from '@/app/components/WhatsLink'
const page = () => {
  return (
    <div className='yacht-page'>
        <Header/>
        <LandingYachtPage categoryName="premium" category="Premium" yachtName="62ft Freedom" 
        images={[ft62img1, ft62img2, ft62img3, ft62img4,  ft62img5,  ft62img6,  ft62img7,  ft62img8,
          ft62img9, ft62img10,  ft62img11, ft62img12, ft62img13, ft62img14,  ft62img15,ft62img16,ft62img17, ft62img18, ft62img19,ft62img20,
        ft62img21,   ft62img22,  ft62img23,]} />
        <YachtDetails brand="Azimut" size="62ft" capacity="25" 
        feat1="Soft drinks, water & ice cubes"
         feat2="Disposable plates and cups, cutlery" 
         feat3="Music stereo system (via Bluetooth or AUX)"
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