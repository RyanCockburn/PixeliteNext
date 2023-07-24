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

  getName() {
    return this.name.replace(" ", "_");
  }

  render() {
    var hasOwnPage = this.state.hasOwnPage;
    return (
      <div className="case-study">
        <h4>{this.name}</h4>
        <div className="case-study-image">
          <img src={`/assets/clients/${this.getName()}-Logo.png`} />
        </div>
        <p>{this.location}</p>
        <br />
        <p>{`${this.description}`}</p>
        <ul className="categories">
          {this.categories.map((category) => (
            <li key={category}>{category}</li>
          ))}
        </ul>
        {hasOwnPage ? (
          <a href={this.url}>
            <button className="button">Learn More</button>
          </a>
        ) : null}
      </div>
    );
  }
}
