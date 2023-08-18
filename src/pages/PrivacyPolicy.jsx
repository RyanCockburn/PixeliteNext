import React from "react";

import ContactForm from "../components/ContactForm.jsx";
import PixelitePage from "./PixelitePage.jsx";

const Contact = () => {
  const content = (
    <div>
      <div id="privacy-policy">
        <h3>Pixelite Digital's Privacy Policy</h3>
        <p>This privacy policy was last updated the 18th August 2023.</p>
        <h4>Contact Details</h4>
        <p>
          <strong>Email:</strong> business@pixelite.digital
        </p>
        <p>
          <strong>Call:</strong> 07305 383169
        </p>
        <h4>Information we collect</h4>
        <p>We collect and process the following information:</p>
        <ul>
          <li>Name</li>
          <li>Profession</li>
          <li>
            Relevant contact information such as email addresses and telephone
            numbers
          </li>
          <li>
            Web browser type, along with version (this data is automatically
            collected)
          </li>
        </ul>
        <p>
          All of the above data is collected in accordance with this privacy
          policy.
        </p>
        <h4>Usage of data</h4>
        <ul>
          <li>
            In correspondence to the Data Protection Act, we- Pixelite Digital,
            can be referred to as the 'data controller'
          </li>
          <li>
            We will retain any relevant data you submit no longer than the
            necessary period of time (this is usually 12 months)
          </li>
          <li>
            Unless legally obliged to do so, your data will not be disclosed to
            third parties. Any internal contractor and employee with access to
            your information will correspond with this privacy policy and will
            also not disclose personal information.
          </li>
          <li>
            We collect data for the following reasons:
            <ol>
              <li>Internal records</li>
              <li>
                To improve our products/services, so the customer can receive
                the best experience possible
              </li>
              <li>
                To send relevant emails of promotional material that may be of
                interest to you
              </li>
            </ol>
          </li>
        </ul>
        <h4>External Websites</h4>
        <p>
          Pixelite Digital's website may contain links to external websites.
          Pixelite Digital is not responsible for the content of these websites,
          and this privacy policy does not extend beyond the scope of this
          website. It is our advice that you read the privacy policy of any
          other website prior to usage.
        </p>
        <h4>Accessing your data</h4>
        <p>
          You have the right to request access to your personal data, and all
          data we hold on you. This may cost a small fee, which will be no more
          than £15.
        </p>
        <h4>Security</h4>
        <p>
          Pixelite Digital does everything within its power to maintain a high
          level of security over data. This include physical, electronic and
          managerial processes.
        </p>
        <p>
          If password access is required for areas of the website, it is your
          responsibility to keep your password confidential.
        </p>
        <p>
          Although we do our best to maintain a high level of security,
          transmission of data is not always secure and is done at your own
          risk.
        </p>
        <h4>General</h4>
        <p>
          If any court of authority find the provision of this privacy policy is
          invalid, illegal, or unenforceable, that provision will be deleted.
          Any other provisions of the privacy policy will remain unaffected.
        </p>
        <p>This agreement will be governed by and interpreted according to the law of England all Wales. All disputes arising under the agreement will be subject to the exclusive jurisdiction of English
          and Welsh Courts.
        </p>
        <h4>Changes to this privacy policy</h4>
        <p>
          Pixelite Digital reserves the right to change this privacy policy at
          any time. Any changes to the privacy policy will be made on the
          website. It is your responsibility to keep up-to-date with this
          privacy policy. You are considered to have accepted any privacy policy
          changes upon first use of the website following changes being made.
        </p>
      </div>
    </div>
  );

  var meta = {
    url: "/privacy-policy",
    description: "Pixelite Digital's Privacy Policy",
    title: "Privacy Policy",
  };

  return (
    <div>
      <PixelitePage
        title="Privacy Policy"
        meta={meta}
        page={content}
        desktopHeader={<>Privacy Policy</>}
        mobileHeader={<>Privacy Policy</>}
        desktopSubheader={<></>}
        mobileSubheader=""
      ></PixelitePage>
    </div>
  );
};

export default Contact;
