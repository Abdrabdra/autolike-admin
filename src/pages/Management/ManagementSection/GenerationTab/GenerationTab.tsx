import { Box, Stack, Typography } from "@mui/material";
import GenerationCreate from "./GenerationCreate";
import GenerationList from "./GenerationList";

const GenerationTab = () => {
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
          Поколение
        </Typography>
      </Stack>

      <Stack spacing={2}>
        <GenerationCreate />
        <GenerationList />
      </Stack>
    </Box>
  );
};

export default GenerationTab;
