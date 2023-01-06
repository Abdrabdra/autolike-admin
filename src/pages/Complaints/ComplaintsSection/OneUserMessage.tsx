import React, {useEffect} from 'react';
import {Box, Grid, Typography} from "@mui/material";
// @ts-ignore
import userPhoto from "../../../assets/images/peoplePhoto.jpeg";
import {useDispatch} from "react-redux";
import {setButtonVisibility} from "./../../../redux/store/reducers/complaint/complaint.slice";

interface PropsType {
    message: {
        id: number,
        img: string,
        userName: string,
        statusDescription: string,
        time: string
    }

}

const OneUserMessage:React.FC<PropsType> = ({message}) => {

    const dispatch = useDispatch();
    dispatch(setButtonVisibility(true));



    const bottomRef = React.useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        if (bottomRef.current) {
            bottomRef.current.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }

    };

    useEffect(() => {
        scrollToBottom()
    }, [])

    return (
        <Box sx = {{width:"98%", backgroundColor:"primary.light", borderLeft:"5px solid #fff", borderRight:"5px solid #fff", height:"90%"}}>
            <Grid container key={message.id} sx={{borderBottom: "10px solid #fff"}}>
                <Grid item xs={2}><img src={message.img ? message.img : userPhoto} alt="user avatar"
                                         style={{width: "60px", height: "60px", border: "10px solid #E4FFF9"}}/></Grid>
                <Grid item xs={9} sx={{padding: "10px 0px", marginLeft:"10px"}}>
                    <Typography
                        sx={{fontSize: "20px", fontWeight: "800", marginTop: "5px"}}>{message.userName}</Typography>
                    <Typography sx={{
                        fontSize: "12px",
                        fontWeight: "200",
                        marginTop: "5px",
                        color: "#B1B1B1"
                    }}>{message.statusDescription}</Typography>
                </Grid>

            </Grid>

<Box sx = {{overflowY: 'scroll',
    scrollBehavior: 'smooth',height: "74%"}}>
    <ReceivedMessage />
    <SentMessage />
    <ReceivedMessage />
    <SentMessage />
    <ReceivedMessage />
    <SentMessage />
    <ReceivedMessage />
    <SentMessage />
    <ReceivedMessage />
    <SentMessage />
    <ReceivedMessage />
    <SentMessage />
    <ReceivedMessage />
    <SentMessage />
    <ReceivedMessage />
    <SentMessage />
    <div ref={bottomRef}></div>
</Box>







            </Box>





    );
};

export default OneUserMessage;

const SentMessage = () => {
    return (
        <Grid container alignItems="center" direction="row" justifyContent="flex-end" >
            <Grid item sx={{display:"flex", float:"right"}}>
                <Box sx={{
                    minHeight: '40px',
                    borderBottomLeftRadius: '15px',
                    borderTopLeftRadius: '15px',
                    borderTopRightRadius: '15px',
                    marginRight: '15px',
                    marginBottom:'10px',
                    border: '1px solid #e0e0e0',
                    backgroundColor:"primary.main"
                }}>
                    <Typography sx={{padding: '5px 8px 0px 8px',color:"#fff"}}>Здраствуйте, хорошо</Typography>
                    <Typography component="span" sx={{float:"right",fontWeight: "400",fontSize:"12px",color:"#fff", paddingRight:"2px"}}>10:32</Typography>
                </Box>
            </Grid>



        </Grid>
    )
}

const ReceivedMessage = () => {
    return (
        <Grid container alignItems="center" direction="row" justifyContent="flex-start" >
            <Grid item sx={{display:"flex", float:"right"}}>
                <Box sx={{
                    minHeight: '40px',
                    maxWidth:"300px",
                    borderBottomLeftRadius: '15px',
                    borderBottomRightRadius: '15px',
                    borderTopRightRadius: '15px',
                    marginLeft: '15px',
                    marginBottom:'10px',
                    border: '1px solid #e0e0e0',
                    backgroundColor:"#fff"
                }}>
                    <Typography sx={{padding: '5px 8px 0px 8px'}}>Здраствуйте, у вас запись в 12:00 </Typography>
                    <Typography component="span" sx={{float:"right",fontWeight: "400",fontSize:"12px",color:"primary.main"}}>10.32</Typography>


                </Box>
            </Grid>
        </Grid>
    )
}











