import { Box, Button, Stack, Typography } from "@mui/material";
import {
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import {
    useCreateCityMutation,useGetCitiesQuery
} from "../../../../redux/store/rtk-api/city-rtk/cityEndpoints";
import ReusedManagement from "../../../../components/reusedComponents/ReusedManagement";
import {useDeleteHobbyMutation} from "../../../../redux/store/rtk-api/hobby-rtk/hobbyEndpoints"

const CityTab = () => {

  return (
      <Box>
        <Stack direction={"row"} sx={{ justifyContent: "space-between" }}>
          <Typography sx={{ fontSize: "25px", mb: "15px", color:"primary.main", fontWeight:600 }}>
            Город
          </Typography>

        </Stack>

        <Routes>
          <Route index element={<Navigate to="list" />} />
          <Route path={"list"} element={<ReusedManagement fetch={useGetCitiesQuery} create={useCreateCityMutation}
                                                           elem={"Город"} remove={useDeleteHobbyMutation}/>} />
        </Routes>
      </Box>
  );
};

export default CityTab;
