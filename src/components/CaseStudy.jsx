import Link from "next/link";
import React from "react";

const categories = {
  WebDesign: "Web Design",
  WebDevelopment: "Web Development",
  SEO: "SEO",
  GraphicDesign: "Graphic Design",
  SocialMedia: "Social Media",
};

async function exists(url) {
  let result = await fetch(url, { method: "HEAD" });
  return result.ok;
}

export default class CaseStudy extends React.Component {
  constructor(props) {
    super(props);
    this.name = props.name;
    this.location = props.location;
    this.description = props.description;
    this.categories = props.categories;
    this.url = "http://localhost:3000/our-work/" + this.getName();
    this.state = {
      hasOwnPage: false,
    };
    this.isLeft = props.isLeft;
    this.formatCategories();
  }

  setOwnPageVal = (e) => {
    this.setState({ hasOwnPage: e });
  };

  componentDidMount() {
    console.log(
      exists("http://localhost:3000/our-work/" + this.getName()).then(
        (response) => {
          const theResponse = response;
          this.setOwnPageVal(theResponse);
        }
      )
    );
  }
  validateCategories() {
    this.categories.forEach((category) => {
      if (!(category in categories)) {
        return false;
      }
    });
    return true;
  }

  formatCategories() {
    for (let i = 0; i < this.categories.length; i++) {
      var stringRep = categories[this.categories[i]];
      this.categories[i] = stringRep; 
    }
  }

  getCategories(){
    return this.categories.join(" • ")
  }

  getName() {
    return this.name.replace(" ", "_");
  }

  render() {
    var hasOwnPage = this.state.hasOwnPage;
    var className = this.isLeft ? "case-study left" : "case-study";
    return (
      <div className={className}>
        <div className="case-study-contents">
          <h2>{this.name}</h2>
          <h5>{this.getCategories()}</h5>
          <p>{this.description}</p>
          {hasOwnPage ? (
            <Link href={this.url}><button class="button">View the full case study</button></Link> ) :( null
          )}
        </div>
        <div className="case-study-image">
          <img src={`/assets/clients/${this.getName()}.png`} />
        </div>
      </div>
    );
  }
}
