import { Stack, Typography } from "@mui/material";
import { Formik } from "formik";

import MainBaseButton from "../../../../../components/Button/MainBaseButton/MainBaseButton";
import { StyledMainInput } from "../../../../../components/Input/StyledMainInput";
import BaseSelect from "../../../../../components/Select/BaseSelect";
import {
  useCreateModelMutation,
  useGetBodyQuery,
  useGetMarkaQuery,
} from "../../../../../redux/store/rtk-api/management-rtk/managementEndpoints";

const CreateModel = () => {
  const [create] = useCreateModelMutation();

  const { data: markaData } = useGetMarkaQuery("");
  const { data: bodyData } = useGetBodyQuery("");

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
        {({ values, handleChange, handleSubmit, setFieldValue }) => (
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
                <BaseSelect
                  label="Артикул Марки"
                  data={markaData?.data}
                  state={values.markaId}
                  setFieldValue={setFieldValue}
                  fieldName={"markaId"}
                />
                <BaseSelect
                  label="Артикул Кузова"
                  data={bodyData}
                  state={values.bodyTypeId}
                  setFieldValue={setFieldValue}
                  fieldName={"bodyTypeId"}
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
