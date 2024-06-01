import React from "react";
import Link from "next/link";
const LandingContact = () => {
  return (
    <div className="contact-container">
      <div className="landing-contact">
        <h1>Contact Us</h1>
        <h5>
          <Link href="/">Home</Link> <span>»</span> Contact Us
        </h5>
      </div>
    </div>
  );
};

export default LandingContact;
