"use client"
import Link from 'next/link'
import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';
const LandingYachtPage = (props) => {
    const CustomDot = ({ index, onClick }) => (
        <button onClick={onClick} className="custom-dot">
          <span>{index + 1}</span>
        </button>
      );
    const settings = {
        dots: true,
        arrows: false,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        customPaging: (i) => <CustomDot index={i} />,
        responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
              },
            },
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
              },
            },
          ],
      };
  return (
    <div className='landing-yacht'>
        <div className="yacht-container">
        <div className="location">
            <Link href="/">Home</Link>
            <span>{" »"}</span>
            <Link href={`/${props.categoryName}`}>{props.category}</Link>
            <span>{" »"}</span>
            <p>{props.yachtName}</p>
        </div>
        <div className="yacht-heading">
            <h1>{props.yachtName}</h1>
        </div>
        <div className="yachtgallery">
        <Slider {...settings}>
            {props.images.map((image,index) => (
            <div key={index}>
                <Image src={image} alt="Slider" loading='lazy'/>
            </div>
            ))}
      </Slider>
        </div>
        </div>
    </div>
  )
}

export default LandingYachtPage