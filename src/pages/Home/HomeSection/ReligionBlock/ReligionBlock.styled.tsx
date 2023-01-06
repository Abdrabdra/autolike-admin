import { styled } from "@mui/system";
import { Box, BoxProps } from "@mui/material";

export const RWrapper = styled((props: BoxProps) => <Box {...props} />)(
  ({ theme }) => ({
    display: "flex",
    height: "100%",
    width: "100%",
  })
);

export const RBlock = styled((props: BoxProps) => <Box {...props} />)(
  ({ theme }) => ({
    width: "100%",
    marginTop: "20px",
    marginRight: "30px",
  })
);

export const RChartContainer = styled((props: BoxProps) => <Box {...props} />)(
  ({ theme }) => ({
    width: "clamp(350px, 26.04vw, 500px)",
    height: "290px",
    marginTop: "-30px",
  })
);

export const InfoBlock = styled((props: BoxProps) => <Box {...props} />)(
  ({ theme }) => ({
    width: "100%",
    marginLeft: "20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  })
);

export const TextWrapper = styled((props: BoxProps) => <Box {...props} />)(
  ({ theme }) => ({
    width: "140px",
    display: "flex",
  })
);

export const ColorBox = styled((props: BoxProps) => <Box {...props} />)(
  ({ theme }) => ({
    width: "20px",
    height: "20px",
    background: "#A9E2C1",
    borderRadius: "5px",
    marginRight: "10px",
  })
);

export const Styled = {
  RWrapper,
  RBlock,
  RChartContainer,
  InfoBlock,
  TextWrapper,
  ColorBox,
};
