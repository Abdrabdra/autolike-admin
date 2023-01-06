import { Box, Button, Paper, Stack, Typography } from "@mui/material";
import { Suspense } from "react";
import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { HeaderBlock, Poster } from "../mainStyle";

//pages
import EditPage from "../Staff/StaffSection/EditPage";
import { useGetMyProfileQuery } from "../../redux/store/rtk-api/profile-rtk/profileEndpoints";
import { setProfileId } from "../../redux/store/reducers/profile/profile.slice";
import { useDispatch } from "react-redux";
import ManagementSection from "./ManagementSection";
import Error from "../Error";

const Profile = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { data: profileData, isLoading, isError } = useGetMyProfileQuery("");
  if (profileData) {
    dispatch(setProfileId(profileData));
  }

  const goBack = () => {
    navigate(-1);
  };

  return (
    <Box sx={{ overflow: "hidden" }}>
      <HeaderBlock>
        <Poster>Управление</Poster>
      </HeaderBlock>
      <Suspense fallback={<div>Загрузка...</div>}>
        <Routes>
          <Route index element={<Navigate to="hobby" />} />

          <Route path={"hobby"} element={<ManagementSection />}>
            <Route index element={<ManagementSection />} />
            <Route path={"list"} element={<ManagementSection />} />
            <Route path={"one/:hobbyId"} element={<ManagementSection />} />
            <Route path={"create"} element={<ManagementSection />} />
          </Route>
          <Route path={"city"} element={<ManagementSection />}>
            <Route index element={<ManagementSection />} />
            <Route path={"list"} element={<ManagementSection />} />
            <Route path={"one/:cityId"} element={<ManagementSection />} />
            <Route path={"create"} element={<ManagementSection />} />
          </Route>
          <Route path={"hadith"} element={<ManagementSection />}>
            <Route index element={<ManagementSection />} />
            <Route path={"list"} element={<ManagementSection />} />
            <Route path={"hadithes/:hadithId"} element={<ManagementSection />} />
            <Route path={"create"} element={<ManagementSection />} />
            <Route path={"description/:oneHadithId"} element={<ManagementSection />} />
          </Route>
          <Route path={"*"} element={<Error />} />
        </Routes>
      </Suspense>
    </Box>
  );
};

export default Profile;
