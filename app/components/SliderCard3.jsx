"use client";
import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { group, CardEnvelope, CardWhats, CardPhone,userCard,rulerCard } from "../assets";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
export default function SliderCard(props) {
  const settings = {
    dots: true,
    arrows: false,
    speed: 500,
    autoplay: true,
    infinite: true,
    autoplaySpeed: 2000,
    swipeToSlide: true,
    speed: 500,
  };
  const [clicked, setClicked] = React.useState(false);
  const handleClick=()=> {
    setClicked(!clicked)
  }
  return (
    <div className="card-swiper">
      <Link href={`${props.link}`}>
      <div className="gallery">
         <Slider {...settings}>
        <div>
          <Image src={props.img1} alt="" />
        </div>
        <div>
          <Image src={props.img2} alt=""/>
        </div>
        <div>
          <Image src={props.img3} alt=""/>
        </div>
      </Slider>
      </div>
      <div className="text">
        <div className="box1">
          <h2><strong>{props.name}</strong></h2>
          <FontAwesomeIcon icon={faHeart} onClick={handleClick} className={`${clicked? "red" : ""}`}/>
          <span>Click to save</span>
        </div>
        <div className="box2">
        <div className="nested-box1">
                <Image src={userCard} alt=""/>
                <span>{props.person}</span>
                persons
                <span className="line-right"></span>
        </div>
        <div className="nested-box2">
            <Image src={rulerCard} alt=""/>
                size
                <span className="line-right"></span>                
            </div>
            <Image src={group} alt=""/>
          <p><span>{props.rooms}</span>Bedroom</p>
        </div>
        <div className="box3">
          <p><strong>{props.price}</strong></p>
        </div>
      </div>
      </Link>
      <div className="actions">
      <Link  href="https://poseidonyachtsdubai.com/yachts/80ft-majesty/"></Link>
        <Link href={""}>
          <Image src={CardEnvelope} width={11} height={16} alt=""/>
          <span>Book Now</span>
        </Link>
        <Link href={"https://wa.me/+971545407884?text=I%20want%20to%20book%20this%20yacht%20https://poseidonyachtsdubai.com/yachts/118-ft-poseidon/"}>
          <Image src={CardWhats} alt=""/>
          <span>Whatsapp</span>
        </Link>
        <Link href={"tel:+971501489802"}>
        <Image src={CardPhone} alt=""/>
          <span>Call Us</span>
        </Link>
      </div>
    </div>
  );
}
