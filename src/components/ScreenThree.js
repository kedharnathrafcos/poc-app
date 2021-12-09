import React from "react";
import Grid from "@mui/material/Grid";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import {Button} from "@mui/material";

const ScreenThree = () => {
  return (
    <div>
      <Grid container className="Screenthree">
        <Grid item xs={12}>
          <h2 className="mainHeding">Let`s select subject areas</h2>
        </Grid>
        <Grid item xs={12}>
          <p className="subHeding">
            Which subject are are you reporting hours for?{" "}
            <span className="learMore">Learn more</span>
          </p>
        </Grid>

        <FormControl item sx={12} component="fieldset" variant="standard">
          <FormGroup className="fieldSet">
            <FormControlLabel
              control={<Checkbox />}
              label="Medical Erros approved by the Board"
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Domestic Voilence approved by the Board"
            />
            <FormControlLabel control={<Checkbox />} label="HIV/AIDS" />
            <FormControlLabel
              control={<Checkbox />}
              label="General CE approved by the Board"
            />
            <FormControlLabel
              control={<Checkbox />}
              label="General CE course approved by a national nursing organization or another state Board of Nursing"
            />
          </FormGroup>
        </FormControl>
        <Grid item xs={12} className="textCenter">
          <Button type="button" variant="outlined">
            Show More
          </Button>
        </Grid>
      </Grid>
      <br />
    </div>
  );
};

export default ScreenThree;
