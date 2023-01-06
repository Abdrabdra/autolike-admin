import React, {useEffect, useState} from "react";
import * as yup from "yup";
import {useFormik} from "formik";
import {useCreateHadithMutation} from "../../../../../redux/store/rtk-api/hadis-rtk/hadithEndpoints";
import {Box, Button, CircularProgress, Grid, Paper} from "@mui/material";
import {TextArea, TextFieldComponent} from "../../../../Staff/StaffSection/TextFields/TextFieldComponent";
import {useLocation, useNavigate} from "react-router-dom";
import CustomAlert from "../../../../../components/reusedComponents/CustomAlert";

const CreateHadith = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const [createHadith, {
        isLoading,
        isError,
        isSuccess,
        error
    }] = useCreateHadithMutation()
    const [open, setOpen] = useState(false)
    const validationSchema = yup.object({
        title: yup
            .string()
            .required('Это обязательное поле!'),
    });


    const formik = useFormik({
        initialValues: {
            // @ts-ignore
            id: location?.state?.id as number,
            title: '',
            arabic: '',
            translate: '',
            description: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            //alert(JSON.stringify(values))
            createHadith(values)

        },
    });
    useEffect(() => {
        if (open) {
            const timer = setTimeout(() => {
                setOpen(false)
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [open]);
    useEffect(() => {
        if (isError || isSuccess) {
            setOpen(true)
        }

    }, [isSuccess, isError])


    return (
        <>
            {open && isSuccess && <CustomAlert status={"success"} message={"Успех!!"}
                                               title={"Профиль успешно обновлен!"}/>}
            {open && isError &&
                <CustomAlert status={"error"} message={"Произошла ошибка!"} title={"Произошла ошибка!"}/>}
            {isLoading && <CircularProgress/>}
            <Box component={Paper} sx={{
                padding: "20px",
                alignItems: "center"
            }}>
                <Grid container>
                    <Grid item xs>
                        <TextFieldComponent label={"Название"} value={formik.values.title} id="title" name="title"
                                            handleChange={formik.handleChange}
                                            error={formik.touched.title && Boolean(formik.errors.title)}
                                            helperText={formik.touched.title && formik.errors.title}
                        />
                        <TextArea label={"Арабский текст"} value={formik.values.arabic} id="arabic"
                                  name="arabic"
                                  handleChange={formik.handleChange}
                                  error={formik.touched.arabic && Boolean(formik.errors.arabic)}
                                  helperText={formik.touched.arabic && formik.errors.arabic}
                        />
                        <TextArea label={"Перевод текста"} value={formik.values.translate} id="translate"
                                  name="translate"
                                  handleChange={formik.handleChange}
                                  error={formik.touched.translate && Boolean(formik.errors.translate)}
                                  helperText={formik.touched.translate && formik.errors.translate}
                        />

                        <TextArea label={"Коментарий"} value={formik.values.description} id="description"
                                  name="description"
                                  handleChange={formik.handleChange}
                                  error={formik.touched.description && Boolean(formik.errors.description)}
                                  helperText={formik.touched.description && formik.errors.description}
                        />
                    </Grid>

                </Grid>
                <Box sx={{display: "flex", justifyContent: "end"}}>
                    <Button sx={{backgroundColor: "primary.main", color: "#fff", mt: "10px"}}
                            onClick={() => formik.handleSubmit()}
                    >
                        Создать
                    </Button>
                </Box>

            </Box>
        </>
    )
}

export default CreateHadith