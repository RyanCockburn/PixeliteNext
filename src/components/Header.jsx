import React from "react";


export default class Header extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            desktopHeader: props.desktopHeader,
            mobileHeader: props.mobileHeader,
            desktopSubheader: props.desktopSubheader,
            mobileSubheader: props.mobileSubheader
        }

    }

    render(){
        return (
            <div id="upper-section">
                <nav>
                    <a href="./"><img src="assets/pixelite-digital-white-blue.png" alt="Pixelite Digital Agency Logo"></img></a>
                    <div>
                    <p className="desktop-show">About</p>
                    <p className="desktop-show">Services</p>
                    <p className="desktop-show">Blog</p>
                    </div>
                </nav>
                <div id="hero">
                    <h1 className="pixelite-header mobile-show">{this.state.mobileHeader}</h1>
                    <h1 className="pixelite-header tablet-show">{this.state.desktopHeader}</h1>
                    <br/>
                    <br className="mobile-break"/>
                    <h6 className="pixelite-subheader mobile-show">{this.state.mobileSubheader}</h6>
                    <h6 className="pixelite-subheader tablet-show">{this.state.desktopSubheader}</h6>
                    <div id="hero-buttons">
                        <button className="button">Get a Quote</button>
                        <button className="button tablet-show">Our Work</button>
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