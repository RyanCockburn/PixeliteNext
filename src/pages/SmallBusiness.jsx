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

import {
  GlobeAltIcon,
  MagnifyingGlassIcon,
  MapIcon,
  PresentationChartBarIcon,
  PresentationChartLineIcon,
  RocketLaunchIcon,
  UserIcon
} from "@heroicons/react/24/outline";

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
            <h1>Bespoke, premium website</h1>

            <p>
              This package includes a custom Wix website, tailored to your
              business and its needs. Even better, this website is fully
              customisable and you can change it yourself in the future.
              <br />
              <br />
              Easily display your products/services, past work and anything else
              you could possibly imagine.
              <p class="hidden active">
                This website is an amazing starting point for a business just starting to expand into the online space. It's often the case that consumers expect a website,
                and this will help you live up that expectation.
                <br/><br/>
                The best thing? You, the client, require little technical knowledge to setup the website as we do it for you.
              </p>
            </p>
            <div class="learn-more" onClick={optionExpand}>
              <p>Learn more about this feature →</p>
            </div>
          </div>
          <Lottie
            className="lottie right stats-smallscreen"
            animationData={BespokeWebsite}
          />
        </section>
        <section className="pixelite-section left reveal">
          <div>
            <h1>Promotional Graphics</h1>
            <p>
              Wanting to promote your business? Or just want graphics to use on
              your social media? This package has your business covered.
              <br />
              <br />
              Our team of professional designers will design{" "}
              <span class="pixelite-blue">2 Personalised Graphics</span> for
              your business with this package. These graphics are guaranteed to
              catch the attention of potential customers. Even better, you can
              choose the content of each graphic so you can target your
              promotion to specific products.
              <p class="hidden active">
                If you don't require any graphics, we're more than happy to discuss something of equivalent value we might be able to provide to you! Just ask us and we're more than happy to discuss.
              </p>
            </p>
            <div class="learn-more" onClick={optionExpand}>
              <p>Learn more about this feature →</p>
            </div>
          </div>
          <img src="/assets/Promotional-Graphic.png"></img>
        </section>
        <section className="pixelite-section right reveal">
          <Lottie
            className="lottie right desktop-show"
            animationData={SEO_Optimisation}
          />
          <div>
            <h1>SEO Optimisation</h1>
            <p>
              Appearing high in search results is essential for the success of
              any business. That's why our team of specialist web developers
              will optimise the searchability of your website and boost reach so
              you can be sure you're reaching the most customers online.
              <p class="hidden active">
                By ranking higher, customers are more likely to find you first. And so, they'll be more likely to choose you.
              </p>
            </p>
            <div class="learn-more" onClick={optionExpand}>
              <p>Learn more about this feature →</p>
            </div>
          </div>
          <Lottie
            className="lottie right stats-smallscreen"
            animationData={SEO_Optimisation}
          />
        </section>
        <section className="pixelite-section left reveal">
          
          <div>
            <h1>FREE Domain</h1>
            <p>
              To sweeten the deal, we include a free 1 year domain in this package. We'll purchase it for you, set it up and transfer it- no hassle.
              <p class="hidden active">
                After the 1 year period, you'll be responsible for renewing the domain from the domain name provider. This usually costs ~£10 for a year, although prices may vary.
              </p>
            </p>
            <div class="learn-more" onClick={optionExpand}>
              <p>Learn more about this feature →</p>
            </div>
          </div>
          <Lottie
            className="lottie right"
            animationData={DomainGraphic}
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
      <div id="website-testimonials">
        <h1 className="combined-heading">
          <h1>Some of our previous clients</h1>
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
      <div class="combined-heading">
        <h1>Why does my business need this? </h1>
        <p></p>
      </div>
      <div id="why-list">
        <div>
          <PresentationChartLineIcon className="h-24 w-24" />
          <h2>
            <span className="pixelite-blue">Growth</span>
          </h2>
          <p>
            Year on year, the amount of people finding and interacting with
            businesses online is increasing. At least 1/3 people purchase
            online, making it essential that your business has the potential to
            reach this growing audience.
          </p>
        </div>
        <div>
          <MagnifyingGlassIcon className="h-24 w-24" />
          <h2>
            <span className="pixelite-blue">Discovery</span>
          </h2>
          <p>
            You've got the product/service, now it needs to be discovered. We
            can help. With our advanced SEO, we can increase how high you appear
            in search results, and ensure your business is seen first.
          </p>
        </div>
        <div>
          <PresentationChartBarIcon className="h-24 w-24" />
          <h2>
            <span className="pixelite-blue">Increase Revenue</span>
          </h2>
          <p>
            It's no secret that online channels help your business financially.
            With more custom, comes more revenue. Don't let your business lose
            out on revenue by not having a digital presence.
          </p>
        </div>
        <div>
          <UserIcon className="h-24 w-24" />
          <h2>
            <span className="pixelite-blue">Competition</span>
          </h2>
          <p>
            The difference between a customer choosing your competition over
            your business could be as simple as finding them first. We can help
            reverse that, and help your business be the one chosen by consumers.
          </p>
        </div>
        <div>
          <MapIcon className="h-24 w-24" />
          <h2>
            <span className="pixelite-blue">Expert Guidance</span>
          </h2>
          <p>
            Our support doesn't just stop at this package. From purchase and
            beyond, Pixelite will help in anyway we can to ensure your business
            has the online advice and help it needs. You can be confident that
            you're getting the best advice out there.
          </p>
        </div>
      </div>
      <h1 class="pixelite-header">Interested?</h1>
      <ContactForm/>
    </div>
  );

  var meta = {
    url: "/packages/small-business",
    description:
      "Pixelite Digital's Small Business Package- the must-have package for all small businesses wanting to succeed in the digital space. Starting at just £149",
    title: "Small Business Package",
  };

  return (
    <div>
      <PixelitePage
        title="Small Business Package"
        meta={meta}
        page={content}
        desktopHeader={
          <>
            <span class="pixelite-white">Want to take your business</span>
            <br /> <span class="pixelite-white">to</span> the next level?
          </>
        }
        mobileHeader={<>Are you a small business?</>}
        desktopSubheader={
          <>
            You're in the right place. Starting at just £199, our Small Business
            <br />
            Package allows your business to establish a strong online presence
            <br />
            and take your business to the next level.
          </>
        }
        mobileSubheader="Give your business a fighting chance in the digital space from just £199"
      ></PixelitePage>
    </div>
  );
};

export default About;
