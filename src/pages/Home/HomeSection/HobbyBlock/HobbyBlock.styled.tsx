import { styled } from "@mui/system";
import { Box, BoxProps, Grid, GridProps } from "@mui/material";

export const Wrapper = styled((props: GridProps) => (
  <Grid container columns={4} {...props} />
))(({ theme }) => ({
  display: "flex",
  height: "100%",
  width: "100%",
  justifyContent: "space-between",
}));

export const Block = styled((props: BoxProps) => <Box {...props} />)(
  ({ theme }) => ({
    width: "100%",
    overflow: "hidden",
    overflowX: "auto",
    marginTop: "20px",

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
  })
);

export const ChartContainer = styled((props: BoxProps) => <Box {...props} />)(
  ({ theme }) => ({
    width: "500px",
    height: "290px",
  })
);

export const InfoBlock = styled((props: BoxProps) => <Box {...props} />)(
  ({ theme }) => ({
    display: "flex",
    width: "95%",
    justifyContent: "center",
    alignItems: "flex-start",
    height: "90%",
    overflowY: "auto",
    position: "relative",

    // Scroll
    /* width */
    "&::-webkit-scrollbar": {
      width: "8px",
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
  })
);

export const TextWrapper = styled((props: BoxProps) => <Box {...props} />)(
  ({ theme }) => ({
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  })
);

export const ColorBox = (props: any) => (
  <Box
    sx={{
      width: "10px",
      height: "10px",
      backgroundColor: props.bgColor,
      borderRadius: "50px",
    }}
  />
);

export const Styled = {
  Wrapper,
  Block,
  ChartContainer,
  InfoBlock,
  TextWrapper,
  ColorBox,
};
