import React, {useEffect} from "react";
import {Box, Button, Dialog, DialogContent, DialogTitle, TextField, Typography} from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import CloseIcon from "@mui/icons-material/Close";
import CustomAlert from "../../../../../components/reusedComponents/CustomAlert";


type PropsType = {
    label?: string
    isWindowOpen: boolean,
    isLoading: boolean,
    isError: boolean,
    isSuccess: boolean,
    closeWindow: () => void,
    handleFunction: () => void,
    error: string,
    isAlert: boolean
}


const RemoveWindow: React.FC<PropsType> = ({
                                               isWindowOpen,
                                               isLoading,
                                               isError,
                                               isSuccess,
                                               label = "",
                                               closeWindow,
                                               handleFunction,
                                               error,
                                               isAlert,

                                           }) => {

    return (
        <Dialog
            open={isWindowOpen}
        >
            {isLoading && <CircularProgress/>}
            {isError && isAlert && <CustomAlert title="Ошибка!" status="error"
                                                message={error}/>}
            {isSuccess && isAlert && <CustomAlert title="Успех!" status="success"
                                                  message="Операция успешно выполнено"/>}

            <DialogTitle id="alert-dialog-title" sx={{width: "350px"}}>
                <CloseIcon sx={{float: 'right', cursor: 'pointer'}} onClick={closeWindow}/>
            </DialogTitle>

            <DialogContent sx={{textAlign: 'center', overflow: "hidden"}}>
                <Typography sx={{marginBottom: 3, fontWeight: 'bold'}}>{label}</Typography>
                <form>
                    <Box sx={{textAlign: 'center', marginBottom: '50px'}}>
                        <Button variant="contained"
                                color="primary"
                                size="large"
                                sx={{width: 100, height: 30, marginTop: 1, textTransform: 'lowercase'}}
                                onClick={handleFunction}
                        >
                            Ок
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

export default RemoveWindow