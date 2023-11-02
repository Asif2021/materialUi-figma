import { Box, Typography,Button } from "@mui/material";
import React from "react";
import "./GetApp.css";


const GetApp = () => {
  return (
    <Box className="getapp_outer">
      <Box className="getapp_left">
        <Typography variant="body2"> supercharge your planning powers </Typography>
        <Typography variant="h3"> Travel to make memories all around the world </Typography>
        <Typography variant="body1" className="getapp_body"> Stacks is a production-ready library of stackable content blocks built in React Native. </Typography>
        <Button variant="outline" className="getapp_button">
        speak with an agent
      </Button>
      </Box>
      <Box className="getapp_right">
        <img src="./images/getapp.png" alt="getapp" />
      </Box>
    </Box>
  );
};

export default GetApp;
