// library
import React, { Suspense, useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";

// pages

// main-Style
import { HeaderBlock, Poster } from "../mainStyle";

import { useGetHomeQuery } from "../../redux/store/rtk-api/home-rtk/homeEndpoints";
import { HomeSection } from "./HomeSection";
import { refresh } from "../../redux/store/reducers/auth/auth.action";
import { useDispatch } from "react-redux";

export default function Home() {
  const data = useGetHomeQuery("");
  const dispatch = useDispatch();

  const location = useLocation();
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  // React.useEffect(() => {
  //   if (localStorage.getItem("access_token")) {
  //     store.dispatch(refresh());
  //   }
  // }, []);

  // @ts-ignore

  return (
    <Box>
      <HeaderBlock>
        <Poster>Главная</Poster>
      </HeaderBlock>
      <Suspense fallback={<div>Загрузка...</div>}>
        <HomeSection />
      </Suspense>
    </Box>
  );
}
