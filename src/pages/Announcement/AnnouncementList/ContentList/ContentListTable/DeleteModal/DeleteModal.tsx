import { Stack, Typography } from "@mui/material";
import { FC, useState } from "react";
import { MainButton } from "../../../../../../components/Button/MainBaseButton";
import MainBaseButton from "../../../../../../components/Button/MainBaseButton/MainBaseButton";
import BaseModal from "../../../../../../components/Modal/BaseModal";
import { useDeleteAnnouncementMutation } from "../../../../../../redux/store/rtk-api/announcement-rtk/announcementEndpoints";

interface Props {
  id: number | string;
}

const DeleteModal: FC<Props> = ({ id }) => {
  const [deleteAnnounce] = useDeleteAnnouncementMutation();
  const handleDelete = () => {
    deleteAnnounce(id);
  };

  const handleConfirm = async () => {
    await handleDelete();
    handleClose();
  };
  const handleReject = () => {
    handleClose();
  };

  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <MainBaseButton
        onClick={handleOpen}
        bgcolor="red"
        sx={{ height: "40px", maxWidth: "180px" }}
      >
        Удалить
      </MainBaseButton>

      <BaseModal open={isOpen} handleModalClose={handleClose}>
        <Stack
          spacing={2}
          sx={{
            padding: "2rem",
            borderRadius: "2rem",
            backgroundColor: "common.white",
          }}
        >
          <Typography>Вы точно хотите удалить?</Typography>

          <Stack direction="row" spacing={2}>
            <MainButton onClick={handleConfirm} bgcolor="primary.main">
              Подтвердить
            </MainButton>
            <MainButton onClick={handleReject} bgcolor="red">
              Отклонить
            </MainButton>
          </Stack>
        </Stack>
      </BaseModal>
    </>
  );
};

export default DeleteModal;
