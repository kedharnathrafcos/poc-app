import React from "react";
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent'; 
import CardActionArea from '@mui/material/CardActionArea';
import Typography from '@mui/material/Typography';
import AudiotrackIcon from '@mui/icons-material/Audiotrack';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';


const PanelCard = () => {
  return (
    <div> 
     <Grid container>            
            <Grid container className="cardTile">
                <Grid item md={12} xs={12} sm={12}>
                <List>
          <ListItem >
          <Card className="CardCenter">
      <CardActionArea>       
        <AudiotrackIcon/>
        <CardContent>
          <Typography gutterBottom variant="p" component="div">
           <p> CE Credits</p>
          </Typography>
                 </CardContent>
      </CardActionArea>
    
    </Card>
          </ListItem>
          <ListItem >
          <Card className="CardCenter">
      <CardActionArea>       
        <AudiotrackIcon/>
        <CardContent>
          <Typography gutterBottom variant="p" component="div">
           <p> CE Credits</p>
          </Typography>
                 </CardContent>
      </CardActionArea>
    
    </Card>
          </ListItem>          
          <ListItem >
          <Card className="CardCenter">
      <CardActionArea>       
        <AudiotrackIcon/>
        <CardContent>
          <Typography gutterBottom variant="p" component="div">
           <p> CE Credits</p>
          </Typography>
                 </CardContent>
      </CardActionArea>
    
    </Card>
          </ListItem>          
        </List>

                
                </Grid>
                
    </Grid>
    

     </Grid>
       
    </div>
  );
};

export default PanelCard;
