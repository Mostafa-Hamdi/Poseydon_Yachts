import Link from "next/link";
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import WhatsLink from "../components/WhatsLink";

const page = () => {
  return (
    <div className="wishlist-page">
      <Header />
      <div className="landing-wishlist">
        <div className="up-space"></div>
        <div className="text-container">
          <div className="text-section">
            <h1>Yachts I Love</h1>
            <p>
              You should add items to wishlist
              <Link href="/yachts">View Yachts</Link>
            </p>
          </div>
        </div>
      </div>
      <div className="bottom-space"></div>
      <Footer />
      <WhatsLink/>
    </div>
  );
};

export default page;
