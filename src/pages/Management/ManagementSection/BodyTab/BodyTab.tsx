import { Box, Stack, Typography } from "@mui/material";
import BodyCreate from "./BodyCreate";
import BodyList from "./BodyList";

const BodyTab = () => {
  return (
    <Box>
      <Stack direction={"row"} sx={{ justifyContent: "space-between" }}>
        <Typography
          sx={{
            fontSize: "25px",
            mb: "15px",
            color: "primary.main",
            fontWeight: 600,
          }}
        >
          Кузов
        </Typography>
      </Stack>

      <Stack spacing={2}>
        <BodyCreate />
        <BodyList />
      </Stack>
    </Box>
  );
};

export default BodyTab;
