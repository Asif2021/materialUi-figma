import * as React from 'react';
import Box from '@mui/material/Box';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';

export default function InputAdornments() {

  return (
    <Box >
      
      <Box style={{display:'flex', flexDirection:'row'}}>
        <TextField
            className='Frame_input'
            placeholder='Location'
            InputProps={{
            startAdornment: <InputAdornment position="start">From: <i> <img src="images/divider.svg" alt="divider"/> </i> </InputAdornment>,
          }}
        />

         <TextField
            sx={{marginLeft:'10px'}}
            className='Frame_input'
            placeholder='Location'
            InputProps={{
            startAdornment: <InputAdornment position="start"> To: <i sx={{marginX:'24px'}}> <img src="images/divider.svg" alt="divider" /> </i></InputAdornment>,
          }}
        />
        </Box>
        
      
    </Box>
  );
}
