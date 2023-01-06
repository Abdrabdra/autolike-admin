import React, {useEffect, useState} from "react";
import {
    Box,
    Button,
    Dialog,
    DialogContent,
    DialogTitle,
    FormControl, FormControlLabel,
    FormLabel, Radio, RadioGroup,
    TextField,
    Typography
} from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import CloseIcon from "@mui/icons-material/Close";
import CustomAlert from "../../../../../components/reusedComponents/CustomAlert";
import {ICreateHobbyBody} from "../../../../../redux/store/rtk-api/hobby-rtk/hobby.type";
import {ICreateManagementBody} from "../../../../../redux/store/rtk-api/city-rtk/city.type";


type PropsType = {
    label?: string
    isWindowOpen: boolean,
    isLoading: boolean,
    isError: boolean,
    isSuccess: boolean,
    closeWindow: () => void,
    handleFunction: (data: any) => void,
    error: string,
    placeholder: string
    isAlert: boolean
    elem: string

}


const CreateWindow: React.FC<PropsType> = ({
                                               isWindowOpen,
                                               isLoading,
                                               isError,
                                               isSuccess,
                                               label = "",
                                               closeWindow,
                                               handleFunction,
                                               error,
                                               placeholder,
                                               isAlert,
                                               elem
                                           }) => {

    const [text, setText] = useState('')
    const [value, setValue] = React.useState(1);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(Number((event.target as HTMLInputElement).value));
    };
    const handleCreateFunction = (data: any, elem: string) => {
        let body;
        if (elem === 'Город') {
            body = {
                value: text
            }
        } else if (elem === 'Хобби') {
            body = {
                genderId: value,
                value: text
            }
        } else if (elem === 'Хадис') {
            body = {
                title: text
            }
        }
        handleFunction(body)
    }

    return (
        <Dialog
            open={isWindowOpen}

        >
            {isLoading && <CircularProgress/>}
            {isError && <CustomAlert title="Ошибка!" status="error"
                                     message={error}/>}
            {isSuccess && isAlert && <CustomAlert title="Успех!" status="success"
                                                  message="Операция успешно выполнено"/>}

            <DialogTitle id="alert-dialog-title" sx={{width: "350px"}}>
                <CloseIcon sx={{float: 'right', cursor: 'pointer'}} onClick={closeWindow}/>
            </DialogTitle>

            <DialogContent sx={{textAlign: 'center', overflow: "hidden"}}>
                <Typography sx={{
                    marginBottom: 3,
                    fontWeight: 'bold',
                    color: 'primary.main',
                    fontSize: "17px"
                }}>{label}</Typography>
                <form>
                    {elem && elem === 'Хобби' &&
                        <FormControl sx={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                            <FormLabel id="demo-row-radio-buttons-group-label" sx={{mb: '5px', color: 'primary.main'}}>Хобби
                                для кого:</FormLabel>
                            <RadioGroup
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="row-radio-buttons-group"
                                value={value}
                                onChange={handleChange}
                            >
                                <FormControlLabel value={1} control={<Radio/>} label="Мужчина"/>
                                <FormControlLabel value={2} control={<Radio/>} label="Женщина"/>
                            </RadioGroup>
                        </FormControl>}
                    <TextField placeholder={placeholder} sx={{mt: '5px'}} value={text} onChange={(e) => {
                        setText(e.target.value)
                    }}/>
                    <Box sx={{textAlign: 'center', mb: '50px', mt: '30px'}}>
                        <Button variant="contained"
                                color="primary"
                                size="large"
                                sx={{width: 100, height: 30, marginTop: 1, textTransform: 'lowercase'}}
                                onClick={() => handleCreateFunction({value: text}, elem)}
                        >
                            Создать
                        </Button>

                        <Button variant="contained"
                                color="inherit"
                                size="large"
                                sx={{
                                    width: 100,
                                    height: 30,
                                    marginTop: 1,
                                    textTransform: 'lowercase',
                                    marginLeft: "10px"
                                }}
                                onClick={closeWindow}
                        >
                            Отмена
                        </Button>
                    </Box>
                </form>
            </DialogContent>
        </Dialog>
    )
}

export default CreateWindow