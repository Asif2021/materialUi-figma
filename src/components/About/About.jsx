import React from "react";
import "./About.css";
import { Typography } from "@material-ui/core";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const About = () => {
  return (
    <div className="about_outer">
      <div className="about_inner">
        <div className="about_typo1">
          <Typography variant="h3">
            Travel to make memories all around the world
          </Typography>
        </div>

        <div className="about_typo2">
          <Typography variant="h6">
            Find trips that fit a flexible lifestyle
          </Typography>
        </div>
        
        <div className="about_container">
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <div className="feature1">
                <div className="feature1_div">01</div>
                <Typography variant="h5" className="feature1_typo1">
                  Dedicated Rep
                </Typography>
                <Typography variant="p" className="feature1_typo2">
                  Have a dedicated point of contact for all of your travel
                  needs.
                </Typography>
             <div className="feature1_div" style={{background:'#92A5EF'}}>02</div>
              <Typography variant="h5" className="feature1_typo1">
              Fast booking
                </Typography>
                <Typography variant="p" className="feature1_typo2">
                Have all of your flight options available when you make your request.
                </Typography>
              
              <div className="feature1_div" style={{background:'#58C27D'}}>03</div>
              <Typography variant="h5" className="feature1_typo1">
              Business Class
                </Typography>
                <Typography variant="p" className="feature1_typo2">
                Yes, we wrote that as a benefit. At the end of the day you get to enjoy business class benefits at economy level pricing.
                </Typography>
              
              </div>
            </Grid>
            <Grid item xs={6}>
              <Item>xs=8</Item>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default About;
