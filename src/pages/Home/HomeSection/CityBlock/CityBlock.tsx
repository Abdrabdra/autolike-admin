import { Box, Divider, Grid, Stack, Typography } from "@mui/material";
import { FC, useState } from "react";
import { HorizontalColorBar, VerticalBar } from "../../../../components/Charts";
import { COLORS_ORDER } from "../../../../constants";

import { IHomePart } from "../HomeSection.types";

import { Styled } from "./CityBlock.styled";

interface Props {
  cityData: IHomePart[];
  count: number;
}

const CityBlock: FC<Props> = ({ cityData, count }) => {
  return (
    <Styled.Wrapper>
      <Grid item sx={{ marginTop: "20px", width: "100%" }}>
        <Box sx={{ height: "100%" }}>
          <Typography variant="h3" sx={{ ml: "25px" }}>
            Статистика по городам - {cityData.length}
          </Typography>
          <Styled.Block>
            <Styled.ChartContainer>
              {cityData && (
                <HorizontalColorBar count={count} barData={cityData} />
              )}
            </Styled.ChartContainer>
          </Styled.Block>
        </Box>
      </Grid>
    </Styled.Wrapper>
  );
};

export default CityBlock;
