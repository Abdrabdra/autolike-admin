import { Box, Button, Stack, Typography } from "@mui/material";
import {
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import {
  useCreateHobbyMutation,
  useDeleteHobbyMutation,
  useGetHobbiesQuery
} from "../../../../redux/store/rtk-api/hobby-rtk/hobbyEndpoints";
import ReusedManagement from "../../../../components/reusedComponents/ReusedManagement";

const HobbyTab = () => {

    return (
    <Box>
      <Stack direction={"row"} sx={{ justifyContent: "space-between" }}>
        <Typography sx={{ fontSize: "25px", mb: "15px", color:"primary.main", fontWeight:600 }}>
          Хобби
        </Typography>

      </Stack>

      <Routes>
        <Route index element={<Navigate to="list" />} />
        <Route path={"list"} element={<ReusedManagement fetch={useGetHobbiesQuery} create={useCreateHobbyMutation}
        remove={useDeleteHobbyMutation} elem={"Хобби"}/>} />
      </Routes>
    </Box>
  );
};

export default HobbyTab;
