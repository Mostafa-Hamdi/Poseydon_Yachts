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
import { ft101img1, ft101img10, ft101img11, ft101img12, ft101img13, ft101img14, ft101img15, ft101img16, ft101img17, ft101img18, ft101img19, ft101img2, ft101img20, ft101img21, ft101img22, ft101img23, ft101img24, ft101img25, ft101img26, ft101img27, ft101img28, ft101img29, ft101img3, ft101img30, ft101img31, ft101img32, ft101img33, ft101img34, ft101img35, ft101img36, ft101img37, ft101img38, ft101img39, ft101img4, ft101img40, ft101img41, ft101img5, ft101img6, ft101img7, ft101img8, ft101img9 } from '@/app/assets'
import WhatsLink from '@/app/components/WhatsLink'
const page = () => {
  return (
    <div className='yacht-page'>
        <Header/>
        <LandingYachtPage categoryName="premium" category="Premium" yachtName="101ft Majesty" 
        images={[ft101img1,ft101img2,ft101img3 , ft101img4,ft101img5, ft101img6, ft101img7, ft101img8, ft101img9,ft101img10, ft101img11, ft101img12, ft101img13, ft101img14, ft101img15, ft101img16, ft101img17, ft101img18, ft101img19,  ft101img20, ft101img21, ft101img22, ft101img23, ft101img24, ft101img25, ft101img26, ft101img27, ft101img28, ft101img29, ft101img30, ft101img31, ft101img32, ft101img33, ft101img34, ft101img35, ft101img36, ft101img37, ft101img38, ft101img39,  ft101img40, ft101img41]}/>
        <YachtDetails brand="Majesty" size="101 ft" capacity="50" 
         feat1="Soft drinks, water & ice cubes"
         feat2="Fresh towels, paper napkins," 
         feat3="Disposable plates and cups, cutlery;"
         feat4="Music stereo system (via Bluetooth or AUX)"
         feat5="Grill equipment (upon request)"
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