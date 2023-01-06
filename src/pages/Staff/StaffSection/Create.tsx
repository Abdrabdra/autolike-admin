import React, {Suspense} from 'react';
import {Box, Paper, Stack, Typography} from "@mui/material";
import {Route, Routes} from "react-router-dom";
import CreatePage from "./CreatePage";


const Edit = () => {
    return (
        <Box>

            <Stack>
                <Typography sx={{
                    fontSize: "42px",
                    color: "primary.main",
                    lineHeight: "40px",
                }}>Персонал {">"} Сотрудник {">"} <b>Создать</b></Typography>
            </Stack>

            <Suspense fallback={<div>Загрузка...</div>}>
                <Routes>
                    <Route index element={<CreatePage/>}/>
                </Routes>

            </Suspense>
        </Box>
    );
};

export default Edit;


//<Button sx={{backgroundColor: "primary.main", color:"#fff" }} onClick={handleWorkerUpdate}>Сохранить</Button>