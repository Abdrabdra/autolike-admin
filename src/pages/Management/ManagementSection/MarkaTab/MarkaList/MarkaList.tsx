import { Stack, Typography } from "@mui/material";
import MainBaseButton from "../../../../../components/Button/MainBaseButton/MainBaseButton";
import { useGetMarkaQuery } from "../../../../../redux/store/rtk-api/management-rtk/managementEndpoints";
import MarkaOne from "./MarkaOne";

const MarkaList = () => {
  const { data, isSuccess, isLoading, isFetching, refetch } =
    useGetMarkaQuery("");

  return (
    <Stack>
      {isLoading ? (
        "Загрузка..."
      ) : isSuccess ? (
        <Stack spacing={1}>
          <Stack justifyContent={"space-between"} direction="row">
            <Typography>Список Марок</Typography>
          </Stack>

          {data.data.map((row) => (
            <MarkaOne key={row.id} data={row} />
          ))}
        </Stack>
      ) : (
        "Ошибка при загрузки"
      )}
    </Stack>
  );
};

export default MarkaList;
