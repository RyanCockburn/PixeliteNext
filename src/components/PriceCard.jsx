import React from "react";

export default class PriceCard extends React.Component {

    constructor(props){
        super(props)
        this.service = props.service
        this.package = props.package;
        this.catchPhrase = props.catchPhrase;
        this.price = props.price;
        this.benefits = props.benefits;
    }

    isAdvanced(){
        return this.package === "Advanced";
    }

    getPackageName(){
        return this.package.toLowerCase();
    }

    render(){
        return(
            <div className="price-card">
                {this.isAdvanced() ? console.log("Advanced") : console.log("not")}
                <h3><span className={this.isAdvanced() ? "pixelite-blue" : "pixelite-grey"}>{this.package}</span></h3>
                <p>{this.catchPhrase}</p>
                <h2><span className="price-small">£</span>{this.price}</h2>
                <ul>
                {this.benefits.map(benefit => <div key={benefit}><img src="assets/icons/checkmark.svg"/><li>{benefit}</li></div>)}
                </ul>
                <a href={"/" + this.service + "/" + this.getPackageName()}><button className="button">Full Details</button></a>
            </div>
        )
    }
}
