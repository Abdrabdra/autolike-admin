import React, {Suspense} from 'react';
import {Box, Paper, Stack, Typography} from "@mui/material";
import {Route, Routes} from "react-router-dom";
import UserPage from "./UserPage";



const Worker = () => {
    return (
        <Box>

                <Stack>
                    <Typography sx={{
                        fontSize: "42px",
                        color: "primary.main",
                        lineHeight: "40px",
                    }}>Персонал {">"} <b>Сотрудник</b></Typography>
                </Stack>

            <Suspense fallback={<div>Загрузка...</div>}>
                    <Routes>
                        <Route index element={<UserPage />} />
                    </Routes>

            </Suspense>
        </Box>
    );
};

export default Worker;