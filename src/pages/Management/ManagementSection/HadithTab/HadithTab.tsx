import { Box, Button, Stack, Typography } from "@mui/material";
import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import CreateHadith from "./CreateHadith";
import OneHadith from "./OneHadith";
import ReusedManagement from "../../../../components/reusedComponents/ReusedManagement";
import {
  useGetHadithCategoryQuery,
  useCreateHadithCategoryMutation,
  useDeleteHadithCategoryMutation
} from "../../../../redux/store/rtk-api/hadis-rtk/hadithEndpoints";
import ListHadith from "./ListHadith";
import HadithList from "./OneHadith";
import OneHadithDescription from "./OneHadith/OneHadithDescription";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import React from "react";

const HadithTab = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <Box>
      <Stack direction={"row"} sx={{ justifyContent: "space-between" }}>
          {location.pathname !== "/app/management/hadith/list"&& <Button onClick={() => navigate(-1)}
            startIcon={<ChevronLeftIcon sx={{
            color: "primary.main",
          }}/>}
            sx={{backgroundColor:"#fff",mb:"10px"}}
            >
            <Typography sx={{fontWeight: "800", textTransform: 'capitalize'}}>Назад</Typography>
            </Button>}
      </Stack>

      <Routes>
        <Route index element={<Navigate to="list" />} />
        <Route path={"list"} element={<ReusedManagement fetch={useGetHadithCategoryQuery} elem={"Хадис"} create={useCreateHadithCategoryMutation}
        remove={useDeleteHadithCategoryMutation}/>} />
        {/*<Route path={"list"} element={<ListHadith />} />*/}
        <Route path={"hadithes/:hadithId"} element={<HadithList />} />
        <Route path={"create"} element={<CreateHadith />} />
        <Route path={"description/:oneHadithId"} element={<OneHadithDescription />} />
      </Routes>
    </Box>
  );
};

export default HadithTab;
