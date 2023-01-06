import { IStaffResponse } from "../../../redux/store/rtk-api/staff-rtk/staff.type";
import React from "react";
import { Button, Typography } from "@mui/material";
import { setOneStaff } from "../../../redux/store/reducers/staff/staff.slice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  StyledBodyCell,
  StyledBodyCellFirst,
  StyledBodyCellLast,
  StyledBodyRow,
} from "../../Users/MainUser/ListUser/ListUser.style";

type PropsType = {
    worker: IStaffResponse,
    ind: number
}

const StaffTableInfo: React.FC<PropsType> = ({ worker, ind }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSetWorker = (user: IStaffResponse) => {
    dispatch(setOneStaff(user));
    navigate("one-worker");
  };

  return (
    <StyledBodyRow key={ind}>
      <StyledBodyCellFirst>
        {worker.firstName} {worker.secondName}
      </StyledBodyCellFirst>
      <StyledBodyCell>{worker.user.phone}</StyledBodyCell>
      <StyledBodyCell>{worker.iin}</StyledBodyCell>
      <StyledBodyCell>
        <b>{worker.user.roles[0].value === "WORKER" && "Администратор"}</b>
      </StyledBodyCell>
      <StyledBodyCellLast>
        <Button
          sx={{
            width: "180px",
            height: "50px",
            background: "rgba(35, 152, 171, 0.3)",
            borderRadius: "10px",
            "&:hover": {
              background: "rgba(35, 152, 171, 1)",
            },
          }}
          onClick={() => handleSetWorker(worker)}
        >
          <Typography
            sx={{
              color: "#fff",
              fontSize: "18px",
              fontWeight: "700",
              textTransform: "capitalize",
            }}
          >
            Подробнее
          </Typography>
        </Button>
      </StyledBodyCellLast>
    </StyledBodyRow>
  );
};

export default StaffTableInfo;
