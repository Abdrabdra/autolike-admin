import { Stack } from "@mui/material";
import { Formik } from "formik";
import MainBaseButton from "../../../../../components/Button/MainBaseButton/MainBaseButton";
import { StyledMainInput } from "../../../../../components/Input/StyledMainInput";
import BaseSelect from "../../../../../components/Select/BaseSelect";
import {
  useCreateGenerationMutation,
  useGetModelQuery,
} from "../../../../../redux/store/rtk-api/management-rtk/managementEndpoints";

const GenerationCreate = () => {
  const [createGeneration] = useCreateGenerationMutation();

  const { data: modelData } = useGetModelQuery("");

  return (
    <Stack>
      <Formik
        initialValues={{
          title: "",
          modelId: "",
          createdFrom: "",
          createdTo: "",
        }}
        onSubmit={(values) =>
          createGeneration({
            title: values.title,
            modelId: Number(values.modelId),
            createdFrom: Number(values.createdFrom),
            createdTo: values.createdTo,
          })
        }
      >
        {({ values, handleChange, handleSubmit, setFieldValue }) => (
          <form onSubmit={handleSubmit}>
            <Stack spacing={2}>
              <Stack spacing={2}>
                <Stack direction="row" spacing={1}>
                  <StyledMainInput
                    label={"Название Поколение"}
                    value={values.title}
                    onChange={handleChange}
                    name={"title"}
                    bordercolor={"primary"}
                    required
                  />

                  <BaseSelect
                    label="Артикул Модели"
                    data={modelData?.data}
                    state={values.modelId}
                    setFieldValue={setFieldValue}
                    fieldName={"modelId"}
                  />
                </Stack>

                <Stack direction="row" spacing={1}>
                  <StyledMainInput
                    label={"Создано с (2020)"}
                    value={values.createdFrom}
                    onChange={handleChange}
                    name={"createdFrom"}
                    bordercolor={"primary"}
                    required
                  />

                  <StyledMainInput
                    label={"Длилось до (2023)"}
                    value={values.createdTo}
                    onChange={handleChange}
                    name={"createdTo"}
                    bordercolor={"primary"}
                    // required
                  />
                </Stack>
              </Stack>

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

export default GenerationCreate;
