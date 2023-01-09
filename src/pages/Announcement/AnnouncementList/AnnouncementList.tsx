import { Stack } from "@mui/material";
import MainBaseButton from "../../../components/Button/MainBaseButton/MainBaseButton";
import AnnouncementFilter from "./AnnouncementFilter";
import ContentList from "./ContentList";

const AnnouncementList = () => {
  return (
    <Stack>
      <AnnouncementFilter />

      <ContentList />
    </Stack>
  );
};

export default AnnouncementList;
