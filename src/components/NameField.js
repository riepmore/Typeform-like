import React from 'react';
import { TextField } from '@material-ui/core';

const NameField = ({ name, setName, error }) => {
    return (
        <TextField
            id="nameField"
            label="Nom"
            error={error.error}
            value={name}
            onChange={(event) => setName(event.target.value)}
            helperText={
                error.error &&
                error.message
            }
        />
    );
}

export default NameField;