import { Stack, Typography } from "@mui/material";
import { FC } from "react";
import BaseAccordion from "../../../../../../../components/BaseAccordion/StepperAccordion";
import MainBaseButton from "../../../../../../../components/Button/MainBaseButton/MainBaseButton";
import { useDeleteDescriptionMutation } from "../../../../../../../redux/store/rtk-api/management-rtk/managementEndpoints";
import { IGetDescriptionResponse } from "../../../../../../../types/Management/Description";
import TagCreate from "./TagCreate";
import TagOne from "./TagOne";

interface Props {
  data: IGetDescriptionResponse;
}

const DescriptionListOne: FC<Props> = ({ data }) => {
  const [deleteItem] = useDeleteDescriptionMutation();

  const handleDelete = () => {
    deleteItem({ id: data.id });
  };

  return (
    <BaseAccordion summary={data.title}>
      <Stack spacing={2}>
        <MainBaseButton
          onClick={handleDelete}
          sx={{ width: "200px", alignSelf: "center" }}
          bgcolor="error.main"
        >
          Удалить {data.title}
        </MainBaseButton>

        <TagCreate id={data.id} />

        <Stack spacing={1}>
          {data.tags
            .slice(0)
            .reverse()
            .map((row) => (
              <TagOne key={row.id} data={row} />
            ))}
        </Stack>
      </Stack>
    </BaseAccordion>
  );
};

export default DescriptionListOne;
