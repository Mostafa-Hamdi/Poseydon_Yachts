"use client";
import React, { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Review from './Review';
import { menReview, womenReview } from '../assets';
import ReviewImg from './ReviewImg';

const ReviewSwiper = () => {
  const [dotActive, setDotActive]= useState(false);
  function handleDotActive () {
    setDotActive(!dotActive)
  }
  const settings = {
    dots: true,
    arrows: false,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    speed: 500,
    slideSpacing: 20,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    dotsClass: 'custom-dots',
    customPaging: (i) => (
      <button className={`dot ${dotActive ? 'active' : ''}`} onClick={handleDotActive}/>,
      <button className={`dot ${dotActive ? 'active' : ''}`} onClick={handleDotActive}/>      // <button className={`dot ${dotActive ? 'active' : ''}`} onClick={handleDotActive}/>
    ),
  };
  return (
    <div className='review-swiper'>
      <Slider {...settings}>
        <div>
          <Review id="img-hidden" comment="Highly recommended. Staff are very friendly and helpful. Their service is excellent and very satisfying. The catering service is very helpful, the food is great, vegetarian food. Also the Agent, Mark is very accommodating. Overall experienced is excellent." name="Rona Lucero"/>
        </div>
        <div>
          <Review id="img-hidden" comment="it was amazing experience for our family and friends. We were 5. The trip is more than wonderful!!! Amazing yacht, a lot of food, really pleasant and efficient team. My daughter is 6. She was all time under control of the team. When she got out she always had a life vest. Guys of the team played with she and made her really happy. They took us a million picture really professional and cool. Every time they were very close to us the serve, to help and just to smile. I strongly recommend Poseidon Yachts. You will receive an unforgettable adventure. It's really exciting. Thank you million times" name="Sergio Zaviolli"/>
        </div>
        <div>
          <ReviewImg img={menReview}  comment="Adventures with Poseidon Yachts is Unforgettable experiences, impeccable service, and breathtaking destinations. A truly exceptional yachting journey!" name="John Matthew"/> 
        </div>
        <div>
          <ReviewImg img={womenReview}  comment="We had an amazing experience with Poseidon Yachts in Dubai , We enjoyed the sunset in the Marina area with a view of Bluewaters. The food was delicious, prepared by a chef, and we toasted with champagne. We shared the experience with friends, had a great time dancing, and returned with a wonderful view of the Marina skyline. Highly recommended!" name="Laura Mendez"/>
        </div>
      </Slider>
    </div>
  )
}

export default ReviewSwiper