import React from "react";
import "./Tranding.css";
import { Box, Typography, Button } from "@mui/material";
import TrandingFlightCard from "./TrandingFlightCard";
import data from '../../data.json';

const Tranding = () => {
  return (
    <Box className="tranding_outer">
      <Box className="tranding_typos">
        <Typography variant="h3"> Trending Deals </Typography>
        <Typography variant="body1" className="tranding_typos_body1">
          Find and book a great experience.
        </Typography>
      </Box>
      <Box className="tranding_container"> 
            <TrandingFlightCard />
      </Box>
      <Button variant="outline" className="tranding_showmore_button">
         <img src="./images/loading.svg" alt="loading" /> show more
      </Button>
    </Box>
  );
};

export default Tranding;
