import React, {useEffect, useState} from 'react';
import {Box, Button, Grid, Stack, Typography} from "@mui/material";
import styled from "@emotion/styled";
// @ts-ignore
import { ReactComponent as UserPhoto } from "./../../../assets/svg/Vectorusercomplaintsava.svg";
import ComplaintDialogWindow from "./ComplaintDialogWindow";
import {useTypedSelector} from "../../../redux/store";
import {
    useBlockUserMutation,
    useChangeComplaintStatusMutation
} from "../../../redux/store/rtk-api/complaint-rtk/complaintEndpoints";
import CustomWindow from "../../../components/reusedComponents/CustomWindow";
import {setComplainedStatus} from "../../../redux/store/reducers/complaint/complaint.slice";
import {useDispatch} from "react-redux";
import {convertDate} from "../../../components/reusedComponents/commonFunctions";

const StyledBoldTypography = styled(Typography)({
    fontSize:'15px',
    fontWeight:'800',
    color:"primary.main",

});
const StyledTypography = styled(Typography)({
    fontSize:'13px',
    color:"primary.main",

});

const MyStyledButton = styled(Button)({
    width:"120px",
    textTransform:"capitalize",
    fontSize:"12px"
});

const complaintStatus = {
    NEW: "NEW",
    CANCELED: "CANCELED",
    COMPLETED: "COMPLETED",
    MODERATION: "MODERATION"
}


const ComplaintUsersInfo = () => {

    const [isWindowOpen,setWindowOpen] = useState(false)
    const [isWindowOpen2,setWindowOpen2] = useState(false)

    const userData = useTypedSelector(state=>state.complaint)
    const [blockUser,{isLoading,isSuccess, isError}] = useBlockUserMutation()
    const [changeComplaint,{isLoading:isLoading2,isSuccess:isSuccess2, isError:isError2}] = useChangeComplaintStatusMutation()




    const texts = [
        {
            firstText:"Номер телефона",
            description:userData.phone?String(userData.phone):""
        },
        {
            firstText:"Дата рождения",
            description:userData.date?convertDate(userData.date):""
        },

        {
            firstText:"статус",
            description:"Активный"
        },

    ]

    return (
        <>
            {isWindowOpen&&<CustomWindow closeWindow={()=>setWindowOpen(false)} isWindowOpen={isWindowOpen} isError={isError}
                                         isSuccess={isSuccess} isLoading={isLoading} label={"Вы действительно хотите заблокировать пользователя?"} blockUser={blockUser} blockUserId={userData?.culpritId} changeComplaint={changeComplaint}
                                         complaintId={userData.complaintId}
            />}
            {isWindowOpen2&&<CustomWindow closeWindow={()=>setWindowOpen2(false)} isWindowOpen={isWindowOpen2} isError={isError2}
                                         isSuccess={isSuccess2} isLoading={isLoading2} label={"Вы действительно хотите отклонить жалобу?"} changeComplaint={changeComplaint} complaintStatus={complaintStatus.CANCELED}
                                          complaintId = {userData.complaintId}
            />}
            {userData&& <Box sx = {{padding:"15px", backgroundColor:"#fff", margin:"20px auto"}}>
                    <Grid container>
                        <Grid container xs = {6}>
                            <Grid sx={{backgroundColor:"#E2E2E2"}}><UserPhoto style={{width:60,height:60, color:"#fff", border:"30px solid #E2E2E2"}}/></Grid>
                            <Grid sx = {{margin: '5px 20px'}} >
                                <StyledTypography>Информация на пользователя</StyledTypography>
                                <Typography sx={{margin:"10px auto", fontSize:'20px', color:"primary.main", fontWeight:'800'}}>{`${userData?.secondName} ${userData?.firstName} ${userData?.middleName}`}</Typography>
                                {(!userData?.isBlocked&&userData.complaintStatus!==complaintStatus.CANCELED)&&<Stack direction={"row"} spacing={2} sx={{marginTop: "20px"}}>
                                    <MyStyledButton sx={{color: "#FD4444", backgroundColor: "#FFEFEF"}}
                                                    onClick={() => setWindowOpen(true)}>Заблокировать</MyStyledButton>
                                    <MyStyledButton sx={{color: "primary.main", backgroundColor: "primary.light"}}
                                                    onClick={() => setWindowOpen2(true)}>Отклонить</MyStyledButton>
                                </Stack>}
                                {(userData.complaintStatus===complaintStatus.COMPLETED||userData?.isBlocked)&&
                                    <Typography sx={{marginTop: "20px", color:"green"}}>Пользователь заблокирован!</Typography>
                                }
                                {(userData.complaintStatus===complaintStatus.CANCELED)&&
                                    <Typography sx={{marginTop: "20px", color:"red"}}>Жалоба отклонена!</Typography>
                                }
                            </Grid>
                        </Grid>

                        <Grid container xs = {6}>
                            {texts.map(text=><InfoBlock description={text.description} textData={text.firstText}/>)}
                        </Grid>
                    </Grid>

                </Box>}


        </>

    );
};

type PropsType2 = {
    textData:string,
    description:string | null
}

const InfoBlock:React.FC<PropsType2> = React.memo(({textData, description}) => {
    return (
        <Grid item xs={4}>
            <StyledTypography sx = {{fontSize:'13px', color:"primary.main",}}>{textData}</StyledTypography>
            <StyledBoldTypography sx = {{fontSize:'15px', fontWeight:'800', color:"primary.main",}}>{description}</StyledBoldTypography>
        </Grid>
    )
})


export default ComplaintUsersInfo;