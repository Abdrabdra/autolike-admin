import { Stack, Typography } from "@mui/material";
import { Formik } from "formik";

import MainBaseButton from "../../../../../components/Button/MainBaseButton/MainBaseButton";
import { StyledMainInput } from "../../../../../components/Input/StyledMainInput";
import { useCreateBodyMutation } from "../../../../../redux/store/rtk-api/management-rtk/managementEndpoints";

const BodyCreate = () => {
  const [create] = useCreateBodyMutation();

  return (
    <Stack>
      <Typography>Добавить Кузов</Typography>

      <Formik
        initialValues={{ value: "" }}
        onSubmit={(values) => {
          create({ title: values.value });
        }}
      >
        {({ values, handleChange, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Stack direction={"row"} spacing={2}>
              <StyledMainInput
                value={values.value}
                onChange={handleChange}
                name={"value"}
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
  );
};

export default BodyCreate;
