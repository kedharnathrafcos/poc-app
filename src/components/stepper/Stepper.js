import React, {useState, useEffect} from "react";
import {Container} from "@mui/material";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import StepFour from "./StepFour";
import StepFinal from "./StepFinal";

const initialStepperVal = {
  stepOne: {cource: false, file: false},
  stepTwo: {like: false},
  stepThree: {subjects: []},
  stepFour: {dt: new Date(), eduProvider: "", course: "", subAreaHours: []},
  activeStepper: 1,
};
const Stepper = () => {
  const [displaySection, setDisplaySection] = useState(null);
  const [stepperData, setStepperData] = useState(initialStepperVal);
  useEffect(() => {
    displayStepper();
  }, []);
  useEffect(() => {
    displayStepper();
  }, [stepperData]);
  const goForword = async (page, keyVal, stateObj) => {
    if (page === 1) {
      await setStepperData(initialStepperVal);
    } else {
      await setStepperData(() => ({
        ...stepperData,
        [keyVal]: stateObj,
        activeStepper: page,
      }));
    }
    displayStepper();
  };
  const displayStepper = () => {
    console.log("goForword", stepperData.activeStepper);
    switch (stepperData.activeStepper) {
      case 1:
        setDisplaySection(<StepOne goForword={goForword} />);
        break;
      case 2:
        setDisplaySection(<StepTwo goForword={goForword} />);
        break;
      case 3:
        setDisplaySection(<StepThree goForword={goForword} />);
        break;
      case 4:
        setDisplaySection(<StepFour goForword={goForword} />);
        break;
      case 5:
        setDisplaySection(<StepFinal goForword={goForword} />);
        break;
      default:
        setDisplaySection(<StepOne goForword={goForword} />);
    }
    console.log("displayStepper", displaySection);
  };
  return (
    <div>
      <Container item maxWidth="md" className="mainContainer">
        {displaySection}
      </Container>
    </div>
  );
};

export default Stepper;
