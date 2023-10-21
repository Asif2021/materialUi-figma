import React from "react";
import "./HowItWorks.css";
import { Typography, Grid } from "@mui/material";

const HowItWorks = () => {
  return (
    <div className="howItWorks_outer">
      <Typography variant="h3">How it Works</Typography>
      <Typography variant="body1">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit
      </Typography>

      <Grid container>
        <Grid item xs={12} md={7}>
          <img src="./images/illustration.png" alt="illustration" />
        </Grid>
        
        <Grid item xs={12} md={5}>
          <span className="howItWorks_step">STEP 1</span>
          <div>
            <div className="howItWorks_step_span1">
            <img src="./images/blue_check.svg" alt="svg" />
             <Typography variant="h4"> Search Flights</Typography>
            </div>
            <div className="howItWorks_step_span2">
            <img src="./images/blue_check.svg" alt="svg" />
            <Typography variant="body2">
              Enter flight destination and dates. Click search
            </Typography>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default HowItWorks;
