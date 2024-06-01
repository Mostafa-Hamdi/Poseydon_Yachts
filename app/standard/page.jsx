import React from "react";
import Header from "../components/Header";
import Select from "../components/Select";
import Footer from "../components/Footer";
import LandingStandard from "./LandingStandard";
import SelectYachtStandard from "./SelectYacht";
import WhatsLink from "../components/WhatsLink";
const page = () => {
  return (
    <div className="standard-page">
      <Header />
      <LandingStandard />
      <Select
        linkTrue={false}
        name="discover"
        span="Select Your Yacht"
        heading1="Discover the Perfect Yacht, Tailored to"
        heading2="Your Unforgettable Journey."
      />
      <SelectYachtStandard/>
      <Select
        linkTrue={true}
        link="/contact"
        linkName="Contact Us Now !"
        name="set-sail"
        span="Set Sail With Us"
        heading1="Discover The Ultimate Yachting Experience Today!"
        heading2=""
        paragraph="Dive into the ultimate yachting experience today, where each moment on the open sea is a"
        paragraph2="celebration of opulence and extraordinary memories waiting to be made."
        paragraph3="Your journey into sea-centric luxury begins now – reserve your Poseidon Yacht for an unforgettable maritime odyssey."
      />
      <Footer />
      <WhatsLink/>
    </div>
  );
};

export default page;
