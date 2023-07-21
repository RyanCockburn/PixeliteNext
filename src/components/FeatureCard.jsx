import React from "react";

export default class FeatureCard extends React.Component {

    constructor(props){
        super(props)
        this.feature = props.feature
        this.description = props.description    ;
        this.benefits = props.benefits;
    }

    isAdvanced(){
        return this.package === "Advanced";
    }


    render(){
        return(
            <div className="price-card">
                <h3><span className="pixelite-blue">{this.feature}</span></h3>
                <p>{this.description}</p>
                <ul>
                {this.benefits.map(benefit => <div key={benefit}><img src="https://pixelite.digital/assets/icons/checkmark.svg"/><li>{benefit}</li></div>)}
                </ul>
            </div>
        )
    }
}
