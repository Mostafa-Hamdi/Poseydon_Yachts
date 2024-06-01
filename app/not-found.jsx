import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import LandingError from './components/LandingError'

const NotFound = () => {
  return (
    <div className='error-page'>
        <Header/>
        <LandingError/>
        <Footer/>
    </div>
  )
}

export default NotFound