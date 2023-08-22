import React from "react";

import ContactForm from "/src/components/ContactForm";

import {
  AcademicCapIcon,
  HandThumbUpIcon,
  HeartIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/outline";
import Lottie from "lottie-react";
import Link from "next/link";
import { Autoplay, EffectFlip, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import PixelitePage from "./PixelitePage";
import BespokeWebsite from "/public/assets/BespokeWebsite.json";
import DomainGraphic from "/public/assets/Domain-Graphic.json";
import SEO_Optimisation from "/public/assets/SEO_Optimisation.json";
import SocialMedia from "/public/assets/SocialMedia.json";
import ValuesIcon from "/public/assets/ValuesIcon.json";
import pdIso from "/public/assets/pd-iso.json";
import pixeliteLocation from "/public/assets/pixelite_location.json";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function optionExpand(expandable){
  const target = expandable.target.parentNode.parentNode;
  const paragraph = target.getElementsByTagName("p")[0]
  const hiddenParagraph = paragraph.getElementsByTagName("p")[0]
  if(hiddenParagraph.classList.contains("active")){
    expandable.target.textContent = "Learn less about this feature →"
  }else{
    expandable.target.textContent = "Learn more about this feature →"
  }
  hiddenParagraph.classList.toggle("active")
  

}

const About = () => {
  const content = (
    <div>
      <div id="package-swiper">
        <Swiper
          spaceBetween={30}
          effect={"flip"}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <h1>
              Are you a business wanting to <span class="pixelite-blue">expand further online?</span>
            </h1>
          </SwiperSlide>
          <SwiperSlide>
          <h1>
              ... maybe you already have a website, <br/>but it's <span class="pixelite-blue">not quite doing the trick</span>.
            </h1>
          </SwiperSlide>
          <SwiperSlide>
            <h1>
              Look no further. <br/>Our <span class="pixelite-blue">Advanced package</span> has your <span class="pixelite-blue">business sorted.</span>
            </h1>
          </SwiperSlide>
        </Swiper>
      </div>
      <div class="combined-heading">
        <h1>What's included?</h1>
        <p>
          Everything your small business could ever need to start online is
          included in this package. We've left no stone unturned when deciding
          what should be included.
        </p>
      </div>
      <div id="features-container">
        <section className="pixelite-section right reveal">
          <Lottie
            className="lottie right desktop-show"
            animationData={BespokeWebsite}
          />
          <div>
            <h1>Everything in the <span class="pixelite-blue">Basic package</span></h1>

            <p>
              All of the contents of our <span class="pixelite-blue">Basic Package</span> are included in our  
              <span class="pixelite-blue"> Advanced Package</span>. 
              <br/><br/>
              We believe that all websites share the same strong foundation, and so we believe all of the contents of the
              <span class="pixelite-blue"> Basic Package</span> are essential for every website.
              <br/><br/>
              <a href="/web-design/basic" target="_blank"><button class="button">See our Basic Package in full</button></a>
            </p>

          </div>
          <Lottie
            className="lottie right stats-smallscreen"
            animationData={BespokeWebsite}
          />
        </section>
        <section className="pixelite-section left reveal">
          <div>
            <h1>Optimised file formats</h1>
            <p>
              Did you know 53% of visitors leave if a website doesn't load quickly? This means you could lose 1/2 customers if your website
              lacks the correct optimisation. Don't lose out on customers, and revenue, by having a slow website.
              <br/><br/>
              We'll ensure that all images and content on your website are optimised to load in the quickest time possible, so you can be sure
              you're retaining as many customers as possible.
            </p>

          </div>
          <img src="/assets/icons/Optimised-Files.svg" alt="Pixelite's advanced package offers optimised image formats, so you can be sure your website loads in the fastest time possible"></img>
        </section>
        <section className="pixelite-section right reveal">
        <img
            className="right desktop-show"
            src="/assets/icons/code.svg"
          />
          <div>
            <h1>Fluent JavaScript and CSS</h1>
            <p>
              We thoroughly believe that the backbone of any successful website is a strong codebase. That's why our team of developers
              will ensure that your website's codebase is optimised, quick and designed for the task.
              <br/><br/>
              Taking shortcuts on a strong codebase can lead to problems down the line, so we believe in doing things right from the get go.
            </p>
 
          </div>

          <img
            className="right stats-smallscreen"
            src="/assets/icons/code.svg"
          />
        </section>
        <section className="pixelite-section left reveal">
          <div>
            <h1>Advanced SEO Options</h1>
            <p>
              You're wanting to level up your business online, and a great way to do this is by increasing your ranking
              in search engines.
              <br/><br/>
              We'll target industry-specific keywords, and ensure your business stands out above the competition by improving your SEO.
            </p>
          </div>
          <Lottie
            className="lottie left"
            animationData={SEO_Optimisation}
          />
        </section>

      </div>



      
      <ContactForm/>
    </div>
  );

  var meta = {
    url: "/web-design/advanced",
    description:
      "Pixelite Digital's Advanced Website Package. Great for businesses wanting to expand further online, and to reach more customers.",
    title: "Advanced",
  };

  return (
    <div>
      <PixelitePage
        title="Advanced Package"
        meta={meta}
        page={content}
        desktopHeader={
          <>
            <span class="pixelite-white">Our</span> Advanced Package
          </>
        }
        mobileHeader={
          <>
            <span class="pixelite-white">Our</span> Advanced Package
          </>
        }
        desktopSubheader={
          <>
            Great for businesses wanting to take the next big step in <br/> expanding their business, at an affordable price point.
          </>
        }
        mobileSubheader={
          <>
            Great for businesses wanting to take the next big step in <br/> expanding their business, at an affordable price point.
          </>
        }
      ></PixelitePage>
    </div>
  );
};

export default About;
