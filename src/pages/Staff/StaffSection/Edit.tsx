import React, {Suspense} from 'react';
import {Box, Paper, Stack, Typography} from "@mui/material";
import {Route, Routes} from "react-router-dom";


const Edit = () => {
    return (
        <Box>

            <Stack>
                <Typography sx={{
                    fontSize: "42px",
                    color: "primary.main",
                    lineHeight: "40px",
                }}>Персонал {">"} Сотрудник {">"} <b>Редактировать</b></Typography>
            </Stack>

            <Suspense fallback={<div>Загрузка...</div>}>
                <Routes>
                    {/*<Route index element={<EditPage />} />*/}
                </Routes>

            </Suspense>
        </Box>
    );
};

export default Edit;