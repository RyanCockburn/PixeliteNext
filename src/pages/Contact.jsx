import React from "react";

import ContactForm from "../components/ContactForm.jsx";
import PixelitePage from "./PixelitePage";


const Contact = () => {
  const content = (
    <div>
        <ContactForm/>
    </div>
  );

  var meta = {
    url: "/contact",
    description:
      "About Pixelite Digital, a Digital Agency providing services in Web Design, Social Media Management and Branding",
    title: "Contact",
  };

  return (
    <div>
      <PixelitePage
        title="Contact"
        meta={meta}
        page={content}
        desktopHeader={<>Contact Us</>}
        mobileHeader={<>Contact Us</>}
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

export default Contact;
