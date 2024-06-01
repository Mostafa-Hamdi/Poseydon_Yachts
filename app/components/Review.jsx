import React from "react";
import Image from "next/image";
const Review = (props) => {
  return (
    <div className={`review ${props.id}`}>
      <p>{props.comment}</p>
      <span>{props.name}</span>
    </div>
  );
};

export default Review;
