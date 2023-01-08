import { Stack } from "@mui/material";
import { Formik } from "formik";
import MainBaseButton from "../../../../../../components/Button/MainBaseButton/MainBaseButton";
import { StyledMainInput } from "../../../../../../components/Input/StyledMainInput";
import { useCreateDescriptionMutation } from "../../../../../../redux/store/rtk-api/management-rtk/managementEndpoints";

const DescriptionCreate = () => {
  const [createItem] = useCreateDescriptionMutation();

  return (
    <Stack>
      <Formik
        initialValues={{
          title: "",
        }}
        onSubmit={(values) =>
          createItem({
            title: values.title,
          })
        }
      >
        {({ values, handleChange, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Stack spacing={2} direction="row">
              <StyledMainInput
                label={"Название Описания"}
                value={values.title}
                onChange={handleChange}
                name={"title"}
                bordercolor={"primary"}
                required
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

export default DescriptionCreate;
