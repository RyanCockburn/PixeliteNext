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
      "Have any queries? Don't hestitate to get in touch and we'll be more than happy to help.",
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
            Have any queries about our services? Or maybe something else? <br/>Please don't hesitate to get in touch!
          </>
        }
        mobileSubheader=""
      ></PixelitePage>
    </div>
  );
};

export default Contact;
