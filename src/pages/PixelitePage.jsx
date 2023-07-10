import React from "react";
import { Helmet } from 'react-helmet';

import Head from 'next/head';
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
                <link rel="canonical" href={"https://pixelite.digital/" + this.props.meta.url}/>
                <meta property="og:description" content={this.props.meta.description}/>
                <meta name="description" content={this.props.meta.description}/>
                <meta property="og:type" content="website"/>
                <meta property= "og:title" content={"Pixelite Digital | " + this.props.meta.title}/>
                <meta property="og:url" content={"https://pixelite.digital/" + this.props.meta.url}/>

                <meta name="twitter:title" content={"Pixelite Digital | " + this.props.meta.title}/>
                <meta property="twitter:description" content={this.props.meta.description}/>
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