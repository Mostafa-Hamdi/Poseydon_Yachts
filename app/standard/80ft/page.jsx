"use client"
import Footer from '@/app/components/Footer'
import Header from '@/app/components/Header'
import Select from '@/app/components/Select'
import React from 'react'
import LandingYachtPage from '../44ft/LandingYachtPage'
import {ft80Img1,ft80Img2,ft80Img3,ft80Img4,ft80Img5,ft80Img6,ft80Img7,ft80Img8,ft80Img9,ft80Img10} from '@/app/assets'
import YachtDetails from '../44ft/YachtDetails'
import Heading from '../44ft/Heading'
import Heading2 from '../44ft/Heading2'
import YachtForm from '../44ft/YachtForm'
import Advantages from '../44ft/Advantages'
import AdvantageSlider from '../44ft/AdvantageSlider'
import WhatsLink from '@/app/components/WhatsLink'
const page = () => {
  return (
    <div className='yacht-page yacht-ft80'>
        <Header/>
        <LandingYachtPage categoryName="standard" category="Standard" yachtName="80ft Majesty" images={[ft80Img1,ft80Img2,ft80Img3,ft80Img4,ft80Img5,ft80Img6,ft80Img7,ft80Img8,ft80Img9,ft80Img10]} />
        <YachtDetails brand="Majesty" size="80 ft" capacity="30" feat1="Soft drinks, water & ice" feat2="Fresh towels, paper napkins" feat3="Disposable plates and cups, cutlery"
         feat4="Music stereo system (via Bluetooth or AUX)"/>
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