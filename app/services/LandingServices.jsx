import React from "react";
import Link from "next/link";
const LandingServices = () => {
  return (
    <div className="contact-container">
      <div className="landing-contact">
        <h1>Services</h1>
        <h5>
          <Link href="/">Home</Link> <span>»</span> Services
        </h5>
      </div>
    </div>
  );
};

export default LandingServices;
