import React from 'react';
import { TextField } from '@material-ui/core';

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
                "Ne doit contenir que des caractères alphabétiques !"
            }
        />
    );
}

export default NameField;