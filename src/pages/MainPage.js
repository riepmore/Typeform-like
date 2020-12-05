import React, { useEffect, useState } from 'react';
import { Button, Grid, makeStyles, Typography } from '@material-ui/core';
import StepperList from '../components/StepperList';
import NameField from '../components/NameField';

const NameForm = ({ name, setName, error }) => (
    <Grid>
        <Typography> Entrez votre nom complet</Typography>
        <NameField value={name} setName={setName} error={error} />
    </Grid>
);

const FormsStep = ({ step, name, setName, valid }) => {

    if (step === 0) return NameForm({ name, setName, error: valid.name });
    else if (step === 1) return (<Typography>Step 2</Typography>);
    else if (step === 2) return (<Typography>Step 3</Typography>);
    else if (step === 3) return (<Typography>Last step</Typography>);
    else if (step >= 4) return (<Typography>End</Typography>);

    return (<Typography>End</Typography>);
}

const validStep = ({ valid, setValid, disabled, setDisabled, name }) => {
    if (name.length === 0) {
        if (valid.name === true) setValid({ ...valid, name: false });
        if (disabled === false) setDisabled(true);
    }
    else if ((/^[a-zA-Z éÉëË0-9]+$/i).test(name)) {
        if (valid.name === true) setValid({ ...valid, name: false });
        if (disabled === true) setDisabled(false);
    }
    else {
        if (valid.name === false) setValid({ ...valid, name: true });
        if (disabled === false) setDisabled(true);
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
    const [step, setStep] = useState(0);
    const [name, setName] = useState("");
    const [valid, setValid] = useState({
        name: false,
    });
    const [disabled, setDisabled] = useState(true);

    const nextStep = () => setStep((prevState) => prevState + 1);

    useEffect(() => {
        validStep({ valid, setValid, disabled, setDisabled, name });
    }, [name])

    return (
        <div className={classes.root}>
            <Grid container spacing={2} justify="center">
                <Grid item xs={8}>
                    <StepperList currentStep={step} />
                </Grid>
                <Grid item xs={8}>
                    {FormsStep({ step, name, setName, valid })}
                </Grid>
                <Grid item xs={8}>
                    <Button
                        variant="contained"
                        onClick={() => nextStep()}
                        disabled={disabled}
                    >
                        Suivant
                    </Button>
                </Grid>
            </Grid>
        </div>
    );
}

export default MainPage;