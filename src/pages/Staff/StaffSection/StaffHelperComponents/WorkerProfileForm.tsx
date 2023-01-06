import React from "react";
import {Box, Grid, Paper, TextField, Typography} from "@mui/material";
import {TextFieldComponent, TextFieldComponent2, TextFieldComponent3} from "../TextFields/TextFieldComponent";
import {AdapterDateFns} from '@mui/x-date-pickers/AdapterDateFns';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {DatePicker} from '@mui/x-date-pickers/DatePicker';
import {useGetRegionQuery} from "../../../../redux/store/rtk-api/region-rtk/regionEndpoints";
import EditIcon from '@mui/icons-material/Edit';
type Props2 = {
    formik: any,
    date: any,
    handleSet(value: any): void,
    password?: boolean,
    mainText: string,
    isEdit?:boolean,
    isDisabled?:boolean
}


const WorkerProfileForm: React.FC<Props2> = ({formik, date, handleSet, password, mainText,isEdit,isDisabled}) => {


    const {data: cities} = useGetRegionQuery("cities")


    return (
        <Box component={Paper} sx={{padding: "20px"}}>
            <Typography sx={{color: "primary.main", fontWeight: "500"}}>{mainText}</Typography>
            <hr/>
            <Grid container>
                <Grid item xs>
                    <Typography sx={{color: "primary.main", fontWeight: "800"}}>Личная информация</Typography>
                    <Box sx={{display:"flex", alignItems:"center"}}>
                        <TextFieldComponent label={"Имя"} value={formik.values.firstName} id="firstName" name="firstName"
                                            handleChange={formik.handleChange}
                                            error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                                            helperText={formik.touched.firstName && formik.errors.firstName}
                                            isEdit = {isEdit&&isEdit}
                        />
                        {isEdit && <EditIcon sx={{color: "primary.main",marginTop:"25px", marginLeft:"5px"}} fontSize={"small"}/>}
                        </Box>

                    <Box sx={{display:"flex", alignItems:"center"}}>
                        <TextFieldComponent label={"Фамилия"} value={formik.values.secondName} id="secondName"
                                            name="secondName"
                                            handleChange={formik.handleChange}
                                            error={formik.touched.secondName && Boolean(formik.errors.secondName)}
                                            helperText={formik.touched.secondName && formik.errors.secondName}
                                            isEdit = {isEdit&&isEdit}
                        />
                        {isEdit && <EditIcon sx={{color: "primary.main",marginTop:"25px", marginLeft:"5px"}} fontSize={"small"}/>}
                    </Box>
                    <Box sx={{display:"flex", alignItems:"center"}}>
                        <TextFieldComponent label={"Отчество"} value={formik.values.middleName} id="middleName"
                                            name="middleName"
                                            handleChange={formik.handleChange}
                                            error={formik.touched.middleName && Boolean(formik.errors.middleName)}
                                            helperText={formik.touched.middleName && formik.errors.middleName}
                                            isEdit = {isEdit&&isEdit}
                        />
                        {isEdit && <EditIcon sx={{color: "primary.main",marginTop:"25px", marginLeft:"5px"}} fontSize={"small"}/>}
                    </Box>

                    <TextFieldComponent label={"ИИН"} value={formik.values.iin} id="iin" name="iin"
                                        handleChange={formik.handleChange}
                                        error={formik.touched.iin && Boolean(formik.errors.iin)}
                                        helperText={formik.touched.iin && formik.errors.iin}
                                        isDisabled={isDisabled}
                    />


                    <Typography sx={{color: "primary.main", fontWeight: "500", marginTop: "10px"}}>Дата
                        рождения</Typography>


                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        {<DatePicker
                            disabled={isDisabled}
                            value={date}
                            onChange={(newValue: any, s) => {
                                !isDisabled && handleSet(newValue);
                            }}
                            renderInput={(params: any) => <TextField {...params}
                                                                     sx={{
                                                                         backgroundColor: "primary.light",
                                                                         color: "primary.main",
                                                                         input: {
                                                                             color: "primary.main",
                                                                             fontWeight: "600"
                                                                         },
                                                                         width: "250px"
                                                                     }}
                                                                     error={formik.touched.date && Boolean(formik.errors.date)}
                                                                     helperText={formik.touched.date && formik.errors.date}
                                                                     disabled={isDisabled}
                            />}
                        />}
                    </LocalizationProvider>


                    <TextFieldComponent label={"Номер телефона"} value={formik.values.phone} id="phone" name="phone"
                                        handleChange={formik.handleChange}
                                        error={formik.touched.phone && Boolean(formik.errors.phone)}
                                        helperText={formik.touched.phone && formik.errors.phone}
                                        isDisabled={isDisabled}

                    />
                    {
                        password && <TextFieldComponent label={"Пароль"} value={formik.values.password} id="password"
                                                        name="password"
                                                        handleChange={formik.handleChange}
                                                        type={"password"}
                                                        error={formik.touched.password && Boolean(formik.errors.password)}
                                                        helperText={formik.touched.password && formik.errors.password}

                        />
                    }

                </Grid>


                <Grid item xs>
                    <Typography sx={{color: "primary.main", fontWeight: "800"}}>Место проживания</Typography>
                    {/*<TextFieldComponent2 label={"Страна"} text={"Казахстан"}/>*/}
                    <Box sx={{display:"flex", alignItems:"center"}}>
                        <TextFieldComponent2 label={"Город"} value={formik.values.cityId} id="cityId" name="cityId"
                                             handleChange={formik.handleChange}
                                             error={formik.touched.cityId && Boolean(formik.errors.cityId)}
                                             helperText={formik.touched.cityId && formik.errors.cityId}
                                             isEdit = {isEdit&&isEdit}
                                             objects={cities}
                        />
                        {isEdit && <EditIcon sx={{color: "primary.main",marginTop:"25px", marginLeft:"5px"}} fontSize={"small"}/>}
                    </Box>

                    <Box sx={{display:"flex", alignItems:"center"}}>
                        <TextFieldComponent label={"Улица"} value={formik.values.street} id="street" name="street"
                                            handleChange={formik.handleChange}
                                            error={formik.touched.street && Boolean(formik.errors.street)}
                                            helperText={formik.touched.street && formik.errors.street}
                                            isEdit = {isEdit&&isEdit}
                        />
                        {isEdit && <EditIcon sx={{color: "primary.main",marginTop:"25px", marginLeft:"5px"}} fontSize={"small"}/>}
                    </Box>



                    <Grid container columnSpacing={3}>

                        <Grid item><TextFieldComponent3 label={"Дом"} value={formik.values.building} id="building"
                                                        name="building"
                                                        handleChange={formik.handleChange}
                                                        error={formik.touched.building && Boolean(formik.errors.building)}
                                                        helperText={formik.touched.building && formik.errors.building}/>

                        </Grid>
                        {isEdit && <EditIcon sx={{color: "primary.main",marginTop:"50px", marginLeft:"5px"}} fontSize={"small"}/>}
                        <Grid item><TextFieldComponent3 label={"Этаж"} value={formik.values.floor} id="floor"
                                                        name="floor"
                                                        handleChange={formik.handleChange}
                                                        error={formik.touched.floor && Boolean(formik.errors.floor)}
                                                        helperText={formik.touched.floor && formik.errors.floor}/></Grid>
                        {isEdit && <EditIcon sx={{color: "primary.main",marginTop:"50px", marginLeft:"5px"}} fontSize={"small"}/>}
                        <Grid item><TextFieldComponent3 label={"Квартира"} value={formik.values.apartment}
                                                        id="apartment" name="apartment"
                                                        handleChange={formik.handleChange}
                                                        error={formik.touched.apartment && Boolean(formik.errors.apartment)}
                                                        helperText={formik.touched.apartment && formik.errors.apartment}/></Grid>
                        {isEdit && <EditIcon sx={{color: "primary.main",marginTop:"50px", marginLeft:"5px"}} fontSize={"small"}/>}

                    </Grid>
                    {/*<TextFieldComponent label={"email"} text={"email@mail.ru"}/>*/}
                    <Box sx={{display:"flex", alignItems:"center"}}>
                        <TextFieldComponent label={"Индекс"} value={formik.values.index} id="index" name="index"
                                            handleChange={formik.handleChange}
                                            error={formik.touched.index && Boolean(formik.errors.index)}
                                            helperText={formik.touched.index && formik.errors.index}
                                            isEdit = {isEdit&&isEdit}
                        />
                        {isEdit && <EditIcon sx={{color: "primary.main",marginTop:"25px", marginLeft:"5px"}} fontSize={"small"}/>}
                    </Box>


                </Grid>
            </Grid>
        </Box>
    )

}

export default WorkerProfileForm