import { styled } from "@mui/system";
import { Box, BoxProps, Grid, GridProps } from "@mui/material";

export const Wrapper = styled((props: GridProps) => (
  <Grid container item {...props} />
))(({ theme }) => ({
  display: "flex",
  height: "100%",
  width: "100%",
  marginTop: "20px",
}));

export const Styled = {
  Wrapper,
};
