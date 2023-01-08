import { Box, Stack, Typography } from "@mui/material";
import DescriptionCreate from "./Description/DescriptionCreate";
import DescriptionList from "./Description/DescriptionList";

const TagTab = () => {
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
          Тэги
        </Typography>
      </Stack>

      <Stack spacing={2}>
        <DescriptionCreate />
        <DescriptionList />
      </Stack>
    </Box>
  );
};

export default TagTab;
