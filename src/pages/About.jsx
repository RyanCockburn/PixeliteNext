import React from "react";

import Section from "../components/Section";

import Lottie from "lottie-react";
import Link from "next/link";
import PixelitePage from "./PixelitePage";
import pdIso from "/public/assets/pd-iso.json";
import pixeliteLocation from "/public/assets/pixelite_location.json";

import {
  AcademicCapIcon,
  HandThumbUpIcon,
  HeartIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/outline";


const About = () => {
  const content = (
    <div>
      <blockquote>
        <h1>We're a business that thrives on growing your business</h1>
        <h5>-Pixelite Digital</h5>
      </blockquote>
      <section className="pixelite-section leftreveal">
        <div>
          <h1>
            <span class="pixelite-blue">Who are we?</span>
          </h1>
          <p>
            At our core, we’re a team of designers, marketers and developers
            that help your business stand out from the crowd. We provide the
            means to allow your business to thrive in the digital space.
            <br />
            <br />
            We have a decisive track record in 1st class web design, graphics
            and marketing in the UK and beyond. Pixelite can be the step you
            need to take your business to the next level.
          </p>
        </div>
        <Lottie className="lottie" animationData={pdIso} />
      </section>
      <section className="pixelite-section right reveal">
        <img src="assets/picture-template.png" className="desktop-show"></img>
        <div>
          <h1><span class="pixelite-blue">Our values</span></h1>
          <p>
            Our values lie in seeing businesses we work with succeed and excel from our services.
            <br/><br/>
            We value our services playing an instrumental role in taking you and your business to that next level.
            Going beyond that, we further value building positive relationships with businesses on that journey.
            <br/><br/>
            We also pride ourselves in offering transparent services to all, regardless of technical expertise.
          </p>
        </div>
        <img
          src="assets/picture-template.png"
          className="stats-smallscreen"
        ></img>
      </section>
      
      <div id="drive" class="combined-heading">
        <h1>What drives us?</h1>
      </div>
      <div id="why-list">
            <div>
            <HeartIcon className="h-24 w-24" />
              <h2>
                <span className="pixelite-blue">Passion</span>
              </h2>
              <p>
                Passion for what we do helps drive us in our day-to-day operations. We have passion to provide
                the best possible services and products to every business we serve, big or small.
              </p>
            </div>
            <div>
            <HandThumbUpIcon className="h-24 w-24" />
              <h2>
              <span className="pixelite-blue">Commitment</span>
              </h2>
              <p>
                Commitment to a business' individual needs drives us in providing a bespoke, tailored service that's proven to see results.
              </p>
            </div>
            <div>
            <AcademicCapIcon className="h-24 w-24" />
              <h2>
              <span className="pixelite-blue">Knowledge</span>
              </h2>
              <p>
                Opportunities to expand on our knowledge, and deliver better services as a result is a major reason why we do what we do.
              </p>
            </div>
            <div>
            <RocketLaunchIcon className="h-24 w-24" />
              <h2>
              <span className="pixelite-blue">Growth</span>
              </h2>
              <p>
                The opportunity of helping other business' grow in their respective fields is one of our most driving factors. Seeing a business grow 
                through our services motivates us to continue.
              </p>
            </div>
          </div>
          <section className="pixelite-section leftreveal">
        <div>
          <h1>
            <span class="pixelite-blue">Where are we located?</span>
          </h1>
          <p>
            Although providing services on an international level, we're based in County Durham, England.
            <br/><br/>
            We take great pride in offering our services to local businesses alongside national and international clientele.
          </p>
        </div>
        <Lottie className="lottie" animationData={pixeliteLocation} />
      </section>
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
        title="About"
        meta={meta}
        page={content}
        desktopHeader={<>About us</>}
        mobileHeader={<>About us</>}
        desktopSubheader={
          <>
            Need help in digital marketing, website design or branding?{" "}
            <br className="desktop-break" />
            Look no further.
          </>
        }
        mobileSubheader="The why, the how and the where"
      ></PixelitePage>
    </div>
  );
};

export default About;
