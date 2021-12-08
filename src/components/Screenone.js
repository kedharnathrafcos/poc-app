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
const Screenone = () => {
  return (
    <div> 
   {/* <Box sx={{ flexGrow: 1 }}> */}
      <Grid container className="containerDiv">
          <Grid xs={12}>
              <h2 className="mainHeding">If you have your course certificate we can use it<br/> to jumstart your CE submission</h2>
          </Grid>
          <Grid xs={12}>
              <p className="subHeding">We'll upload it, pull all the right information and you will have access to it any time.</p> 
               </Grid>
               <Grid xs={12}>
              <a className="linkTag">What does this document look like?
                  </a> 
            </Grid>
            <Grid container className="cardTile">
                <Grid item md={4} xs={12} sm={12} className="cardPanel">
                <Card className="CardCenter">
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="p" component="div">
           <p> Lizard</p>
          </Typography>
                 </CardContent>
      </CardActionArea>
    
    </Card>


                </Grid>
                <Grid item md={4} xs={12} sm={12} className="cardPanel">
                <Card className="CardCenter">
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="p" component="div">
            <p>I'll maintain my own documentation</p>
          </Typography>
                 </CardContent>
      </CardActionArea>
    
    </Card>
                </Grid>
                <Grid item md={4} xs={12} sm={12} className="cardPanel">
                <Card className="CardCenter">
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="p" component="div">
            <p>I'll do it later</p>
          </Typography>
                 </CardContent>
      </CardActionArea>
    
    </Card>
                </Grid>
            </Grid>
            <Grid container>
                <Grid xs={12}>
                <p className="entitle">We've successfully uploaded your document. We'll apply everything we can in the next step</p>

                </Grid>
            </Grid>
    
            </Grid>
       
    {/* </Box> */}
    </div>
  );
};

export default Screenone;
