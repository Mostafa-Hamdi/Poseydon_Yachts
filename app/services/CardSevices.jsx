import React from "react";
import Link from "next/link";
const CardServices = (props)=> {
    return (
        <div className={`card ${props.name}`}>
            <div className="text">
                <h3>{props.heading}</h3>
                <p>{props.description}</p>
                <Link href={`${props.href}`}>Download Pdf</Link>
            </div>
        </div>
    )
}
export default CardServices