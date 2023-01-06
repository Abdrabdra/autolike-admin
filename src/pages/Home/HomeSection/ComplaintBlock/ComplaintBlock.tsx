import React, { FC, useEffect, useState } from "react";
import {
  Box,
  CircularProgress,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";

import { Styled } from "./ComplaintBlock.styled";

import { useGetFilteredComplaintsQuery } from "../../../../redux/store/rtk-api/complaint-rtk/complaintEndpoints";
import { useNavigate } from "react-router-dom";

interface Props {
  count: number;
}

const ComplaintBlock: FC<Props> = ({ count }) => {
  const navigate = useNavigate();
  const handleClick = (id: number) => {
    navigate("/app/complaints");
  };

  const { data, isLoading } = useGetFilteredComplaintsQuery(5);

  return (
    <Grid container columns={4}>
      <Grid item sx={{ width: "100%" }}>
        <Typography variant="h3">Недавние Жалобы</Typography>
        {isLoading ? (
          <CircularProgress size={65} />
        ) : (
          <Styled.MainWrapper>
            <Styled.WrapperColumn>
              {data?.complaints.map((complaint) => (
                <>
                  <Styled.Block
                    onClick={() => handleClick(complaint.id)}
                    key={complaint.id}
                  >
                    <Styled.BlockWrapper>
                      <Styled.BlockContent>
                        <Typography variant="h18b">
                          {complaint.culprit.firstName}
                          {complaint.culprit.secondName}
                        </Typography>
                        <Typography color="error">{complaint.text}</Typography>
                      </Styled.BlockContent>
                      <ArrowForwardIosRoundedIcon />
                    </Styled.BlockWrapper>
                    <Divider variant="middle" sx={{ width: "90%" }} />
                  </Styled.Block>
                </>
              ))}
            </Styled.WrapperColumn>
          </Styled.MainWrapper>
        )}
      </Grid>
    </Grid>
  );
};

export default ComplaintBlock;
