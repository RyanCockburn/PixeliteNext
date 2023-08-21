import React from "react";

import ContactForm from "../components/ContactForm.jsx";
import PixelitePage from "./PixelitePage.jsx";


const Contact = () => {
  const content = (
    <div>
        <h1><span class="pixelite-blue">Pixelite Digital's blog<br/> is coming soon.</span></h1>
    </div>
  );

  var meta = {
    url: "/blog",
    description:
      "Pixelite Digital's blog, coming soon.",
    title: "Blog",
  };

  return (
    <div>
      <PixelitePage
        title="Blog"
        meta={meta}
        page={content}
        desktopHeader={<><span className="pixelite-white">Here's what's happening</span><br/> <span className="pixelite-white">in the</span> digital space right now</>}
        mobileHeader={<><span className="pixelite-white">Here's what's happening</span><br/> <span className="pixelite-white">in the</span> digital space right now</>}
        desktopSubheader={
          <>
            Here's what's happening in the digital space, and some of our takes. Coming soon.
          </>
        }
        mobileSubheader={
          <>
            Here's what's happening in the digital space, and some of our takes. Coming soon.
          </>
        }
      ></PixelitePage>
    </div>
  );
};

export default Contact;
