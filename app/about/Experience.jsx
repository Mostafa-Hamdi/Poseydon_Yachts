"use client";
import React from 'react'
import { aboutimg2, aboutimg3, aboutimg4, aboutimg5 } from '../assets'
import { useState } from 'react'
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import Image from 'next/image'
const Experience = () => {
    const [counterOn, setCounter] = useState(false);
  return (
    <div className='experience'>
       <div className="container">
       <div className="section-img">
            <Image src={aboutimg2} alt=''/>
            <div className='text-box'>
                <div className='number'>
                    <ScrollTrigger onEnter={()=> setCounter(true)} >
                        <span>
                            {counterOn && <CountUp start={0} end={22} duration={2} useEasing={false}/>}                    
                        </span>
                    </ScrollTrigger>
                    <span>+</span>
                </div>
                <p><span>Yacht Club</span> <span> Experiences</span></p>
            </div>
        </div>
        <div className='content'>
            <h5>Why Choose Us?</h5>
            <h3>Experience Yachting Excellence, Choose Us for Unforgettable Adventures.</h3>
            <p>Your gateway to sea-centric luxury. Time to elevate your maritime experience with Poseidon Yachts.</p>
            <div className="box">
                <Image src={aboutimg3} alt=''/>
                <div>
                    <h6><em>Unmatched Luxury</em></h6>
                    <p>Choose our Yacht Club to indulge in unparalleled Luxury. We offer an elevated experience that exceeds expectations and redefines opulence.</p>
                </div>
            </div>
            <div className="border"></div>
            <div className="box">
                <Image src={aboutimg4} alt=''/>
                <div>
                    <h6><em>Exceptional Services</em></h6>
                    <p>Our Yacht Club is known for its exceptional services. Our dedicated staff and crew are committed delivering personalized attention.</p>
                </div>
            </div>
            <div className="border"></div>
            <div className="box">
                <Image src={aboutimg5} alt=''/>
                <div>
                    <h6><em>Variety and Flexibility</em></h6>
                    <p>We provide a diverse fleet of yachts, catering to different sizes and preferences. Whether you seek an intimate escape or a grand celebration, our yacht club offers a range of options to suit your needs.</p>
                </div>
            </div>
            <div className="border"></div>
        </div>
       </div>
    </div>
  )
}

export default Experience