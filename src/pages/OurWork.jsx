import React from "react";
import { Helmet } from "react-helmet";

import PriceCard from "../components/PriceCard";
import PixelitePage from "./PixelitePage";

import CaseStudy from "../components/CaseStudy";

const OurWork = () => {
  const transformations = [
    { name: "Vorex", location: "United States", categories: ["GraphicDesign"] },
    { name: "Notion Commotion", location: "UK", categories: ["SocialMedia"] },
    {
      name: "iFry",
      location: "Durham, England",
      categories: ["SocialMedia", "GraphicDesign"],
    },
    {
      name: "8WB",
      location: "Darlington, England",
      categories: ["WebDesign", "WebDevelopment", "SEO"],
    },
  ];

  const content = (
    <div>
      <div id="case-studies">
        {transformations.map((transformation) => {
          return (
            <CaseStudy
              name={transformation.name}
              location={transformation.location}
              categories={transformation.categories}
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
