"use client"
import Footer from '@/app/components/Footer'
import Header from '@/app/components/Header'
import Select from '@/app/components/Select'
import React from 'react'
import LandingYachtPage from '../44ft/LandingYachtPage'
import { ft60img1, ft60img10, ft60img11, ft60img12, ft60img13, ft60img14, ft60img15, ft60img16, ft60img17, ft60img18, ft60img19, ft60img2, ft60img20, ft60img3, ft60img4, ft60img5, ft60img6, ft60img7, ft60img8, ft60img9} from '@/app/assets'
import YachtDetails from './YachtDetails'
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
        <LandingYachtPage categoryName="standard" category="Standard" yachtName="60ft Majesty" images={[ft60img1,ft60img2 , ft60img3, ft60img4, ft60img5, ft60img6, ft60img7, ft60img8, ft60img9,ft60img10, ft60img11, ft60img12, ft60img13, ft60img14, ft60img15, ft60img16, ft60img17, ft60img18, ft60img19, ft60img20]}/>
        <YachtDetails brand="Majesty" size="60ft" capacity="25" feat1="Water , Ice , Cooler Boxes" feat2="Foredeck sunbeds" feat3="Toilets/Showers"
         feat4="Fully Equpped Kitchen" feat5="Music Stereo System" feat6="E-grill equipment" feat7="Disposable Plates , Cups , Cutlery"/>
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