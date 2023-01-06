import { Box, Divider, Grid, Stack, Typography } from "@mui/material";
import { FC, useState } from "react";
import { HorizontalColorBar, VerticalBar } from "../../../../components/Charts";
import { COLORS_ORDER } from "../../../../constants";

import { IHomePart } from "../HomeSection.types";

import { Styled } from "./StatusBlock.styled";

interface Props {
  statusData: IHomePart[];
  count: number;
}

const StatusBlock: FC<Props> = ({ statusData, count }) => {
  let color: number = 0;

  const handleColor = () => {
    color++;
  };

  return (
    <Styled.Wrapper>
      <Grid item sx={{ width: "100%" }}>
        <Styled.ChartContainer>
          {statusData && (
            <HorizontalColorBar count={count} barData={statusData} />
          )}
        </Styled.ChartContainer>
      </Grid>
    </Styled.Wrapper>
  );
};

export default StatusBlock;
