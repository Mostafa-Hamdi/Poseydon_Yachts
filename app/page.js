// import { Card } from "@mui/material";
import LandingSection from "./components/LandingSection";
import Select from "./components/Select";
import Cards from "./components/Cards";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ReviewSwiper from "./components/ReviewSwiper";
import SelectForHome from "./components/SelectForHome";
import WhatsLink from "./components/WhatsLink";
// import Comments from "./components/comments";
export default function Home() {
  return (
    <div>
      <Header />
      <LandingSection />
      <Select
        linkTrue={false}
        name="plan"
        span="Select Your Yacht"
        heading1="Plan your Next trip"
        heading2="For Unforgettable Journey."
        paragraph="Prepare for your upcoming adventure with careful consideration for an unforgettable journey. At Poseidon Yachts, we encourage you to meticulously plan your next trip, ensuring every detail contributes to an experience that lingers in your memories."
      />
      {/* <Comments /> */}
      <Cards />
      <Select
        linkTrue={false}
        name="discover"
        span="Select Your Yacht"
        heading1="Discover the Perfect Yacht, Tailored to"
        heading2="Your Unforgettable Journey."
        paragraph="With attention to detail and a commitment to excellence, our fleet is ready to transform your dreams into a reality, ensuring that each moment at sea is nothing short of extraordinary. Your perfect yacht, your unforgettable journey – find it with Poseidon Yachts."
      />
      <SelectForHome/>
      <div className={`selection-text skipper`}>
      <div className="container22">
        <span>Our Skipper</span>
        <h1>
        Our Client Reviews
        </h1>
        <h2>Sailing Together, United in<br/> Expertise</h2>
        <p>
        United in a shared passion and unparalleled expertise. Let Poseidon Yachts be your compass to extraordinary seafaring moments."
        </p>
      </div>
    </div>
      <ReviewSwiper/>
      <Select
        linkTrue={true}
        link="/contact"
        linkName="Contact Us Now!"
        name="set-sail"
        span="Set Sail With Us"
        heading1="Discover The Ultimate Yachting Experience Today!"
        heading2=""
        paragraph="Dive into the ultimate yachting experience today, where each moment on the open sea is a celebration of opulence and extraordinary memories waiting to be made."
        paragraph2="Your journey into sea-centric luxury begins now – reserve your Poseidon Yacht for an unforgettable maritime odyssey."
      />
      <Footer />
      <WhatsLink/>
    </div>
  );
}
