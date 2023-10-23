import { Typography, Button } from "@mui/material";

const FlightCard = () => {
  const currTime = new Date().toLocaleTimeString();

  return (
    <div className="flightcard_outer">
      <div className="filghtcard_top">
        <div>
          <img src="./images/emirates.svg" alt="emirates" />
        </div>
        <div>
          <Typography variant="h6">AKL</Typography>
          {currTime}
        </div>
        <div>
          <img src="./images/flightcard_line.svg" alt="flightcardLine" />
          <Typography> non-stop </Typography>
        </div>
        <div>
          <Typography variant="h6">SGN</Typography>
          {currTime}
        </div>
      </div>
      <div className="flightcard_middle">
        <img src="./images/frame1138.svg" alt="frame1138" />
      </div>
      <div className="flightcard_bottom">
        <Typography variant="h3">$3,256</Typography>
        <Button variant="outlin">Book Flight <img src="./images/arrowicon.svg" alt="arrow" /> </Button>
      </div>
    </div>
  );
};

export default FlightCard;
