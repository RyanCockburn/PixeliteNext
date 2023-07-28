import React from "react";

import Section from "../components/Section";

import { BriefcaseIcon, MegaphoneIcon } from "@heroicons/react/24/outline";

import Lottie from "lottie-react";
import Link from "next/link";
import PixelitePage from "./PixelitePage";
import LatestArticles from "/public/assets/LatestArticles.json";
import Podium from "/public/assets/Podium.json";
import pdIso from "/public/assets/pd-iso.json";

const Home = () => {
  const content = <div></div>;

  var meta = {
    url: "",
    description:
      "Pixelite Digital, providing digital services to help your business grow",
    title: "Home",
  };

  return (
    <div>
      <PixelitePage
        title="Pixelite Digital"
        meta={meta}
        page={content}
        desktopHeader={<>404, Page Not Found</>}
        mobileHeader={<>404, Page Not Found</>}
        desktopSubheader={
          <>Sorry, but the requested page could not be found.</>
        }
        mobileSubheader={<>Sorry, but the requested page could not be found.</>}
      ></PixelitePage>
    </div>
  );
};

export default Home;
