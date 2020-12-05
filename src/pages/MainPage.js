import React, { useEffect, useState } from 'react';
import { Button, Grid, IconButton, makeStyles, Typography } from '@material-ui/core';
import StepperList from '../components/StepperList';
import NameField from '../components/NameField';
import ReplayIcon from '@material-ui/icons/Replay';
import RadioGender from '../components/RadioGender';

const NameForm = ({ name, setName, error }) => (
    <Grid>
        <Typography>Entrez votre nom complet</Typography>
        <NameField name={name} setName={setName} error={error} />
    </Grid>
);

const GenderForm = ({ gender, setGender }) => (
    <Grid>
        <Typography>Selectionnez votre genre</Typography>
        <RadioGender gender={gender} setGender={setGender} />
    </Grid>
);

const FormsStep = ({ step, valid, name, setName, gender, setGender }) => {

    if (step === -1) return (<Typography>Début</Typography>);
    else if (step === 0) return NameForm({ name, setName, error: valid.name });
    else if (step === 1) return GenderForm({ gender, setGender });
    else if (step === 2) return (<Typography>Step 3</Typography>);
    else if (step >= 3) return (<Typography>Fin</Typography>);

    return (<Typography>End</Typography>);
}

const validName = ({ valid, setValid, disabled, setDisabled, name }) => {
    if (name.length === 0) {
        if (valid.name === true) setValid({ ...valid, name: false });
        if (disabled === false) setDisabled(true);
    }
    else if ((/^[a-z-A-Z éÉëË]+$/i).test(name)) {
        if (valid.name === true) setValid({ ...valid, name: false });
        if (disabled === true) setDisabled(false);
    }
    else {
        if (valid.name === false) setValid({ ...valid, name: true });
        if (disabled === false) setDisabled(true);
    }
}

const validSteps = ({ step, valid, setValid, disabled, setDisabled, name }) => {
    if (step === 0) {
        validName({ valid, setValid, disabled, setDisabled, name });
    }
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing(2),
    },
}));

const MainPage = () => {
    const classes = useStyles();
    const [step, setStep] = useState(-1);
    const [name, setName] = useState("");
    const [gender, setGender] = useState('female');
    const [valid, setValid] = useState({
        name: false,
    });
    const [disabled, setDisabled] = useState(false);

    const nextStep = () => setStep((prevState) => prevState + 1);
    const resetForm = () => {
        setName("");
        setStep(-1);
    }

    useEffect(() => {
        validSteps({ step, valid, setValid, disabled, setDisabled, name });
    }, [step, name, valid, disabled])

    return (
        <div className={classes.root}>
            <Grid container spacing={2} justify="center">
                <Grid item xs={8}>
                    <StepperList currentStep={step} />
                </Grid>
                <Grid item xs={8}>
                    {FormsStep({ step, valid, name, setName, gender, setGender })}
                </Grid>
                <Grid item xs={8}>
                    <Button
                        variant="contained"
                        onClick={() => nextStep()}
                        disabled={disabled}
                    >
                        Suivant
                    </Button>
                    {step >= 0 &&
                        <IconButton onClick={() => resetForm({ setStep, setName })}>
                            <ReplayIcon />
                        </IconButton>
                    }
                </Grid>
            </Grid>
        </div>
    );
}

export default MainPage;