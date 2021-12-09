import React from "react";
import PropTypes from "prop-types";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";

import Footer from "./Footer";

const StepFour = (props) => {
  const goForword = () => {
    props.goForword(5, "stepOne", {
      dt: new Date(),
      eduProvider: "",
      course: "",
      subAreaHours: [],
    });
  };
  return (
    <div>
      <div>
        <Grid item container className="containerDiv">
          <Grid item xs={12}>
            <h2 className="mainHeding">Let`s get the details of your course</h2>
          </Grid>
          <Grid item xs={12}>
            <p className="subHeding">
              Multiple Subject Area Course Approved by the Board -[PN,RN,ARNP,CNS]
            </p>

            <Grid item xs={12} sx={{mt: 6}}>
              <p>
                <b>Date you completed this CE</b>
              </p>
              <p>For multiple date use most recent</p>
              <TextField
                id="standard-search"
                label="Date"
                type="search"
                variant="standard"
                value="08/12/2021"
              />
            </Grid>
            <br />
            <br />

            <Grid item xs={12} className="formLabelWdth">
              <TextField
                id="outlined-uncontrolled"
                label="Educational Provider"
                defaultValue="Search Provider"
              />
            </Grid>
            <br />
            <br />
            <Grid item xs={12} className="formLabelWdth">
              <TextField
                id="outlined-uncontrolled"
                label="Course"
                defaultValue="World's best course"
              />
            </Grid>
          </Grid>
          <Grid>
            <Grid item xs={12} sx={{mt: 3}}>
              <p>
                <b>Subject area</b>
              </p>
            </Grid>
          </Grid>
        </Grid>
        <Grid item container className="fontVarient">
          <Grid item xs={6}>
            <p>HIV/AIDS</p>
          </Grid>
          <Grid item xs={6} className="textEnd">
            <input type="text" value="10.00" />
            <span>Hours</span>
          </Grid>
        </Grid>
        <Grid item container className="fontVarient">
          <Grid item xs={12}>
            <hr></hr>
          </Grid>
          <Grid item xs={6}>
            <p>General CE approved by the board</p>
          </Grid>
          <Grid item xs={6} className="textEnd">
            <input type="text" />
            <span>Hours</span>
          </Grid>
        </Grid>
      </div>
      <Footer goForword={goForword} />
    </div>
  );
};

StepFour.propTypes = {
  goForword: PropTypes.func.isRequired,
};

export default StepFour;
