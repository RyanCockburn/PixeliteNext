import React from "react";

export default class Section extends React.Component{

    constructor(props){
        super(props);
        console.log(props)
        this.title = props.title;
        this.text = props.text;
        this.image = props.image;
    }

    render(){
        return (
            <section className="pixelite-info">
                <div>
                    <h1>{this.title}</h1>
                    {this.text.map(paragraph => <p>{paragraph}</p>)}
                </div>
                <img src={this.image}></img>
            </section>
        );
    }

}