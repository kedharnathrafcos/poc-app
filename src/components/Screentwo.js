import React from "react";
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea';
import Typography from '@mui/material/Typography';


const Screentwo = () => {
  return (
    <div> 
     <Grid container className="Screenthree">
     <Grid item xs={12}>
              <h2 className="mainHeding">Let's select subject areas</h2>
          </Grid>
          <Grid item xs={12}>
              <p className="subHeding">
                Which subject are are you reporting hours for? <span>Learn more
                  </span> 
                </p>             
            </Grid>            
            <Grid container className="cardTile">
                <Grid item md={6} xs={6} sm={6} className="cardPanel">
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
           <p> CE Credits</p>
          </Typography>
                 </CardContent>
      </CardActionArea>
    
    </Card>


                </Grid>
                <Grid item md={6} xs={6} sm={6} className="cardPanel">
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
            <p>Something else</p>
          </Typography>
                 </CardContent>
      </CardActionArea>
    
    </Card>
    </Grid>
    </Grid>
    

     </Grid>
       
    </div>
  );
};

export default Screentwo;
