"use client"
import {React, useState } from 'react'
import Image from 'next/image'
import { picture } from '../assets'
const FaqContent = () => {
    const [open,setOpen] = useState({
        one: true,
        two: false,
        three: false,
        four: false,
        five: false,
        six: false,
        seven: false,
        eight: false,
    });
  return (
    <div className="faq-content">
        <div className="container">
            <div className="text">
                <h6>FAQ</h6>
                <h2>Discover the Answers to Your Yachting Questions</h2>
                <p>We invite you to discover comprehensive insights and valuable information to enhance your yachting experience. Whether you’re curious about yacht rentals, maritime adventures, or the finest destinations, our resources are tailored to provide the answers you seek.</p>
                <div className={`questions`}>
                    <div className="ques-ans">
                        <div className="ques" onClick={()=>setOpen({one: !open.one, two: false, three: false, four: false,five: false,six :false,seven: false,eight: false})}>
                        <svg className={`${open.one? "d-block": "hidden"} e-font-icon-svg e-fas-caret-up`} viewBox="0 0 320 512" xmlns="http://www.w3.org/2000/svg"><path d="M288.662 352H31.338c-17.818 0-26.741-21.543-14.142-34.142l128.662-128.662c7.81-7.81 20.474-7.81 28.284 0l128.662 128.662c12.6 12.599 3.676 34.142-14.142 34.142z"></path></svg>
                        <svg className={`${open.one? "hidden": "d-block"} e-font-icon-svg e-fas-caret-right`} viewBox="0 0 192 512" xmlns="http://www.w3.org/2000/svg"><path d="M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z"></path></svg>
                            <h6>How to book a yacht in Dubai?</h6>
                        </div>
                        <div className={`ans ${open.one? "": "ans-colsed"}`}>
                            <p>Just provide us with the expected date of trip, preferred timing for charter and let us know all your expectations for the cruise and we will turn your expectation into reality.<br/>
Feel free to share your previous experiences and suggestions and everything will be taken care of. Give us the total number of guests and we will recommend the (perfect/Ideal) yacht.<br/>
We can also organize Corporate events, Birthday Celebrations, Anniversaries, Gender Reveal party, Perfect Get to Gather, Proposal on yacht, Wedding/Engagement Events, Getaway Cruise.<br/>
Experience our Luxury Cuisine with the best chefs of Dubai, with a Personalized yacht decoration based on events and a thrilling water sports experience.</p>
                        </div>
                    </div>
                    <div className="ques-ans">
                        <div className="ques" onClick={()=>setOpen({one: false, two: !open.two, three: false,four: false,five: false,six: false,seven: false,eight: false})}>
                        <svg className={`${open.two? "d-block": "hidden"} e-font-icon-svg e-fas-caret-up`} viewBox="0 0 320 512" xmlns="http://www.w3.org/2000/svg"><path d="M288.662 352H31.338c-17.818 0-26.741-21.543-14.142-34.142l128.662-128.662c7.81-7.81 20.474-7.81 28.284 0l128.662 128.662c12.6 12.599 3.676 34.142-14.142 34.142z"></path></svg>
                        <svg className={`${open.two? "hidden": "d-block"} e-font-icon-svg e-fas-caret-right`} viewBox="0 0 192 512" xmlns="http://www.w3.org/2000/svg"><path d="M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z"></path></svg>                            
                        <h6>What is the Booking Process?</h6>
                        </div>
                        <div className={`ans ${open.two? "": "ans-colsed"}`}>
                            <p>We confirm the booking with either full payment or a 50% deposit, with the remaining 50% payable upon arrival.
Deposit can be paid by multiple payment methods, after we send you the official quotation.<br/>
For the booking confirmation of the yacht, you need to secure it by a down payment by deposit.</p>
                        </div>
                    </div>
                    <div className="ques-ans">
                        <div className="ques" onClick={()=>setOpen({one: false, two: false, three: !open.three ,four: false,five: false,six: false,seven: false,eight: false})}>
                        <svg className={`${open.three? "d-block": "hidden"} e-font-icon-svg e-fas-caret-up`} viewBox="0 0 320 512" xmlns="http://www.w3.org/2000/svg"><path d="M288.662 352H31.338c-17.818 0-26.741-21.543-14.142-34.142l128.662-128.662c7.81-7.81 20.474-7.81 28.284 0l128.662 128.662c12.6 12.599 3.676 34.142-14.142 34.142z"></path></svg>
                        <svg className={`${open.three? "hidden": "d-block"} e-font-icon-svg e-fas-caret-right`} viewBox="0 0 192 512" xmlns="http://www.w3.org/2000/svg"><path d="M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z"></path></svg>                           
                        <h6>How to choose a charter yacht in UAE?</h6>
                        </div>
                        <div className={`ans ${open.three? "": "ans-colsed"}`}>
                            <p>What size and model, facilities, who are the crew? Knowing where to start, what options are available, and what to consider when chartering a yacht can seem not an easy task. Still, our expertise in everything from types of yachts to destinations is here to help. We can arrange high-top-level catering with water sports activities, entertainment programs, and even fireworks at Burj Al Arab or JBR.</p>
                        </div>
                    </div>
                    <div className="ques-ans">
                        <div className="ques" onClick={()=>setOpen({one: false, two: false, three: false,four: !open.four,five: false,six: false,seven: false,eight: false})}>
                        <svg className={`${open.four? "d-block": "hidden"} e-font-icon-svg e-fas-caret-up`} viewBox="0 0 320 512" xmlns="http://www.w3.org/2000/svg"><path d="M288.662 352H31.338c-17.818 0-26.741-21.543-14.142-34.142l128.662-128.662c7.81-7.81 20.474-7.81 28.284 0l128.662 128.662c12.6 12.599 3.676 34.142-14.142 34.142z"></path></svg>
                        <svg className={`${open.four? "hidden": "d-block"} e-font-icon-svg e-fas-caret-right`} viewBox="0 0 192 512" xmlns="http://www.w3.org/2000/svg"><path d="M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z"></path></svg>                            
                        <h6>How much is deposit to secure yacht?</h6>
                        </div>
                        <div className={`ans ${open.four? "": "ans-colsed"}`}>
                            <p>We confirm the yacht rental by making a minimum of 50% of the yacht down payment and 100% of the extra services. And the remaining amount can be paid upon arrival. The minimum order for yacht rental in Dubai is 3 hours. However, we recommend renting not less than 4-5 hours to get the best yachting experience.</p>
                        </div>
                    </div>
                    <div className="ques-ans">
                        <div className="ques" onClick={()=>setOpen({one: false, two: false, three: false,four: false,five: !open.five,six: false,seven: false,eight: false})}>
                        <svg className={`${open.five? "d-block": "hidden"} e-font-icon-svg e-fas-caret-up`} viewBox="0 0 320 512" xmlns="http://www.w3.org/2000/svg"><path d="M288.662 352H31.338c-17.818 0-26.741-21.543-14.142-34.142l128.662-128.662c7.81-7.81 20.474-7.81 28.284 0l128.662 128.662c12.6 12.599 3.676 34.142-14.142 34.142z"></path></svg>
                        <svg className={`${open.five? "hidden": "d-block"} e-font-icon-svg e-fas-caret-right`} viewBox="0 0 192 512" xmlns="http://www.w3.org/2000/svg"><path d="M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z"></path></svg>
                            <h6>What are yacht activities available onboard?</h6>
                        </div>
                        <div className={`ans ${open.five? "": "ans-colsed"}`}>
                            <p>Poseidon Yachts offers the best in fun-filled and enthralling activities to keep adrenaline pumping until the sun goes down. Many charter yachts have a garage carrying an array of water toys, from jet-skis (wave runners) boards to sea bobs. From inflatable toys pulled by a tender/or jet-ski to a spot of snorkeling amongst the Arabic fish, there is no end to the fun you can have as a family, group or getaway for two.</p>
                        </div>
                    </div>
                    <div className="ques-ans">
                        <div className="ques" onClick={()=>setOpen({one: false, two: false, three:false,four: false,five: false,six: !open.six,seven: false,eight: false})}>
                        <svg className={`${open.six? "d-block": "hidden"} e-font-icon-svg e-fas-caret-up`} viewBox="0 0 320 512" xmlns="http://www.w3.org/2000/svg"><path d="M288.662 352H31.338c-17.818 0-26.741-21.543-14.142-34.142l128.662-128.662c7.81-7.81 20.474-7.81 28.284 0l128.662 128.662c12.6 12.599 3.676 34.142-14.142 34.142z"></path></svg>
                        <svg className={`${open.six? "hidden": "d-block"} e-font-icon-svg e-fas-caret-right`} viewBox="0 0 192 512" xmlns="http://www.w3.org/2000/svg"><path d="M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z"></path></svg>
                            <h6>What are Dubai yacht charter costs?</h6>
                        </div>
                        <div className={`ans ${open.six? "": "ans-colsed"}`}>
                            <p>When you begin planning a yacht charter in Dubai, it is important to be aware of what is included in the cost of booking your charter yacht. High season refers to the most popular weeks of the year for a yacht charter in Dubai. The most popular and expensive season in UAE – starts from September till May. Fuel is included in the basic. But if you prefer to move a bit further than along the Dubai Jumeirah coastline, the fuel cost will be charged extra. The distance traveled and speed of cruising also affects fuel costs, and it is essential to bear these factors in mind. Value Added Tax (VAT): Effective 1 Jan 2018, VAT is charged at 5% on orders provided by Poseidon Yachts within UAE. Your final price will be reflected at checkout, once the order information is completed</p>
                        </div>
                    </div>
                    <div className="ques-ans">
                        <div className="ques" onClick={()=>setOpen({one: false, two:false, three:false,four:false,five:false,six:false,seven: !open.seven,eight:false})}>
                        <svg className={`${open.seven? "d-block": "hidden"} e-font-icon-svg e-fas-caret-up`} viewBox="0 0 320 512" xmlns="http://www.w3.org/2000/svg"><path d="M288.662 352H31.338c-17.818 0-26.741-21.543-14.142-34.142l128.662-128.662c7.81-7.81 20.474-7.81 28.284 0l128.662 128.662c12.6 12.599 3.676 34.142-14.142 34.142z"></path></svg>
                        <svg className={`${open.seven? "hidden": "d-block"} e-font-icon-svg e-fas-caret-right`} viewBox="0 0 192 512" xmlns="http://www.w3.org/2000/svg"><path d="M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z"></path></svg>
                            <h6>Will the chef take special requests?</h6>
                        </div>
                        <div className={`ans ${open.seven? "": "ans-colsed"}`}>
                            <p>The Chef’s role onboard a yacht is to ensure guests’ requirements will be considered. The chef will always advise that you do not have a choice of meals if you have indicated in your preference sheet that members of your charter party have food allergies or will only eat specific produce, no matter the reason. Upon your needs and preferences, a chef with a team in the kitchen can cook for you the best dishes on the yacht.</p>
                        </div>
                    </div>
                    <div className="ques-ans">
                        <div className="ques" onClick={()=>setOpen({one: false, two:false, three:false,four:false,five:false,six:false,seven:false,eight: !open.eight})}>
                        <svg className={`${open.eight? "d-block": "hidden"} e-font-icon-svg e-fas-caret-up`} viewBox="0 0 320 512" xmlns="http://www.w3.org/2000/svg"><path d="M288.662 352H31.338c-17.818 0-26.741-21.543-14.142-34.142l128.662-128.662c7.81-7.81 20.474-7.81 28.284 0l128.662 128.662c12.6 12.599 3.676 34.142-14.142 34.142z"></path></svg>
                        <svg className={`${open.eight? "hidden": "d-block"} e-font-icon-svg e-fas-caret-right`} viewBox="0 0 192 512" xmlns="http://www.w3.org/2000/svg"><path d="M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z"></path></svg>
                            <h6>What are yacht cruise routes in Dubai?</h6>
                        </div>
                        <div className={`ans ${open.eight? "": "ans-colsed"}`}>
                            <p>
                                We offer a cruise itinerary based on the number of hours booked on a yacht. “3 hours”:<br/>
                                – Jumeirah Beach Residences, Dubai Marina<br/>
                                – Island of Blue Waters (Ain Dubai)<br/>
                                – Dubai Skydive, Palm Jumeirah and Atlantis “3-5 hrs”:<br/>
                                – JBR, Dubai Marina<br/>
                                – Island of Blue Waters (Ain Dubai)<br/>
                                – Atlantis and Royal Atlantis hotel at Palm Jumeirah<br/>
                                – Logo Island and Burj al Arab Hotel<br/>
                                (*) Swimming and BBQ facilities<br/>
                                (*) Water sports: Jet Ski, Banana, and Fly Board* “10-24 hours”:<br/>
                                – Dubai Jumeirah coastline<br/>
                                – Bulgari Lagoon<br/>
                                – Dubai Water Canal<br/>
                                (*) Moon Island “48-72 hours”:<br/>
                                Unique cruise itinerary based on discussion.<br/>
                                – Animal Island (Wild Breakfast)<br/>
                                – Moon Island<br/>
                                – Mangrove forests on water<br/>
                                – Deep sea fishing<br/>
                                – Deep sea diving with instructors<br/>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="image">
                <Image src={picture}  alt=""/>
            </div>
        </div>
    </div>
  )
}

export default FaqContent