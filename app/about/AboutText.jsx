"use client";
import { useState } from "react";
import React from "react";
import { aboutImg1 } from "../assets";
import Image from "next/image";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
const AboutText = ()=> {
    const [counterOn, setCounter] = useState(false);
    return(
        <div className="text-box">
            <div className="about-text">
                <div className="text child">
                    <h5>About us</h5>
                    <h1>Setting Sail For Unforgettable Experiences.</h1>
                    <p>At Poseidon Yachts Dubai, we curate unparalleled maritime experiences, seamlessly blending luxury and adventure. Embark on a journey where opulence meets the open sea, and every cruise is a celebration of sophistication.</p>
                    <div className="numbers">
                        <div className="box1" >
                            <ScrollTrigger onEnter={()=> setCounter(true)} >
                                <p>
                                    {counterOn && <CountUp start={0} end={17} duration={3} useEasing={false}/>}+                     
                                </p>
                            </ScrollTrigger>
                            <div className="name">Yacht Club Experiences</div>
                        </div>
                        <div className="box2" >
                            <ScrollTrigger >
                                <p>
                                    {counterOn && <CountUp start={0} end={52} duration={3} useEasing={false}/>}
                                </p>
                            </ScrollTrigger>
                            <div className="name">Motor Yacth</div>
                        </div>
                        <div className="box3">
                            <ScrollTrigger >
                                <p>
                                    {counterOn && <CountUp start={0} end={164} duration={3} useEasing={false}/>}
                                </p>
                            </ScrollTrigger>
                            <div className="name">Professional Sailors</div>
                        </div>
                        <div className="box4" >
                            <ScrollTrigger>
                                <p>
                                  {counterOn && <CountUp start={0} end={100} duration={3} useEasing={false}/>}
                                </p>
                            </ScrollTrigger>
                            <div className="name">Sea Routes</div>
                        </div>
                    </div>
                </div>
                <div className="image child">
                    <Image src={aboutImg1} alt=""/>
                </div>
                <div className="navigate child">
                    <div className="img"></div>
                    <p>Our yachts navigate the iconic waters of Dubai Marina and Dubai Harbor, showcasing the city’s stunning landmarks and providing an exclusive platform for unforgettable moments.</p>
                </div>
            </div>
            <div className="part2">

            </div>
        </div>
    )
} 
export default AboutText;