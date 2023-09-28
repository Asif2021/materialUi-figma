import React from "react";
import "./HowItWorks.css";
import { Typography, Grid } from "@mui/material";

const HowItWorks = () => {
  return (
    <div className="howItWorks_outer">
      <div className="howItWorks_inner">
        <Typography variant="h3">How it Works</Typography>
        <Typography variant="p">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </Typography>
      </div>

      <div>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <div>
              <img src="./images/illustration.png" alt="illustration" />
            </div>
          </Grid>
          <Grid item xs={4}>
            <div>xs=4</div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default HowItWorks;
