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

function optionExpand(expandable) {
  const target = expandable.target.parentNode.parentNode;
  const paragraph = target.getElementsByTagName("p")[0];
  const hiddenParagraph = paragraph.getElementsByTagName("p")[0];
  if (hiddenParagraph.classList.contains("active")) {
    expandable.target.textContent = "Learn less about this feature →";
  } else {
    expandable.target.textContent = "Learn more about this feature →";
  }
  hiddenParagraph.classList.toggle("active");
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
            <h1>Do you want to <span class="pixelite-blue">level up your business?</span></h1>
          </SwiperSlide>
          <SwiperSlide>
            <h1>
              Do you want to <span class="pixelite-blue">increase your revenue
              <br /> through digital streams?</span>
            </h1>
          </SwiperSlide>
          <SwiperSlide>
            <h1>Our <span class="pixelite-blue">Premium Package</span> allows you to<br/> do this effectively.</h1>
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
            <h1>
              Everything in the <span class="pixelite-blue">Advanced package</span>
            </h1>

            <p>
              All of the contents of our{" "}
              <span class="pixelite-blue">Advanced Package</span> are included in
              our
              <span class="pixelite-blue"> Premium Package</span>.
              <br />
              <br />
              We believe that all websites share the same strong foundation, and
              so we believe all of the contents of the
              <span class="pixelite-blue"> Advanced Package</span> are essential
              for every website.
              <br />
              <br />
              <a href="/web-design/advanced" target="_blank">
                <button class="button">See our Advanced Package in full</button>
              </a>
            </p>
          </div>
          <Lottie
            className="lottie right stats-smallscreen"
            animationData={BespokeWebsite}
          />
        </section>
        <section className="pixelite-section left reveal">
          <div>
            <h1>Optimised, industry-targeted, descriptions and titles</h1>
            <p>
              We'll boost your website's SEO by researching, weighing-up, and testing keywords that best suit your business.
              <br/><br/>
              This will increase your business' organic CTR (click-through-rate), meaning you can be confident that the potential customers
              you reach will be more likely to purchase from your business.
            </p>
          </div>
          <img
            src="/assets/Promotional-Graphic.png"
            alt="Pixelite's social media package includes an advertisement post so you can get your business out there."
          ></img>
        </section>
        <section className="pixelite-section right reveal">
          <img
            className="right desktop-show"
            src="/assets/icons/Google-Business.svg"
          />
          <div>
            <h1>Optimise your business on Google</h1>
            <p>
              When customers search your business on Google, it's vital they're presented with your business' information at a glance. We can help you optimise the information
              so customers are more likely to engage with your business.
              <br/><br/>
              Struggling to setup your business on Google? No problem at all. We can help you setup your business, so your business can start reaping the benefits of giving your business
              a presence on Google.
            </p>
          </div>

          <img
            className="right stats-smallscreen"
            src="/assets/icons/Google-Business.svg"
          />
        </section>
        <section className="pixelite-section left reveal">
          <div>
            <h1>Premium SEO Options</h1>
            <p>
              We'll implement thorough SEO strategies that
              <ul>
                <li>Encourage shareability</li>
                <li>Increase your reach to potential customers</li>
                <li>Help you rank higher on Google</li>
                <li>... and more</li>
              </ul>
              This is our most thorough form of SEO, and will ensure your business has the best chance
              online. Focus on the core aspects of your business, and leave the discovery to us. 
            </p>
          </div>
          <Lottie className="lottie left" animationData={SEO_Optimisation} />
        </section>
      </div>

      <ContactForm />
    </div>
  );

  var meta = {
    url: "/web-design/premium",
    description:
      "Pixelite Digital's Premium Website Package. An amazing opportunity to increase your business' revenue by expanding online, and reaching new audiences..",
    title: "Premium",
  };

  return (
    <div>
      <PixelitePage
        title="Premium Package"
        meta={meta}
        page={content}
        desktopHeader={
          <>
            <span class="pixelite-white">Our</span> Premium Package
          </>
        }
        mobileHeader={
          <>
            <span class="pixelite-white">Our</span> Premium Package
          </>
        }
        desktopSubheader={
          <>
            The go-to package for any business ready to take the online-space by
            storm,
            <br />
            and to increase their revenue through digital streams
          </>
        }
        mobileSubheader={
          <>
            The go-to package for any business ready to take the online-space by
            storm,
            <br />
            and to increase their revenue through digital streams
          </>
        }
      ></PixelitePage>
    </div>
  );
};

export default About;
