import React from "react";
import { logo } from "../assets";
// import Navbar from "./Navbar";
import Link from "next/link";
import Image from "next/image";
import Navbar from "./Navbar";
// import { logo } from "../assets";
const Header = () => {
  return (
    <header className=" d-flex flex-row">
      <div className="logo flex flex flex-column">
        <div className="mw-100 text-center">
          <div className="h-100 text-center">
            <div className="w-100">
              <Link
                className="d-inline-block"
                href={"https://poseidonyachtsdubai.com"}
              >
                <Image src={logo} alt="logo"/>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Navbar />
      <div className="main-button w-25">
        <div className="mw-100 h-100">
          <div className="button-container text-start">
            <Link href="/contact" className="text-white text-center">
              <span>Book Now</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
