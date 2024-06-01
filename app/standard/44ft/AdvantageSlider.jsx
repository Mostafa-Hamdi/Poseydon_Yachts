import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { air, bathroom, bed, drinks, glass, locker, music, paper } from '@/app/assets'
import Image from 'next/image';
const AdvantageSlider = () => {
    const settings = {
        dots: false,
        arrows: false,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1
      };
  return (
    <div className='advantage-slider'>
        <div className="slider1">
        <Slider {...settings}>
        <div className="advantage">
                <Image src={bathroom} alt=''/>
                <h5><strong>Luxury Bathroom​</strong></h5>
            </div>
            <div className="advantage">
                <Image src={bed} alt=''/>
                <h5><strong> Luxury Bed​</strong></h5>
            </div>
            <div className="advantage">
                <Image src={drinks} alt=''/>
                <h5><strong>Soft drinks, water, ice</strong></h5>
            </div>
            <div className="advantage">
                <Image src={paper} alt=''/>
                <h5><strong>Fresh Towels, Paper</strong></h5>
            </div>
        </Slider>
        </div>
        <div className="slider2">
            <Slider {...settings}>
                <div className="advantage">
                    <Image src={air} alt=''/>
                    <h5><strong>Air Conditioner</strong></h5>
                </div>
                <div className="advantage" >
                    <Image src={glass} alt=''/>
                    <h5><strong> Locker</strong></h5>
                </div>
                <div className="advantage">
                    <Image src={music} alt=''/>
                    <h5><strong>Music Stereo System (via Bluetooth or AUX)</strong></h5>
                </div>
                <div className="advantage">
                    <Image src={locker} alt=''/>
                    <h5><strong>Disposable plates and cups, cutlery</strong></h5>
                </div>
            </Slider>
        </div>
    </div>
  )
}

export default AdvantageSlider