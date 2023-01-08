import { Stack, Typography } from "@mui/material";
import { FC } from "react";
import MainBaseButton from "../../../../../components/Button/MainBaseButton/MainBaseButton";
import { useDeleteBodyMutation } from "../../../../../redux/store/rtk-api/management-rtk/managementEndpoints";
import { IMarka } from "../../../../../types/Management/Marka";

interface Props {
  data: IMarka;
}

const BodyOne: FC<Props> = ({ data }) => {
  const [deleteBody] = useDeleteBodyMutation();

  const handleDelete = async () => {
    await deleteBody({ id: data.id });
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

export default BodyOne;
