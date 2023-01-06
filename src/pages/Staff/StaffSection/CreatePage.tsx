import React from 'react';
import {Box, Button, Grid, InputAdornment, TextField, Typography} from "@mui/material";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import styled from "@emotion/styled";
import {useNavigate} from "react-router-dom";
import UsersInfo from "./UsersInfo";
import BlockedUsersList from "./BlockedUsersList";
import WorkerHistory from "./WorkerHistory";
import EditMainBlock from "./EditMainBlock";
import EditWorkerInfo from "./EditWorkerInfo";
import CreateWorker from "./CreateWorker";


const StyledButton = styled(Button)({
    backgroundColor: "#fff",
    color: "primary.main",

});

const CreatePage = () => {

    const navigate = useNavigate()

    const handleSubmitWorkerData = React.useRef(null)

    const handleWorkerCreate = () => {
        // @ts-ignore
        handleSubmitWorkerData.current()
    }

    return (
        <Box sx={{paddingTop: '20px', backgroundColor: '#E4FFF9'}}>
            <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                <StyledButton onClick={() => navigate('/app/employees')} startIcon={<ChevronLeftIcon sx={{
                    color: "primary.main"
                }}/>}>
                    <Typography sx={{fontWeight: "800", textTransform: 'capitalize'}}>Назад</Typography>
                </StyledButton>
                <Button sx={{backgroundColor: "primary.main", color: "#fff"}}
                        onClick={handleWorkerCreate}>Создать</Button>
            </Box>

            {/*<UsersInfo/>*/}
            <Box sx={{marginTop: "20px"}}>
                <CreateWorker handleSubmitWorkerData={handleSubmitWorkerData}/>
                {/*<EditWorkerInfo handleSubmitWorkerData={handleSubmitWorkerData}/>*/}
            </Box>


        </Box>
    );
};

export default CreatePage;