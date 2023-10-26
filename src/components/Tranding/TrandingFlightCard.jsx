import React from "react";
import { Box, Typography, Button } from "@mui/material";

const TrandingFlightCard = () => {
  return (
    <React.Fragment>
      <Box className="tranding_upper">
        <img src="./images/emirates.svg" alt="emirates" />
        <Box className="tranding_inner">
          <Box>
            <Typography variant="h6">AKL</Typography>
            <span>6:45 AM</span>
          </Box>
          <Box>
            <img src="./images/tranding_line.svg" alt="line" />
            <Typography>
              <span> non-stop</span>
            </Typography>
          </Box>
          <Box>
            <Typography variant="h6">SGN</Typography>
            <span>9:45 AM</span>
          </Box>
        </Box>
      </Box>
      <Box className="tranding_upper">
        <img src="./images/emirates.svg" alt="emirates" />
        <Box className="tranding_inner">
          <Box>
            <Typography variant="h6">AKL</Typography>
            <span>6:45 AM</span>
          </Box>
          <Box>
            <img src="./images/tranding_line.svg" alt="line" />
            <Typography>
              <span> non-stop</span>
            </Typography>
          </Box>
          <Box>
            <Typography variant="h6">SGN</Typography>
            <span>9:45 AM</span>
          </Box>
        </Box>
      </Box>
      <img src="./images/tranding_divider.svg" alt="divider" />
      <Box className="tranding_bottom">
        <Typography variant="h3">$3,256</Typography>
        <Button variant="contained" className="tranding_bottom_button">
          Book Flight <img src="./images/arrowicon.svg" alt="arrow" />
        </Button>
      </Box>
    </React.Fragment>
  );
};

export default TrandingFlightCard;
