import React from "react";
// import {Container, Row, Col, Button } from '@mui/material/Container';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';

import { Button, CardActionArea, CardActions } from '@mui/material';
const Screenfour = () => {
  return (
    <div> 
      <Grid container className="containerDiv">          
      <Grid item xs={12}>
              <h2 className="mainHeding">Let's get the details of your course</h2>
          </Grid>
          <Grid item xs={12}>
              <p className="subHeding">
                Multiple Subject Area Course Approved by the Board -[PN,RN,ARNP,CNS] 
                </p>             
            
            <Grid xs={12}>
                <p><b>Date you completed this CE</b></p>
                <p>For multiple date use most recent</p>
                <TextField
          id="standard-search"
          label="Date"
          type="search"
          variant="standard"
        />
               
                </Grid>     
                <br/>
                <br/>

                <Grid xs={12}>
                <TextField
  id="outlined-uncontrolled"
  label="Education Provider"
  defaultValue="Search Provider"
/>
                </Grid>
                <br/>
                <br/>
                <Grid xs={12}>              
                <TextField
  id="outlined-uncontrolled"
  label="Courser Provider"
  defaultValue="World's best course"
/>
               
                </Grid>

                </Grid>
                <Grid>
                    <Grid item xs={12}>
                        <p>Subject area</p>
                    </Grid>
                </Grid>
            </Grid>       
    </div>
  );
};

export default Screenfour;
