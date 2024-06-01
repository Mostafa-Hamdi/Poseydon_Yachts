import React from "react";
import Select from "../components/Select";
import Header from "../components/Header";
import Footer from "../components/Footer";
import LandingAbout from "./LandingAbout";
import AboutText from "./AboutText";
import Experience from "./Experience";
import WhatsLink from "../components/WhatsLink";
const page = () => {
  return (
    <div className="about-page">
      <Header/>
      <LandingAbout/>
      <AboutText/>
      <Experience/>
      <Select
        linkTrue={true}
        link="/contact"
        linkName="Contact Us Now!"
        name="set-sail"
        span="Set Sail With Us"
        heading1="Discover The Ultimate Yachting Experience Today!"
        heading2=""
        paragraph="Dive into the ultimate yachting experience today, where each moment on the open sea is a celebration of opulence and extraordinary memories waiting to be made."
        paragraph2="Your journey into sea-centric luxury begins now – reserve your Poseidon Yacht for an unforgettable maritime odyssey."
      />
      <Footer/>
      <WhatsLink/>
    </div>
  );
};

export default page;
