import React from "react";

import ContactForm from "../components/ContactForm.jsx";
import PixelitePage from "./PixelitePage.jsx";


const Contact = () => {
  const content = (
    <div>
      <div id="complaints">
        <p>A complaint is an expression that a product and or service provided by Pixelite Digital has been unsatisfactory or unacceptable. Pixelite Digital take all complaints very seriously, and we're dedicated to rectifying any issues as soon as they're raised with us.</p>
        <p>We encourage customers to raise complaints as soon as physically possible. This allows both parties to come up with the best solution.</p>
        <p><strong>Call</strong>: 07305 383169</p>
        <p><strong>Email</strong>: business@pixelite.digital</p>
        <p>Upon contacting us, please provide your full name, contact details, and any other relevant information. Relevant information includes, but is not limited to:</p>
        <ul>
          <li>A thorough description of your complaint, including all necessary details (dates and times if known)</li>
        </ul>
        <p>To allow us to investigate fully, please raise your complaint as soon as possible. We aim to respond to your complaint within 24 hours, and resolve the complaint within 7 days.</p>
        <p>If a complaint is made beyond a reasonable timeframe, which is at the discretion of Pixelite Digital, Pixelite Digital reserves the right to reject a resolution being made.</p>
        </div>
    </div>
  );

  var meta = {
    url: "/complaints",
    description:
      "Our procedure for dealing with complaints",
    title: "Complaints",
  };

  return (
    <div>
      <PixelitePage
        title="Complaints"
        meta={meta}
        page={content}
        desktopHeader={<>Complaints Procedure</>}
        mobileHeader={<>Complaints Procedure</>}
        desktopSubheader={
          <>
            Custom satisfication is one of our top priorities. Any issues? Please get in touch!
          </>
        }
        mobileSubheader={
          <>
            Custom satisfication is one of our top priorities. Any issues? Please get in touch!
          </>
        }
      ></PixelitePage>
    </div>
  );
};

export default Contact;
