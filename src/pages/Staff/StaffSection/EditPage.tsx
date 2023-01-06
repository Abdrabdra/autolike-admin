import React, {useState} from 'react';
import {Box, Button, Grid, InputAdornment, TextField, Typography} from "@mui/material";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import styled from "@emotion/styled";
import {useNavigate} from "react-router-dom";
import UsersInfo from "./UsersInfo";
import BlockedUsersList from "./BlockedUsersList";
import WorkerHistory from "./WorkerHistory";
import EditMainBlock from "./EditMainBlock";
import EditWorkerInfo from "./EditWorkerInfo";
import CustomWindow from "../../../components/reusedComponents/CustomWindow";
import {useGetOneStaffQuery} from "../../../redux/store/rtk-api/staff-rtk/staffEndpoints";


const StyledButton = styled(Button)({
    backgroundColor: "#fff",
    color: "primary.main",

});

const EditPage = () => {

    const navigate = useNavigate()

    const handleSubmitWorkerData = React.useRef(null)

    const handleWorkerUpdate = () => {
        // @ts-ignore
        handleSubmitWorkerData.current()
    }



    return (
        <Box sx={{paddingTop: '20px', backgroundColor: '#E4FFF9'}}>
            <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                <StyledButton onClick={() => navigate('/app/employees/one-worker')} startIcon={<ChevronLeftIcon sx={{
                    color: "primary.main"
                }}/>}>
                    <Typography sx={{fontWeight: "800", textTransform: 'capitalize'}}>Назад</Typography>
                </StyledButton>
                <Button sx={{backgroundColor: "primary.main", color: "#fff"}}
                        onClick={handleWorkerUpdate}>Сохранить</Button>
            </Box>

            {/*<UsersInfo/>*/}
            <Grid container sx={{marginTop: "20px"}} columnSpacing={2}>

                {/*<Grid item xs = {4}><EditMainBlock/></Grid>*/}
                <Grid item xs={12}><EditWorkerInfo handleSubmitWorkerData={handleSubmitWorkerData}/></Grid>
            </Grid>


        </Box>
    );
};

export default EditPage;