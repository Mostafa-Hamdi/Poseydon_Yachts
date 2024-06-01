"use client"
import Footer from '@/app/components/Footer'
import Header from '@/app/components/Header'
import Select from '@/app/components/Select'
import React from 'react'
import LandingYachtPage from '../44ft/LandingYachtPage'
import { ft48img1, ft48img10, ft48img11, ft48img12, ft48img13, ft48img14, ft48img15, ft48img16, ft48img17, ft48img18, ft48img2, ft48img3, ft48img4, ft48img5, ft48img6, ft48img7, ft48img8, ft48img9, ft60img1, ft60img10, ft60img11, ft60img12, ft60img13, ft60img14, ft60img15, ft60img16, ft60img17, ft60img18, ft60img19, ft60img2, ft60img20, ft60img3, ft60img4, ft60img5, ft60img6, ft60img7, ft60img8, ft60img9} from '@/app/assets'
import YachtDetails from '../44ft/YachtDetails'
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
        <LandingYachtPage categoryName="standard" category="Standard" yachtName="48ft Majesty" images={[ft48img1,ft48img2,ft48img3,ft48img4,ft48img5,ft48img6,ft48img7,ft48img8,ft48img9,ft48img10,ft48img11,ft48img12,ft48img13,ft48img14,ft48img15,ft48img16, ft48img17, ft48img18 ]}/>
        <YachtDetails brand="Majesty" size="60ft" capacity="25" feat1="Soft drinks, water & Ice" feat2="Fresh Towels, Paper Napkins" feat3="Disposable plates and cups, cutlery"
         feat4="Music Stereo System (via Bluetooth or AUX)" feat5="Grill Equipment (upon request)"/>
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