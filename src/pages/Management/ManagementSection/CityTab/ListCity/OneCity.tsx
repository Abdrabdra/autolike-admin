import { Button, Stack, Typography } from "@mui/material";
import { FC } from "react";
import BaseAccordion from "../../../../../components/BaseAccordion/StepperAccordion";
import { useCreateCityInMutation } from "../../../../../redux/store/rtk-api/city-rtk/cityEndpoints";
import { IGetRegion } from "../../../../../types/Management/Region";
import CreateCity from "../CreateCity";

interface Props {
  data: IGetRegion;
}

const OneCity: FC<Props> = ({ data }) => {
  return (
    <BaseAccordion summary={data.title}>
      <Stack spacing={2}>
        <CreateCity id={data.id} />

        <Stack>
          {data.cities.map((row) => (
            <Stack key={row.id} direction="row" spacing={2}>
              <Stack direction="row" spacing={1}>
                <Typography>Артикул: </Typography>
                <Typography>{row.id}</Typography>
              </Stack>
              <Stack direction="row" spacing={1}>
                <Typography>Название: </Typography>
                <Typography>{row.title}</Typography>
              </Stack>
            </Stack>
          ))}
        </Stack>
      </Stack>
    </BaseAccordion>
  );
};

export default OneCity;
