import React from "react";


const categories = {
    WebDesign: "Web Design",
    WebDevelopment: "Web Development",
    SEO: "SEO",
    GraphicDesign: "Graphic Design",
    SocialMedia: "Social Media"
}

export default class CaseStudy extends React.Component {


    constructor(props){
        super(props)
        this.name = props.name;
        this.location = props.location
        this.categories = props.categories;
        console.log("Test " + props)
    }

    validateCategories(){
        this.categories.forEach(category => {
            if(!(category in categories)){
                return false;
            }
        });
        return true;
    }


    formatCategories(){
        var returnString = "";
        for(let i = 0; i < this.categories.length; i++){
            var stringRep = categories[this.categories[i]]
            if(this.categories.length == 1){
                return stringRep;
            }
            if(i != this.categories.length - 1){
                returnString = returnString + stringRep;
                if(i + 1 != this.categories.length - 1){
                    returnString = returnString + ","
                }
            }else{
                returnString = returnString + " & " + stringRep
            }
        }
        return returnString;
    }

    hasExclusivePage(){
        
    }


    render(){
        return(
            <div className="case-study">
                <h1>{this.name}</h1>
            </div>
        )
    }
}
