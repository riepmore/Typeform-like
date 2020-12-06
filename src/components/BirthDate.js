import React from 'react';
import 'date-fns';
import frLocale from "date-fns/locale/fr";
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';

const BirthDate = ({ birth, setBirth }) => {
    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils} locale={frLocale}>
            <KeyboardDatePicker
                // disableToolbar
                disableFuture
                invalidDateMessage="Format de la date invalide"
                maxDateMessage="La date ne peut être supérieur à aujourd'hui"
                variant="inline"
                format="dd/MM/yyyy"
                margin="normal"
                id="date-picker-inline"
                label="Date de naissance"
                value={birth}
                onChange={(date) => setBirth(date)}
                KeyboardButtonProps={{
                    'aria-label': 'change date',
                }}
            />
        </MuiPickersUtilsProvider>
    );
}
export default BirthDate;