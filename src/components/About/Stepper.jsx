import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import FlightCard from "./FlightCard";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: "San Francisco – Oakland Bay Bridge, United States",
    imgPath: "./images/dubai_imagePNG.png",
  },
  // {
  //   label: "Bird",
  //   imgPath: "./images/dubai_imagePNG.png",
  // },
  // {
  //   label: "Birds",
  //   imgPath: "./images/dubai_imagePNG.png",
  // },
  // {
  //   label: "dubai",
  //   imgPath: "./images/dubai_imagePNG.png",
  // },
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
    <Box className="stepper_outer">
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

      <Box className="recentlyAndArrows">
        <Typography variant="contained" className="recently_booked">
          recently booked
        </Typography>
        <Box className="arrows">
        <Button
          className="arrows_button"
          onClick={handleBack}
          disabled={activeStep === 0}
        >
          <img src="./images/left-arrow.svg" alt="left" />
        </Button>
        <Button onClick={handleNext} disabled={activeStep === maxSteps - 1}>
          <img src="./images/right-arrow.svg" alt="right" />
        </Button>
      </Box>
      </Box>

      

      <FlightCard />

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
