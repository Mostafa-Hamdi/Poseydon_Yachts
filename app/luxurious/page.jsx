import React from "react";
import Header from "../components/Header";
import Select from "../components/Select";
import Footer from "../components/Footer";
import LandingLuxurious from "./LandingLuxurious"; 
import SelectForLuxurious from "./SelectForLuxurious";
import WhatsLink from "../components/WhatsLink";
const page = () => {
  return (
    <div className="luxurious-page">
      <Header />
      <LandingLuxurious />
      <Select
        linkTrue={false}
        name="discover"
        span="Select Your Yacht"
        heading1="Discover the Perfect Yacht, Tailored to"
        heading2="Your Unforgettable Journey."
        paragraph="With attention to detail and a commitment to excellence, our fleet is ready to transform your dreams into a reality, ensuring that each moment at sea is nothing short of extraordinary. Your perfect yacht, your unforgettable journey – find it with Poseidon Yachts."
      />
      <SelectForLuxurious />
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
      <Footer />
      <WhatsLink/>
    </div>
  );
};

export default page;