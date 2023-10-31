import { Typography } from "@mui/material";
import React from "react";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';

const QuestionsCard = ({data}) => {
  return  <Accordion className="questionCard"  key={data.id}>
        <AccordionSummary
          expandIcon={<img src="./images/plus.svg" alt="plus" />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="h6">{data.question}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
           {data.answer}
          </Typography>
        </AccordionDetails>
      </Accordion>
};

export default QuestionsCard;
