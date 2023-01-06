import { Box, Divider, Grid, Stack, Typography } from "@mui/material";
import { FC, useState } from "react";
import { HorizontalColorBar, VerticalBar } from "../../../../components/Charts";
import { COLORS_ORDER } from "../../../../constants";

import { IHomePart } from "../HomeSection.types";

import { Styled } from "./GenderBlock.styled";

interface Props {
  genderData: IHomePart[];
  count: number;
}

const GenderBlock: FC<Props> = ({ genderData, count }) => {
  let color: number = 0;

  const handleColor = () => {
    color++;
  };

  return (
    <Styled.Wrapper>
      <Grid item sx={{ width: "100%" }}>
        <Styled.ChartContainer>
          {genderData && (
            <HorizontalColorBar count={count} barData={genderData} />
          )}
        </Styled.ChartContainer>
      </Grid>
    </Styled.Wrapper>
  );
};

export default GenderBlock;
