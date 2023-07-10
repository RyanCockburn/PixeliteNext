import React from "react";


export default class Footer extends React.Component {
    render(){
        return (
            <div id="footer">
                <img src="assets/pixelite-digital-white-blue.png"></img>
                <section id="what-we-do">
                    <h3>What we do</h3>
                    <ul>
                        <li>Web Design & Development</li>
                        <li>Branding & Design</li>
                        <li>Social Media</li>
                    </ul>
                </section>
                <section id="contact">
                    <h3>Contact Us</h3>
                    <ul>
                        <li>info@pixelite.digital</li>
                    </ul>
                </section>
                <div id="social-icons">
                    <img src="assets/icons/facebook.png"/>
                    <img src="assets/icons/twitter.png"/>
                    <img src="assets/icons/instagram.png"/>
                    <img src="assets/icons/linkedin.png"/>

                </div>
            </div>
        );
    }
}