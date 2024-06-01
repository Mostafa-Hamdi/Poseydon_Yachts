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
import { ft82img1, ft82img10, ft82img11, ft82img12, ft82img13, ft82img14, ft82img15, ft82img16, ft82img17, ft82img18, ft82img19, ft82img2, ft82img3, ft82img4, ft82img5, ft82img6, ft82img7, ft82img8, ft82img9 } from '@/app/assets'
import WhatsLink from '@/app/components/WhatsLink'
const page = () => {
  return (
    <div className='yacht-page'>
        <Header/>
        <LandingYachtPage categoryName="premium" category="Premium" yachtName="82ft SanLorenzo" 
        images={[ft82img1, ft82img2, ft82img3, ft82img4, ft82img5, ft82img6, ft82img7, ft82img8, ft82img9, ft82img10, ft82img11, ft82img12, ft82img13, ft82img14, ft82img15, ft82img16, ft82img17, ft82img18, ft82img19 ]}/>
        <YachtDetails brand="San Lorenzo" size="82ft" capacity="40" 
        feat1="Soft drinks, water, ice"
         feat2="Disposable plates , cups, &cutlery" 
         feat3="Fresh towels, paper napkins"
         feat4="Music Stereo System (via Bluetooth or AUX), AC"
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