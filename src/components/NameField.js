import { TextField } from '@material-ui/core';
import React from 'react';

const NameField = ({ name, setName, error }) => {
    return (
        <TextField
            id="nameField"
            label="Nom"
            error={error}
            value={name}
            onChange={(event) => setName(event.target.value)}
            helperText={
                error &&
                "Ne doit pas contenir de caractères spéciaux !"
            }
        />
    );
}

export default NameField;