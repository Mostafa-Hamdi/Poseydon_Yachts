import React from "react";
import Link from "next/link";
const LandingAbout = () => {
  return (
    <div className="contact-container">
      <div className="landing-contact">
        <h1>About Us</h1>
        <h5>
          <Link href="/">Home</Link> <span>»</span> About Us
        </h5>
      </div>
    </div>
  );
};

export default LandingAbout;
