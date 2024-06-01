import React from "react";
import Link from "next/link";
const LandingSection = () => {
  return (
    <div className="landing">
      <div className="overlay"></div>
      <div className="space"></div>
      <div className="landing-container text-white">
        <h1 className="heading">
          Where Luxury Meets <br />
          Endless Horizons.
        </h1>
        <p className="paragragh">
          Join us as we redefine the intersection of luxury and limitless
          vistas, creating an atmosphere that sets the stage for an
          extraordinary maritime experience.
        </p>
        <Link href="/contact">Book Now</Link>
      </div>
    </div>
  );
};

export default LandingSection;
