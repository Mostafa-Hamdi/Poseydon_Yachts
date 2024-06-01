import React from "react";
import Image from "next/image";
import ContactForm from "./ContactForm";
import {
  envelope,
  location,
  phone,
  facebook,
  instagram,
  logo,
  tiktok,
} from "../assets";

import Link from "next/link";
const Footer = () => {
  return (
    <footer className="p-relative text-white">
      <ContactForm />
      <div className="flex-container">
        <div className="box1">
          <Image src={logo} alt=""/>
          <p>
            Committed to excellence, Poseidon Yachts redefines maritime luxury,
            inviting you to celebrate sophistication on every wave
          </p>
        </div>
        <div className="box2">
          <h5>Explore</h5>
          <ul className="explore">
            <Link href="/about">
              <li>About Us</li>
            </Link>
            <Link href="/contact">
              <li>Contact Us</li>
            </Link>
            <Link href="/services">
              <li>Service(s)</li>
            </Link>
            <Link href="/yachts">
              <li>Yachts</li>
            </Link>
            <Link href="/faq">
              <li>FAQ</li>
            </Link>
          </ul>
        </div>
        <div className="box22">
          <div>
            <h5>Explore</h5>
            <ul className="explore2">
            <Link href="/about">
              <li><span>About Us</span></li>
            </Link>
            <Link href="/contact">
              <li><span>Contact Us</span></li>
            </Link>
            <Link href="/faq">
              <li><span>FAQ</span></li>
            </Link>
            </ul>
          </div>
          <ul className="two-links">
          <Link href="/services">
              <li><span>Service(s)</span></li>
            </Link>
            <Link href="/yachts">
              <li><span>Yachts</span></li>
            </Link>
          </ul>
        </div>
        <div>
          <div className="box3">
            <h5>Contact Us</h5>
            <div className="social">
              <div className="social-icon">
                <Image src={location} alt=""/>
              </div>
              <span>Dubai Marina, Dubai, United Arab Emirates</span>
            </div>
            <div className="social">
              <Link href="mailto:Booking@poseidonyachtsdubai.com">
                <div className="social-icon">
                  <Image src={envelope} alt=""/>
                </div>
                <span>booking@Poseidonyachtsdubai.com</span>
              </Link>
            </div>
            <div className="social">
              <Link href="tel:+971%20501%20489%20802s">
              <div className="social-icon">
                <Image src={phone} alt=""/>
              </div>
              <span>+971 501 489 802</span>
              </Link>
            </div>
          </div>
          <div className="all-social-icons">
              <Link href="https://www.facebook.com/poseidon.yachts.dubai/">
            <div className="social-media-icon">
                <Image src={facebook} alt=""/>
            </div>
              </Link>
              <br />
            <Link href="http://instagram.com/poseidonyachtsdubai">
            <div className="social-media-icon">
                <Image src={instagram} alt=""/>
            </div>
            </Link>
            <br />
            <Link href="http://www.tiktok.com/@poseidon.yachts.dubai">
            <div className="social-media-icon">
                <Image src={tiktok} alt=""/>
            </div>
              </Link>
          </div>
        </div>
      </div>
      <div className="bottom">
        <p>Copyright 2023 © All Right Reserved Design by A.A.sloutions</p>
      </div>
      <div className="whats-icon">
        <span></span>
      </div>
    </footer>
  );
};

export default Footer;
