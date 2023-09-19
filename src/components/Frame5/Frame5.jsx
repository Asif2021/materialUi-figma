import React from "react";
import './Frame5.css'
import { Container, Toolbar } from "@material-ui/core";
import InputAdornments from './Input'
import Button from '@mui/material/Button';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';



const Frame5 = () => {
  return (
    <div className="Frame_outer">
        <div>
          <InputAdornments />
        </div>
        <div className="Frame_buttons">
          <Button variant="outlined" className="Frame_button" endIcon={<ExpandMoreIcon />}>Bussiness</Button>
          <Button variant="outlined" className="Frame_button" sx={{ marginX: '20px' }} endIcon={<ExpandMoreIcon />}>One Way</Button>
          <Button variant="outlined" className="Frame_button" endIcon={<ExpandMoreIcon />}>1 Adult</Button>
        </div>
    </div>
  );
};

export default Frame5;
