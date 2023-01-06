import React, {Suspense} from 'react';
import {Box, Paper, Stack, Typography} from "@mui/material";
import {Route, Routes} from "react-router-dom";
import ComplaintUserPage from "./ComplaintUserPage";



const ComplaintsUser = () => {
    return (
        <Box>

                <Stack>
                    <Typography sx={{
                        fontSize: "42px",
                        color: "primary.main",
                        lineHeight: "40px",
                    }}>Список жалоб {">"} <b>Пользователь</b></Typography>
                </Stack>

            <Suspense fallback={<div>Загрузка...</div>}>
                    <Routes>
                        <Route index element={<ComplaintUserPage />} />
                    </Routes>

            </Suspense>
        </Box>
    );
};

export default ComplaintsUser;