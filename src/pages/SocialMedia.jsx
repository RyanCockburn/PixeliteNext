import React from "react";
import { Helmet } from "react-helmet";

import {
  ArrowDownIcon,
  ArrowTrendingUpIcon,
  ChatBubbleBottomCenterIcon,
  CurrencyPoundIcon,
  CursorArrowRaysIcon,
  GlobeAltIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";
import Lottie from "lottie-react";
import Link from "next/link";
import ContactForm from "../components/ContactForm";
import PriceCard from "../components/PriceCard";
import PixelitePage from "./PixelitePage";
import BespokeWebsite from "/public/assets/BespokeWebsite.json";

var currentProcess = 0;
function nextProceess(clicked) {
  var target = clicked.target;
  var processes = target.closest("#processes");
  var processList = processes.querySelectorAll("div:not(.vl)");
  console.log(processList);
  var currentActive = processList[currentProcess];
  var nextNode =
    currentProcess + 1 >= processList.length ? 0 : currentProcess + 1;
  var nextActive = processList[nextNode];
  currentProcess = nextNode;
  currentActive.classList.toggle("active");
  nextActive.classList.toggle("active");
}

const Home = () => {
  const content = (
    <div>
      <section className="pixelite-section left reveal">
        <div>
          <h1>
            <span className="pixelite-blue">Social media is important.</span>
          </h1>
          <p>
            Social media is a driving force for business growth in today’s day
            in age. Year on year, social media is becoming more important for
            any business to stand out. If a customer needs a service or product,
            the first place they’ll likely look is on social media.
            <br />
            <br />
            That’s why, at Pixelite, we pride ourselves on our ability to help
            businesses grow and solidify a social media presence. We understand
            how important it is for businesses to have a strong social media.
          </p>
        </div>
        <Lottie className="lottie" animationData={BespokeWebsite} />
      </section>
      <div className="reveal">
        <div className="combined-heading reveal">
          <h1>
            <span className="pixelite-grey">
              Why does your business{" "}
              <span className="pixelite-blue">need social media?</span>
            </span>
          </h1>
          <p>
            Social media is often overlooked by businesses as a means to grow
            their business. Our aim is to make sure your business doesn't fall
            victim to this belief.
          </p>
        </div>

        <div id="why-list">
          <div>
            <CurrencyPoundIcon className="h-24 w-24" />
            <h2>
              To Drive<span className="pixelite-blue"> Sales</span>
            </h2>
            <p>
              There's no better way to drive sales than through social media.
              Never before in history, has a post been able to reach hundreds or
              thousands of people instantly. Don't miss out on such an
              opportunity to reach a wider audience and drive sales.
            </p>
          </div>
          <div>
            <ChatBubbleBottomCenterIcon className="h-24 w-24" />
            <h2>
              Customer <span className="pixelite-blue">Engagement</span>
            </h2>
            <p>
              The truth is, many customers simply expect a business to have a
              social media presence. If a customer wants to find out your
              opening hours, what products/services you provide, etc, the first
              place they'll look is social media. Allow customers to engage with
              your business, and don't block them out by not having social
              media.
            </p>
          </div>
          <div>
            <CursorArrowRaysIcon className="h-24 w-24" />
            <h2>
              Increase<span className="pixelite-blue"> Website Traffic</span>
            </h2>
            <p>
              Websites are great for selling products to customers. Promoting
              your website through social media can boost SEO, leading to
              increased traffic. Increased traffic results in higher sales and
              thus greater revenue.. what's not to love?
            </p>
          </div>
          <div>
            <HeartIcon className="h-24 w-24" />
            <h2>
              <span className="pixelite-blue"> Reputation</span>
            </h2>
            <p>
              The first thing we often ask our customers is if they have a
              thorough system for reviews. Oftentimes, they don't. Social media,
              particularly Facebook, is an excellent way to manage reviews.
              Customers can see them at a glance, and instantly trust your
              business.
            </p>
          </div>
          <div>
            <ArrowTrendingUpIcon className="h-24 w-24" />
            <h2>
              Identify <span className="pixelite-blue"> Trends</span>
            </h2>
            <p>
              Let's face it, statistics are often boring... but they're the
              backbone of trends. By having a thorough social media presence,
              you can see breakdowns of who engages with your content. This
              allows businesses to further target this demographic, and boost
              sales.
            </p>
          </div>
        </div>
      </div>

      <div className="pixelite-background">
        <div className="combined-heading">
          <h2>One of our previous clients</h2>
          <h1>
            <span class="pixelite-white">Notion Commotion</span>
          </h1>
        </div>
        <section className="pixelite-section left reveal">
          <div>
            <h1>
              <span class="pixelite-blue">Social media drives sales.</span>
            </h1>
            <p>
              Notion Commotion was a client we worked with to help sell their
              productivity related products on TikTok. Productivity was a new
              area for us, but we were more than happy to help.
              <br />
              <br />
              We identified niches in the productivity market, and segmented
              according to this. By doing so, we were able to achieve excellent
              results. In just 2 months, we achieved 350+ sales, and 200,000+
              video views.
              <br />
              <br />
              This is proof that, by honing in on the market, we can help you
              establish an online platform to drive sales.
            </p>
          </div>
          <img src="/assets/clients/Notion_Commotion.png"></img>
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
        <button id="notion_button" class="button">
          View the full case study
        </button>
      </div>
      <section className="pixelite-section left reveal">
        <div>
          <h1>Social Media Platforms we offer packages for</h1>
          <p>
            We're very flexible when it comes to which platforms we offer
            packages for. We offer packages for the usual contenders, including:
            <ul>
              <li>Facebook</li>
              <li>Instagram</li>
              <li>Twitter</li>
              <li>TikTok</li>
            </ul>
            <br />
            Whether your business already has a social media presence, or are
            starting completely from fresh, we're able to help.
            <br />
            <br />
            Prices may vary from platform to platform, although we're more than
            happy to cater towards the need of your business!
          </p>
        </div>
        <img src="/assets/Promotional-Graphic.png"></img>
      </section>
      <div id="why-us">
        <h1 className="combined-heading">
          <h1>Our process</h1>
        </h1>
        <div id="processes">
          <div className="active">
            <img src="/assets/icons/brief.png" />
            <h3>Brief</h3>
            <p>
              This is one of the most important stages of the process. We
              communicate with yourself and your business and ensure we’re fully
              familiar with what your business offers and its requirements
            </p>
          </div>
          <div class="vl fill"></div>
          <div>
            <img src="/assets/icons/strategy.png" />
            <h3>Strategy</h3>
            <p>
              After our initial discussion/consultation, we come up with solid
              strategies on how we can approach social media to best promote
              your business. This includes pinpointing your target audience,
              concepting posts and graphics and identifying niches for better
              results. At this stage, we’ll also develop a bespoke content
              calendar for your business’ social media. This consists of a
              daily, weekly and monthly breakdown of all posts.
            </p>
          </div>
          <div class="vl fill"></div>
          <div>
            <img src="/assets/icons/deployment.png" />
            <h3>Deployment</h3>
            <p>
              Once we’re confident we’ve developed strong, unique strategies for
              your business, we’ll start putting these strategies into action.
              We’ll begin posting, promoting and growing your social media.
            </p>
          </div>
          <div class="vl fill"></div>
          <div>
            <img src="/assets/icons/results.png" />
            <h3>Results</h3>
            <p>
              This is the exciting stage- the stage where you see your business’
              social media experiencing growth. We expect posts to be
              experiencing interaction, leads from social media increasing and a
              general upwards trend of growth.
              <br />
              <br />
              Throughout all stages, communication with yourself is a given. We
              provide updates throughout every stage, and update you on page
              performance on a monthly basis.
            </p>
          </div>
          <button id="processes-down" class="button" onClick={nextProceess}>
            <ArrowDownIcon className="h-24 w-24" />
          </button>
        </div>
      </div>

      <div id="social-media-package">
        <div class="combined-heading">
          <h1>Social Media Package</h1>
          <p>
            Are you a business wanting to get started with establishing your
            social media? You're in luck. This package includes everything you
            need to get started.
          </p>
        </div>
        <section className="pixelite-section left reveal">
          <div>
            <h1>
              <span className="pixelite-blue">
                Start your social media the right way.
              </span>
            </h1>
            <p>
              For just £199, give your business everything it needs to get
              started online. This package includes:
              <ul>
                <li>Bespoke Wix Website</li>
                <li>FREE domain</li>
                <li>2 Promotional Graphics</li>
                <li>Basic SEO</li>
                <li>Specialist Support</li>
              </ul>
              <Link href="/packages/small-business">
                <button class="button">Learn more</button>
              </Link>
            </p>
          </div>
          <img src="/assets/Pixelite-Small-Business-Package.png" />
        </section>
      </div>
      <div id="website-prices" className="packages">
        <div className="combined-heading reveal">
          <h1>Choose the package that best suits you</h1>
          <p>
            The following packages will give you an idea of the social media
            options we offer. If none of the packages below suit your needs,
            don't hesitate to reach out and we'll be more than happy to help!
          </p>
        </div>
        <div className="prices">
          <PriceCard
            service="web-design"
            package="Basic"
            catchPhrase="Suitable for Startups and businesses with basic needs"
            price="300"
            benefits={[
              "4 Page Website",
              "User & Mobile Friendly",
              "Domain Name & Hosting",
              "10 Images",
              "Technical Support",
            ]}
            key="website-basic"
          ></PriceCard>
          <PriceCard
            service="web-design"
            package="Advanced"
            catchPhrase="Suitable for Startups and businesses with basic needs"
            price="625"
            benefits={[
              "7 Page Website",
              "User & Mobile Friendly",
              "Domain Name & Hosting",
              "20 Images",
              "Technical Support",
              "Basic SEO",
            ]}
            key="website-advanced"
          ></PriceCard>
          <PriceCard
            service="web-design"
            package="Premium"
            catchPhrase="Suitable for Startups and businesses with basic needs"
            price="849"
            benefits={[
              "10 Page Website",
              "User & Mobile Friendly",
              "Domain Name & Hosting",
              "30 Images",
              "Technical Support",
              "Basic SEO",
            ]}
            key="website-premium"
          ></PriceCard>
        </div>
        <ContactForm />
      </div>
    </div>
  );

  var meta = {
    url: "social-media",
    description:
      "Pixelite Digital, providing digital services to help your business grow",
    title: "Social Media",
  };

  return (
    <div>
      <PixelitePage
        title="Social Media"
        meta={meta}
        page={content}
        desktopHeader={
          <>
            <span className="pixelite-white">Social Media</span>
          </>
        }
        mobileHeader={
          <>
            <span className="pixelite-white">Social Media</span>
          </>
        }
        desktopSubheader={
          <>
            60% of people use social media on a daily basis. Expand the reach of
            your business by using social media to advertise.
            <br />
            <br />
            Choose from a selection of our packages, starting at just £50.
          </>
        }
        mobileSubheader={
          <>
            60% of people use social media on a daily basis. Expand the reach of
            your business by using social media to advertise.
          </>
        }
      ></PixelitePage>
    </div>
  );
};

export default Home;
