import React from 'react'
import { Grid, Typography } from "@material-ui/core";
import BirthDate from './BirthDate';
import RadioGender from './RadioGender';
import NameField from './NameField';

const Begin = () => (
    <Grid>
        <Typography>Début</Typography>
    </Grid>
);

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
        <Typography>{name}</Typography>
        <Typography>Genre: {gender}</Typography>
        <Typography>{gender === 'female' ? "Née" : "Né"} le {new Date(birth).toLocaleDateString()}</Typography>
    </Grid>
);

const FormsStep = ({ step, name, setName, nameError, gender, setGender, birth, setBirth }) => {
    console.log(nameError);
    if (step === -1) return Begin();
    else if (step === 0) return NameForm({ name, setName, error: nameError });
    else if (step === 1) return GenderForm({ gender, setGender });
    else if (step === 2) return BirthForm({ birth, setBirth });
    else if (step >= 3) return EndForm({ name, gender, birth });

    return (<Typography>End</Typography>);
}

export default FormsStep;