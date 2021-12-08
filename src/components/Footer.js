import React from "react";
// import {Container, Row, Col, Button } from '@mui/material/Container';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
const Footer = () => {
  return (
    <div> 
      <Grid container className="containerDiv">          
            <Grid container>
              <Grid xs={12}>
                    <hr></hr>
                </Grid> 
            <Grid item xs={6}>
            <Button variant="text"> 
            <FontAwesomeIcon icon={faArrowLeft} />        
                Back</Button>
        </Grid>
        <Grid item xs={6} className="textEnd">
        <Button variant="contained">Continue</Button>
        </Grid>      
      </Grid>
            </Grid>       
    </div>
  );
};

export default Footer;
