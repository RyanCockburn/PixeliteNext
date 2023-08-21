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
        <img src="/assets/clients/Vorex_Services-Logo.png" />
      </div>
      <section className="pixelite-section left reveal">
        <div>
          <h1>
            <span class="pixelite-blue">Vorex Services</span>
          </h1>
          <p>
            Vorex Services is a digital company providing services to gaming
            communities. Although located in the United States, they offer their
            services on an international scale to hundreds of customers at any
            moment.
            <br />
            <br />
            We've worked on their project-{" "}
            <a href="https://minecadia.com" target="_blank">
              'Minecadia'
            </a>
            - since it first released, creating engaging graphics to promote new
            products and releases.
          </p>
        </div>
        <img className="left" src="/assets/clients/Vorex_Services.png" />
      </section>
      <div class="combined-heading">
        <h1>Knowledge is power</h1>
        <p>
          With Vorex Services being an international, digital company, our
          experience with the company has helped increased the capabilities of
          Pixelite. Here's how:
        </p>
      </div>
      <div id="why-list">
        <div>
          <img src="/assets/icons/social-circle.svg" />
          <h2>
            Target<span className="pixelite-blue"> Audience</span>
          </h2>
          <p>
            Compared to other clients of Pixelite's, Vorex has a vastly
            different target audience. This helped us escape our comfort zone,
            and gain a great understanding of what online audiences value in the
            content they consume.
          </p>
        </div>
        <div>
          <img src="/assets/icons/revenue-increase.svg" />
          <h2>Growth</h2>
          <p>
            As Vorex have expanded, the services we provide have changed
            accordingly. We've seen how important it is for a business,
            especially in this space, to adapt to trends and for their content
            to reflect this.
          </p>
        </div>

        <div>
          <img src="/assets/icons/increased-visibility.svg" />
          <h2>Remote Communication</h2>
          <p>
            For us, Vorex highlighted the power of technology when it comes to
            working remotely. Varying timezones have further helped us develop
            our strategies to ensure we can meet all deadlines.
          </p>
        </div>
      </div>
      <div class="combined-heading">
        <h1>Some of our work</h1>
        <p>Here's some of the work we've produced in recent time for Vorex</p>
      </div>
      <div id="swiper-container">
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide>
            <img src="/assets/clients/Vorex/Phase3-Season3.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/assets/clients/Vorex/Phase3-Season1.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/assets/clients/Vorex/SOTW-Warning-1Hour.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/assets/clients/Vorex/galaxy-cloak-5.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/assets/clients/Vorex/new-years-crate.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/assets/clients/Vorex/Minecadia-Crypto.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/assets/clients/Vorex/Valentines-Draft.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/assets/clients/Vorex/Valentines-Sale.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/assets/clients/Vorex/Halloween-Banner.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/assets/clients/Vorex/Minecadia-Banner.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/assets/clients/Vorex/Minecadia-Logo-Twitter-Size.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/assets/clients/Vorex/Phase2-Finale.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/assets/clients/Vorex/Christmas-Release.png" />
          </SwiperSlide>
        </Swiper>
      </div>
      <section className="pixelite-section left reveal">
          <div>
            <h1>Importance of <span class="pixelite-blue">great graphics</span></h1>
            <p>
              By investing in graphics, Vorex Services have increased the quantity of products they sell.
              <br/><br/>
              Accompanying products with great graphic design subconsciousouly encourages customers to purchase. They associate
              great graphic design with a great product.
              <br/><br/>
              Don't underestimate the importance of graphic design to the growth of your business.
            </p>

          </div>
          <img src="/assets/icons/graphics.svg"></img>
        </section>
      <ContactForm/>
    </div>
  );

  var meta = {
    url: "/vorex-services",
    description:
      "Pixelite Digital has helped Vorex Services in the provision of graphic design. Great graphics have helped them sell more products, and increased their success.",
    title: "Vorex Services",
  };

  return (
    <div>
      <PixelitePage
        title="Vorex Services"
        meta={meta}
        page={content}
        desktopHeader={
          <>
            <span class="pixelite-white">We've helped</span> Vorex Services
            <br />
            <span class="pixelite-white">become</span> visually stunning
          </>
        }
        mobileHeader={
          <>
            <span class="pixelite-white">We've helped</span> Vorex Services
            <br />
            <span class="pixelite-white">become</span> visually stunning
          </>
        }
        desktopSubheader={<>And we can help you, too.</>}
        mobileSubheader={<>And we can help you, too.</>}
      ></PixelitePage>
    </div>
  );
};

export default About;
