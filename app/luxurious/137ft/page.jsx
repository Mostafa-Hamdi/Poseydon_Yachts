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
import {    ft137img1,
  ft137img2,ft137img3, ft137img4,ft137img5, ft137img6,ft137img7,ft137img8, ft137img9, ft137img10,ft137img11,
  ft137img12, ft137img13, ft137img14, ft137img15, ft137img16,
  ft137img17,  ft137img19, ft137img20, ft137img21, ft137img22, ft137img23, ft137img24,
  ft137img25, ft137img26, ft137img27, ft137img28, ft137img29, ft137img30,  ft137img31,
  ft137img32, ft137img33, ft137img34,  ft137img35,ft137img36, ft137img37, ft137img38,  ft137img39,ft137img40,
  ft137img41, ft137img42, ft137img43, ft137img44,  ft137img45,  ft137img46, ft137img47, ft137img48,
  ft137img49,} from '@/app/assets'
import WhatsLink from '@/app/components/WhatsLink'
const page = () => {
  return (
    <div className='yacht-page'>
        <Header/>
        <LandingYachtPage categoryName="luxurious" category="Luxurious" yachtName="137ft Ak Royalty" 
        images={[ ft137img1,
          ft137img2,ft137img3, ft137img4,ft137img5, ft137img6,ft137img7,ft137img8, ft137img9, ft137img10,ft137img11,
          ft137img12, ft137img13, ft137img14, ft137img15, ft137img16,
          ft137img17,  ft137img19, ft137img20, ft137img21, ft137img22, ft137img23, ft137img24,
          ft137img25, ft137img26, ft137img27, ft137img28, ft137img29, ft137img30,  ft137img31,
          ft137img32, ft137img33, ft137img34,  ft137img35,ft137img36, ft137img37, ft137img38,  ft137img39,ft137img40,
          ft137img41, ft137img42, ft137img43, ft137img44,  ft137img45,  ft137img46, ft137img47, ft137img48,
          ft137img49,]} />
        <YachtDetails brand="Ak Royalty" size="137ft" 
        feat1="OUTDOOR CINEMA"
         feat2="SMART TV" 
         feat3="POKER TABLE"
         feat4="CHESS BOARD SET" 
         feat5="PS 5 & VR HEADSET" 
         feat6="SoftDrinks,Still and sparkling water,,Ice" 
         feat7="Fully Equipped Kitchen" 
         feat8="Music stereo system (via Bluetooth or AUX)," 
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