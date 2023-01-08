import { Box, Stack, Typography } from "@mui/material";
import CreateMarka from "./CreateMarka";
import MarkaList from "./MarkaList";

const MarkaTab = () => {
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
          Марка
        </Typography>
      </Stack>

      <Stack spacing={2}>
        <CreateMarka />
        <MarkaList />
      </Stack>
    </Box>
  );
};

export default MarkaTab;
