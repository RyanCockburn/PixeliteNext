import React from "react";
import { Helmet } from "react-helmet";

import PriceCard from "../components/PriceCard";
import PixelitePage from "./PixelitePage";

import CaseStudy from "../components/CaseStudy";

const OurWork = () => {
  const transformations = [
    {
      name: "Vorex Services",
      location: "United States",
      categories: ["GraphicDesign"],
      description: `We've worked closely with Vorex for over 2 years, actively working to create graphics to promote their online gaming platforms. We've helped promote their content to thousands of users throughout our time working together.`,
    },
    {
      name: "8WB",
      location: "Darlington, England",
      categories: ["WebDesign", "WebDevelopment", "SEO"],
      description: "8WB, or 8 Week Blitz, is a personal fitness program created by Ali Cunningham. Ali approached us wanting to increase his reach via a new website. We accepted the task and have since worked very closely with Ali to help connect with him even more clients."
    },
    { name: "Notion Commotion", location: "UK", categories: ["SocialMedia"], description: "Notion Commotion is a TikTok account that sells productivity related products. We've helped the account reach thousands of users, and sell hundreds of products as a result. " },
    {
      name: "iFry",
      location: "Durham, England",
      categories: ["SocialMedia", "GraphicDesign"],
      description:
        "iFry approached us wanting to establish an onlince presence in the form of social media. We proudly accepted the opportunity and have since worked on creating content, graphics and engaging with customers through iFry's social media.",
    },
    {
      name: "The Nippy Chippy Van",
      location: "Durham, England",
      categories: ["WebDesign", "SocialMedia", "GraphicDesign", "SEO"],
      description: 
      "The Nippy Chippy Van North East approached us in early 2020, asking if we were available to manage their social media and produce graphics to promote their products. We thought this was a great opportunity, which allowed us to expand into an industry we hadn't yet served. We helped grow their social media to over 2000+ followers by late 2020. "
    },

  ];

  var total = 0;

  const content = (
    <div>
      <div id="case-studies">
        
        {transformations.map((transformation) => {
          total +=1;
          var isLeft = total % 2 == 0
          return (
            <CaseStudy
              name={transformation.name}
              location={transformation.location}
              categories={transformation.categories}
              description={transformation.description}
              isLeft = {isLeft}
            />
          );
        })}
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
        title="Our Work | Pixelite"
        meta={meta}
        page={content}
        desktopHeader={
          <>
            <span className="pixelite-white">
              Here's some of our
              <br />
              previous work
            </span>
          </>
        }
        mobileHeader={
          <>
            <span className="pixelite-white">
              Here's some of our
              <br />
              previous work
            </span>
          </>
        }
        desktopSubheader={<>Amazing results for remarkable businesses</>}
        mobileSubheader=""
      ></PixelitePage>
    </div>
  );
};

export default OurWork;
