import React, {useEffect, useState} from 'react';
import {Box, Button, CircularProgress, Grid, InputAdornment, Paper, TextField, Typography} from "@mui/material";
import styled from "@emotion/styled";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


import {TextFieldComponent, TextFieldComponent3} from "./TextFields/TextFieldComponent";
import * as yup from 'yup';

import {useTypedSelector} from "../../../redux/store";
import {useFormik} from "formik";

import WorkerProfileForm from "./StaffHelperComponents/WorkerProfileForm";
import {useCreateStaffMutation} from "../../../redux/store/rtk-api/staff-rtk/staffEndpoints";
import CustomAlert from "../../../components/reusedComponents/CustomAlert";
import {log} from "util";

const StyledButton = styled(Button)({
    backgroundColor: "primary.light",
    color: "primary.main",
    fontWeight: "800",
});

type Props = {
    handleSubmitWorkerData: any
}

export const convertDate = (day: string, month: string, year: string) => {
    const arr = []
    const zero = '0'

    if (Number(day) < 9) {
        day = zero + day
    }
    if (Number(month) < 9) {
        month = zero + month
    }
    arr[1] = day
    arr[0] = month
    arr[2] = year

    return arr.join('-')
}

const CreateWorker: React.FC<Props> = ({handleSubmitWorkerData}) => {
    const [date, setDate] = React.useState<Date | null>(null);
    const [createWorker, {isLoading, isError, isSuccess, error}] = useCreateStaffMutation()
    const [isAlertOpen, setAlertOpen] = useState(false)


    const validationSchema = yup.object({
        firstName: yup
            .string()
            .required('Это обязательное поле!'),
        secondName: yup
            .string()
            .required('Это обязательное поле!'),
        middleName: yup
            .string()
            .required('Это обязательное поле!'),
        iin: yup
            .string()
            .required('Это обязательное поле!')
            .min(11, 'Данные написаны неправильно!')
            .max(13, 'Данные написаны неправильно!'),
        date: yup
            .string()
            .required('Это обязательное поле!'),
        phone: yup
            .string()
            .required('Это обязательное поле!'),
        cityId: yup
            .number()
            .required('Это обязательное поле!')
            .typeError('Это обязательное поле!')
            .positive('Данные написаны неправильно'),
        street: yup
            .string()
            .required('Это обязательное поле!'),
        building: yup
            .string()
            .required('Это обязательное поле!'),
        floor: yup
            .number()
            .required('Это обязательное поле!')
            .typeError('Поле должно быть числом')
            .positive('Данные написаны неправильно'),
        apartment: yup
            .string()
            .required('Это обязательное поле!'),
        password: yup
            .string()
            .required('Это обязательное поле!'),
        index: yup
            .string()
            .required('Это обязательное поле!'),
    });

    const formik = useFormik({
        initialValues: {
            firstName: '',
            secondName: '',
            middleName: '',
            iin: '',
            date: '',
            phone: '',
            cityId: null,
            street: '',
            building: '',
            floor: null,
            apartment: '',
            password: '',
            index: ''
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            const obj = {
                firstName: values.firstName,
                secondName: values.secondName,
                middleName: values.middleName,
                iin: values.iin,
                date: values.date,
                phone: values.phone,
                cityId: values.cityId,
                street: values.street,
                building: values.building,
                floor: values.floor,
                apartment: values.apartment,
                password: values.password,
                index: values.index
            }
            createWorker(obj)
        },
    });
    useEffect(() => {
        if (isAlertOpen) {
            const timer = setTimeout(() => {
                setAlertOpen(false)
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [isAlertOpen]);
    useEffect(() => {
        if (formik.values.date) {
            // @ts-ignore
            setDate(formik.values.date)
        }
    }, [formik.values.date])

    const handleSubmitOnClick = () => {
        // @ts-ignore
        formik.handleSubmit(formik.values)
    }

    useEffect(() => {
        if (isError || isSuccess) {
            setAlertOpen(true)
        }

    }, [isSuccess, isError])

    useEffect(() => {
        // @ts-ignore
        handleSubmitWorkerData.current = handleSubmitOnClick
    }, [])

    const handleSet = (value: any) => {
        setDate(value)
        formik.setFieldValue('date', convertDate(value.getDate(), (value.getMonth() + 1), String(value.getUTCFullYear())))
    }


    return (
        <>

            {isAlertOpen && isSuccess && <CustomAlert status={"success"} title={"Успех!"}
                                                      message={"Сотудник успешно создан!"}/>}
            {isAlertOpen && isError &&
                // @ts-ignore
                <CustomAlert status={"error"} title={"Ошибка!"} message={error?error?.data?.message:"Произошла ошибка!"}/>}
            {isLoading && <CircularProgress/>}
            <WorkerProfileForm formik={formik} date={date} handleSet={handleSet} password={true}
                               mainText={"Информация о пользователе"}/>
        </>
    );
};

export default CreateWorker;



