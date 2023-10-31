import React from "react";
import "./Questions.css";
import { Box, Typography, Button } from "@mui/material";
import QuestionsCard from "./QuestionsCard";
import data from "../../questions.json";


const Questions = () => {
  return (
    <Box className="question_outer">
      <Box className="question_typos">
        <Typography variant="h2">Frequently Asked Questions </Typography>
        <Typography variant="body1" className="question_body1">
          Find and book a great experience.{" "}
        </Typography>
      </Box>
      
      <Box className="question_container">
        {data.map((item)=>( <QuestionsCard data={item}/>))}
      </Box>
      <Box className="question_button">
      <Button variant="outline">
      Visit Help Center <img src="./images/arrow_up.svg" alt="arrowUp" /> 
      </Button>
      </Box>
    </Box>
  );
};

export default Questions;
