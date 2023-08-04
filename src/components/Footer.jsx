import Link from "next/link";
import React from "react";

export default class Footer extends React.Component {
  render() {
    return (
      <div id="footer">
        <div id="footer-container">
          <img src="/assets/PixeliteDigitalLogo.png"></img>
          <div id="footer-sections">
            <div>
              <h3>What we do</h3>
              <ul>
                <Link href="/web-design">
                  <li>Web Design & Development</li>
                </Link>
                <Link href="/branding">
                  <li>Branding</li>
                </Link>
                <Link href="/social-media">
                  <li>Social Media</li>
                </Link>
              </ul>
            </div>
            <div>
              <h3>Packages</h3>
              <ul>
                <Link href="/packages/small-business">
                  <li>Small Business Package</li>
                </Link>
                <Link href="/packages/social-media">
                  <li>Social Media Package</li>
                </Link>
              </ul>
            </div>

            <div>
              <h3>Contact Us</h3>
              <ul>
                <li>info@pixelite.digital</li>
                <li>07305 383169</li>
              </ul>
              <div id="social-icons">
                <Link
                  href="https://www.facebook.com/pixelite.digital/"
                  target="_blank"
                >
                  <img src="/assets/icons/facebook.png" />
                </Link>
                <Link
                  href="https://www.facebook.com/pixelite.digital/"
                  target="_blank"
                >
                  <img src="/assets/icons/twitter.png" />
                </Link>
                <Link
                  href="https://www.instagram.com/pixelite.digital/"
                  target="_blank"
                >
                  <img src="/assets/icons/instagram.png" />
                </Link>
                <Link
                  href="https://www.facebook.com/pixelite.digital/"
                  target="_blank"
                >
                  <img src="/assets/icons/linkedin.png" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div id="legal">
          <ul>
            <Link href="/privacy-policy">
              <li>Privacy Policy</li>
            </Link>
            <Link href="/tos">
              <li>Terms & Conditions</li>
            </Link>
            <Link href="/complaints-procedure">
              <li>Complaints Procedure</li>
            </Link>
          </ul>
        </div>
      </div>
    );
  }
}
