import React, {useState} from 'react';
import {Box, Button, Grid, InputAdornment, TextField, Typography} from "@mui/material";
import styled from "@emotion/styled";
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ComplainedInfo from './ComplainedInfo';
import SearchComponent from "../../../components/reusedComponents/SearchComponent";
import {useFormik} from "formik";




const StyledButton = styled(Button)({

    width: '200px',
    borderRadius: '5px',
    // border:'1px solid #2398AB',
    '&:hover': {
        color: "#fff",
        background: "primary.main"
    },
});


const movingButtons = [
    {buttonName: 'Весь список',},
    {buttonName: 'Не обработанные',},
    {buttonName: 'Обработанные',}
]


const ComplaintsList = () => {

    const [activeValue, setActiveValue] = useState('Весь список')

    const formik = useFormik({
        initialValues: {
            search:''
        },

        onSubmit: values => {
            console.log("yes")
        },
    });

    const [searchedName,setSearchedName] = useState("")


    return (
        <Box sx={{ backgroundColor: "primary.light", marginTop:"20px"}}>
            <Grid container spacing={1}>
                {movingButtons.map(btn => {
                    return <Grid key={btn.buttonName} sx={{marginLeft: '10px'}}>
                        <StyledButton sx={{
                            color:
                                activeValue === btn.buttonName
                                    ? "#fff"
                                    : "primary.main",
                            backgroundColor:
                                activeValue === btn.buttonName
                                    ? "primary.main"
                                    : "#fff",
                        }} onClick={() => setActiveValue(btn.buttonName)}>{btn.buttonName}</StyledButton>
                    </Grid>
                })}

            </Grid>

            <Grid container
                  component="form"
                  sx={{border: '10px solid #fff', margin: '20px auto', backgroundColor: "#fff"}}
            >
                <Grid item xs={12}>
                    {/*<TextField*/}
                    {/*    name="search"*/}
                    {/*    placeholder="Поиск по имени, фамилий, телефону"*/}
                    {/*    size="medium"*/}
                    {/*    sx={{*/}
                    {/*        backgroundColor: "primary.light", color: "primary.main", '&::placeholder': {*/}
                    {/*            textOverflow: 'ellipsis !important',*/}
                    {/*            color: 'blue',*/}
                    {/*            outline: 'none'*/}
                    {/*        }*/}
                    {/*    }}*/}
                    {/*    fullWidth*/}
                    {/*    type={"search"}*/}


                    {/*    InputProps={{*/}
                    {/*        style: {color: "primary.main"},*/}
                    {/*        startAdornment: <InputAdornment position="start"><IconButton*/}
                    {/*            sx={{p: '10px', color: "primary.main"}}>*/}
                    {/*            <SearchIcon/>*/}
                    {/*        </IconButton></InputAdornment>*/}
                    {/*    }}*/}
                    {/*/>*/}
                    <SearchComponent formik={formik} searchedName={searchedName} setSearchedName={setSearchedName} placeholder={"Поиск по имени, фамилий, телефону"}
                    />
                </Grid>
                {/*<Grid item xs={1.5} sx={{marginLeft: "20px"}}>*/}
                {/*    <Grid container*/}
                {/*          sx={{backgroundColor: "primary.light",*/}
                {/*              height: "55px",*/}
                {/*              borderRadius: "5px",*/}
                {/*              paddingTop:"8%",*/}
                {/*              paddingLeft:"20%",*/}
                {/*              border:"1px solid #e0e0e0",*/}
                {/*              '&:hover': {*/}
                {/*                  border:"1px solid black"*/}
                {/*              },*/}
                {/*              cursor:"pointer"*/}
                {/*          }}>*/}
                {/*        <Grid item xs={9}><Typography sx={{color:"primary.main"}}>Фильтры</Typography></Grid>*/}
                {/*        <Grid item xs={1}><ChevronRightIcon sx={{backgroundColor: "#fff"}}/></Grid>*/}
                {/*    </Grid>*/}
                {/*</Grid>*/}


            </Grid>

            <ComplainedInfo searchedName={searchedName} activeValue={activeValue}/>


        </Box>
    );
};

export default ComplaintsList;