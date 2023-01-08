import { Stack } from "@mui/material";
import { Formik } from "formik";
import MainBaseButton from "../../../../../components/Button/MainBaseButton/MainBaseButton";
import { StyledMainInput } from "../../../../../components/Input/StyledMainInput";
import { useCreateGenerationMutation } from "../../../../../redux/store/rtk-api/management-rtk/managementEndpoints";

const GenerationCreate = () => {
  const [createGeneration] = useCreateGenerationMutation();

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
            createdTo: Number(values.createdTo),
          })
        }
      >
        {({ values, handleChange, handleSubmit }) => (
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

                  <StyledMainInput
                    label={"Артикул Модели"}
                    value={values.modelId}
                    onChange={handleChange}
                    name={"modelId"}
                    bordercolor={"primary"}
                    required
                  />
                </Stack>

                <Stack direction="row" spacing={1}>
                  <StyledMainInput
                    label={"Создано с"}
                    value={values.createdFrom}
                    onChange={handleChange}
                    name={"createdFrom"}
                    bordercolor={"primary"}
                    required
                  />

                  <StyledMainInput
                    label={"Длилось до"}
                    value={values.createdTo}
                    onChange={handleChange}
                    name={"createdTo"}
                    bordercolor={"primary"}
                    required
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
