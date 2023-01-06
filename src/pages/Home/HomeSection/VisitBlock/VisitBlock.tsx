import React, { FC, useEffect, useState } from "react";
import {
  Box,
  Button,
  CircularProgress,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";

import { useGetVisitMutation } from "../../../../redux/store/rtk-api/home-rtk/homeEndpoints";

import { Styled } from "./VisitBlock.styled";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { IGetVisit } from "../../../../redux/store/rtk-api/home-rtk/home.type";
import { getMonth } from "date-fns";
import { IVisitChart } from "./VisitBlock.types";
import { AreaChart } from "../../../../components/Charts";

interface Props {
  count: number;
}

const VisitBlock: FC<Props> = ({ count }) => {
  const [getInfo] = useGetVisitMutation();

  const [userId, setUserId] = React.useState<number>(0);
  const [counter, setCounter] = React.useState<number>(0);
  const [year, setYear] = React.useState<number>(new Date().getFullYear());
  const [month, setMonth] = React.useState<number>(new Date().getMonth() + 2);
  const [chartData, setChartData] = React.useState<IVisitChart[]>([]);

  const [cuttedData, setCuttedData] = React.useState([]);
  const [isLoading, setisLoading] = React.useState(true);

  useEffect(() => {
    setYear(year);
  }, [year]);
  useEffect(() => {}, [month]);
  useEffect(() => {
    setChartData(chartData);
  }, [chartData]);

  const gMonth = () => {
    let month1 = month;
    month1 = month1 - 1;

    if (month1 === 0 || month1 - 1 === 0) {
      month1 = 13;
      setMonth(month1);
      setYear(year - 1);
    }
    setMonth(month1);
  };
  const setData = () => {
    gMonth();

    let newDay = new Date(year, month - 1, 0).getDate();

    getInfo({
      dateFrom: `${year}/${month - 1}/01`,
      dateTo: `${year}/${month - 1}/${newDay}`,
      userId: 0,
    } as IGetVisit).then((res) => {
      // dateFrom
      let dateFromReserve;
      if (month - 1 === 1) {
        dateFromReserve = "Январь";
      } else if (month - 1 === 2) {
        dateFromReserve = "Февраль";
      } else if (month - 1 === 3) {
        dateFromReserve = "Март";
      } else if (month - 1 === 4) {
        dateFromReserve = "Апрель";
      } else if (month - 1 === 5) {
        dateFromReserve = "Май";
      } else if (month - 1 === 6) {
        dateFromReserve = "Июнь";
      } else if (month - 1 === 7) {
        dateFromReserve = "Июль";
      } else if (month - 1 === 8) {
        dateFromReserve = "Август";
      } else if (month - 1 === 9) {
        dateFromReserve = "Сентябрь";
      } else if (month - 1 === 10) {
        dateFromReserve = "Октябрь";
      } else if (month - 1 === 11) {
        dateFromReserve = "Ноябрь";
      } else if (month - 1 === 12) {
        dateFromReserve = "Декабрь";
      }

      // dateTo
      let dateToReserve;
      if (month - 1 === 1) {
        dateToReserve = "Январь";
      } else if (month - 1 === 2) {
        dateToReserve = "Февраль";
      } else if (month - 1 === 3) {
        dateToReserve = "Март";
      } else if (month - 1 === 4) {
        dateToReserve = "Апрель";
      } else if (month - 1 === 5) {
        dateToReserve = "Май";
      } else if (month - 1 === 6) {
        dateToReserve = "Июнь";
      } else if (month - 1 === 7) {
        dateToReserve = "Июль";
      } else if (month - 1 === 8) {
        dateToReserve = "Август";
      } else if (month - 1 === 9) {
        dateToReserve = "Сентябрь";
      } else if (month - 1 === 10) {
        dateToReserve = "Октябрь";
      } else if (month - 1 === 11) {
        dateToReserve = "Ноябрь";
      } else if (month - 1 === 12) {
        dateToReserve = "Декабрь";
      }

      // Count
      let countReserve;
      // @ts-ignore
      if (res.data === null) {
        countReserve = 0;
      } else {
        // @ts-ignore
        countReserve = res.data;
      }

      // final Data
      let obj = {
        dateFrom: `${year}/${month - 1}/01`,
        dateTo: `${year}/${month - 1}/${newDay}`,
        // @ts-ignore
        count: countReserve,
        month: dateToReserve,
      };

      setChartData((chartData) => [...chartData, obj]);
      setCounter(counter + 1);
    });
  };

  React.useEffect(() => {
    if (counter === 6) {
      setisLoading(false);
      return;
    } else {
      setData();
    }
  }, [counter]);

  return (
    <Styled.Wrapper>
      <Grid item sx={{ width: "100%" }}>
        <Box sx={{ height: "100%" }}>
          <Typography variant="h3">Статистика по Посещениям</Typography>
          {/* <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Stack
              direction={"row"}
              spacing={1}
              justifyContent="space-between"
              alignItems="center"
              sx={{ mt: "10px" }}
            >
              <Button
                variant="contained"
                color="primary"
                sx={{ width: "100%", maxWidth: "150px" }}
              >
                Применить
              </Button>
            </Stack>
          </LocalizationProvider> */}
          <Styled.Block>
            <Styled.ChartContainer>
              {isLoading ? (
                <CircularProgress size={65} />
              ) : (
                <AreaChart count={count} barData={chartData} />
              )}
            </Styled.ChartContainer>
          </Styled.Block>
        </Box>
      </Grid>
    </Styled.Wrapper>
  );
};

export default VisitBlock;
