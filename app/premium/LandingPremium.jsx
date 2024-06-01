import Link from "next/link";
import React from "react";

const LandingPremium = () => {
  return (
    <div className="landing-premium">
      <div className="text">
        <h1>Premium</h1>
        <p>
          <strong>Enhanced comfort, modern features</strong>
        </p>
        <span>650 – 10000 AED/hour</span>
        <Link href="/">Home</Link>
      </div>
    </div>
  );
};

export default LandingPremium;
