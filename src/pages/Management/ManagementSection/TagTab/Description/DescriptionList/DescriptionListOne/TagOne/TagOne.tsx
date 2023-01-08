import { Stack, Typography } from "@mui/material";
import { FC } from "react";
import MainBaseButton from "../../../../../../../../components/Button/MainBaseButton/MainBaseButton";
import { useDeleteTagMutation } from "../../../../../../../../redux/store/rtk-api/management-rtk/managementEndpoints";
import { IDescriptionTag } from "../../../../../../../../types/Management/Description";

interface Props {
  data: IDescriptionTag;
}

const TagOne: FC<Props> = ({ data }) => {
  const [deleteItem] = useDeleteTagMutation();

  const handleDelete = () => {
    deleteItem({ id: data.id });
  };

  return (
    <Stack direction="row" justifyContent="space-between">
      <Stack>
        <Stack direction="row" spacing={1}>
          <Typography>Артикул: </Typography>
          <Typography>{data.id}</Typography>
        </Stack>
        <Stack direction="row" spacing={1}>
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

export default TagOne;
