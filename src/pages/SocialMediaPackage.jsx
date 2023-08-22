import React from "react";

import Section from "../components/Section";

import Lottie from "lottie-react";
import Link from "next/link";
import ContactForm from "../components/ContactForm";
import FeatureCard from "../components/FeatureCard";
import PixelitePage from "./PixelitePage";
import BespokeWebsite from "/public/assets/BespokeWebsite.json";
import DomainGraphic from "/public/assets/Domain-Graphic.json";
import SEO_Optimisation from "/public/assets/SEO_Optimisation.json";
import SocialMedia from "/public/assets/SocialMedia.json";

import {
  CurrencyPoundIcon,
  GlobeAltIcon,
  MagnifyingGlassIcon,
  MapIcon,
  PresentationChartBarIcon,
  PresentationChartLineIcon,
  RocketLaunchIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

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
            animationData={SocialMedia}
          />
          <div>
            <h1>Social Media Setup</h1>

            <p>
              We'll help you setup your social media. From profile pictures to
              business information, we cover everything so you can be sure your
              socials are top notch.
              <br />
              <br />
              This is a great, essential first step for any business wanting to
              succeed on social media.
              <p class="hidden active">
                This option is limited to 2 social platforms, and a £5 fee will
                be applied for every additonal social media platform you'd like
                setting up.
              </p>
            </p>
            <div class="learn-more" onClick={optionExpand}>
              <p>Learn more about this feature →</p>
            </div>
          </div>
          <Lottie
            className="lottie right stats-smallscreen"
            animationData={SocialMedia}
          />
        </section>
        <section className="pixelite-section left reveal">
          <div>
            <h1>Advertisement Post</h1>
            <p>
              One of the major problems our clients face is lacking an
              eye-catching advertisement for their business. This is a
              fundamental component of any business wanting to attract customers
              online.
              <br />
              <br />
              Our team of specalists will write you an effective, bespoke
              advertisement post that'll catch the attention of potential
              customers.
              <p class="hidden active">
                If you don't require any graphics, we're more than happy to
                discuss something of equivalent value we might be able to
                provide to you! Just ask us and we're more than happy to
                discuss.
              </p>
            </p>
            <div class="learn-more" onClick={optionExpand}>
              <p>Learn more about this feature →</p>
            </div>
          </div>
          <img src="/assets/Promotional-Graphic.png" alt="Pixelite's social media package includes an advertisement post so you can get your business out there."></img>
        </section>
        <section className="pixelite-section right reveal">
        <img
            className="right desktop-show"
            src="/assets/icons/graphics.svg"
          />
          <div>
            <h1>2 Bespoke Graphics</h1>
            <p>
              Businesess often fear the price of custom, bespoke graphics. They
              fear they're too expensive, and won't see a ROI.
              <br />
              <br />
              We want to help break this stigma. We'll provide you with 2
              graphics your business can use to get its name out there.
              <p class="hidden active">
                We'll discuss the needs of your business, and create 2 graphics
                to suit these needs.
              </p>
            </p>
            <div class="learn-more" onClick={optionExpand}>
              <p>Learn more about this feature →</p>
            </div>
          </div>
          <img
            className="right stats-smallscreen"
            src="/assets/icons/graphics.svg"
          />
        </section>
        <section className="pixelite-section left reveal">
          <div>
            <h1>Comprehensive Consultation</h1>
            <p>
              Starting out is intimidating. That's why we'll write you a
              business-specific, comprehensive document of ideas and strategies
              your business can use to fully utilise social media.
              <br />
              <br />
              Even better, we offer the opportunity to discuss this document on
              a phone call, so we're both confident that we're on the same page.
            </p>
          </div>
          <img className="right" src="/assets/icons/Consultation.svg" />
        </section>
        <section className="pixelite-section right reveal">
          <img
            className="right desktop-show"
            src="/assets/icons/percent-off.svg"
          />

          <div>
            <h1>20% Discount on our Social Media Services</h1>
            <p>
              To sweeten the deal, we'll offer you a 20% discount on any of our
              social media management services. We'll post, advertise and share
              your business through social media- so you can fully focus on your
              business.
              <br />
              <br />
              For more information, see our social media management options
              here.
              <br />
              <br />
              <button className="button">
                <a href="/social-media#social-media-quotes">
                  See our social media options
                </a>
              </button>
              <p class="hidden active">
                We'll discuss the needs of your business, and create 2 graphics
                to suit these needs.
              </p>
            </p>
          </div>
          <img
            className="right stats-smallscreen"
            src="/assets/icons/percent-off.svg"
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

      <div class="combined-heading">
        <h1>Why does my business need this? </h1>
        <p></p>
      </div>
      <div id="why-list">
        <div>
          <RocketLaunchIcon className="h-24 w-24" />
          <h2>
            <span className="pixelite-blue">Initial Boost</span>
          </h2>
          <p>
            We've all been there- social media can initially seem daunting, not
            knowing where to even start. We help remove that fear, and give you
            everything you need to start.
          </p>
        </div>
        <div>
          <CurrencyPoundIcon className="h-24 w-24" />
          <h2>
            <span className="pixelite-blue">Save Money</span>
          </h2>
          <p>
            This package offers a cost-effective solution for starting social
            media. When purchasing the contents of this package separately, you
            could spend hundreds of pounds.
            <br />
            <br />
            We help your business save money, with the prospect of making more
            money.
          </p>
        </div>
        <div>
          <MapIcon className="h-24 w-24" />
          <h2>
            <span className="pixelite-blue">Expert Guidance</span>
          </h2>
          <p>
            During your consultation, you'll receive strategies that will help
            elevate your social media presence. These strategies will give you
            direction, and increase the likelihood of your social media
            succeeding.
          </p>
        </div>
      </div>
      <ContactForm />
    </div>
  );

  var meta = {
    url: "/packages/small-business",
    description:
      "Pixelite Digital's Social Media Package- the must-have package for any business wanting to succeed with social media. Starting at just £50",
    title: "Social Media Package",
  };

  return (
    <div>
      <PixelitePage
        title="Social Media Package"
        meta={meta}
        page={content}
        desktopHeader={
          <>
            <span class="pixelite-white">This package helps you start</span>
            <br />
            Social Media the right way.
          </>
        }
        mobileHeader={<>Are you a small business?</>}
        desktopSubheader={
          <>
            Starting at just £50, this package ensures your business has
            everything it needs to start growing through social media. New
            business or not, every business can benefit from this package.
          </>
        }
        mobileSubheader="Give your business a fighting chance in the digital space from just £199"
      ></PixelitePage>
    </div>
  );
};

export default About;
