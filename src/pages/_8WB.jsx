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


const About = () => {
  const content = (
    <div>
      <blockquote id="ali-quote">
        <h1>
          Fabulous service from start to finish. Normally with business nowadays
          it can take a couple of days to even get a reply. These guys are
          active & attentive. Mega quick replies! Got my approval & look forward
          to working together in the future again. Thank you
        </h1>
        <h5>-Ali Cunningham, Owner of 8WB</h5>
      </blockquote>
      <section className="pixelite-section left reveal">
        <div>
          <h1>
            <span class="pixelite-blue">A little about 8WB</span>
          </h1>
          <p>
            8WB, ran by Ali Cunningham, is an online club dedicated to helping
            its clients achieve their dream bodies. It helps clients all around
            the world, and has an honourable history of transformations.
            <br />
            <br />
            Although already successful, Ali's ambition lead him to us- with
            hopes to grow his digital presence in the form of a website. We
            discussed and helped identify his goals, and were more than happy to
            help him in achieving them.
          </p>
        </div>
        <img className="left" src="/assets/clients/8WB.png" />
      </section>
      <div class="combined-heading">
        <h1>How we helped 8WB</h1>
      </div>
      <div id="features-container">
        <section className="pixelite-section right reveal">
          <img className="right desktop-show" src="/assets/clients/8WB-Logo-White.png"/>
          <div>
            <h1>Branding</h1>
            <p>
              8WB wanted to have a refreshed look to coincide with their increased digital presence. We decided on a sleek, 
              minimalistic logo. This logo allows for a simple look, perfect for usage on their social media, app and website.
              <br/><br/>
              We designed several versions of the logo, each for varying backgrounds.
              <br/><br/>
              It was also decided that their portfolio of transformations needed a revamp. We took on the task of reformatting testimonials, and updating them with new
              branding.

            </p>
          </div>
          <Lottie
            className="lottie right stats-smallscreen"
            animationData={SocialMedia}
          />
        </section>
        <section className="pixelite-section left reveal">
          <div>
            <h1>SEO</h1>
            <p>
              We helped optimise 8WB's searchability online, allowing them to gain clients organically as well as through other channels.
              <br/><br/>
              SEO is often misrepresented, and just used as a buzzword. We don't believe this should be the case- and when a business offers SEO options, we believe it should be done right.
              That's why we put a large focus on the searchability of 8WB.
            </p>
          </div>
          <Lottie className="lottie" animationData={SEO_Optimisation} />
        </section>
        <section className="pixelite-section right reveal">
        <img className="right desktop-show" src="/assets/Youtube-Still.jpg"/>
          <div>
            <h1>Video Editing</h1>
            <p>
              8WB had a series of videos recorded to promote their services. However, they weren't quite fit for release. Backgrounds were on show, and acted
              as a distraction. 
              <br/><br/>
              We replaced backgrounds with a professional, seamless white backdrop. This increased the professionalism of the videos significantly, and resonated 
              with the professional branding we were aiming to achieve.

            </p>
          </div>
          <Lottie
            className="lottie right stats-smallscreen"
            animationData={SocialMedia}
          />
        </section>
        <section className="pixelite-section left reveal">
          <div>
            <h1>Web Design & Development</h1>
            <p>
              We designed and developed an industry-optimised website for 8WB. Potential customers are able to see past transformations, and apply- all in the same website.
              <br/><br/>
              8WB has noticed an increase in customers since the launch of their new website.
            </p>
          </div>
          <Lottie className="lottie" animationData={BespokeWebsite} />
        </section>
        <div id="website-testimonials">
        <h1 className="combined-heading">
          <h1>The final product</h1>

        </h1>
        <Link target="_blank" href="https://www.the8wbclub.com">
          <div class="website-testimonial">
            <h1>The 8WB Club</h1>
            <div class="testimonial-link">
              <GlobeAltIcon className="h-24 w-24" />
              <p>www.the8wbclub.com</p>
            </div>
            <img src="/assets/websites/8WB.png" />
            <div class="testimonial-review">
              <p>
                Fantastic service from start to finish. Normally with business
                nowadays it can take a coupe of days to even get a reply. These
                guys are active & attentive. Mega quick replies! Got my my
                approval & look forward to working together in the future again.
                Thank you!
              </p>
              <h5>Ali Cunningham, Founder of 8WB</h5>
            </div>
          </div>
        </Link>
      </div>
      <ContactForm/>
      </div>
    </div>
  );

  var meta = {
    url: "/about",
    description:
      "About Pixelite Digital, a Digital Agency providing services in Web Design, Social Media Management and Branding",
    title: "About",
  };

  return (
    <div>
      <PixelitePage
        title="8WB"
        meta={meta}
        page={content}
        desktopHeader={
          <>
            <span class="pixelite-white">Here's how we helped</span>
            <br />
            8WB level up <span class="pixelite-white">their business</span>
          </>
        }
        mobileHeader={
          <>
            <span class="pixelite-white">Here's how we helped</span>
            <br />
            8WB level up <span class="pixelite-white">their business</span>
          </>
        }
        desktopSubheader={
          <>And how we can help you level up your business, too.</>
        }
        mobileSubheader={
          <>And how we can help you level up your business, too.</>
        }
      ></PixelitePage>
    </div>
  );
};

export default About;
