import { Paper, Box, Hidden, Container } from "@mui/material";

import { LoginBlock } from "./style";

// @ts-ignore: Ts че ты хочешь?
import { ReactComponent as AuthBg } from "../../assets/svg/authBg.svg";
import { theme } from "../../theme/theme";
import LoginForm from "./modules/LoginForm";

const LoginPaper = () => {
  return (
    <LoginBlock>
      <Container
        maxWidth="3xl"
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",

          [theme.breakpoints.down("lg")]: {
            flexDirection: "column",
            justifyContent: "center",
          },
        }}
      >
        <Box
          sx={{
            display: { lg: "none", xs: "block" },
          }}
        >
          <AuthBg
            style={{
              width: "clamp(200px, 20.83vw, 400px)",
              height: "clamp(200px, 20.83vw, 400px)",
            }}
          />
        </Box>
        <LoginForm />
        <Box
          sx={{
            display: { lg: "block", xs: "none" },
          }}
        >
          <AuthBg
            style={{
              width: "clamp(300px, 46.875vw, 900px)",
              height: "clamp(300px, 46.875vw, 900px)",
            }}
          />
        </Box>
      </Container>
    </LoginBlock>
  );
};

export default LoginPaper;
