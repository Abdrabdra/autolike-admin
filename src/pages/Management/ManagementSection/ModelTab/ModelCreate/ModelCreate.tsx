import { Stack, Typography } from "@mui/material";
import { Formik } from "formik";

import MainBaseButton from "../../../../../components/Button/MainBaseButton/MainBaseButton";
import { StyledMainInput } from "../../../../../components/Input/StyledMainInput";
import { useCreateModelMutation } from "../../../../../redux/store/rtk-api/management-rtk/managementEndpoints";

const CreateModel = () => {
  const [create] = useCreateModelMutation();

  return (
    <Stack>
      <Typography>Добавить модель</Typography>

      <Formik
        initialValues={{ title: "", markaId: null, bodyTypeId: null }}
        onSubmit={(values) => {
          create({
            title: values.title,
            markaId: Number(values.markaId),
            bodyTypeId: Number(values.bodyTypeId),
          });
        }}
      >
        {({ values, handleChange, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Stack spacing={2}>
              <StyledMainInput
                label={"Название Моделя"}
                value={values.title}
                onChange={handleChange}
                name={"title"}
                bordercolor={"primary"}
              />

              <Stack direction="row" spacing={2}>
                <StyledMainInput
                  label={"Артикул Марки"}
                  value={values.markaId}
                  onChange={handleChange}
                  name={"markaId"}
                  bordercolor={"primary"}
                />

                <StyledMainInput
                  label={"Артикул Кузова"}
                  value={values.bodyTypeId}
                  onChange={handleChange}
                  name={"bodyTypeId"}
                  bordercolor={"primary"}
                />
              </Stack>

              <MainBaseButton
                bgcolor="primary.main"
                sx={{ width: "120px", alignSelf: "center" }}
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

export default CreateModel;
