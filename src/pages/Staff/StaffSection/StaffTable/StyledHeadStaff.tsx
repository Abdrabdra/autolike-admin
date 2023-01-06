import { Paper, TableCell, TableCellProps, TableRow } from "@mui/material";
import React from "react";

interface Props {
  children: React.ReactNode;
}
export const StyledHeadRowStaff: React.FC<Props> = ({ children }) => {
  return (
    <TableRow
      sx={{
        backgroundColor: "#fff",
        border: "none",
        outline: "none",
        boxShadow: "none",
      }}
    >
      {children}
    </TableRow>
  );
};

export const StyledHeadCellStaff: React.FC<Props> = ({ children }) => {
  return (
    <TableCell
      sx={{
        height: "40px",
        fontSize: "18px",
        color: "primary.main",
        boxShadow: "none",
        borderBottom: 0,
      }}
    >
      {children}
    </TableCell>
  );
};

//Body
export const StyledBodyRowStaff: React.FC<Props> = ({ children }) => {
  return (
    <TableRow
      sx={{
        backgroundColor: "primary.light",
        height: "90px",
        borderRadius: "10px",
          borderBottom:"10px solid #fff"

      }}
    >
      {children}
    </TableRow>
  );
};

export const StyledBodyCellFirstStaff: React.FC<Props> = ({ children }) => {
  return (
    <TableCell
      sx={{
        paddingRight: 0,
        paddingBottom: 0,
        paddingTop: "5px",
        fontSize: "18px",
        color: "primary.main",
        boxShadow: "none",
        borderBottom: 0,
        borderTopLeftRadius: "10px",
        borderBottomLeftRadius: "10px",
      }}
    >
      <Paper
        elevation={0}
        sx={{
          borderRadius: "0",
          paddingLeft: "5px",
          paddingRight: "10px",
          height: "50px",
          borderTopLeftRadius: "10px",
          borderBottomLeftRadius: "10px",
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
            color:"primary.main",
            backgroundColor:"primary.light"
        }}
      >
        {children}
      </Paper>
    </TableCell>
  );
};
export const StyledBodyCellStaff: React.FC<Props> = ({ children }) => {
  return (
    <TableCell
      sx={{
          backgroundColor:"primary.light"  ,
        paddingRight: 0,
        paddingBottom: 0,
        paddingTop: "5px",
        paddingLeft: 0,
        fontSize: "16px",
        // color: "primary.main",
        boxShadow: "none",
        borderBottom: 0,

      }}
    >
      <Paper
        elevation={0}
        sx={{
            backgroundColor:"primary.light"  ,
          borderRadius: "0",
          paddingRight: "10px",
          paddingLeft: "10px",
          height: "50px",
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
            color:"red"
        }}
      >
        {children}
      </Paper>
    </TableCell>
  );
};
export const StyledBodyCellLastStaff: React.FC<Props> = ({ children }) => {
  return (
    <TableCell
      sx={{
        paddingLeft: 0,
        paddingBottom: 0,
        paddingTop: "5px",
        fontSize: "20px",
        color: "primary.main",
        boxShadow: "none",
        borderBottom: 0,
        borderTopRightRadius: "10px",
        borderBottomRightRadius: "10px",
          backgroundColor:"primary.light"  ,
      }}
    >
      <Paper
        elevation={0}
        sx={{
          borderRadius: "0",
          paddingLeft: "16px",
          height: "50px",
          borderTopRightRadius: "10px",
          borderBottomRightRadius: "10px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
            backgroundColor:"primary.light"  ,
        }}
      >
        {children}
      </Paper>
    </TableCell>
  );
};
