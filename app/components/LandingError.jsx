import Link from 'next/link'
import React from 'react'

const LandingError = () => {
  return (
    <div className='landing-error'>
        <div className="container">
            <h1>404</h1>
            <h1>Oops! Lost at Sea</h1>
            <div>We Apologize for the Inconvenience. Please Bear with Us as We Navigate the Issue.</div>
            <Link href="/">Back to Home</Link>
        </div>
    </div>
  )
}

export default LandingError