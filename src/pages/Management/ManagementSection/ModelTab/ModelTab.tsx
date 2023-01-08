import { Box, Stack, Typography } from "@mui/material";
import ModelCreate from "./ModelCreate";
import ModelList from "./ModelList";

const ModelTab = () => {
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
          Модель
        </Typography>
      </Stack>

      <Stack spacing={2}>
        <ModelCreate />
        <ModelList />
      </Stack>
    </Box>
  );
};

export default ModelTab;
