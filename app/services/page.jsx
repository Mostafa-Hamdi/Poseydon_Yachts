import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Select from "../components/Select";
import LandingServices from "./LandingServices";
import CardsSwiper from "./CardsSwiper";
import WhatsLink from "../components/WhatsLink";
const page = () => {
  return (<div className="services-page">
    <Header/>
    <LandingServices/>
    <Select
        linkTrue={false}
        name="Our-services"
        span="Our services"
        heading1="Experience attractive deals"
        heading2="and special yachts with you "
      />
    <CardsSwiper/>
    <Select
        linkTrue={true}
        link="/contact"
        linkName="Contact Us Now!"
        name="set-sail"
        span="Set Sail With Us"
        heading1="Set Sail With Us"
        heading2=""
        paragraph="Dive into the ultimate yachting experience today, where each moment on the open sea is a celebration of opulence and extraordinary memories waiting to be made."
        paragraph2="Your journey into sea-centric luxury begins now – reserve your Poseidon Yacht for an unforgettable maritime odyssey."
      />
    <Footer/>
    <WhatsLink/>
  </div>);
};

export default page;
