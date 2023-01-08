import { Stack, Typography } from "@mui/material";
import { FC } from "react";
import MainBaseButton from "../../../../../components/Button/MainBaseButton/MainBaseButton";
import { useDeleteGenerationMutation } from "../../../../../redux/store/rtk-api/management-rtk/managementEndpoints";
import { IGeneration } from "../../../../../types/Management/Generation";

interface Props {
  data: IGeneration;
}

const GenerationListRow: FC<Props> = ({ data }) => {
  const [deleteItem] = useDeleteGenerationMutation();

  const handleDelete = async () => {
    await deleteItem({ id: data.id });
  };

  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      sx={{ backgroundColor: "white", padding: "10px", borderRadius: "12px" }}
    >
      <Stack>
        <Stack direction="row">
          <Typography>Артикул: </Typography>
          <Typography>{data.id}</Typography>
        </Stack>

        <Stack direction="row">
          <Typography>Название: </Typography>
          <Typography>{data.title}</Typography>
        </Stack>
      </Stack>

      <Stack>
        <Stack direction="row">
          <Typography>Создано с: </Typography>
          <Typography>{data.createdFrom}</Typography>
        </Stack>

        <Stack direction="row">
          <Typography>Длилось до: </Typography>
          <Typography>{data.createdTo}</Typography>
        </Stack>
      </Stack>

      <MainBaseButton
        onClick={handleDelete}
        sx={{ width: "90px" }}
        bgcolor="error.main"
      >
        Удалить
      </MainBaseButton>
    </Stack>
  );
};

export default GenerationListRow;
