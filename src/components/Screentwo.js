import React from "react";
import PanelCard from "./stepper/PanelCard";
import Grid from "@mui/material/Grid";
const Screentwo = () => {
  return (
    <div>
      <Grid container className="Screenthree">
        <Grid item xs={12}>
          <h2 className="mainHeding"> Let `s select subject areas</h2>
        </Grid>
        <Grid item xs={12}>
          <p className="subHeding">
            What would you like to report? <span className="learMore">Learn more</span>
          </p>
        </Grid>
        <Grid container className="cardTile">
          <Grid item md={12} className="cardPanel">
            <PanelCard />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Screentwo;
