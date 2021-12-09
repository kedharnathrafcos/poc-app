import React from "react";
import PropTypes from "prop-types";
import {Grid} from "@mui/material";
import Footer from "./Footer";
import PanelCard from "./PanelCard";

const StepTwo = (props) => {
  const goForword = () => {
    props.goForword(3, "StepTwo", {like: true});
  };
  return (
    <div>
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
      <Footer goForword={goForword} />
    </div>
  );
};

StepTwo.propTypes = {
  goForword: PropTypes.func.isRequired,
};
export default StepTwo;
