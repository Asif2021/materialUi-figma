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

      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          <img src="./images/illustration.png" alt="illustration" />
        </Grid>
        <Grid md={1}>
        <img src="./images/blue_check.svg" alt="svg" />
        </Grid>

        <Grid item xs={12} md={3}>
          <span className="howItWorks_step">STEP 1</span>
          <div>
            <span className="howItWorks_step_span">
             <Typography variant="h4"> Search Flights</Typography>
            </span>
            <Typography variant="p">
            
              Enter flight destination and dates. Click search
            </Typography>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default HowItWorks;
