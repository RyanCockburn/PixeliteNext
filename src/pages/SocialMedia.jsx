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
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Lottie from "lottie-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import ContactForm from "../components/ContactForm";
import PriceCard from "../components/PriceCard";
import RangeSlider from "../components/RangeSlider";
import PixelitePage from "./PixelitePage";
import BespokeWebsite from "/public/assets/BespokeWebsite.json";
import SocialMedia from "/public/assets/SocialMedia.json";
var currentProcess = 0;
function nextProceess(clicked) {
  var target = clicked.target;
  var processes = target.closest("#processes");
  var processList = processes.querySelectorAll("div:not(.vl)");
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
              <li>YouTube</li>
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
        <Lottie className="lottie" animationData={SocialMedia} />
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
 
          <div>
            <img src="/assets/icons/deployment.png" />
            <h3>Deployment</h3>
            <p>
              Once we’re confident we’ve developed strong, unique strategies for
              your business, we’ll start putting these strategies into action.
              We’ll begin posting, promoting and growing your social media.
            </p>
          </div>

          <div>
            <img src="/assets/icons/results.png" />
            <h3>Results</h3>
            <p>
              This is the exciting stage- the stage where you see your business’
              social media experiencing growth. We expect posts to be receiving
              higher interaction, leads from social media increasing and a
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
      <div id="social-media-quotes" className="packages">
        <SocialMediaQuote />
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

const platforms = [
  {
    name: "Instagram",
    price: 25,
    posts: 4,
    stories: 3,
    get description() {
      return [
        `Our team of specialists will post on your Instagram ${this.posts} times a week, and post a further ${this.stories} stories`,
        `We'll monitor, promote and share your content both on Instagram and Facebook.`,
        `Be rest assured that we'll research the best tags for your business, so you can reach the most people possible and see the highest
        return on your investment.`,
      ];
    },
    additions: ["Setup"],
  },
  {
    name: "TikTok",
    price: 45,
    posts: 3,
    stories: 3,
    get description() {
      return [
        `Our team of specialists will post on your Facebook ${this.posts} times a week, and post a further ${this.stories} stories`,
        `We'll find relevant communities, share your content and increase your reach to potential customers`,
        `We'll regularly monitor post performance, seeing what works best for your business. You will also receieve this information in the form of monthly reports.`,
        `Furthermore, we'll encourage synergy between your social platforms by promoting your Instagram content (if you choose for us to also manage your Instagram account) on Facebook and vice versa.`,
      ];
    },
    additions: ["Setup"],
  },
  {
    name: "Twitter",
    price: 20,
    posts: 4,
    stories: 0,
    get description() {
      return [
        `Our team of specialists will post on your Facebook ${this.posts} times a week, and post a further ${this.stories} stories`,
        `We'll find relevant communities, share your content and increase your reach to potential customers`,
        `We'll regularly monitor post performance, seeing what works best for your business. You will also receieve this information in the form of monthly reports.`,
        `Furthermore, we'll encourage synergy between your social platforms by promoting your Instagram content (if you choose for us to also manage your Instagram account) on Facebook and vice versa.`,
      ];
    },
    additions: ["Setup"],
  },
  {
    name: "YouTube",
    price: 45,
    posts: 4,
    stories: 0,
    get description() {
      return [
        `Our team of specialists will post on your Facebook ${this.posts} times a week, and post a further ${this.stories} stories`,
        `We'll find relevant communities, share your content and increase your reach to potential customers`,
        `We'll regularly monitor post performance, seeing what works best for your business. You will also receieve this information in the form of monthly reports.`,
        `Furthermore, we'll encourage synergy between your social platforms by promoting your Instagram content (if you choose for us to also manage your Instagram account) on Facebook and vice versa.`,
      ];
    },
    additions: ["Setup"],
  },
];

const additions = [
  {
    name: `Setup`,
    description:
      "Haven't got an account setup already? No problem. We'll fully set up the account, including graphics, auto-responses, and business information.",
    price: 15,
  },
];

function closePopout(target) {
  console.log(target);
  var popout = target
    .closest("#quote-footer")
    .querySelectorAll(".popout_wrapper")[0];
  popout.style.display = "none";
  document.body.style.overflowY = "visible";
}

const SocialMediaQuote = () => {
  const [selectedSocials, setSelectedSocials] = useState([
    {
      name: "Facebook",
      price: 45,
      posts: 4,
      stories: 3,
      get description() {
        return [
          `Our team of specialists will post on your Facebook ${this.posts} times a week, and post a further ${this.stories} stories`,
          `We'll find relevant communities, share your content and increase your reach to potential customers`,
          `We'll regularly monitor post performance, seeing what works best for your business. You will also receieve this information in the form of monthly reports.`,
          `Furthermore, we'll encourage synergy between your social platforms by promoting your Instagram content (if you choose for us to also manage your Instagram account) on Facebook and vice versa.`,
        ];
      },
      additions: ["Setup"],
    },
  ]);
  const [cost, setCost] = useState(45);
  const [totalWeeks, setTotalWeeks] = useState(1);
  const [totalCost, setTotalCost] = useState(45);
  const [addOns, setAddOns] = useState([]);
  const [oneTimeFee, setOneTimeFee] = useState(0);
  const [formattedQuote, setFormattedQuote] = useState();

  const handleClick = (platform) => {
    if (!selectedSocials.includes(platform)) {
      addSelectedSocial(platform);
    } else {
      removeSelectedSocial(platform);
    }
  };

  const handleAddOn = (event, addOn, platform) => {
    const checkBox = event.target;
    if (checkBox.checked) {
      addAddOn(checkBox, platform);
    } else {
      removeAddOn(checkBox, platform);
    }
  };

  const addSelectedSocial = (social) => {
    setSelectedSocials((selectedSocials) => {
      return [...selectedSocials, social];
    });
  };

  const addAddOn = (addOn, platform) => {
    setAddOns((addOns) => {
      return [...addOns, { addOn, platform }];
    });
  };

  const removeSelectedSocial = (social) => {
    setSelectedSocials((socials) => {
      const result = [...socials];
      result.splice(selectedSocials.indexOf(social), 1);
      return result;
    });
  };

  const removeAddOn = (addOn, platform) => {
    setAddOns((addOn, platform) => {
      const result = [...addOns];
      result.splice(addOns.indexOf({ addOn, platform }), 1);
      return result;
    });
  };

  const calculateCost = () => {
    var total = 0;
    selectedSocials.forEach((platform) => {
      total += platform.price;
    });
    setCost(total);
    setTotalCost(total * totalWeeks);

    var totalOneOff = 0;

    addOns.forEach((addOn) => {
      var addition = additions.find((add) => {
        return add.name === addOn.addOn.id;
      });
      try {
        totalOneOff += addition.price;
      } catch (e) {
        totalOneOff += 0;
      }
    });
    setOneTimeFee(totalOneOff);
  };

  function setBubble(range) {
    setTotalWeeks(event.target.value);
    // const bubble = range
    //   .closest(".range_slider")
    //   .querySelectorAll(".bubble")[0];
    // console.log(bubble);
    // const min = range.min ? range.min : 0;
    // const max = range.max ? range.max : 100;
    // const newVal = Number(((range.value - min) * 100) / (max - min));
    // bubble.innerHTML = event.target.value;
    // bubble.style.left = `calc(${newVal}% + (${4 - newVal * 0.075}px))`;
  }

  const getAdditionLine = (addition, pack) => {
    var addition = additions.find((add) => {
      return add.name === addition;
    });
    return (
      <div>
        <input
          type="checkbox"
          id={addition.name}
          onChange={(event) => {
            handleAddOn(event, addition.name, pack);
          }}
        />
        <div>
          <p>{addition.name}</p>
          <p>{addition.description}</p>
        </div>
      </div>
    );
  };

  function openPopout(target) {
    var popout = target
      .closest("#quote-footer")
      .querySelectorAll(".popout_wrapper")[0];
    popout.style.display = "inline";
    document.body.style.overflowY = "hidden";
  }



  useEffect(() => {
    calculateCost();
    formatQuote();
  });

  const formatQuote = () => {
    var services = "";
    selectedSocials.forEach(
      (social) => (services = services + social.name + "<br>")
    );
    var formattedAddOns = "";
    addOns.forEach(
      (addOn) =>
        (formattedAddOns =
          formattedAddOns + (addOn.platform + "," + addOn.addOn.id + "<br>"))
    );

    var returnStatement =
      "<br>This client has selected the following platforms:<br>" +
      services +
      "<br><br>" +
      "The following additional add-ons have also been selected.<br>" +
      formattedAddOns +
      "<br>" +
      "Total weekly cost £" +
      cost +
      "<br>" +
      "Total number of weeks: " +
      totalWeeks +
      " weeks";

    setFormattedQuote(returnStatement);
  };

  return (
    <div id="social-media-quote">
      <div class="combined-heading">
        <h1>Custom Quote</h1>
        <p>
          Discover the range of platforms and services we offer by getting your
          own custom quote
        </p>
      </div>
      <h2></h2>
      <h2>Number of weeks</h2>
      <p>Select the number of weeks you'd like to commission our services for.</p>
      <p>You have currently selected {totalWeeks} weeks</p>
      <div class="range_slider">
        <div class="sliderValue">
          <span>1</span>
        </div>
        <div class="field">
          <div class="value left">1</div>
          <input
            type="range"
            min="1"
            max="12"
            steps="1"
            defaultValue="1"
            onChange={(event) => setBubble(event.target)}
          />
          <div class="value right">12</div>
        </div>
      </div>
      <h2>Platforms</h2>
      <p>Select the platforms you'd like us to handle for you.</p>
      <div id="platforms">
        {platforms.map((platform) => {
          if (platform.name !== "Facebook") {
            return (
              <div>
                <input
                  type="checkbox"
                  id={platform.name}
                  onClick={() => handleClick(platform)}
                />
                <p>{platform.name}</p>
              </div>
            );
          }
        })}
      </div>
      <div id="custom-quote">
        <h2>Your Custom Quote</h2>
        <div id="selected-socials">
          {selectedSocials.map((social) => {
            return (
              <div>
                <h2>{social.name}</h2>
                <h5>£{social.price}/week</h5>
                <ul>
                  {social.description.map((feature) => {
                    return <li>{feature}</li>;
                  })}
                </ul>
                <h5>Add-ons</h5>
                <ul class="social-additions">
                  {social.additions.map((addition) => {
                    return <li>{getAdditionLine(addition, social.name)}</li>;
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>

      <div id="price-info">
        <div>
          <h1>Weekly Fee</h1>
          <h1>£{cost}</h1>
        </div>

        {oneTimeFee != 0 ? (
          <p>
            A one-time fee of £{oneTimeFee} for your selected add-ons would also
            apply.
          </p>
        ) : null}
      </div>
      <div id="quote-footer">
        <p>
          *All quotes aren't final, and we're more than happy to make
          adjustments according to your business and its needs. This quote
          simply allows us to give you an idea of our options and pricing. With
          that said, please contact us and we'll be able to make our packages
          further work for you.
        </p>
        <button class="button" onClick={(event) => openPopout(event.target)}>
          Get in touch
        </button>
        <div class="popout_wrapper">
          <div class="popout">
            <button
              class="popout-exit"
              onClick={(event) => closePopout(event.target)}
              type="button"
              aria-label="Close"
            >
              <XMarkIcon className="h-24 w-24" />
            </button>
            <Quote quote={formattedQuote} />
          </div>
        </div>
      </div>
    </div>
  );
};

function Quote(props) {
  return (
    <div id="contact-us" class="social-quote">
      <h1>
        <span class="pixelite-blue">We're almost there</span>
      </h1>
      <p>We just need your contact information so we can get back to you.</p>
      <form
        onSubmit={(event) => handleSubmit(event, props.quote)}
        className="form"
      >
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            autoComplete="off"
            id="name"
            minLength={3}
            maxLength={100}
          ></input>
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            autoComplete="off"
            id="email"
            minLength={5}
            maxLength={70}
          ></input>
        </div>

        <button className="button" type="submit">
          Send us your quote
        </button>
        <p className="error"></p>
      </form>
    </div>
  );
}

async function handleSubmit(event, quote) {
  event.preventDefault();

  var data = {
    name: String(event.target.name.value),
    email: String(event.target.email.value),
  };

  data.message = JSON.stringify(quote);

  var nullFields = [];

  if (data.name === "") {
    nullFields.push("name");
  }

  if (data.email === "") {
    nullFields.push("email");
  }

  if (data.message === "") {
    nullFields.push("name");
  }

  if (nullFields.length > 0) {
    setErrorMessage("Please ensure all fields are filled out.");
    return;
  }

  if (!validateEmail(data.email)) {
    setErrorMessage("Please enter a valid email address.");
    return;
  }

  const response = await fetch("/api/quote", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (response.ok) {
    console.log("Message sent successfully");
    reset();
    
    closePopout(document.body.querySelectorAll(".popout-exit")[0])
  } else {
    //Clear out form
    console.log("Error sending message");
  }

  function validateEmail(mail) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
      return true;
    }
    alert("You have entered an invalid email address!");
    return false;
  }

  function reset() {
    var contactUs = document.getElementById("contact-us");
    var form = contactUs.getElementsByClassName("form")[0];
    form.reset();
    contactUs.getElementsByClassName("error")[0].innerHTML =
      "Your message has been sent successfully.";
  }

  function setErrorMessage(contents) {
    var contactUs = document.getElementById("contact-us");
    contactUs.getElementsByClassName("error")[0].innerHTML = contents;
  }
}

export default Home;
