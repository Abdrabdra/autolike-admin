import React from "react";
import {Box, FormHelperText, TextField, Typography} from "@mui/material";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

interface PropsType {
    label: string,
    id: string,
    value: string | number | null,
    name: string,
    handleChange: any,
    error: any,
    helperText: any,
    objects?: any
    type?: string,
    isEdit?: boolean,
    isDisabled?: boolean


}

export const TextFieldComponent: React.FC<PropsType> = ({
                                                            value,
                                                            label,
                                                            id,
                                                            name,
                                                            handleChange,
                                                            error,
                                                            helperText,
                                                            type,
                                                            isEdit,
                                                            isDisabled
                                                        }) => {
    return (
        <Box sx={{marginTop: "10px"}}>
            <Typography sx={{color: "primary.main", fontWeight: "500"}}>{label}</Typography>
            <TextField
                id={id}
                name={name}
                value={value}
                size={"small"}
                onChange={handleChange}
                sx={{
                    backgroundColor: "primary.light",
                    color: "primary.main",
                    input: {color: "primary.main", fontWeight: "600"},
                    width: "250px"
                }}
                error={error}
                helperText={helperText}
                type={type && type}
                disabled={isDisabled}

            />

        </Box>

    )
}


export const TextFieldComponent2: React.FC<PropsType> = ({
                                                             value,
                                                             label,
                                                             id,
                                                             name,
                                                             handleChange,
                                                             error,
                                                             objects,
                                                             isEdit,
                                                             helperText
                                                         }) => {
    return (
        <Box sx={{marginTop: "10px"}}>
            {/*<FormControl sx={{ m: 1, width: 300 }}>*/}
            <InputLabel id="demo-multiple-name-label" sx={{
                color: "primary.main",
                input: {color: "primary.main", fontWeight: "600"},
                width: "250px"
            }}

            >{label}</InputLabel>
            <Select
                id={id}
                name={name}
                value={value}
                size={"small"}
                onChange={handleChange}
                sx={{
                    backgroundColor: "primary.light",
                    color: "primary.main",
                    input: {color: "primary.main", fontWeight: "600"},
                    width: "250px"
                }}
                error={error}

                // multiple
                // MenuProps={MenuProps}
            >

                {objects && objects.map((object: any) => (
                    <MenuItem
                        key={object.id}
                        value={object.id}
                    >
                        {object.value}
                    </MenuItem>
                ))}
            </Select>
            <FormHelperText sx={{color: "#FC4B4A"}}>{helperText}</FormHelperText>
            {/*</FormControl>*/}
        </Box>

    )
}


export const TextFieldComponent3: React.FC<PropsType> = ({value, label, id, name, handleChange, error, helperText}) => {
    return (
        <Box sx={{marginTop: "10px"}}>
            <Typography sx={{color: "primary.main", fontWeight: "500"}}>{label}</Typography>
            <TextField
                size={"medium"}
                sx={{
                    backgroundColor: "primary.light",
                    color: "primary.main",
                    input: {color: "primary.main", fontWeight: "600"},
                    maxWidth: "80px"
                }}
                id={id}
                name={name}
                value={value}
                onChange={handleChange}
                error={error && Boolean(error)}
                helperText={helperText}

            />
        </Box>

    )
}

export const TextArea: React.FC<PropsType> = ({
                                                  value,
                                                  label,
                                                  id,
                                                  name,
                                                  handleChange,
                                                  error,
                                                  helperText,
                                                  type,
                                                  isEdit,
                                                  isDisabled
                                              }) => {
    return (
        <Box sx={{marginTop: "10px"}}>
            <Typography sx={{color: "primary.main", fontWeight: "500"}}>{label}</Typography>
            <TextField
                id={id}
                name={name}
                value={value}
                size={"small"}
                onChange={handleChange}
                sx={{
                    backgroundColor: "primary.light",
                    color: "primary.main",
                    input: {color: "primary.main", fontWeight: "600"},
                }}
                error={error}
                helperText={helperText}
                type={type && type}
                disabled={isDisabled}
                rows={4}
                multiline={true}
                fullWidth

            />

        </Box>

    )
}



