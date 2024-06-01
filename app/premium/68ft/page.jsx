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
import { ft68img1, ft68img10, ft68img11, ft68img12, ft68img13, ft68img14, ft68img15, ft68img16, ft68img17, ft68img18, ft68img19, ft68img2, ft68img20, ft68img21, ft68img22, ft68img23, ft68img24, ft68img25, ft68img3, ft68img4, ft68img5, ft68img6, ft68img7, ft68img8, ft68img9 } from '@/app/assets'
import WhatsLink from '@/app/components/WhatsLink'
const page = () => {
  return (
    <div className='yacht-page'>
        <Header/>
        <LandingYachtPage categoryName="premium" category="Premium" yachtName="68ft Azimut" 
        images={[ ft68img1,ft68img2 , ft68img3, ft68img4, ft68img5, ft68img6, ft68img7, ft68img8, ft68img9,ft68img10, ft68img11, ft68img12, ft68img13, ft68img14, ft68img15, ft68img16, ft68img17, ft68img18, ft68img19, ft68img20, ft68img21, ft68img22, ft68img23, ft68img24, ft68img25]}/>
        <YachtDetails brand="Azimut" size="68ft" capacity="30" 
        feat1="Soft Drinks Water, Ice Chiller"
         feat2="Disposable cutleries (plates, forks, cups)" 
         feat3="Towels"
         feat4="Music System (via bluetooth or AUX)" 
         feat5="E-grill (upon request)" 
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