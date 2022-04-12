import React from "react";
import Links from "./links";

function About(props) {
  if (!props.bio) {
    return ""
  }
  return (
    <div id="about">
      <h2>About Me</h2>
      
      <p>{props.bio}</p>
      <Links github={props.links.github} linkedin={props.links.linkedin}/>
    </div>
  );
}

export default About;
