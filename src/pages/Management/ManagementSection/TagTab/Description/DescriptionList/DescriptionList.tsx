import { Stack, Typography } from "@mui/material";
import { useGetDescriptionsQuery } from "../../../../../../redux/store/rtk-api/management-rtk/managementEndpoints";
import DescriptionListOne from "./DescriptionListOne/DescriptionListOne";

const DescriptionList = () => {
  const { data, isLoading, isFetching, isSuccess } =
    useGetDescriptionsQuery("");

  return (
    <Stack spacing={1}>
      <Typography>Список Тэгов</Typography>

      {isLoading
        ? "Загрузка..."
        : isSuccess
        ? data
            .slice(0)
            .reverse()
            .map((row) => <DescriptionListOne data={row} />)
        : "Ошибка при загрузки"}
    </Stack>
  );
};

export default DescriptionList;
