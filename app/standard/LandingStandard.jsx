import Link from "next/link";
import React from "react";

const LandingStandard = () => {
  return (
    <div className="landing-standard">
      <div className="text">
        <h1>Standard</h1>
        <p>
          <strong>Basic amenities, functional design </strong>
        </p>
        <span>550 – 2500 AED /hour </span>
        <Link href="/">Home</Link>
      </div>
    </div>
  );
};

export default LandingStandard;
