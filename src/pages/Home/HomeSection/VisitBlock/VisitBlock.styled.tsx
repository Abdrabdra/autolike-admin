import { styled } from "@mui/system";
import { Box, BoxProps, Grid, GridProps } from "@mui/material";

export const Wrapper = styled((props: GridProps) => (
  <Grid container columns={4} {...props} />
))(({ theme }) => ({
  display: "flex",
  height: "100%",
  width: "100%",
}));

export const Block = styled((props: BoxProps) => <Box {...props} />)(
  ({ theme }) => ({
    width: "100%",
    height: "calc(100% - 65px)",
    overflow: "hidden",
    overflowX: "auto",
    overflowY: "auto",
    marginTop: "20px",
  })
);

export const ChartContainer = styled((props: BoxProps) => <Box {...props} />)(
  ({ theme }) => ({
    width: "100%",
    height: "99%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  })
);

export const Styled = {
  Wrapper,
  Block,
  ChartContainer,
};
