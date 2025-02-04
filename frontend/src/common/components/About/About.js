import React from "react";
import "./About.css";

function About({banner, text}) {
    return (
      <div className="About">
            {/* <h1>{banner}</h1> */}
            <img className="banner-image" src={banner}/>
            <p>{text}</p>
            <button>Know More</button>
            <br></br>
      </div>
    );
}

export default About;