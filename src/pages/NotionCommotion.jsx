import React from "react";

import Section from "../components/Section";

import {
  AcademicCapIcon,
  GlobeAltIcon,
  HandThumbUpIcon,
  HeartIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/outline";
import { default as Lottie } from "lottie-react";
import { default as Link } from "next/link";

import { default as ContactForm } from "../components/ContactForm";
import { default as FeatureCard } from "../components/FeatureCard";
import PixelitePage from "./PixelitePage";
import { default as BespokeWebsite } from "/public/assets/BespokeWebsite.json";
import { default as DomainGraphic } from "/public/assets/Domain-Graphic.json";
import { default as SEO_Optimisation } from "/public/assets/SEO_Optimisation.json";
import SocialMedia from "/public/assets/SocialMedia.json";
import ValuesIcon from "/public/assets/ValuesIcon.json";
import pdIso from "/public/assets/pd-iso.json";
import pixeliteLocation from "/public/assets/pixelite_location.json";
// import Swiper styles
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const About = () => {
  const content = (
    <div>
      <div id="vorex-banner">
        <img src="/assets/clients/Notion_Commotion-Logo.png" />
      </div>
      <section className="pixelite-section left reveal">
        <div>
          <h1>
            <span class="pixelite-blue">Notion Commotion</span>
          </h1>
          <p>
            Notion Commotion was a client we worked with to help sell their
            productivity related products on TikTok. Productivity was a new area
            for us, but we were more than happy to help.
            <br />
            <br />
            We identified niches in the productivity market, and segmented
            according to this. By doing so, we were able to achieve excellent
            results. In just 2 months, we achieved 350+ sales, and 200,000+
            video views. 
            <br/>
            <br/>
            This is proof that, by honing in on the market, we can
            help you establish an online platform to drive sales.
          </p>
        </div>
        <img className="left" src="/assets/clients/Notion_Commotion.jpg" />
      </section>
      
      <div id="notion_statistics">
          <div>
            <GlobeAltIcon className="h-24 w-24" />
            <div>
              <h2>350+</h2>
              <h3>Sales</h3>
            </div>
          </div>
          <div>
            <GlobeAltIcon className="h-24 w-24" />
            <div>
              <h2>200k+</h2>
              <h3>Video Views</h3>
            </div>
          </div>
          <div>
            <GlobeAltIcon className="h-24 w-24" />
            <div>
              <h2>11k+</h2>
              <h3>Likes</h3>
            </div>
          </div>
          <div>
            <GlobeAltIcon className="h-24 w-24" />
            <div>
              <h2>1.8k+</h2>
              <h3>Followers</h3>
            </div>
          </div>
        </div>
        
        <section id="notion-first-section" className="pixelite-section left reveal">
        <div>
          <h1>
            <span class="pixelite-blue">The power of social media</span>
          </h1>
          <p>
            Many under value the power of social media, but we believe this is an excellent case study to counter this.
            <br/><br/>
            From 0 followers, we helped an account reach thousands of people in just a few months. It's an excellent illustration
            of how times are changing, and how many business- big or small- can sell products to a vast audience if they have the right
            social media.
            <br/><br/>
            This is often an example we'll show to clients that approach us asking 'is social media worth the investment?'
          </p>
        </div>
        <Lottie className="lottie" animationData={SocialMedia} />
      </section>

      <ContactForm />
    </div>
  );

  var meta = {
    url: "/notion-commotion",
    description:
      "Pixelite Digital has helped Vorex Services in the provision of graphic design. Great graphics have helped them sell more products, and increased their success.",
    title: "Notion Commotion",
  };

  return (
    <div>
      <PixelitePage
        title="Notion Commotion"
        meta={meta}
        page={content}
        desktopHeader={
          <>
            <span class="pixelite-white">We've helped</span> Notion Commotion
            <br />
            <span class="pixelite-white">reach</span> thousands online
          </>
        }
        mobileHeader={
          <>
            <span class="pixelite-white">We've helped</span> Notion Commotion
            <br />
            <span class="pixelite-white">become</span> visually stunning
          </>
        }
        desktopSubheader={<>Through social media, we've helped the business reach thousands and <br/>sell hundreds of products.</>}
        mobileSubheader={<>Through social media, we've helped the business reach thousands and <br/>sell hundreds of products.</>}
      ></PixelitePage>
    </div>
  );
};

export default About;
