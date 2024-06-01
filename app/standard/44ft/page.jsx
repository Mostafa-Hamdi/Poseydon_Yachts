"use client"
import Footer from '@/app/components/Footer'
import Header from '@/app/components/Header'
import Select from '@/app/components/Select'
import React from 'react'
import LandingYachtPage from './LandingYachtPage'
import { ft44Img1, ft44Img10, ft44Img11, ft44Img12, ft44Img13, ft44Img14, ft44Img15, ft44Img2, ft44Img3, ft44Img4, ft44Img5, ft44Img6, ft44Img7, ft44Img8, ft44Img9 } from '@/app/assets'
import YachtDetails from './YachtDetails'
import Heading from './Heading'
import Heading2 from './Heading2'
import YachtForm from './YachtForm'
import Advantages from './Advantages'
import AdvantageSlider from './AdvantageSlider'
import WhatsLink from '@/app/components/WhatsLink'

const page = () => {
  return (
    <div className='yacht-page'>
        <Header/>
        <LandingYachtPage categoryName="standard" category="Standard" yachtName="44ft Majesty" images={[ft44Img1, ft44Img2, ft44Img3, ft44Img4, ft44Img5, ft44Img6, ft44Img7, ft44Img8, ft44Img9, ft44Img10, ft44Img11, ft44Img12, ft44Img13, ft44Img14, ft44Img15 ]}/>
        <YachtDetails brand="Majesty" size="44ft" capacity="10" feat1="Water, Ice" feat2="Disposable Plates , Cups , Cutlery" feat3="Flybridge table, Towels,Foredeck sunbeds, Cooler Box"
         feat4="Micro Oven , E-grill equipment" feat5="Fishing rods,"/>
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