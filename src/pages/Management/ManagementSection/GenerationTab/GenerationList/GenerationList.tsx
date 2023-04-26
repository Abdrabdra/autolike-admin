import { Stack, Typography } from "@mui/material";
import { useState } from "react";
import MainBaseButton from "../../../../../components/Button/MainBaseButton/MainBaseButton";
import { StyledMainInput } from "../../../../../components/Input/StyledMainInput";
import BaseSelect from "../../../../../components/Select/BaseSelect";
import {
  useGetGenerationQuery,
  useGetModelQuery,
} from "../../../../../redux/store/rtk-api/management-rtk/managementEndpoints";
import GenerationListRow from "./GenerationListRow";

const GenerationList = () => {
  const [value, setValue] = useState("");

  const [searchedValue, setSearchedValue] = useState("");
  const [clicked, setClicked] = useState(false);

  const handleSearch = () => {
    setSearchedValue(value);

    setClicked(true);

    refetch();
  };

  const { data, isLoading, isFetching, isSuccess, refetch } =
    useGetGenerationQuery(
      { modelId: Number(searchedValue) },
      { skip: !clicked }
    );

  const { data: modelData } = useGetModelQuery("");

  return (
    <Stack spacing={2}>
      <Stack spacing={1}>
        <Typography>Поиск Поколений по Модели</Typography>
        <form>
          <Stack direction="row" spacing={2}>
            <BaseSelect
              label="Артикул Модели"
              data={modelData?.data}
              state={String(value)}
              setState={setValue}
              fieldName={"modelId"}
            />

            <MainBaseButton
              onClick={handleSearch}
              bgcolor="primary.main"
              sx={{ width: "120px" }}
            >
              Поиск
            </MainBaseButton>
          </Stack>
        </form>
      </Stack>

      {clicked
        ? isLoading || isFetching
          ? "Загрузка..."
          : isSuccess
          ? data.map((row) => <GenerationListRow key={row.id} data={row} />)
          : "Ошибка при загрузки"
        : null}
    </Stack>
  );
};

export default GenerationList;
