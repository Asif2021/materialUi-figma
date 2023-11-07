import React from "react";
import { Box, Typography, Button } from "@mui/material";

const TrandingFlightCard = (item) => {
  const { data } = item
  return (
        <Box className="tranding_card_outer" key={data.id}>
         <Box className="tranding_upper">
         <img src="./images/emirates.svg" alt="emirates" />
          <Box className="tranding_inner">
            <Box className='tranding_box'>
              <Typography variant="h6">KCH</Typography>
              <span>09:60</span>
            </Box>
            <Box className='tranding_box'>
              <img src="./images/tranding_line.svg" alt="line" />
              <Typography>
                <span>non-stop</span>
              </Typography>
            </Box>
            <Box className='tranding_box'>
              <Typography variant="h6">LHR</Typography>
              <span>12:00</span>
            </Box>
          </Box>
        </Box>
        <Box className="tranding_upper">
          <img src="./images/emirates.svg" alt="emirates" />
          <Box className="tranding_inner">
            <Box className="tranding_box">
              <Typography variant="h6">LHR</Typography>
              <span>12:00</span>
            </Box>
            <Box className="tranding_box">
              <img src="./images/tranding_line.svg" alt="line" />
              <Typography>
                <span> non-stop</span>
              </Typography>
            </Box>
            <Box className="tranding_box">
              <Typography variant="h6"> BWP </Typography>
              <span>07:10</span>
            </Box>
          </Box>
        </Box>
        <img src="./images/tranding_divider.svg" alt="divider" className="tranding_image" />
        <Box className="tranding_bottom">
          <Typography variant="h4">$ {data.price}</Typography>
          <Button variant="contained" className="tranding_bottom_button">
            Book Flight <img src="./images/arrowicon.svg" alt="arrow" />
          </Button>
        </Box>
        </Box>
      
     
  );
};

export default TrandingFlightCard;
