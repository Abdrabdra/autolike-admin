import { Box, Divider, Stack, Typography } from "@mui/material";
import { FC } from "react";

import { DoughnutChart } from "../../../../components/Charts/Doughnut";
import { IHomePart } from "../HomeSection.types";

import { Styled } from "./ReligionBlock.styled";

interface Props {
  count: number;
  religionData: IHomePart[];
}

const ReligionBlock: FC<Props> = ({ count, religionData }) => {
  return (
    <Styled.RWrapper>
      <Styled.RBlock>
        <Typography variant="h3">Статистика по религии</Typography>
        <Styled.RChartContainer>
          {religionData && (
            <DoughnutChart count={count} barData={religionData} />
          )}
        </Styled.RChartContainer>
      </Styled.RBlock>
      {/* <Divider orientation="vertical" sx={{ width: "2px", color: "#E3E3E3" }} />
      <Styled.InfoBlock>
        <Stack spacing={2}>
          {religionData.map((e) => (
            <Styled.TextWrapper key={e.count}>
              <Styled.ColorBox />
              <Typography variant="h18r">{e.value}</Typography>
            </Styled.TextWrapper>
          ))}
        </Stack>
      </Styled.InfoBlock> */}
    </Styled.RWrapper>
  );
};

export default ReligionBlock;
