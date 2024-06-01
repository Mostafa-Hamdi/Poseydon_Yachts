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
import { ft110img1, ft110img10, ft110img11, ft110img12, ft110img13, ft110img14, ft110img15, ft110img16, ft110img17, ft110img18, ft110img19, ft110img2, ft110img20, ft110img21, ft110img22, ft110img23, ft110img3, ft110img4, ft110img5, ft110img6, ft110img7, ft110img8, ft110img9 } from '@/app/assets'
import WhatsLink from '@/app/components/WhatsLink'
const page = () => {
  return (
    <div className='yacht-page yacht-ft80'>
        <Header/>
        <LandingYachtPage categoryName="premium" category="Premium" yachtName="110 ft Benetti" 
        images={[ ft110img1, ft110img2, ft110img3, ft110img4, ft110img5, ft110img6, ft110img7, ft110img8, ft110img9,ft110img10, ft110img11, ft110img12, ft110img13, ft110img14, ft110img15, ft110img16, ft110img17, ft110img18, ft110img19, ft110img20, ft110img21, ft110img22, ft110img23 ]}/>
        <YachtDetails brand="Benetti" size="110 ft" capacity="50" 
        feat1="Soft drinks, water & ice; "
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