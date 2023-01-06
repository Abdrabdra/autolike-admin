import { styled } from "@mui/system";
import { Box, BoxProps, Grid, GridProps } from "@mui/material";

const Wrapper = styled((props: GridProps) => (
  <Grid container columns={4} {...props} />
))(({ theme }) => ({
  display: "flex",
  height: "100%",
  width: "100%",
}));

const Block = styled((props: BoxProps) => <Box {...props} />)(({ theme }) => ({
  width: "100%",
  height: "calc(100% - 65px)",
  overflow: "hidden",
  overflowY: "auto",

  // Scroll
  /* width */
  "&::-webkit-scrollbar": {
    height: "8px",
    backgroundColor: "#E4FFF9",
    borderRadius: "10px",
  },

  /* Track */
  "&::-webkit-scrollbar-track": {
    borderRadius: "10px",
  },

  /* Handle */
  "&::-webkit-scrollbar-thumb": {
    background: "#2398AB",
    borderRadius: "10px",
  },

  /* Handle on hover */
  "&::-webkit-scrollbar-thumb:hover": {
    background: "#c5f1e8",
  },
}));

const ChartContainer = styled((props: BoxProps) => <Box {...props} />)(
  ({ theme }) => ({
    width: "99%",
    height: "85%",
    overflow: "hidden",
    overflowY: "auto",
  })
);

export const Styled = {
  Wrapper,
  Block,
  ChartContainer,
};
