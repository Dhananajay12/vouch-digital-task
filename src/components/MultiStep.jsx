import React, { useState, useContext } from "react";
import { Button, Stepper, Step, StepLabel } from "@material-ui/core";

import { NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { grey } from "@material-ui/core/colors";
import { BiReset } from "react-icons/bi";
import Module from "../multisteppage/Module";
import CreateProfile from "../multisteppage/CreateProfile";
import Payment from "../multisteppage/Payment";
import Theme from "../multisteppage/Theme";

import FormContext from "../Context/FormContext";

const useStyles = makeStyles((theme) => ({
  button: {
    marginRight: theme.spacing(1),
    color: grey,
  },
}));

function getSteps() {
  return ["CREATE PROFILE", "PAYMENT SETUP", "THEME SETUP", "MODULES SETUP"];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return (
        <>
          <CreateProfile />
          <br></br>
        </>
      );

    case 1:
      return (
        <>
          <Payment />
          <br></br>
          <br></br>
        </>
      );
    case 2:
      return (
        <>
          <Theme />
          <br></br>
          <br></br>
        </>
      );
    case 3:
      return (
        <>
          <Module />

          <br></br>
        </>
      );
    default:
      return "unknown step";
  }
}

const MultiStep = () => {
  const classes = useStyles();
  const [isDaily, setIsDaily] = useState(true);
  const [activeStep, setActiveStep] = useState(0);
  const [skippedSteps, setSkippedSteps] = useState([]);
  const {
    name,
    website,
    category,
    company,
    email,
    phone,
    state,
    city,
    pin,
    gst,
    fax,
    bill,
    states,
    citys,
    pins,
    sites,
    payment,

    discount,
    reason,
  } = useContext(FormContext);
  const steps = getSteps();

  const isStepOptional = (step) => {
    return step === 1 || step === 2;
  };

  const isStepSkipped = (step) => {
    return skippedSteps.includes(step);
  };

  const handleNext = () => {
    if (activeStep === 0) {
      if (
        name === "" ||
        website.length <= 1 ||
        category.length <= 1 ||
        company.length <= 1 ||
        email.length <= 1 ||
        phone.length <= 1 ||
        state.length <= 1 ||
        city.length <= 1 ||
        pin.length <= 1 ||
        gst.length <= 1 ||
        fax.length <= 1
      ) {
        return alert("Please Fill Input");
      } else {
        setActiveStep(activeStep + 1);
        setSkippedSteps(
          skippedSteps.filter((skipItem) => skipItem !== activeStep)
        );
      }
    }
    if (activeStep === 1) {
      if (
        bill.length <= 1 ||
        states.length <= 1 ||
        citys.length <= 1 ||
        pins.length <= 1 ||
        sites.length <= 1 ||
        payment.length <= 1 ||
        discount.length <= 1 ||
        reason.length <= 1
      ) {
        return alert("Please Fill Input");
      } else {
        setActiveStep(activeStep + 1);
        setSkippedSteps(
          skippedSteps.filter((skipItem) => skipItem !== activeStep)
        );
      }
    }
    if (activeStep === 2) {
      setActiveStep(activeStep + 1);
      setSkippedSteps(
        skippedSteps.filter((skipItem) => skipItem !== activeStep)
      );
    }
    if (activeStep === 3) {
      setActiveStep(activeStep + 1);
      setSkippedSteps(
        skippedSteps.filter((skipItem) => skipItem !== activeStep)
      );
    }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handleSkip = () => {
    if (!isStepSkipped(activeStep)) {
      setSkippedSteps([...skippedSteps, activeStep]);
    }
    setActiveStep(activeStep + 1);
  };

  return (
    <div className="background-color padding-multistep ">
      <Stepper
        alternativeLabel
        activeStep={activeStep}
        className="padding-for-small-device "
      >
        {steps.map((step, index) => {
          const labelProps = {};
          const stepProps = {};
          /* {
            {
               if (isStepOptional(index)) {
              labelProps.optional = (
                <Typography
                  variant="caption"
                  align="center"
                  style={{ display: "block" }}
                >
                  optional
                </Typography>
              );
            } 
            }
          } */
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }

          return (
            <Step {...stepProps} key={index} className="padding">
              <StepLabel {...labelProps} className="padding">
                {step}
              </StepLabel>

              {activeStep === index && <p className="border"></p>}
            </Step>
          );
        })}
      </Stepper>

      {activeStep === steps.length ? (
        <>
          <br></br>
          <br></br>
          <hr style={{ height: "0px" }}></hr>
        </>
      ) : (
        <>
          <form className="padding-for-small-device">
            {getStepContent(activeStep)}
          </form>
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
            onClick={handleNext}
          >
            {activeStep === steps.length - 1 ? (
              <NavLink to="/success" className="text-white">
                Submit
              </NavLink>
            ) : (
              <Button className={classes.button} style={{ color: "white" }}>
                Save & Continue <span className="mx-1"> {">"}</span>
              </Button>
            )}
          </Button>
          <Button
            className={classes.button}
            disabled={activeStep === 0}
            onClick={handleBack}
            style={{ color: "grey", background: "lightgrey" }}
          >
            <BiReset className="h5 mt-1" />
            reset
          </Button>
          {/* {isStepOptional(activeStep) && (
            <Button
              className={classes.button}
              variant="contained"
              color="primary"
              onClick={handleSkip}
            >
              skip
            </Button>
          )} */}
        </>
      )}
    </div>
  );
};

export default MultiStep;
