import { Typography, Button, Box } from "@mui/material";

const FlightCard = () => {
  const currTime = new Date().toLocaleTimeString();

  return (
    <Box className="flightcard_outer">
      <Box className="filghtcard_top">
          <img src="./images/emirates.svg" alt="emirates" />
        <Box>
          <Typography variant="h6">AKL</Typography>
          {currTime}
        </Box>
        <Box>
          <img src="./images/flightcard_line.svg" alt="flightcardLine" />
          <Typography> non-stop </Typography>
        </Box>
        <Box>
          <Typography variant="h6">SGN</Typography>
          {currTime}
        </Box>
      </Box>
      <Box className="flightcard_middle">
        <img src="./images/frame1138.svg" alt="frame1138" />
      </Box>
      <Box className="flightcard_bottom">
        <Typography variant="h3">$3,256</Typography>
        <Button variant="outlin">Book Flight <img src="./images/arrowicon.svg" alt="arrow" /> </Button>
      </Box>
    </Box>
  );
};

export default FlightCard;
