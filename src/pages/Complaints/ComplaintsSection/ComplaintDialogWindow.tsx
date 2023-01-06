import React from 'react';
import {Box, Button, Dialog, DialogContent, DialogTitle, Paper, Typography} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import styled from "@emotion/styled";
type PropsType = {
    title: string,
    description:string
    // handleCreate?(): void
    // handleCancelOrder?(): void,
    // handleClickClose?(): void,
    isWindowOpen: boolean
}



const ComplaintDialogWindow:React.FC<PropsType> = ({isWindowOpen,title,description}) => {
    return (
        <Dialog
            open={isWindowOpen}

        >
            <Paper sx={{borderRadius: 1}}>
                <DialogTitle id="alert-dialog-title" >
                    <CloseIcon sx={{float: 'right', cursor: 'pointer'}}></CloseIcon>
                </DialogTitle>

                <DialogContent sx={{width: "400px", textAlign: 'center'}}>
                    <Typography sx={{fontWeight: 800, fontSize: '25px', color:"primary.main"}}>{title}</Typography>
                    <Typography sx={{fontWeight: 600, fontSize: '15px', color:"primary.main"}}>{description}</Typography>

                </DialogContent>
                <Box sx={{textAlign: 'center', marginBottom: '50px'}}>
                    <Button  sx = {{color:"primary.main", backgroundColor:"primary.light", textTransform:"capitalize", width:"30%",
                    fontWeight:"800",
                    }}>Отменить</Button>
                    <Button  sx = {{color:"#fff", backgroundColor:"primary.main", textTransform:"capitalize", width:"30%",
                        fontWeight:"800", marginLeft:"10px",
                        '&:hover': {
                        backgroundColor: "primary.light",
                            color:"primary.main"
                        }}}>Подтвердить</Button>
                </Box>
            </Paper>

        </Dialog>
    );
};

export default ComplaintDialogWindow;