import React, { useEffect, useState } from 'react';
import { Button, Grid, IconButton, makeStyles, Typography } from '@material-ui/core';
import StepperList from '../components/StepperList';
import NameField from '../components/NameField';
import ReplayIcon from '@material-ui/icons/Replay';
import RadioGender from '../components/RadioGender';
import BirthDate from '../components/BirthDate';

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

const BirthForm = ({ birth, setBirth }) => (
    <Grid>
        <Typography>Entrez votre date de naissance</Typography>
        <BirthDate birth={birth} setBirth={setBirth} />
    </Grid>
);

const EndForm = ({ name, gender, birth }) => (
    <Grid>
        <Typography>Vous êtes {name}, votre genre est {gender} et vous êtes {gender === 'female' ? "née" : "né"} le {new Date(birth).toLocaleDateString()} </Typography>
    </Grid>
);

const FormsStep = ({ step, valid, name, setName, gender, setGender, birth, setBirth }) => {

    if (step === -1) return (<Typography>Début</Typography>);
    else if (step === 0) return NameForm({ name, setName, error: valid.name });
    else if (step === 1) return GenderForm({ gender, setGender });
    else if (step === 2) return BirthForm({ birth, setBirth });
    else if (step >= 3) return EndForm({ name, gender, birth });

    return (<Typography>End</Typography>);
}

const validName = ({ step, valid, setValid, disabled, setDisabled, name }) => {
    if (step === 0) {
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
    const [birth, setBirth] = useState(Date.now);
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
        validName({ step, valid, setValid, disabled, setDisabled, name });
    }, [step, name, valid, disabled])

    return (
        <div className={classes.root}>
            <Grid container spacing={2} justify="center">
                <Grid item xs={8}>
                    <StepperList currentStep={step} />
                </Grid>
                <Grid item xs={8}>
                    {FormsStep({ step, valid, name, setName, gender, setGender, birth, setBirth })}
                </Grid>
                <Grid item xs={8}>
                {step < 3 &&
                    <Button variant="contained" onClick={() => nextStep()} disabled={disabled}>
                        Suivant
                    </Button>
                }
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