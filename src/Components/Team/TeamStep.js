import React from 'react';
import {
  Box,
  Stepper,
  Step,
  StepLabel,
  Button,
  Card,
  Typography,
  Alert
} from '@mui/material';
import { Container } from '@mui/material';
import { makeStyles } from '@mui/styles';

// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import UserView from './MultiSelection/UserTree/UserView';
import AuthorityView from './MultiSelection/AuthorityTree/AuthorityView';
const useStyles = makeStyles((theme) => ({
  boxs: { p: 3, overflow: 'overlay', paddingTop: '50px', height: '30vh' }
}));

const steps = ['유저선택', '권한부여', '완료'];

const FormWizard = () => {
  const classes = useStyles();
  const [selected, setSelected] = React.useState([]);
  const [selected2, setSelected2] = React.useState([]);
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
    console.log(selected);
    console.log(selected2);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleSteps = (step) => {
    switch (step) {
      case 0:
        return (
          <Box sx={{}} className={classes.boxs}>
            <UserView
              selected={selected}
              onSelect={setSelected}
              disableRoot
              // defaultCollapseIcon={<ExpandMoreIcon />}
              // defaultExpandIcon={<ChevronRightIcon />}
            />
          </Box>
        );
      case 1:
        return (
          <Box className={classes.boxs}>
            <AuthorityView
              selected={selected2}
              onSelect={setSelected2}
              disableRoot
              // defaultCollapseIcon={<ExpandMoreIcon />}
              // defaultExpandIcon={<ChevronRightIcon />}
            />
          </Box>
        );
      // case 2:
      //   return <Box className={classes.boxs}></Box>;
      default:
        break;
    }
  };

  const handleReset = () => {
    setActiveStep(0);
  };
  return (
    <Container maxWidth="xl">
      {/* <Breadcrumb
        title="Form Wizard"
        description="this is Form Wizard page"
      ></Breadcrumb> */}
      <Card variant="outlined" sx={{ overflow: 'inherit' }}>
        <Box sx={{ padding: '30px' }}>
          <Stepper activeStep={activeStep}>
            {steps.map((label, index) => {
              const stepProps = {};
              const labelProps = {};
              if (isStepOptional(index)) {
                labelProps.optional = (
                  <Typography variant="caption"></Typography>
                );
              }
              if (isStepSkipped(index)) {
                stepProps.completed = false;
              }
              return (
                <Step key={label} {...stepProps}>
                  <StepLabel {...labelProps}>{label}</StepLabel>
                </Step>
              );
            })}
          </Stepper>
          {activeStep === steps.length ? (
            <React.Fragment>
              <Alert severity="success" sx={{ m: 3 }}>
                All steps completed - you&apos;re finished
              </Alert>
              <Box display="flex" sx={{ flexDirection: 'row', p: 3 }}>
                <Box sx={{ flex: '1 1 auto' }} />
                <Button onClick={handleReset} variant="contained" color="error">
                  Reset
                </Button>
              </Box>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <Box>{handleSteps(activeStep)}</Box>

              <Box display="flex" sx={{ flexDirection: 'row', p: 3 }}>
                <Button
                  color="inherit"
                  variant="contained"
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  sx={{ mr: 1 }}
                >
                  Back
                </Button>
                <Box sx={{ flex: '1 1 auto' }} />
                {isStepOptional(activeStep) && (
                  <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                    Skip
                  </Button>
                )}

                <Button
                  onClick={handleNext}
                  variant="contained"
                  color={
                    activeStep === steps.length - 1 ? 'success' : 'secondary'
                  }
                >
                  {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                </Button>
              </Box>
            </React.Fragment>
          )}
        </Box>
      </Card>
    </Container>
  );
};

export default FormWizard;
