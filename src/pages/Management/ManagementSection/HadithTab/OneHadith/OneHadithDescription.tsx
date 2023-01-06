import {Box, CircularProgress, Grid, Paper, Stack, Typography} from "@mui/material";
import React from "react";
import {useGetOneHadithQuery} from "../../../../../redux/store/rtk-api/hadis-rtk/hadithEndpoints";

import {useParams} from "react-router-dom";


const OneHadithDescription = () => {
    const {oneHadithId} = useParams()
    const {
        data: hadithes,
        isLoading: isLoading,
        isError: isError,
    } = useGetOneHadithQuery(oneHadithId ? +oneHadithId : 11)

    return (
        <>
            {isLoading && <CircularProgress/>}
            {isError && <div>Произошла ошибка!</div>}
            <Box component={Paper} sx={{
                padding: "40px",
                alignItems: "center", display: "flex", justifyContent: "center"
            }}>
                <Stack>
                    <Grid container alignItems={"center"} justifyContent={"center"}>
                        <Typography sx={{
                            fontSize: "20px",
                            color: "primary.main",
                            fontWeight: 700,
                            mb: "5px"
                        }}>{hadithes && hadithes?.title}</Typography>
                    </Grid>
                    <Grid container alignItems={"center"} justifyContent={"center"}>
                        <Typography sx={{fontSize: "20px", color: "primary.main", fontWeight: 700, mb: "5px"}}>Хадис(арабский
                            текст)</Typography>
                        <Box sx={{fontSize: "18px", color: "primary.main", fontWeight: 500, mb: "10px"}}>
                            {hadithes && hadithes?.arabic}
                        </Box>
                    </Grid>
                    <Grid container alignItems={"center"} justifyContent={"center"}>
                        <Typography sx={{
                            fontSize: "20px",
                            color: "primary.main",
                            fontWeight: 700,
                            mb: "5px"
                        }}>Перевод</Typography>
                        <Box sx={{fontSize: "18px", color: "primary.main", fontWeight: 500, mb: "10px"}}>
                            {hadithes && hadithes?.translate}
                        </Box>
                    </Grid>
                    <Grid container alignItems={"center"} justifyContent={"center"}>
                        <Typography sx={{
                            fontSize: "20px",
                            color: "primary.main",
                            fontWeight: 700,
                            mb: "5px"
                        }}>Коментарий</Typography>
                        <Box sx={{fontSize: "18px", color: "primary.main", fontWeight: 500, mb: "10px"}}>
                            {hadithes && hadithes?.description}
                        </Box>
                    </Grid>

                </Stack>
            </Box>

        </>

    );
};

export default OneHadithDescription;
