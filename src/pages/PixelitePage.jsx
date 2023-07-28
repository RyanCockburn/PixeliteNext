import React from "react";
import { Helmet } from 'react-helmet';

import Head from 'next/head';
import Script from "next/script";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default class PixelitePage extends React.Component {

    constructor(props){
        super(props)
    }

    componentDidMount(){
        document.title = this.props.title;
    }



    render(){
        return(
            <div>
            <Head>
                <meta charSet="utf-8"/>
                <link rel="icon" type="image/x-icon" href="https://pixelite.digital/assets/pd-fancy.png"/>
                <title>Pixelite | {this.props.title}</title>
                <link rel="canonical" href={"https://pixelite.digital/" + this.props.meta.url}/>
                <meta property="og:description" content={this.props.meta.description}/>
                <meta name="description" content={this.props.meta.description}/>
                <meta property="og:type" content="website"/>
                <meta property= "og:title" content={"Pixelite Digital | " + this.props.meta.title}/>
                <meta property= "og:image" content="https://pixelite.digital/assets/pd-fancy.png"/>
                <meta property="og:url" content={"https://pixelite.digital/" + this.props.meta.url}/>
                <meta name="twitter:image" content="https://pixelite.digital/assets/pd-fancy.png"/>
                <meta name="twitter:title" content={"Pixelite Digital | " + this.props.meta.title}/>
                <meta property="twitter:description" content={this.props.meta.description}/>
                <Script id="script" src="../assets/scripts.js" strategy='beforeInteractive'></Script>
            </Head>
            <Header 
            desktopHeader= {this.props.desktopHeader}
            mobileHeader= {this.props.mobileHeader}
            desktopSubheader={this.props.desktopSubheader}
            mobileSubheader={this.props.mobileSubheader}/>
            {this.props.page}
            <Footer/>
            </div>
        );
    }
}