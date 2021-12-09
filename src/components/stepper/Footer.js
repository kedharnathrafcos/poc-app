import React from "react";
import Grid from "@mui/material/Grid";
import {Button} from "@mui/material";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";
const Footer = (props) => {
  console.log("props", props);
  return (
    <div>
      <Grid container className="containerDiv">
        <Grid container>
          <Grid xs={12}>
            <hr></hr>
          </Grid>
          <Grid item xs={6}>
            <Button variant="outlined">
              <FontAwesomeIcon icon={faArrowLeft} />
              &nbsp;&nbsp;Back
            </Button>
          </Grid>
          <Grid item xs={6} className="textEnd">
            <Button
              variant="contained"
              onClick={() => {
                props.goForword();
              }}
            >
              Continue
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
