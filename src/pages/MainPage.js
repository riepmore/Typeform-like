import React, { useEffect, useState } from 'react';
import { Button, Grid, IconButton, makeStyles } from '@material-ui/core';
import StepperList from '../components/StepperList';
import ReplayIcon from '@material-ui/icons/Replay';
import FormsStep from '../components/FormSteps';

const validName = ({ step, nameError, setNameError, disabled, setDisabled, name }) => {
    if (step === 0) {
        if (name.length === 0) {
            if (nameError.error === true) {
                setNameError({
                    error: false,
                    message: ""
                })
            };
            if (disabled === false) setDisabled(true);
        }
        else if (name.length > 30) {
            if (nameError.error === false) {
                setNameError({
                    error: true,
                    message: "Ne doit pas contenir plus de 30 caractères !"
                })

            }
            if (disabled === false) setDisabled(true);
        }
        else if ((/^[a-z-A-Z éÉëË]+$/i).test(name)) {
            if (nameError.error === true) {
                setNameError({
                    error: false,
                    message: ""
                })
            };
            if (disabled === true) setDisabled(false);
        }
        else {
            if (nameError.error === false) {
                setNameError({
                    error: true,
                    message: "Ne doit contenir que des caractères alphabétiques !"
                })

            }
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
    const [nameError, setNameError] = useState({
        error: true,
        message: ""
    });
    const [gender, setGender] = useState('female');
    const [birth, setBirth] = useState(Date.now);
    const [disabled, setDisabled] = useState(false);

    const nextStep = () => setStep((prevState) => prevState + 1);
    const resetForm = () => {
        setName("");
        setStep(-1);
    }

    useEffect(() => {
        validName({ step, nameError, setNameError, disabled, setDisabled, name });
    }, [step, name, nameError, disabled])

    return (
        <div className={classes.root}>
            <Grid container spacing={2} justify="center">
                <Grid item xs={8}>
                    <StepperList currentStep={step} />
                </Grid>
                <Grid item xs={8}>
                    {FormsStep({ step, nameError, name, setName, gender, setGender, birth, setBirth })}
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