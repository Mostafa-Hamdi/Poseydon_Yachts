import Link from "next/link";
import React from "react";

const LandingLuxurious = () => {
  return (
    <div className="landing-premium">
      <div className="text">
        <h1>Luxurious</h1>
        <p>
          <strong>Opulent , Lavish Interiors , Highest Tier</strong>
        </p>
        <span>2000 – 15000 AED/hour</span>
        <Link href="/">Home</Link>
      </div>
    </div>
  );
};

export default LandingLuxurious;
