import Link from "next/link";
import React from "react";


import Image from "next/image";



import {
  ArchiveBoxIcon,
  GlobeAltIcon,
  HomeIcon,
  InformationCircleIcon,
  PhoneIcon
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

  lockScroll() {
    if (document.body.style.overflowY === "hidden") {
      document.body.style.overflowY = "visible";
    } else {
      document.body.style.overflowY = "hidden";
      console.log("Locked scroll");
    }
  }

  expand(expandable) {
    expandable = expandable.target
    const navItem = expandable.closest(".nav-item")
    const subMenu = navItem.querySelectorAll(".sub-menu")[0];
    const triangle = navItem.querySelectorAll(".triangle")[0];
    subMenu.classList.toggle("active");
    triangle.classList.toggle("active");
  }

  hamburgerClick() {
    const hamBurger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");

    hamBurger.classList.toggle("active");
    navMenu.classList.toggle("active");
    lockScroll();
  }

  optionExpand(expandable){
    const target = expandable.target;
    const navLink = target.closest(".nav-link")
    const subMenu = navLink.querySelectorAll(".desktop-sub-menu")[0];
    subMenu.classList.toggle("active");
    console.log(navLink)
  }

  optionShrink(expandable){
    const target = expandable.target;
    const navLink = target.closest(".nav-link")
    const subMenu = navLink.querySelectorAll(".desktop-sub-menu")[0];
    subMenu.classList.toggle("active");
    console.log(navLink)

  }

  render() {
    return (
      <div id="upper-section">
        <ul className="nav-menu">
          <div id="menu-header">
            <Image src="/assets/PixeliteDigitalLogo.png" alt="Pixelite Digital logo on a dark background" width="150" height="60"/>
          </div>
          <nav>
            <li className="nav-item">
              <a href="../" className="nav-link">
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
              <div className="nav-link expandable" onClick={this.expand}>
                <GlobeAltIcon className="h-24 w-24" />
                <p>Services</p>
                <div className="triangle" />
              </div>
              <div className="sub-menu active">
                <div>
                  <Link href="/web-design">
                    <p>Web design & Development</p>
                  </Link>
                </div>
                <div>
                <Link href="/social-media">
                    <p>Social Media Management</p>
                  </Link>
                </div>
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-link expandable" onClick={this.expand}>
                <ArchiveBoxIcon className="h-24 w-24" />
                <p>Packages</p>
                <div className="triangle" />
              </div>
              <div className="sub-menu">
                <div>
                  <Link href="/packages/small-business">
                    <p>Small Business Package</p>
                  </Link>
                  <Link href="/packages/social-media-package">
                    <p>Social Media Package</p>
                  </Link>
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
          <a href="../">
            <img
              src="/assets/PixeliteDigitalLogo.png"
              alt="Pixelite Digital Agency Logo"
            ></img>
          </a>

          <div className="hamburger" onClick={this.hamburgerClick}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
          <div>
            <Link href="/about"><p className="desktop-show">About</p></Link>
            <div className="nav-link expandable" onMouseOver={this.optionExpand} onMouseOut={this.optionShrink}>
              <p className="desktop-show">Services</p>
              <div className="desktop-sub-menu">
                <div>
                  <Link href="/web-design">
                    <p>Web Design & Development</p>
                  </Link>
                </div>
                <div>
                  <Link href="/social-media">
                    <p>Social Media</p>
                  </Link>
                </div>
              </div>
            </div>
            <div className="nav-link expandable" onMouseOver={this.optionExpand} onMouseOut={this.optionShrink}>
              <p className="desktop-show">Packages</p>
              <div className="desktop-sub-menu">
                <div>
                  <Link href="/packages/small-business">
                    <p>Small Business Package</p>
                  </Link>
                </div>
                <div>
                  <Link href="/packages/social-media-package">
                    <p>Social Media Package</p>
                  </Link>
                </div>
              </div>
            </div>
    

            <Link href="/contact"><p className="desktop-show">Contact</p></Link>
          </div>
        </nav>
        <div id="hero">
          <h1 className="pixelite-header mobile-show">
            {this.state.mobileHeader}
          </h1>
          <h1 className="pixelite-header tablet-show">
            {this.state.desktopHeader}
          </h1>

          <h6 className="pixelite-subheader mobile-show">
            {this.state.mobileSubheader}
          </h6>
          <h6 className="pixelite-subheader tablet-show">
            {this.state.desktopSubheader}
          </h6>
          <div id="hero-buttons">
            <button className="button"><a href="/contact">Get in touch</a></button>
          </div>
        </div>
        <div id="statistics">
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
      </div>
    );
  }
}
