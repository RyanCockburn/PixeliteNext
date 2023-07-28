import React from "react";
import { Helmet } from "react-helmet";

import { GlobeAltIcon } from "@heroicons/react/24/outline";
import Lottie from "lottie-react";
import Link from "next/link";
import ContactForm from "../components/ContactForm";
import PriceCard from "../components/PriceCard";
import PixelitePage from "./PixelitePage";
import BespokeWebsite from "/public/assets/BespokeWebsite.json";

const Home = () => {
  const content = (
    <div>
      <div id="website-header">
        <div class="title">
          <h1>Do you want a website for your business?</h1>
          <h1>Are you ready to take your business to the next level?</h1>
          <h1>... and don't want to spend a fortune?</h1>
        </div>
        <div id="low-prices">
        <h1 class="pixelite-heading pixelite-blue">Websites from just £199.</h1>
        <Link href="#small-business-package "><button class="button">Find out more</button></Link>
        </div>
      </div>
      <section className="pixelite-section left reveal">
        <div>
          <h1>
            <span className="pixelite-blue">We've got you covered.</span>
          </h1>
          <p>
            Our leading team of specialist web designers know how to create
            sites that are not only fit for purpose but are also visually
            stunning.
            <br />
            <br />
            Websites are vital for creating a lasting impression, that’s why, at
            Pixelite, we pursue all methods necessary to not only entice more
            visitors, but to turn these visitors into customers.
            <br />
            <br />
            Purchasing a website is a major step in getting your brand out
            there. It’s an investment that will bring the best possible ROI for
            your business.
          </p>
        </div>
        <Lottie className="lottie" animationData={BespokeWebsite} />
      </section>
      <div className="reveal">
        <div className="combined-heading reveal">
          <h1>
            <span className="pixelite-grey">
              Why does your business{" "}
              <span className="pixelite-blue">need a website?</span>
            </span>
          </h1>
          <p>
            Want to grow your business in the online space? We can help. With a
            wide range of services to help your business thrive, what are you
            waiting for?
          </p>
        </div>

        <div id="why-list">
          <div>
            <img src="assets/icons/social-circle.svg" />
            <h2>
              Outpace<span className="pixelite-blue"> Competition</span>
            </h2>
            <p>
              The difference between a customer choosing your business over
              another could simply be a website. You’ve got the products, the
              services- now you just need a platform to sell it on.
            </p>
          </div>
          <div>
            <img src="assets/icons/revenue-increase.svg" />
            <h2>
              Grow Your <span className="pixelite-blue"> Revenue</span>
            </h2>
            <p>
              Websites have the potential to yield the highest ROI. Whilst the
              initial investment may be high, your website, through SEO, can
              passively attract new customers and grow your revenue.
            </p>
          </div>
          <div>
            <img src="assets/icons/consumer.svg" />
            <h2>
              Changing<span className="pixelite-blue"> Consumerism</span>
            </h2>
            <p>
              Times are changing. Now, 91% of users take to the internet to look
              for local goods or services. We make sure you’re one of the first
              websites a customer will see.
            </p>
          </div>
          <div>
            <img src="assets/icons/creative-freedom.svg" />
            <h2>
              Creative<span className="pixelite-blue"> Freedom</span>
            </h2>
            <p>
              Social media platforms such as Facebook have their place for
              getting your business out there, but they do have limitations.
              Your own website guarantees you the creative freedom you need to
              make your business successful.
            </p>
          </div>
          <div>
            <img src="assets/icons/increased-visibility.svg" />
            <h2>
              Increase<span className="pixelite-blue"> Visibility</span>
            </h2>
            <p>
              There are over 4.5 billion active internet users (and growing).
              Not having a website, or a presence in the digital world, can
              severely restrict the potential of your business reaching a wider
              audience.
            </p>
          </div>
        </div>
      </div>

      <div className="pixelite-background">
        <section className="pixelite-section left reveal">
          <div>
            <h1>8WB - Our Latest Website Client</h1>
            <p>
              Our leading team of specialist web designers know how to create
              sites that are not only fit for purpose but are also visually
              stunning.
              <br />
              <br />
              Websites are vital for creating a lasting impression, that’s why,
              at Pixelite, we pursue all methods necessary to not only entice
              more visitors, but to turn these visitors into customers.
              <br />
              <br />
              Purchasing a website is a major step in getting your brand out
              there. It’s an investment that will bring the best possible ROI
              for your business.
            </p>
            <Link href="/our-work/8WB">
              <button class="button">View 8WB's case study</button>
            </Link>
          </div>
          <img src="/assets/clients/8WB.png"></img>
        </section>
      </div>

      <div id="why-us">
        <h1 className="combined-heading">
          <h1>Why choose Pixelite?</h1>
        </h1>
        <div id="why-us-slides">
          <div>
            <div class="circle">1</div>
            <h2>
              <span class="pixelite-blue">Affordable</span>
            </h2>
            <p>
              We understand that websites can be expensive. That's why we go far
              to ensure our websites are as affordable as possible, whilst still
              giving your business an amazing website.
            </p>
          </div>
          <div class="vl"></div>
          <div>
            <div class="circle">2</div>
            <h2>
              <span class="pixelite-blue">Fast & Efficient</span>
            </h2>
            <p>
              Our tried-and-tested processes guarantee your website being
              delivered in the fastest time possible, whilst not skipping any
              corners in the process. You can be rest assured that your website
              will be up in the fastest time possible, so you get to reaching
              more customers even faster.
            </p>
          </div>
          <div class="vl"></div>
          <div>
            <div class="circle">3</div>
            <h2>
              <span class="pixelite-blue">Customised Solutions</span>
            </h2>
            <p>
              Your business isn't like any other, so why should your website be?
              We custom design and code every website we do, depending on the
              industry, requirements and competition. We make sure your website
              stands out, and ultimately make sure customers choose you.
            </p>
          </div>
          <div class="vl fill"></div>
          <div>
            <div class="circle">4</div>
            <h2>
              <span class="pixelite-blue">Proven Results</span>
            </h2>
            <p>
              Most of all, our solutions are proven to bring results. Regardless
              of the package you choose, you can rest easy knowing you have the
              highest chance of making a return on your investment.
            </p>
          </div>
        </div>
      </div>
      <div id="website-testimonials">
        <h1 className="combined-heading">
          <h1>Some of our previous clients</h1>
          <p>
            We've worked closely together with businesses in various industries
            to make websites perfect for them.
          </p>
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
      <div id="small-business-package">
        <div class="combined-heading">
          <h1>Small Business Package</h1>
          <p>Are you a small business? Are you wanting a simple yet effective website whilst on a budget? We have the perfect package for you.</p>
        </div>
        <section className="pixelite-section left reveal">
        <div>
          <h1>
            <span className="pixelite-blue">The best way to get your business started online.</span>
          </h1>
          <p>
            For just £199, give your business everything it needs to get started online. This package includes:
            <ul>
              <li>Bespoke Wix Website</li>
              <li>FREE domain</li>
              <li>2 Promotional Graphics</li>
              <li>Basic SEO</li>
              <li>Specialist Support</li>
            </ul>
            <Link href="/packages/small-business"><button class="button">Learn more</button></Link>
          </p>
        </div>
        <img src="/assets/Pixelite-Small-Business-Package.png"/>
      </section>
      </div>
      <div id="website-prices" className="packages">
        <div className="combined-heading reveal">
          <h1>Choose the package that best suits you</h1>
          <p>
            Need a fully unique website? Maybe your ideas go beyond the scope of a Wix website. These packages 
            are perfect for you.
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
    url: "web-design",
    description:
      "Pixelite Digital, providing digital services to help your business grow",
    title: "Web Design",
  };

  return (
    <div>
      <PixelitePage
        title="Web Design"
        meta={meta}
        page={content}
        desktopHeader={
          <>
            <span className="pixelite-white">
              Web Design &<br />
              Development
            </span>
          </>
        }
        mobileHeader={
          <>
            <span className="pixelite-white">
              Web Design &<br />
              Development
            </span>
          </>
        }
        desktopSubheader={
          <>
            There's no better to way to boost your digital presence than with a
            website.
            <br />
            Even better, our websitse are affordable, user-friendly, and
            effective.
          </>
        }
        mobileSubheader={
          <>
            There's no better to way to boost your digital presence than with a
            website.
          </>
        }
      ></PixelitePage>
    </div>
  );
};

export default Home;
