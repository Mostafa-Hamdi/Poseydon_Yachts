import React from "react";
import Link from "next/link";
const LandingYachts = () => {
  return (
    <div className="contact-container">
      <div className="landing-contact landing-yachts">
        <h1>Yachts</h1>
        <h5>
          <Link href="/">Home</Link> <span>»</span> Yachts
        </h5>
      </div>
    </div>
  );
};

export default LandingYachts;
