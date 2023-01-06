import { styled } from "@mui/system";
import { Box, BoxProps, Grid, GridProps } from "@mui/material";

export const MainWrapper = styled((props: any) => (
  <Box container alignItems="flex-start" {...props} />
))(({ theme }) => ({
  height: "328px",
  overflow: "hidden",
  overflowX: "auto",
  overflowY: "auto",

  // Scroll
  /* width */
  "&::-webkit-scrollbar": {
    width: "5px",
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

export const WrapperColumn = styled((props: BoxProps) => <Box {...props} />)(
  ({ theme }) => ({
    height: "400px",
  })
);

export const Block = styled((props: any) => <Box {...props} />)(
  ({ theme }) => ({
    paddingX: "15px",
    height: "80px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: "5px",
    position: "relative",

    "&:hover": { backgroundColor: theme.palette.primary.light },
  })
);

export const BlockWrapper = styled((props: BoxProps) => <Box {...props} />)(
  ({ theme }) => ({
    width: "100%",
    marginTop: "13px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  })
);

export const BlockContent = styled((props: BoxProps) => <Box {...props} />)(
  ({ theme }) => ({
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  })
);

export const Styled = {
  MainWrapper,
  WrapperColumn,
  Block,
  BlockWrapper,
  BlockContent,
};
