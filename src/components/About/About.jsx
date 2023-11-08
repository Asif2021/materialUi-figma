import React, { useEffect, useState, useContext } from "react";
import "./About.css";
import { Typography } from "@material-ui/core";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Button } from "@material-ui/core";
import SwipeableTextMobileStepper from "./Stepper";
import Context from "../Tranding/Context";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const About = () => {
  const { setValue, setLoading} = useContext(Context);
 
  async function getData() {
    setLoading(true);
    const url = "https://fakestoreapi.com/products";
       const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'd53d2d50d1msh2a1aa8c7c5e8982p19b490jsnfbbe41ccc07d',
        'X-RapidAPI-Host': 'timetable-lookup.p.rapidapi.com'
      }
    };
    
    try {
      const response = await fetch(url, options);
      const result = await response.text();
      console.log(response);
      setLoading(false);
      setValue(result);
    } catch (error) {
      console.error(error);
    }
  }


  return (
    <div className="about_outer">
      <div className="about_typo1">
        <Typography variant="h3">
         Travel to make memories all around the world
        </Typography>
        <Typography variant="h6">
          Find trips that fit a flexible lifestyle
        </Typography>
      </div>

      <Box className="about_container">
        <Grid container spacing={2}>
          <Grid item sm={12} md={4} className="feature_section">
            <Box className="feature1">
              <span
                className="feature1_span"
                style={{ backgroundColor: "#8BC5E5" }}
              >
                01
              </span>
              <Typography variant="h5" className="feature1_typo1">
                Dedicated Rep
              </Typography>
              <Typography variant="body1" className="feature1_typo2">
                Have a dedicated point of contact for all of your travel needs.
              </Typography>
            </Box>
            <Box className="feature1">
              <span
                className="feature1_span"
                style={{ backgroundColor: "#92A5EF" }}
              >
                02
              </span>
              <Typography variant="h5" className="feature1_typo1">
                Fast booking
              </Typography>
              <Typography variant="body1" className="feature1_typo2">
                Have all of your flight options available when you make your
                request.
              </Typography>
            </Box>
            <Box className="feature1">
              <span
                className="feature1_span"
                style={{ backgroundColor: "#58C27D" }}
              >
                03
              </span>
              <Typography variant="h5" className="feature1_typo1">
                Business Class
              </Typography>
              <Typography variant="body1" className="feature1_typo2">
                Yes, we wrote that as a benefit. At the end of the day you get
                to enjoy business class benefits at economy level pricing.
              </Typography>
            </Box>
            <Button className="feature1_button" onClick={()=>{getData()}}>
              Start your search
            </Button>
          </Grid>
          <Grid item md={2}></Grid>
          <Grid item sm={12} md={6} className="about_image_section">
            <SwipeableTextMobileStepper />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default About;
