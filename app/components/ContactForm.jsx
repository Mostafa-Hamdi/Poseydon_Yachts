"use client";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
const ContactForm = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div className="contact-form">
      <h1>Leave a Message</h1>
      <p>
        Your email address will not be published. Required fields are marked *
      </p>
      <form action="">
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" name="Name" required id="name"/>
        </div>
        <div>
          <label htmlFor="mail">Email</label>
          <input type="email" name="Mail" id="mail" required />
        </div>
        <div>
          <label htmlFor="whats">WhatsApp</label>
          <input type="text" name="Whats" id="whats" required />
        </div>
        <div>
          <label>Date of trip</label>
          <input type="date" />
        </div>
        <div>
          <label htmlFor="time">Time prefrence</label>
          <input
            type="text"
            name="Time"
            placeholder="Example from 6am to 5"
            id="time"
            required
          />
        </div>
        <div>
          <label htmlFor="comment">Comments</label>
          <textarea type="text" id="comment" name="Time" required />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;
