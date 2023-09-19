import React from "react";
import "./About.css";
import { Typography } from "@material-ui/core";

const About = () => {
  return (
    <div className="about_outer">
      <div className="about_inner">
        <div className="about_typo1">
        <Typography variant="h3">Travel to make memories all around the world</Typography>
        </div>
        <div className="about_typo2">
        <Typography variant="h6">Find trips that fit a flexible lifestyle</Typography>
        </div>
      </div>
    </div>
  );
};

export default About;
