"use client";

import React from "react";

import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/solid";

async function handleSubmit(event) {
  event.preventDefault();

  const data = {
    name: String(event.target.name.value),
    email: String(event.target.email.value),
    message: String(event.target.message.value),
  };

  var nullFields = [];

  if (data.name === "") {
    nullFields.push("name");
  }

  if (data.email === "") {
    nullFields.push("email");
  }

  if (data.message === "") {
    nullFields.push("name");
  }

  if (nullFields.length > 0) {
    setErrorMessage("Please ensure all fields are filled out.");
    return;
  }

  if(!validateEmail(data.email)){
    setErrorMessage("Please enter a valid email address.");
    return;
  }

  const response = await fetch("/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (response.ok) {
    console.log("Message sent successfully");
    reset();
  } else {
    //Clear out form
    console.log("Error sending message");
  }
}

function reset() {
  var contactUs = document.getElementById("contact-us");
  var form = contactUs.getElementsByClassName("form")[0];
  form.reset();
  contactUs.getElementsByClassName("error")[0].innerHTML = "Your message has been sent successfully.";
}

function setErrorMessage(contents) {
  var contactUs = document.getElementById("contact-us");
  contactUs.getElementsByClassName("error")[0].innerHTML = contents;
}

function validateEmail(mail) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
    return true;
  }
  alert("You have entered an invalid email address!");
  return false;
}

export default class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.long = props.long;
  }

  render() {
    return (
      <div id="contact-us">
        <div class="combined-heading">
          <h1>We would love to hear from you.</h1>
          <p>Have any queries? Don't hestitate to get in touch and we'll be more than happy to help.</p>
          <div>
            <p>00000 000000</p>
            <p>contact@pixelite.digital</p>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="form">
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              autoComplete="off"
              id="name"
              minLength={3}
              maxLength={100}
            ></input>
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              autoComplete="off"
              id="email"
              minLength={5}
              maxLength={70}
            ></input>
          </div>
          <div>
            <label htmlFor="email">What can we help you with?</label>
            <textarea
              rows={4}
              name="message"
              placeholder="How can we help you?"
              minLength={10}
              maxLength={1000}
            />
          </div>

          <button className="button" type="submit">
            Send Message
          </button>
          <p className="error"></p>
        </form>
      </div>
    );
  }
}
