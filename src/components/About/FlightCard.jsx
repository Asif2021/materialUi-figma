import { Typography, Button } from "@mui/material";

const FlightCard = () => {
  const currTime = new Date().toLocaleTimeString();

  return (
    <div className="flightcard_outer">
      <div className="filghtcard_top">
        <span>
          <img src="./images/emirates.svg" alt="emirates" />
        </span>
        <span>
          <Typography variant="h6">AKL</Typography>
          {currTime}
        </span>
        <span>
          <img src="./images/flightcard_line.svg" alt="flightcardLine" />
          <Typography> non-stop </Typography>
        </span>
        <span>
          <Typography variant="h6">SGN</Typography>
          {currTime}
        </span>
      </div>
      <div className="flightcard_middle">
        <img src="./images/frame1138.svg" alt="frame1138" />
      </div>
      <div className="flightcard_bottom">
        <Typography variant="h3">$3,256</Typography>
        <Button variant="outlin">Book Flight <i><img src="./images/arrowicon.svg" alt="arrow" /></i> </Button>
      </div>
    </div>
  );
};

export default FlightCard;
