import React from 'react';
import {Box, Button, Container, Grid, TableCell, tableCellClasses, TableRow, Typography} from "@mui/material";
import styled from "@emotion/styled";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import TableContainer from "@mui/material/TableContainer";
import TableBody from "@mui/material/TableBody";
import Table from "@mui/material/Table";

const StyledButton = styled(Button)({
    color:"primary.main",
    backgroundColor:"#E4FFF9",
    marginRight:"5px"
});

const StyledTableCell = styled(TableCell)({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: "blue",
        color: "red",
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,

    },
});

const StyledTableRow = styled(TableRow)({
    '&:nth-of-type(odd)': {
        backgroundColor: "#E4FFF9",
        color:"#fff"

    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
});

function createData(
    name: string,
    protein: number,
) {
    return { name, protein };
}

const rows = [
    createData('Frozen yoghurt',  4.0),
    createData('Ice cream sandwich', 4.3),
    createData('Eclair', 6.0),
    createData('Cupcake', 4.3),
    createData('Gingerbread', 3.9),
    createData('Gingerbread', 3.9),
    createData('Gingerbread', 3.9),
    createData('Gingerbread', 3.9),
    createData('Gingerbread', 3.9),
    createData('Gingerbread', 3.9),
    createData('Gingerbread', 3.9),
    createData('Gingerbread', 3.9),
];


const WorkerHistory = () => {
    return (
        <Box sx={{backgroundColor: "#fff", margin: "20px auto", borderLeft:"20px solid #E4FFF9", padding:"10px 10px"}}>
            <Grid container alignItems="center" direction="row" justifyContent="space-between" >
                <Grid item xs={3}>
                    <Typography sx={{
                        color: "primary.main",
                        fontWeight: "800",
                        textTransform: 'capitalize',

                    }}>История</Typography>
                </Grid>
                <Grid item xs={9} justifyContent={"flex-end"}>
                    <Grid container>
                            <Grid item xs={3.3}>
                                <StyledButton startIcon={<ChevronLeftIcon/>} endIcon={<ChevronRightIcon/>}>21</StyledButton>
                            </Grid>
                        <Grid item xs={4.9}>
                            <StyledButton startIcon={<ChevronLeftIcon/>} endIcon={<ChevronRightIcon/>}>Ноябрь</StyledButton>
                        </Grid>
                        <Grid item xs={3.3}>
                            <StyledButton startIcon={<ChevronLeftIcon/>} endIcon={<ChevronRightIcon/>}>2021</StyledButton>
                        </Grid>


                    </Grid>
                </Grid>

            </Grid>

                    <Grid container direction="row" justifyContent="space-between" alignItems="center" sx={{color:"primary.main", fontWeight:"500"}}>
                        Понидельник
                        <Grid item xs={4}>
                            <Typography sx={{color:"primary.main", fontWeight:"600"}}>
                                21 ноябрь 2021г
                            </Typography>
                        </Grid>
                </Grid>
            <TableContainer sx={{maxHeight:340, overflow:"scroll"}}>
                <Table sx={{ minHeight:"101%"}}>
                    <TableBody>
                        {rows.map((row) => (
                            <StyledTableRow key={row.name}>
                                <StyledTableCell component="th" scope="row" sx={{color:"primary.main"}}>
                                    {row.name}
                                </StyledTableCell>
                                <StyledTableCell align="right" sx={{color:"primary.main", fontWeight:"600"}}>{row.protein}</StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>

            </TableContainer>






        </Box>
    );
};

export default WorkerHistory;



