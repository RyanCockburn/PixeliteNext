"use client";

import React, { ReactDOM, useEffect, useState } from "react";
import RangeSlider from "./RangeSlider";

import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/solid";

const platforms = [
  {
    name: "Facebook",
    price: 45,
    posts: 4,
    stories: 3
  },
  {
    name: "Instagram",
    price: 20,
    posts: 4,
    stories: 3
  },
  {
    name: "TikTok",
    price: 35,
    posts: 3,
    stories: 3
  },
  {
    name: "Twitter",
    price: 20,
    posts: 4,
    stories: 0
  },
  {
    name: "YouTube",
    price: 45,
    posts: 4,
    stories: 0
  },
]

const SocialMediaQuote = () => {
  const [selectedSocials, setSelectedSocials] = useState([]);

  const addSelectedSocial = (social) => {
    setSelectedSocials((selectedSocials) => {
      return [...selectedSocials, social];
    })
  }

  return(
    <div id="social-media-quote">
      {
        platforms.map((platform) => {
          return(
            <div>
              <input type="checkbox" id={platform}/>
              <p>{platform}</p>
            </div>
          )
        })
      }
      
    </div>
  )
}