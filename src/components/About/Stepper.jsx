import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import FlightCard from "./FlightCard";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: "San Francisco – Oakland Bay Bridge, United States",
    imgPath: "./images/dubai_imagePNG.png",
  },
  {
    label: "Bird",
    imgPath: "./images/dubai_imagePNG.png",
  },
  {
    label: "Birds",
    imgPath: "./images/dubai_imagePNG.png",
  },
  {
    label: "dubai",
    imgPath: "./images/dubai_imagePNG.png",
  },
];

function SwipeableTextMobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ flexGrow: 1, position: "relative" }}>
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                className="carouselImage"
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>

      <div style={{ position: "absolute", top: "20px", right: "50px" }}>
        <Button onClick={handleBack} disabled={activeStep === 0}>
          <img src="./images/left-arrow.svg" alt="left" />
        </Button>
        <Button onClick={handleNext} disabled={activeStep === maxSteps - 1}>
          <img src="./images/right-arrow.svg" alt="right" />
        </Button>
      </div>

      <Typography variant="contained" className="recently_booked">
        recently booked
      </Typography>
      <div style={{position:'absolute', bottom:'10px', left:'70px'}}>
        <FlightCard />
      </div>

      {/* <MobileStepper
        position="absolute"
        top='15px'
        right="82px"
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            <img src="./images/right-arrow.svg" alt="right" />
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            <img src="./images/left-arrow.svg" alt="left" />
          </Button>
        }
      /> */}
    </Box>
  );
}

export default SwipeableTextMobileStepper;
