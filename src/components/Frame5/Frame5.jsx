import React from "react";
import './Frame5.css'
import { Container, Toolbar } from "@material-ui/core";
import Button from '@mui/material/Button';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Box from '@mui/material/Box';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';



const Frame5 = () => {
  return (
    <div className="Frame_outer">
          <div className="Frame_input_outer">
          <TextField
            className='Frame_input'
            placeholder='Location'
            InputProps={{
            startAdornment: <InputAdornment position="start">From: <i> <img src="images/divider.svg" alt="divider"/> </i> </InputAdornment>,
            endAdornment: <InputAdornment position="end"><i> <img src="images/map.svg" alt="map"/> </i> </InputAdornment>
          }}
        />
         <TextField
            // sx={{marginLeft:'10px'}}
            className='Frame_input'
            placeholder='Location'
            InputProps={{
            startAdornment: <InputAdornment position="start"> To: <i sx={{marginX:'24px'}}> <img src="images/divider.svg" alt="divider" /> </i></InputAdornment>,
          }}
        />
        </div>
       
        <div className="Frame_buttons">
          <Button variant="outlined" endIcon={<ExpandMoreIcon />}>Bussiness</Button>
          <Button variant="outlined" endIcon={<ExpandMoreIcon />}>One Way</Button>
          <Button variant="outlined" endIcon={<ExpandMoreIcon />}>1 Adult</Button>
        </div>
    </div>
  );
};

export default Frame5;
