import React from "react";

import Section from "../components/Section";

import Lottie from "lottie-react";
import Link from "next/link";
import PixelitePage from "./PixelitePage";
import pdIso from "/public/assets/pd-iso.json";

const Home = () => {
  const content = (
    <div>
      <section className="pixelite-section leftreveal">
        <div>
          <h1>
            We're a results-driven <br className="tablet-break"></br>
            <span className="pixelite-blue">Digital Agency</span>
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
        <Lottie className="lottie left" animationData={pdIso}/>
      </section>
      <div className="pixelite-background">
        <div className="combined-heading">
          <h2>What we're best at</h2>
          <h1>
            <span className="pixelite-white">Our Most Popular Services</span>
          </h1>
        </div>
        <div id="projects">
          {/* <div className="project-tile">
            <svg
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_134_1818)">
                <path
                  d="M9.60469 9.75941C8.17242 10.1636 7.02984 11.2536 6.55523 12.6682L0 32.3438L1.03711 33.3809L11.5207 22.827C11.373 22.3876 11.1868 21.8953 11.1868 21.3771C11.1868 19.5139 12.6985 18.0029 14.5611 18.0029C16.4237 18.0029 17.9354 19.5146 17.9354 21.3771C17.9354 23.2397 16.4237 24.7514 14.5611 24.7514C14.0426 24.7514 13.5507 24.6284 13.1112 24.4175L2.55734 34.9011L3.65555 36L23.329 29.4441C24.7437 28.9696 25.8335 27.8902 26.2378 26.3946L29.2437 15.7493L20.307 6.81262L9.60469 9.75941ZM35.0086 5.21652L30.7807 0.988632C29.4623 -0.329727 27.3185 -0.329024 26.0009 0.989089L22.0289 4.96948L30.9656 13.9062L34.946 9.93425C36.3305 8.6766 36.3305 6.53488 35.0086 5.21652Z"
                  fill="#007DE9"
                />
              </g>
              <defs>
                <clipPath id="clip0_134_1818">
                  <rect width="36" height="36" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <h2>Branding & Design</h2>
            <p>
              Give your users an experience they won’t forget. Increase your
              customer conversion rate and keep them coming back for more. Let
              us design and build your website and web applications that will
              solidify your business’ digital presence.
            </p>
            <a href="/branding"><button className="button">Learn More</button>
            </a>
          </div> */}
          <div className="project-tile">
            <svg
              width="47"
              height="38"
              viewBox="0 0 47 38"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_134_1828)">
                <path
                  d="M30.55 2.37055C30.55 1.61426 29.9698 0 28.2073 0C27.1807 0 26.2341 0.673313 25.9389 1.72039L16.5389 34.9704C16.4771 35.1882 16.4477 35.4077 16.4477 35.6236C16.3839 36.3895 17.0375 38 18.8 38C19.8222 38 20.763 37.3204 21.0582 36.2766L30.4582 3.02664C30.5206 2.80621 30.55 2.58652 30.55 2.37055ZM12.925 10.6207C12.925 9.26398 11.8271 8.2457 10.575 8.2457C9.97369 8.2457 9.37209 8.47764 8.91384 8.94158L0.688844 17.2541C0.229492 17.7828 0 18.3914 0 18.9332C0 19.475 0.229492 20.2172 0.688477 20.6773L8.91348 28.9898C9.37062 29.4574 9.97281 29.6207 10.575 29.6207C11.8271 29.6207 12.925 28.6017 12.925 27.2457C12.925 26.638 12.6955 26.03 12.2365 25.5661L5.67305 18.9332L12.2369 12.2995C12.6973 11.8973 12.925 11.2961 12.925 10.6207ZM47 18.9332C47 18.3255 46.7705 17.7175 46.3115 17.2536L38.0865 8.94113C37.6294 8.54258 37.0272 8.2457 36.425 8.2457C35.1729 8.2457 34.075 9.26473 34.075 10.6207C34.075 11.2284 34.3045 11.8364 34.7635 12.3003L41.3273 18.9339L34.7635 25.5676C34.3027 26.0953 34.075 26.7039 34.075 27.2457C34.075 28.6024 35.1729 29.6207 36.425 29.6207C37.0263 29.6207 37.6279 29.3888 38.0862 28.9248L46.3112 20.6123C46.7723 20.2172 47 19.6086 47 18.9332Z"
                  fill="#007DE9"
                />
              </g>
              <defs>
                <clipPath id="clip0_134_1828">
                  <rect width="47" height="38" fill="white" />
                </clipPath>
              </defs>
            </svg>

            <h2>Web Design & Development</h2>
            <p>
              Give your users an experience they won’t forget. Increase your
              customer conversion rate and keep them coming back for more. Let
              us design and build your website and web applications that will
              solidify your business’ digital presence.
            </p>
            <a href="/web-design">
              <button className="button">Learn More</button>
            </a>
          </div>
          <div className="project-tile">
            <svg
              width="39"
              height="39"
              viewBox="0 0 39 39"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_134_1830)">
                <path
                  d="M39 2.84375C39 2.41277 38.8288 1.99945 38.524 1.6947C38.2193 1.38995 37.806 1.21875 37.375 1.21875C36.944 1.21875 36.5307 1.38995 36.226 1.6947C35.9212 1.99945 35.75 2.41277 35.75 2.84375V4.09988L6.24975 13.6256C6.08629 13.6785 5.94381 13.7819 5.84278 13.9209C5.74176 14.0599 5.68739 14.2273 5.6875 14.3991V24.0792C5.68749 24.2522 5.74264 24.4206 5.84493 24.56C5.94722 24.6994 6.09131 24.8025 6.25625 24.8544L8.36875 25.5174C8.534 25.569 8.67844 25.672 8.78104 25.8114C8.88364 25.9508 8.93903 26.1194 8.93912 26.2925V30.5029C8.94815 32.4361 9.72233 34.287 11.0924 35.651C12.4624 37.0149 14.3168 37.7808 16.25 37.7812H16.2841C18.2221 37.7722 20.0773 36.9942 21.442 35.6182C22.8067 34.2422 23.5694 32.3807 23.5625 30.4427V30.2803L35.75 34.099V35.3438C35.75 35.7747 35.9212 36.1881 36.226 36.4928C36.5307 36.7975 36.944 36.9688 37.375 36.9688C37.806 36.9688 38.2193 36.7975 38.524 36.4928C38.8288 36.1881 39 35.7747 39 35.3438V2.84375ZM20.3125 30.4509C20.3173 31.528 19.894 32.563 19.1358 33.3282C18.3777 34.0933 17.3467 34.5261 16.2695 34.5312H16.25C15.1773 34.5313 14.1482 34.1071 13.3871 33.3512C12.626 32.5953 12.1948 31.569 12.1875 30.4964V27.82C12.1876 27.6926 12.2176 27.567 12.2751 27.4534C12.3327 27.3397 12.4162 27.2412 12.5188 27.1658C12.6215 27.0903 12.7404 27.0401 12.8661 27.0191C12.9917 26.9981 13.1205 27.0069 13.2421 27.0449L19.7421 29.0826C19.9074 29.1342 20.0518 29.2372 20.1544 29.3767C20.257 29.5161 20.3124 29.6846 20.3125 29.8578V30.4509Z"
                  fill="#007DE9"
                />
                <path
                  d="M3.25 13.4062C3.25 12.9753 3.0788 12.5619 2.77405 12.2572C2.4693 11.9525 2.05598 11.7812 1.625 11.7812C1.19402 11.7812 0.780698 11.9525 0.475952 12.2572C0.171205 12.5619 0 12.9753 0 13.4062L0.008125 24.7812C0.008125 25.2122 0.17933 25.6256 0.484076 25.9303C0.788823 26.235 1.20215 26.4062 1.63312 26.4062H1.625C2.0493 26.4064 2.45683 26.2405 2.76048 25.9442C3.06413 25.6478 3.23982 25.2444 3.25 24.8203V13.4062Z"
                  fill="#007DE9"
                />
              </g>
              <defs>
                <clipPath id="clip0_134_1830">
                  <rect width="39" height="39" fill="white" />
                </clipPath>
              </defs>
            </svg>

            <h2>Social Media</h2>
            <p>
              Give your users an experience they won’t forget. Increase your
              customer conversion rate and keep them coming back for more. Let
              us design and build your website and web applications that will
              solidify your business’ digital presence.
            </p>
            <a href="/social-media">
              <button className="button">Learn More</button>
            </a>
          </div>
        </div>
      </div>
      <div className="reveal">
        <div className="combined-heading reveal">
          <h1>
            <span className="pixelite-grey">We're your</span> go-to
            <br /> <span className="pixelite-grey">for</span> all things
            digital.
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
              Grow Your <span className="pixelite-blue">Reach</span>
            </h2>
            <p>
              Reach more of your target audience effectively with Pixelite’s
              Digital Marketing campaigns
            </p>
          </div>
          <div>
            <img src="assets/icons/revenue-increase.svg" />
            <h2>
              Grow Your <span className="pixelite-blue">Revenue</span>
            </h2>
            <p>
              Convert more customers than ever before through optimised, bespoke
              websites designed for success.
            </p>
          </div>
          <div>
            <img src="assets/icons/business-growth.svg" />
            <h2>
              Grow Your <span className="pixelite-blue">Business</span>
            </h2>
            <p>
              Let your business embrace its full potential by choosing Pixelite
              to handle all things digital.
            </p>
          </div>
        </div>
      </div>

      <section className="pixelite-section left reveal">
        <div>
          <h1>
            We help put your business in the{" "}
            <span className="pixelite-blue">spotlight.</span>
          </h1>
          <p>
            We can help you like no other B2B business in the space. From start
            to finish, and beyond, we hope to build long lasting connections
            with yourself and your business.
            <br />
            <br />
            Our specialists cater to your business’ specific needs. Let’s face
            it, your business is like no other- so why should you receive a
            template experience?
            <br />
            <br />
            It’s one of core beliefs that, by doing the above, we can help your
            business rise above the crowd.
          </p>
        </div>
        <img src="assets/spotlight.png"></img>
      </section>
      <div id="work">
      <div id="image-scroller">
        <ul className="scroller-slide">
          <img src="assets/clients/Vorex.png"></img>
          <img src="assets/clients/8WB.png"></img>
          <img src="assets/clients/iFry.png"></img>
        </ul>
        <ul className="scroller-slide">
          <img src="assets/clients/Vorex.png"></img>
          <img src="assets/clients/8WB.png"></img>
          <img src="assets/clients/iFry.png"></img>
        </ul>
        <ul className="scroller-slide">
          <img src="assets/clients/Vorex.png"></img>
          <img src="assets/clients/8WB.png"></img>
          <img src="assets/clients/iFry.png"></img>
        </ul>
        <ul className="scroller-slide">
          <img src="assets/clients/Vorex.png"></img>
          <img src="assets/clients/8WB.png"></img>
          <img src="assets/clients/iFry.png"></img>
        </ul>
        
      </div>
      <Link href="/our-work"><button>View all of our work</button></Link>
      </div>
      <section className="pixelite-section right reveal">
        <img
          src="assets/picture-template.png"
          className="desktop-show"
        ></img>
        <div>
          <h1>
            You're in the right place.
          </h1>
          <p>
            At Pixelite, we thoroughly believe our team of professionals can help your business, regardless of the task at hand. Years of combined
            experience mean informed strategies when tackling social media, your website and or any other project handed to us.
            <br/><br/>
            You can be assured that your business is in the right hands, and that choosing Pixelite is a decision that will help your business in
            the short and long term.
          </p>
        </div>
        <img
          src="assets/picture-template.png"
          className="stats-smallscreen"
        ></img>
      </section>
      <section className="pixelite-section left reveal">
        <div>
          <h1>
            Our <span className="pixelite-blue">latest</span> articles covering
            the <span className="pixelite-blue">digital space.</span>
          </h1>
          <p>
            Interested in the digital space? Interested in hearing our takes on topics regarding web design, development and digital marketing?
            <br/><br/>
            If so, our blog is for you. We dive into the latest news and topics that open up a platform for discussion on the topics that matter most.
          </p>
        </div>
        <img src="assets/picture-template.png"></img>
      </section>
    </div>
  );

  var meta = {url: "", 
          description: "Pixelite Digital, providing digital services to help your business grow",
          title: "Home"}

  return (
    <div>
      <PixelitePage
        title="Pixelite Digital"
        meta = {meta}
        page={content}
        desktopHeader={<>
          <span className="pixelite-white">We provide</span> digital services
          <br /> <span className="pixelite-white">
            {" "}
            to help your business
          </span>{" "}
          grow
        </>}
        mobileHeader={<>
          <span className="pixelite-white">
            Let's <span className="pixelite-blue">grow</span>{" "}
            <br className="mobile-break" />
            your business <br className="mobile-break" />
            <span className="pixelite-blue">together</span>.
          </span>
        </>}
        desktopSubheader={<>
          Need help in digital marketing, website design or branding?{" "}
          <br className="desktop-break" />
          Look no further.
        </>}
        mobileSubheader=""

      ></PixelitePage>
    </div>
  );
};

export default Home;
