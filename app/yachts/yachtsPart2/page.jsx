import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Select from "../../components/Select";
import SelectYachts from "./SelectYachts";
import LandingYachts from "../LandingYachts";
import PaginationLinks from "./PaginationLinks";
import WhatsLink from "@/app/components/WhatsLink";
const page = () => {
  return (
    <div className="yachts-page part2">
      <Header/>
      <LandingYachts/>
      <Select
        linkTrue={false}
        name="discover"
        span="Select Your Yacht"
        heading1="Discover the Perfect Yacht in Dubai, Tailored to Your Unforgettable Journey."
        paragraph="With attention to detail and a commitment to excellence, our fleet is ready to transform your dreams into a reality, ensuring that each moment at sea is nothing short of extraordinary. Your perfect yacht in Dubai, your unforgettable journey – find it with Poseidon Yachts Dubai."
      />
      <SelectYachts/>
      <PaginationLinks/>
      <Select
        linkTrue={true}
        link="/contact"
        linkName="Contact Us Now !"
        name="set-sail"
        span="Set Sail With Us"
        heading1="Discover The Ultimate Yachting Experience Today!"
        heading2=""
        paragraph=" Dive into the ultimate yachting experience today, where each moment on the open sea is a celebration of opulence and extraordinary memories waiting to be made."
        paragraph2="Your journey into sea-centric luxury begins now – reserve your Poseidon Yacht for an unforgettable maritime odyssey."
      />
      <Footer/>
      <WhatsLink/>
    </div>
  )
};

export default page;
