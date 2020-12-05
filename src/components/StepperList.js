import React from 'react';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';

const getSteps = () => {
    return ['Nom',
        'Genre',
        'Âge'];
}

const StepperList = ({currentStep}) => {
    const steps = getSteps();

    return (
            <Stepper activeStep={currentStep} alternativeLabel>
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
    );
}

export default StepperList