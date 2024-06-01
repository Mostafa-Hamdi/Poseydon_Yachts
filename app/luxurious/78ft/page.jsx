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
import {    ft78img1,
  ft78img2, ft78img3, ft78img4,ft78img5,
  ft78img6, ft78img7, ft78img8,
  ft78img9,  ft78img10,  ft78img11, ft78img12,  ft78img13,  ft78img14,
  ft78img15, ft78img16,  ft78img17,ft78img18,
  ft78img19,  ft78img20, ft78img21, ft78img22, ft78img23, ft78img24,ft78img25,
  ft78img26,
 ft78img27,} from '@/app/assets'
import WhatsLink from '@/app/components/WhatsLink'
const page = () => {
  return (
    <div className='yacht-page'>
        <Header/>
        <LandingYachtPage categoryName="luxurious" category="Luxurious" yachtName="78ft Ferretti" 
        images={[ft78img1,
          ft78img2, ft78img3, ft78img4,ft78img5,
          ft78img6, ft78img7, ft78img8,
          ft78img9,  ft78img10,  ft78img11, ft78img12,  ft78img13,  ft78img14,
          ft78img15, ft78img16,  ft78img17,ft78img18,
          ft78img19,  ft78img20, ft78img21, ft78img22, ft78img23, ft78img24,ft78img25,
          ft78img26,
         ft78img27,]}/>
        <YachtDetails brand="Ferretti" size="110 ft" capacity="20" 
        feat1="Premium still/sparkling water"
         feat2="Mixed soft drinks" 
         feat3="Signature refreshing towels"
         feat4="Signature fruits platter" 
         feat5="Fresh towels" 
         feat6="Hermes toiletries" 
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