import React from 'react'
import Autocomplete, { createFilterOptions } from "@material-ui/lab/Autocomplete";
import { TextField } from "@material-ui/core";
import { IContacts } from './Componets/mail.interface';
import ContactData from "./data/ContactData";

const filter = createFilterOptions<IContacts>();

function AutoCompletado() {
    const [value, setValue] = React.useState<IContacts | null>(null);
    const [open, toggleOpen] = React.useState(false);

    const handleClose = () => {
        setDialogValue({
            nombre: '',
            email: '',
        });
        toggleOpen(false);
    };

    const [dialogValue, setDialogValue] = React.useState({
        nombre: '',
        email: '',
    });

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setValue({
            nombre: dialogValue.nombre,
            email: dialogValue.email,
        });
        handleClose();
    };

    return (
        <>
            <Autocomplete
                multiple
                limitTags={2}
                id="multiple-limit-tags"
                options={ContactData}
                getOptionLabel={(option) => option.nombre + " (" + option.email + ")"}
                //defaultValue={""}
                renderInput={(params) => (
                    <TextField {...params} size="small" />
                )}
            />
            <Autocomplete
                value={value}
                onChange={(event, newValue) => {
                    if (typeof newValue === 'string') {
                        // timeout to avoid instant validation of the dialog's form.
                        setTimeout(() => {
                            toggleOpen(true);
                            setDialogValue({
                                nombre: newValue,
                                email: '',
                            });
                        });
                    } else if (newValue && newValue.inputValue) {
                        toggleOpen(true);
                        setDialogValue({
                            nombre: newValue.inputValue,
                            email: '',
                        });
                    } else {
                        setValue(newValue);
                    }
                }}
                filterOptions={(options, params) => {
                    const filtered = filter(options, params) as IContacts[];

                    if (params.inputValue !== '') {
                        filtered.push({
                            inputValue: params.inputValue,
                            nombre: `Add "${params.inputValue}"`,
                        });
                    }

                    return filtered;
                }}
                id="free-solo-dialog-demo"
                options={ContactData}
                getOptionLabel={(option) => {
                    // e.g value selected with enter, right from the input
                    if (typeof option === 'string') {
                        return option;
                    }
                    if (option.inputValue) {
                        return option.inputValue;
                    }
                    return option.nombre + ' (' + option.email + ")";
                    //return option.email;
                }}
                selectOnFocus
                clearOnBlur
                handleHomeEndKeys
                renderOption={(option) => option.nombre + ' (' + option.email + ")"}
                style={{ width: "99%" }}
                freeSolo
                renderInput={(params) => (
                    <TextField {...params} size="small" />
                )}
            />
        </>
    );
}

export default AutoCompletado
