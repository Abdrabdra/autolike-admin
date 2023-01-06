import React from 'react';
import {Box, Button, Typography} from "@mui/material";

import UserMessageCard from "./UserMessageCard";
import {useDispatch} from "react-redux";
import {useTypedSelector} from "../../../redux/store";
import {
    setButtonVisibility,
    setOneUserMessageVisibility
} from "../../../redux/store/reducers/complaint/complaint.slice";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import styled from "@emotion/styled";
import {useNavigate} from "react-router-dom";

const message = {
    id: 1,
    img: "",
    userName: "Asel",
    statusDescription: "была в сети 1 час назад",
    time: "12:32"
}

const StyledButton = styled(Button)({
    background: "#E4FFF9",
    color: "primary.main",
    height: "30px",
    margin: "10px auto"

});


const ComplaintUserMessages = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()


    // const isPrevBtn = useTypedSelector(state => state.complaint.isShowPrevButton)
    //
    // const hideButton = () => {
    //     dispatch(setButtonVisibility(false));
    //     dispatch(setOneUserMessageVisibility(true))
    // }

    return (
        <Box sx={{backgroundColor: "#fff", margin: "20px auto", padding: "20px", height: "400px"}}>
            <Typography sx={{
                color: "primary.main",
                fontWeight: "800",
                marginBottom: "20px",
                fontSize: "20px"

            }}>Информация о жалобе
            </Typography>



            <Box sx={{backgroundColor: "#fff", margin: "20px auto", padding: "10px", height: "400px"}}>
                <Typography sx={{
                    color: "primary.main",
                    fontWeight: "800",
                    textTransform: 'capitalize',
                    marginBottom:"10px"
                }}>Сообщение</Typography>
                <UserMessageCard/>


        </Box>
</Box>

)
    ;
};


export default ComplaintUserMessages;