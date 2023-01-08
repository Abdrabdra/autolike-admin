import { Stack, Typography } from "@mui/material";
import { useState } from "react";
import MainBaseButton from "../../../../../components/Button/MainBaseButton/MainBaseButton";
import { StyledMainInput } from "../../../../../components/Input/StyledMainInput";
import {
  useDeleteModelMutation,
  useGetModelQuery,
} from "../../../../../redux/store/rtk-api/management-rtk/managementEndpoints";

const ModelList = () => {
  const { data, isLoading, isFetching, isSuccess, refetch } =
    useGetModelQuery("");

  const [deleteModel] = useDeleteModelMutation();

  const handleDelete = async (id: number) => {
    await deleteModel({ id });
  };

  return (
    <Stack spacing={2}>
      {isLoading ? (
        "Загрузка..."
      ) : isSuccess ? (
        <Stack spacing={2}>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography>Список Моделей</Typography>
          </Stack>

          <Stack spacing={1}>
            {data.data.map((row) => (
              <Stack
                key={row.id}
                direction="row"
                justifyContent="space-between"
                sx={{
                  backgroundColor: "white",
                  padding: "10px",
                  borderRadius: "12px",
                }}
              >
                <Stack>
                  <Stack direction="row" spacing={1}>
                    <Typography>Артикул: </Typography>
                    <Typography>{row.id}</Typography>
                  </Stack>

                  <Stack direction="row" spacing={1}>
                    <Typography>Название: </Typography>
                    <Typography>{row.title}</Typography>
                  </Stack>
                </Stack>

                <MainBaseButton
                  onClick={() => handleDelete(row.id)}
                  sx={{ width: "90px" }}
                  bgcolor="error.main"
                >
                  Удалить
                </MainBaseButton>
              </Stack>
            ))}
          </Stack>
        </Stack>
      ) : (
        "Ошибка при загрузкиы"
      )}
    </Stack>
  );
};

export default ModelList;
