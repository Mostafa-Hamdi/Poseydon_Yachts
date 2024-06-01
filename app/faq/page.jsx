import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import LandingFaq from './LandingFaq'
import FaqContent from './FaqContent'
const page = () => {
  return (
    <div className='faq-page'>
        <Header/>
        <LandingFaq/>
        <div className="margin"></div>
        <FaqContent/>
        <Footer/>
    </div>
  )
}

export default page