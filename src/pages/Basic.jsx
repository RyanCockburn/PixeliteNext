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
              Wanting to{" "}
              <span class="pixelite-blue">gain a presence online?</span>
            </h1>
          </SwiperSlide>
          <SwiperSlide>
            <h1>...without breaking the bank?</h1>
          </SwiperSlide>
          <SwiperSlide>
            <h1>
              <span class="pixelite-blue">This package is for you.</span>
            </h1>
          </SwiperSlide>
        </Swiper>
      </div>
      <div class="combined-heading">
        <h1>What's included?</h1>

      </div>
      <div id="features-container">
        <section className="pixelite-section right reveal">
          <Lottie
            className="lottie right desktop-show"
            animationData={BespokeWebsite}
          />
          <div>
            <h1>Modern, fantastic looking website</h1>

            <p>
              Stand out from the competition with a modern, polished website. Don't undervalue your products and services
              by having a subpar website to sell them on.
              <br/><br/>
              Make a customer's first impression count- after all, they are important.
            </p>

          </div>
          <Lottie
            className="lottie right stats-smallscreen"
            animationData={BespokeWebsite}
          />
        </section>
        <section className="pixelite-section left reveal">
          <div>
            <h1>Mobile Friendly, responsive design</h1>
            <p>
              Too many times, we see customers approaching us complaining that their current website doesn't cater to mobile
              users. Don't let this be the case!
              <br/><br/>
              55% of all internet users use a mobile device, and so it's essential that your website is easy to view on all devices,
              including mobile. 
              <br/><br/>
              We make sure your website is responsive, so all customers- regardless of the device they use- are able to engage with your business
              flawlessly.
            </p>

          </div>
          <img src="/assets/icons/Responsive.svg" alt="Pixelite's Basic Website Package ensures your website is responsive, and works on all devices."></img>
        </section>
        <section className="pixelite-section right reveal">
        <Lottie
            className="lottie right desktop-show"
            animationData={DomainGraphic}
          />
          <div>
            <h1>FREE Domain for 1 Year</h1>
            <p>
              To sweeten the deal, we include a free 1 year domain in this package. We'll purchase it for you, set it up and transfer it- no hassle.
              <p class="hidden active">
                After the 1 year period, you'll be responsible for renewing the domain from the domain name provider. This usually costs ~£10 for a year, although prices may vary.
                <br/><br/>
                *Please note that, this feature excludes premium domains and only includes domains that are unique, and exclusive to your business.
              </p>
            </p>
            <div class="learn-more" onClick={optionExpand}>
              <p>Learn more about this feature →</p>
            </div>
          </div>

          <Lottie
            className="lottie right stats-smallscreen"
            animationData={DomainGraphic}
          />
        </section>
        <section className="pixelite-section left reveal">
          <div>
            <h1>Basic SEO Options</h1>
            <p>
              SEO is important, and so it's essential that your business' website is designed with SEO in mind.
              <br/><br/>
              Our team of experts will cover basic SEO whilst designing your website. This will increase your ranking
              in search engines, and lead to your business being discovered first.
            </p>
          </div>
          <Lottie
            className="lottie left"
            animationData={SEO_Optimisation}
          />
        </section>
        <section className="pixelite-section right reveal">
          <img
            className="right desktop-show"
            src="/assets/icons/Consultation.svg"
          />

          <div>
            <h1>Technical Support</h1>
            <p>
              We'll support you throughout the entire journey- from start to finish, and even beyond.
              <br/><br/>
              If you have any queries, our team of experts are more than happy to help.
            </p>
          </div>
          <img
            className="right stats-smallscreen"
            src="/assets/icons/Consultation.svg"
          />

        </section>
        {/* <section className="pixelite-section left reveal">
          <div>
            <h1>Ultimate guide to the digital landscape</h1>
            <p>
              Our{" "}
              <span class="pixelite-blue">
                'Ultimate guide to the digital landscape'
              </span>{" "}
              ebook is also included in this package. This product covers
              everything your business needs to know on how to capitalise
              through digital channels. Covering SEO, promoting products, and
              social media management, this is a must-have guide for any
              business wanting to succeed in the digital space.
            </p>
            <div class="learn-more">
              <p>Learn more about this feature →</p>
            </div>
          </div>
          <img src="https://pixelite.digital/assets/picture-template.png"></img>
        </section> */}
      </div>



      
      <ContactForm/>
    </div>
  );

  var meta = {
    url: "/web-design/basic",
    description:
      "Pixelite Digital's Basic Website Package. Great for small businesses, wanting to expand their business online.",
    title: "Basic",
  };

  return (
    <div>
      <PixelitePage
        title="Basic Package"
        meta={meta}
        page={content}
        desktopHeader={
          <>
            <span class="pixelite-white">Our</span> Basic Package
          </>
        }
        mobileHeader={
          <>
            <span class="pixelite-white">Our</span> Basic Package
          </>
        }
        desktopSubheader={
          <>
            Suitable for businesses with a tight budget, wanting an <br />
            excellent website at a great price.
          </>
        }
        mobileSubheader={
          <>
            Suitable for businesses with a tight budget, wanting an <br />
            excellent website at a great price.
          </>
        }
      ></PixelitePage>
    </div>
  );
};

export default About;
