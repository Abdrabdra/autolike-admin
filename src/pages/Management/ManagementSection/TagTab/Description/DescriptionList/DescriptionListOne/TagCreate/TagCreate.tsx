import { Stack, Typography } from "@mui/material";
import { Formik } from "formik";
import { FC } from "react";
import MainBaseButton from "../../../../../../../../components/Button/MainBaseButton/MainBaseButton";
import { StyledMainInput } from "../../../../../../../../components/Input/StyledMainInput";
import { useCreateTagMutation } from "../../../../../../../../redux/store/rtk-api/management-rtk/managementEndpoints";

interface Props {
  id: number;
}

const TagCreate: FC<Props> = ({ id }) => {
  const [createItem] = useCreateTagMutation();

  return (
    <Stack>
      <Typography>Создать Тэг</Typography>

      <Stack>
        <Formik
          initialValues={{ tag: "" }}
          onSubmit={(values) => {
            createItem({ title: values.tag, descriptionId: id });
          }}
        >
          {({ values, handleSubmit, handleChange }) => (
            <form onSubmit={handleSubmit}>
              <Stack direction={"row"} spacing={2}>
                <StyledMainInput
                  label={"Название тэга "}
                  value={values.tag}
                  onChange={handleChange}
                  name={"tag"}
                  bordercolor={"primary"}
                />

                <MainBaseButton
                  bgcolor="primary.main"
                  sx={{ width: "120px" }}
                  type="submit"
                >
                  Добавить
                </MainBaseButton>
              </Stack>
            </form>
          )}
        </Formik>
      </Stack>
    </Stack>
  );
};

export default TagCreate;
