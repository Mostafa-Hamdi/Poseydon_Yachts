import React from "react";
import CardModel from "./Card";
// import { yacht1 } from "../assets";
const Cards = () => {
  return (
    <div className="cards-container">
      <CardModel
        name="one"
        // img="https://poseidonyachtsdubai.com/wp-content/uploads/2024/02/SAFFURIYA-0002-_problembo.com_-min-scaled.webp"
        alt="yacht1"
        text="Luxury"
      />
      <CardModel
        name="two"
        // img="https://poseidonyachtsdubai.com/wp-content/uploads/2024/02/lui-peng-8NxTrV6i4WQ-unsplash-1.png.webp"
        alt="yacht2"
        text="Premium"
      />
      <CardModel
        name="three"
        // img="https://poseidonyachtsdubai.com/wp-content/uploads/2024/02/lui-peng-8NxTrV6i4WQ-unsplash-2.png.webp"
        alt="yacht3"
        text="Standard"
      />
    </div>
  );
};

export default Cards;
