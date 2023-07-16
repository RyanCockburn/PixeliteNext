import Link from "next/link";
import React from "react";

import {
  GlobeAltIcon,
  HomeIcon,
  InformationCircleIcon,
  PhoneIcon,
} from "@heroicons/react/24/solid";

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      desktopHeader: props.desktopHeader,
      mobileHeader: props.mobileHeader,
      desktopSubheader: props.desktopSubheader,
      mobileSubheader: props.mobileSubheader,
    };
  }

  render() {
    return (
      <div id="upper-section">
        <ul className="nav-menu">
          <div id="menu-header">
            <img src="/assets/pixelite-digital-white-blue.png/" width="150" />
          </div>
          <nav>
            <li className="nav-item">
              <a href="/" className="nav-link">
                <HomeIcon className="h-24 w-24" />
                <p>Home</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="/about" className="nav-link">
                <InformationCircleIcon className="h-24 w-24" />
                <p>About</p>
              </a>
            </li>
            <li className="nav-item">
              <div className="nav-link expandable">
                <GlobeAltIcon className="h-24 w-24" />
                <p>Services</p>
                <div className="triangle"/>
              </div>
              <div className="sub-menu">
                <div>
                  <Link href="/web-design"><p>Web design & Development</p></Link>
                </div>
                <div>
                  <p>Social Media Management</p>
                </div>
              </div>
            </li>
            <li className="nav-item">
              <a href="/contact" className="nav-link">
                <PhoneIcon className="h-24 w-24" />
                <p>Contact</p>
              </a>
            </li>
          </nav>
        </ul>
        <nav>
          <a href="./">
            <img
              src="assets/pixelite-digital-white-blue.png"
              alt="Pixelite Digital Agency Logo"
            ></img>
          </a>

          <div className="hamburger" onClick={this.hamburgerOperation}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
          <div>
            <p className="desktop-show">About</p>
            <p className="desktop-show">Services</p>
            <p className="desktop-show">Blog</p>
          </div>
        </nav>
        <div id="hero">
          <h1 className="pixelite-header mobile-show">
            {this.state.mobileHeader}
          </h1>
          <h1 className="pixelite-header tablet-show">
            {this.state.desktopHeader}
          </h1>
          <br />
          <br className="mobile-break" />
          <h6 className="pixelite-subheader mobile-show">
            {this.state.mobileSubheader}
          </h6>
          <h6 className="pixelite-subheader tablet-show">
            {this.state.desktopSubheader}
          </h6>
          <div id="hero-buttons">
            <button className="button">Get a Quote</button>
          </div>
        </div>
        <div id="statistics-container">
          <div className="stats-smallscreen">
            <h2 className="pixelite-header countup">237</h2>
            <h3 className="countup-header countup">Projects Completed</h3>
          </div>
          <div className="desktop-show">
            <h2 className="pixelite-header countup">237</h2>
            <h3 className="countup-header countup">Projects Completed</h3>
          </div>
          <div className="desktop-show">
            <h2 className="pixelite-header countup">49</h2>
            <h3 className="countup-header countup">Happy Customers</h3>
          </div>
          <div className="desktop-show">
            <h2 className="pixelite-header countup">331</h2>
            <h3 className="countup-header countup">Digital Products Sold</h3>
          </div>
        </div>
      </div>
    );
  }
}
