import React from "react";
import "./HowItWorks.css";
import { Typography, Grid, Box } from "@mui/material";

const HowItWorks = () => {
  return (
    <Box className="howItWorks_outer">
      <Box className="howItWorks_typos">
        <Typography variant="h3">How it Works</Typography>
        <Typography variant="body1" className="howItWorks_typos_body1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </Typography>
      </Box>

      <Box className="howItWorks_container">
        <Box className="howItWorks_image">
          <img src="./images/illustration.png" alt="illustration" />
        </Box>
        <Box className="imagewithsteps">
          <Box className="howItWorks_images_section">
            <img
              src="./images/blue_check.svg"
              alt="blue_Check"
              style={{ width: "100%", height: "30px", display:{md:'flex', sm:'none'}}}
            />
            <img
              src="./images/dottedLine.svg"
              alt="dotted_Border"
              style={{ width: "100%", height: "108px", marginTop: "30px", display:{md:'flex', sm:'none'} }}
            />
            <img
              src="./images/blue_check.svg"
              alt="blue_Check"
              style={{ width: "100%", height: "30px", marginTop: "30px", display:{md:'none', sm:'flex'} }}
            />
            <img
              src="./images/dottedLine.svg"
              alt="dotted_Border"
              style={{ width: "100%", height: "112px", marginTop: "30px", display:{md:'flex', sm:'none'} }}
            />
            <img
              src="./images/blue_check.svg"
              alt="blue_Check"
              style={{ width: "100%", height: "30px", marginTop: "30px", display:{md:'flex', sm:'none'} }}
            />
          </Box>
          <Box className="stepswithTypos">
            <Box className="howItWorks_steps">
              <Typography variant="h6">STEP 1</Typography>
              <Typography variant="h4"> Search Flights</Typography>
              <Typography
                variant="body2"
                className="howItWorks_step_div2_body2"
              >
                Enter flight destination and dates. Click search
              </Typography>
            </Box>
            <Box className="howItWorks_steps">
              <Typography variant="h6">STEP 2</Typography>
              <Typography variant="h4"> Save on Business Class</Typography>
              <Typography
                variant="body2"
                className="howItWorks_step_div2_body2"
              >
                Find your preferred flight at a 30-60% discount.
              </Typography>
            </Box>
            <Box className="howItWorks_steps-bottom">
              <Typography variant="h6">STEP 3</Typography>
              <Typography variant="h4"> Book Flight</Typography>
              <Typography variant="body2" className="howItWorks_step_div2_body2_bottom">
                Book and enjoy business class luxury with world class human
                support.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default HowItWorks;
