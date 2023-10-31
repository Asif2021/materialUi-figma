import React from "react";
import { Box, Typography, Button } from "@mui/material";

const TrandingFlightCard = (props) => {
  const { data } = props
  return (
        <Box className="tranding_card_outer" key={data.id}>
         <Box className="tranding_upper">
         <img src={data.image} alt="emirates" />
          <Box className="tranding_inner">
            <Box className='tranding_box'>
              <Typography variant="h6">{data.fname}</Typography>
              <span>{data.ftime}</span>
            </Box>
            <Box className='tranding_box'>
              <img src="./images/tranding_line.svg" alt="line" />
              <Typography>
                <span>{data.stop}</span>
              </Typography>
            </Box>
            <Box className='tranding_box'>
              <Typography variant="h6">{data.lname}</Typography>
              <span>{data.ltime}</span>
            </Box>
          </Box>
        </Box>
        <Box className="tranding_upper">
          <img src={data.image} alt="emirates" />
          <Box className="tranding_inner">
            <Box className="tranding_box">
              <Typography variant="h6">{data.fname}</Typography>
              <span>{data.ftime}</span>
            </Box>
            <Box className="tranding_box">
              <img src="./images/tranding_line.svg" alt="line" />
              <Typography>
                <span> {data.stop}</span>
              </Typography>
            </Box>
            <Box className="tranding_box">
              <Typography variant="h6">{data.lname}</Typography>
              <span>{data.ltime}</span>
            </Box>
          </Box>
        </Box>
        <img src="./images/tranding_divider.svg" alt="divider" className="tranding_image" />
        <Box className="tranding_bottom">
          <Typography variant="h4">{data.price}</Typography>
          <Button variant="contained" className="tranding_bottom_button">
            Book Flight <img src="./images/arrowicon.svg" alt="arrow" />
          </Button>
        </Box>
        </Box>
      
     
  );
};

export default TrandingFlightCard;
