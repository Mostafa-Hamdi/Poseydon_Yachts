"use client";
import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


import CardServices from './CardSevices';
// import { SwiperSlide } from 'swiper/react';
export default function CardsSwiper() {
  const breakpoints = {
    0: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    600: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1000: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  };
  const customDot = (index, className) => {
    return `<span class="${className}">${index + 1}</span>`;
  };
  return (
    <div className='slidebar-services'>
      <Swiper
        breakpoints={breakpoints}
        spaceBetween={50}
        slidesPerView={3}
        centeredSlides={false}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          bulletClass: 'swiper-bullet',
          renderBullet: customDot,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
            <CardServices name="decoration" heading="Decorations" href="https://poseidonyachtsdubai.com/wp-content/uploads/2024/02/Poseidon-Yachts-Decor.pdf" description="
Elevate your yacht charter with our expert decoration service. From intimate gatherings to grand celebrations, our team will adorn your yacht with elegance and style, ensuring every detail is tailored to your vision. Immerse yourself in luxury and create unforgettable memories on the water with Poseidon Yachts"/>
        </SwiperSlide>
            <SwiperSlide>
                <CardServices name="catering" heading="Catering" href="https://poseidonyachtsdubai.com/wp-content/uploads/2024/02/Poseidons-Menu.pdf" description="
Elevate your yacht rental experience with our gourmet catering service. Our expert chefs craft exquisite menus featuring international cuisines, tailored to your preferences. From intimate gatherings to lavish events, indulge in a culinary journey aboard our luxurious yachts. Impeccable service and culinary excellence await you on the open sea with Poseidon Yachts"/>
            </SwiperSlide>
            <SwiperSlide>
                <CardServices name="water-sports" heading="Water Sports" href="https://poseidonyachtsdubai.com/wp-content/uploads/2024/02/Poseidon-Yachts-Water-Sports.pdf" description="
Experience high-speed fun on the water with our Jet Ski rental service. Perfect for solo rides or group adventures, our Jet Skis guarantee an exhilarating experience. Operated by experienced professionals, safety is our priority. Create unforgettable memories on the waves with Poseidon Yachts"/>
            </SwiperSlide>
            <SwiperSlide>
                <CardServices name="decoration" heading="Decorations" href="https://poseidonyachtsdubai.com/wp-content/uploads/2024/02/Poseidon-Yachts-Decor.pdf" description="
Elevate your yacht charter with our expert decoration service. From intimate gatherings to grand celebrations, our team will adorn your yacht with elegance and style, ensuring every detail is tailored to your vision. Immerse yourself in luxury and create unforgettable memories on the water with Poseidon Yachts"/>
            </SwiperSlide>
            <SwiperSlide>
                <CardServices name="catering" heading="Catering" href="https://poseidonyachtsdubai.com/wp-content/uploads/2024/02/Poseidons-Menu.pdf" description="
Elevate your yacht rental experience with our gourmet catering service. Our expert chefs craft exquisite menus featuring international cuisines, tailored to your preferences. From intimate gatherings to lavish events, indulge in a culinary journey aboard our luxurious yachts. Impeccable service and culinary excellence await you on the open sea with Poseidon Yachts"/>
            </SwiperSlide>
            <SwiperSlide>
                <CardServices name="water-sports" heading="Water Sports" href="https://poseidonyachtsdubai.com/wp-content/uploads/2024/02/Poseidon-Yachts-Water-Sports.pdf" description="Experience high-speed fun on the water with our Jet Ski rental service. Perfect for solo rides or group adventures, our Jet Skis guarantee an exhilarating experience. Operated by experienced professionals, safety is our priority. Create unforgettable memories on the waves with Poseidon Yachts"/>
            </SwiperSlide>
            <SwiperSlide>
                <CardServices name="decoration" heading="Decorations" href="https://poseidonyachtsdubai.com/wp-content/uploads/2024/02/Poseidon-Yachts-Decor.pdf" description="
Elevate your yacht charter with our expert decoration service. From intimate gatherings to grand celebrations, our team will adorn your yacht with elegance and style, ensuring every detail is tailored to your vision. Immerse yourself in luxury and create unforgettable memories on the water with Poseidon Yachts"/>
            </SwiperSlide>
            <SwiperSlide>
            <CardServices name="catering" heading="Catering" href="https://poseidonyachtsdubai.com/wp-content/uploads/2024/02/Poseidons-Menu.pdf" description="
Elevate your yacht rental experience with our gourmet catering service. Our expert chefs craft exquisite menus featuring international cuisines, tailored to your preferences. From intimate gatherings to lavish events, indulge in a culinary journey aboard our luxurious yachts. Impeccable service and culinary excellence await you on the open sea with Poseidon Yachts"/>
            </SwiperSlide>
            <SwiperSlide>
                <CardServices name="water-sports" heading="Water Sports" href="https://poseidonyachtsdubai.com/wp-content/uploads/2024/02/Poseidon-Yachts-Water-Sports.pdf" description="Experience high-speed fun on the water with our Jet Ski rental service. Perfect for solo rides or group adventures, our Jet Skis guarantee an exhilarating experience. Operated by experienced professionals, safety is our priority. Create unforgettable memories on the waves with Poseidon Yachts"/>
            </SwiperSlide>
      </Swiper>
    </div>
  );
}
