import React from "react";
import LandingContact from "./LandingContact";
import Booking from "./Booking";
import Footer from "../components/Footer";
import Header from "../components/Header";
import WhatsLink from "../components/WhatsLink";
const Page = () => {
  return (
    <div className="contact-page">
      <Header />
      <LandingContact />
      <Booking />
      <Footer />
      <WhatsLink/>
    </div>
  );
};

export default Page;
