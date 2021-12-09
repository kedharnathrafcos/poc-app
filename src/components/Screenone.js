import React from "react";

import PanelCard from "./stepper/PanelCard";

import Grid from "@mui/material/Grid";
const Screenone = () => {
  return (
    <div>
      {/* <Box sx={{ flexGrow: 1 }}> */}
      <Grid container className="containerDiv">
        <Grid xs={12}>
          <h2 className="mainHeding">
            If you have your course certificate we can use it
            <br /> to jumstart your CE submission
          </h2>
        </Grid>
        <Grid xs={12}>
          <p className="subHeding">
            We`ll upload it, pull all the right information and you will have access to it
            any time.
          </p>
        </Grid>
        <Grid xs={12}>
          <a className="linkTag">What does this document look like?</a>
        </Grid>
        <Grid container className="cardTile">
          <Grid item xs={12} className="cardPanel">
            <PanelCard />
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12}>
            <p className="entitle">
              We `ve successfully uploaded your document. We`ll apply everything we can in
              the next step
            </p>
          </Grid>
        </Grid>
      </Grid>

      {/* </Box> */}
    </div>
  );
};

export default Screenone;
