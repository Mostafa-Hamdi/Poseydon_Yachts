import React from "react";
import Link from "next/link";
const Select = (props) => {
  return (
    <div className={`selection-text ${props.name}`}>
      <div className="container22">
        <span>{props.span}</span>
        <h1>
          {props.heading1} <br />
          {props.heading2}
        </h1>
        <p>
          {props.paragraph}
          <br />
          {props.paragraph2}
          <br/>
          {props.paragraph3}
        </p>
        <Link
          href={`${props.link}`}
          className={`${props.linkTrue ? "d-block" : "d-none"}`}
        >
          {props.linkName}
        </Link>
      </div>
    </div>
  );
};

export default Select;
