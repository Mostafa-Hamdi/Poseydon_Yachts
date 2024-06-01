"use client"
import Footer from '@/app/components/Footer'
import Header from '@/app/components/Header'
import Select from '@/app/components/Select'
import React from 'react'
import LandingYachtPage from '../44ft/LandingYachtPage'
import { ft56img1, ft56img10, ft56img11, ft56img12, ft56img13, ft56img14, ft56img15, ft56img16, ft56img17, ft56img18, ft56img2, ft56img3, ft56img4, ft56img5, ft56img6, ft56img7, ft56img8, ft56img9} from '@/app/assets'
import YachtDetails from './YachtDetails'
import Heading from '../44ft/Heading'
import Heading2 from '../44ft/Heading2'
import YachtForm from '../44ft/YachtForm'
import Advantages from '../44ft/Advantages'
import AdvantageSlider from '../44ft/AdvantageSlider'
import WhatsLink from '@/app/components/WhatsLink'
const page = () => {
  return (
    <div className='yacht-page yacht-ft48'>
        <Header/>
        <LandingYachtPage categoryName="standard" category="Standard" yachtName="56ft Majesty" images={[ft56img1, ft56img2, ft56img3, ft56img4, ft56img5, ft56img6, ft56img7, ft56img8, ft56img9, ft56img10, ft56img11, ft56img12, ft56img13, ft56img14, ft56img15, ft56img16, ft56img17, ft56img18]} />
        <YachtDetails brand="Majesty" size="56 ft" capacity="15" feat1="Soft drinks, water & ice" feat2="Fresh towels, paper napkins"
         feat3="Disposable plates and cups, cutlery" feat4="Music Stereo System (via Bluetooth or AUX)" />
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