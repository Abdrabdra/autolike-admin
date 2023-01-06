import { Box, Divider, Grid, Stack, Typography } from "@mui/material";
import { FC, useState } from "react";
import { VerticalBar } from "../../../../components/Charts";
import { COLORS_ORDER } from "../../../../constants";

import { IHomePart } from "../HomeSection.types";

import { Styled } from "./HobbyBlock.styled";

interface Props {
  hobbyData: IHomePart[];
  count: number;
}

const HobbyBlock: FC<Props> = ({ hobbyData, count }) => {
  let color: number = 0;

  const handleColor = () => {
    color++;
  };

  return (
    <Styled.Wrapper>
      <Grid item xs={2.5} sx={{ marginTop: "20px" }}>
        <Typography variant="h3">Интересы - {hobbyData.length}</Typography>
        <Styled.Block>
          <Styled.ChartContainer>
            {hobbyData && <VerticalBar count={count} barData={hobbyData} />}
          </Styled.ChartContainer>
        </Styled.Block>
      </Grid>
      <Grid
        item
        xs={1.5}
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          overflow: "hidden",
          backgroundColor: "#fff",
          height: "100%",
        }}
      >
        <Divider
          orientation="vertical"
          sx={{ height: "550px", color: "#E3E3E3" }}
        />
        <Styled.InfoBlock>
          <Stack spacing={2} sx={{ py: "25px", overflowY: "auto" }}>
            {hobbyData.map((e) => (
              <>
                <Styled.TextWrapper key={e.count}>
                  <Box sx={{ width: "25px" }}>
                    <Styled.ColorBox bgColor={COLORS_ORDER[color]} />
                  </Box>
                  <Typography variant="h18b" sx={{ width: "122px" }}>
                    {e.value}
                  </Typography>
                  <Typography variant="h16eb" sx={{ width: "53px" }}>
                    - {((e.count * 100) / count).toFixed(1)}%
                  </Typography>
                </Styled.TextWrapper>
                {handleColor()}
              </>
            ))}
          </Stack>
        </Styled.InfoBlock>
      </Grid>
    </Styled.Wrapper>
  );
};

export default HobbyBlock;
