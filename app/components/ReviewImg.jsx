import React from "react";
import Image from "next/image";
const ReviewImg = (props) => {
  return (
    <div className={`review ${props.id}`}>
      <Image src={props.img} width={40} height={40} alt="profile image"/>
      <p>{props.comment}</p>
      <span>{props.name}</span>
    </div>
  );
};

export default ReviewImg;
