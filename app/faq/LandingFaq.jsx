import React from "react";
import Link from "next/link";
const LandingFaq = () => {
  return (
    <div className="contact-container">
      <div className="landing-contact">
        <h1>FAQ</h1>
        <h5>
          <Link href="/">Home</Link> <span>»</span> FAQ
        </h5>
      </div>
    </div>
  );
};

export default LandingFaq;
