import { Stack, Typography } from "@mui/material";
import MainBaseButton from "../../../../../components/Button/MainBaseButton/MainBaseButton";
import { useGetBodyQuery } from "../../../../../redux/store/rtk-api/management-rtk/managementEndpoints";
import MarkaOne from "../../MarkaTab/MarkaList/MarkaOne";
import BodyOne from "./BodyOne";

const BodyList = () => {
  const { data, isFetching, isLoading, isSuccess } = useGetBodyQuery("");

  return (
    <Stack>
      {isLoading ? (
        "Загрузка..."
      ) : isSuccess ? (
        <Stack spacing={1}>
          <Stack justifyContent={"space-between"} direction="row">
            <Typography>Список Марок</Typography>
          </Stack>

          {data.map((row) => (
            <BodyOne key={row.id} data={row} />
          ))}
        </Stack>
      ) : (
        "Ошибка при загрузки"
      )}
    </Stack>
  );
};

export default BodyList;
