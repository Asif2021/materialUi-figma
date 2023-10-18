import React from "react";
import { Typography } from "@material-ui/core";
import "./Hero.css";
import Frame5 from "../Frame5/Frame5";

const Hero = () => {
  return (
    <div className="hero_outer">
      <div className="hero_inner">
        <div className="typo1">
          <Typography variant="h2">
            Book Business Class Flights For Less
          </Typography>
          <img src="./images/vectorLine.svg" alt="vector" className="vector" />
        </div>

        <div className="typo2">
          <Typography variant="h6">
            Save thousands of dollars per ticket booked while enjoying real
            human customer support
          </Typography>
        </div>
        <div className="Ellipse_15"> </div>
      </div>
      <Frame5 />
    </div>
  );
};

export default Hero;
