// library
import React, { Suspense } from "react";
import { Box, Paper, Stack, Typography } from "@mui/material";
import { Route, Routes } from "react-router-dom";

// main-Style
import { HeaderBlock, Poster } from "../mainStyle";
import ComplaintsList from "./ComplaintsSection/ComplaintsList";
import ComplaintUserPage from "./ComplaintsSection/ComplaintUserPage";


const ComplaintsPage = () => {
  return (
      <Box>
          <HeaderBlock>
              <Poster>Список жалоб</Poster>
          </HeaderBlock>
          <Suspense fallback={<div>Загрузка...</div>}>
              <Routes>
                  <Route index element={<ComplaintsList />} />
                   <Route path="/" element={<ComplaintUserPage />} />
              </Routes>
          </Suspense>
      </Box>


  );
};

export default ComplaintsPage;
