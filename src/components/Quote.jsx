"use client";

import React from "react";

import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/solid";

async function handleSubmit(event, quote) {
  event.preventDefault();

  const data = {
    name: String(event.target.name.value),
    email: String(event.target.email.value),
  };

  console.log("Test quote is " + quote);
  return true;



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

export default class Quote extends React.Component {
  constructor(props) {
    super(props);
    this.long = props.long;
  }

  render() {
    return (
      <div id="contact-us" class="social-quote">

          <h1><span class="pixelite-blue">We're almost there</span></h1>
          <p>We just need your contact information so we can get back to you on your quote.</p>
        <form onSubmit={(event) => handleSubmit(event, props.quote)} className="form">
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


          <button className="button" type="submit">
            Send us your quote
          </button>
          <p className="error"></p>
        </form>
      </div>
    );
  }
}
