import React from 'react';
import {Box, Button, Grid, Paper, Stack, Typography} from "@mui/material";
// @ts-ignore
import {ReactComponent as UserPhoto} from "../../../assets/svg/Vectorusercomplaintsava.svg";
// @ts-ignore
import {ReactComponent as BadgeIcon} from "../../../assets/svg/badgeIcon.svg";
import styled from "@emotion/styled";
import {MyStyledButton} from "./UsersInfo";

const StyledButton = styled(Button)({});

const EditMainBlock = () => {
    return (
        <Box component={Paper} sx={{height: "100%"}}>
            <Stack sx={{padding: "20px"}} spacing={2} alignItems={"center"}>
                <Grid container sx={{backgroundColor: "#E2E2E2", width: "100%", height: "150px"}}
                      justifyContent={"center"} alignItems="center">
                    <UserPhoto style={{width: 60, height: 60, color: "#fff"}}/>
                </Grid>
                <Grid sx={{width: "100%"}} container>
                    {/*<Grid item xs = {3}></Grid>*/}
                    {/*<Grid item xs = {9}></Grid>*/}
                    <Button sx={{
                        color: "#fff",
                        backgroundColor: "primary.main",
                        textTransform: "capitalize",
                        justifyContent: "flex-start"
                    }}
                            fullWidth
                            startIcon={<UserPhoto
                                style={{width: 20, height: 20, color: "#fff", marginLeft: "5px", marginRight: "10px"}}
                            />}
                    >
                        Аккаунт</Button>
                </Grid>

                <Grid sx={{width: "100%"}} container>
                    {/*<Grid item xs = {3}></Grid>*/}
                    {/*<Grid item xs = {9}></Grid>*/}
                    <Button sx={{
                        color: "primary.main",
                        backgroundColor: "primary.light",
                        textTransform: "capitalize",
                        justifyContent: "flex-start"
                    }}
                            fullWidth
                            startIcon={<BadgeIcon
                                style={{width: 20, height: 20, color: "#fff", marginLeft: "5px", marginRight: "10px"}}
                            />}
                    >
                        Права доступа</Button>
                </Grid>


            </Stack>
            <Stack justifyContent={"center"} alignItems={"center"} sx={{
                height: "80%"
            }}>
                <Grid>
                    <MyStyledButton
                        sx={{color: "primary.main", backgroundColor: "primary.light"}}>Заблокировать</MyStyledButton>
                    {/*<MyStyledButton sx={{color:"#FD4444", backgroundColor:"#FFEFEF", marginLeft:"20px"}}>Удалить</MyStyledButton>*/}
                </Grid>

            </Stack>

        </Box>
    );
};

export default EditMainBlock;