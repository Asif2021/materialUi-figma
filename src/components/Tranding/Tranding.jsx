import React from "react";
import "./Tranding.css";
import { Box, Typography, Button } from "@mui/material";
import TrandingFlightCard from './TrandingFlightCard'

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
        <Box className="tanding_left">
            <TrandingFlightCard/>
        </Box>

        <Box className="tanding_right">
        <TrandingFlightCard/>
        </Box>
      </Box>
    </Box>
  );
};

export default Tranding;
