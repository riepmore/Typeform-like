import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const RadioGender = ({ gender = 'female', setGender }) => {
    return (
        <FormControl component="fieldset">
            <FormLabel component="legend">Gender</FormLabel>
            <RadioGroup aria-label="gender" name="gender1" value={gender} onChange={((event) => setGender(event.target.value))}>
                <FormControlLabel value="female" control={<Radio />} label="Femme" />
                <FormControlLabel value="male" control={<Radio />} label="Homme" />
                <FormControlLabel value="other" control={<Radio />} label="Autre" />
            </RadioGroup>
        </FormControl>
    );
}

export default RadioGender;