import { Box, Button, Grid, Paper, Stack, Typography } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

import { useGetHomeQuery } from "../../../redux/store/rtk-api/home-rtk/homeEndpoints";

import { StyledPaper } from "./style";

import { DoughnutChart } from "../../../components/Charts/Doughnut";
import { HorizontalColorBar } from "../../../components/Charts/HorizontalColorBar";

import AgesBlock from "./AgesBlock";
import CityBlock from "./CityBlock";
import GenderBlock from "./GenderBlock";
import HobbyBlock from "./HobbyBlock";
import ReligionBlock from "./ReligionBlock";
import StatusBlock from "./StatusBlock";
import VisitBlock from "./VisitBlock";
import ComplaintBlock from "./ComplaintBlock";

const HomeSection = () => {
  const { data, isLoading } = useGetHomeQuery("");

  const religionData = data?.religions.filter((e) => e.value != null);
  const genderData = data?.genders.filter((e) => e.value != null);
  const hobbyData = data?.hobbies.filter((e) => e.value != null);
  const statusData = data?.status.filter((e) => e.value != null);
  const cityData = data?.cities.filter((e) => e.value != null);

  return (
    <>
      <Grid container spacing={2} columns={12}>
        {/* Хобби */}
        <Grid item xs={8}>
          <StyledPaper>
            {data && hobbyData && (
              <HobbyBlock count={data.count} hobbyData={hobbyData} />
            )}
          </StyledPaper>
        </Grid>

        {/* Посещение */}
        <Grid item xs={4}>
          <StyledPaper
            sx={{
              paddingTop: "25px",
              paddingLeft: "30px",
              paddingRight: "30px",
            }}
          >
            {data && <VisitBlock count={data.count} />}
          </StyledPaper>
        </Grid>

        {/* По религий */}
        <Grid item xs={5}>
          <StyledPaper sx={{ height: "clamp(320px, 26.04vw, 500px)" }}>
            {data && religionData && (
              <ReligionBlock count={data.count} religionData={religionData} />
            )}
          </StyledPaper>
        </Grid>

        {/* По полу + По статусу */}
        <Grid item xs={4} container direction={"column"} spacing={2}>
          <Grid item xs sx={{ overflow: "hidden", height: "100%" }}>
            <StyledPaper
              sx={{
                height: "calc(100% - 1px)",
                color: "primary.main",
                borderRadius: "20px",
                fontSize: "24px",
                paddingTop: "25px",
                paddingLeft: "30px",
                paddingRight: "30px",
              }}
            >
              <Typography variant="h3">Статистика по полу</Typography>
              {data && genderData && (
                <GenderBlock count={data.count} genderData={genderData} />
              )}
            </StyledPaper>
          </Grid>

          <Grid item xs sx={{ overflow: "hidden", height: "100%" }}>
            <StyledPaper
              sx={{
                height: "calc(100% - 1px)",
                color: "primary.main",
                borderRadius: "20px",
                fontSize: "24px",
                paddingTop: "25px",
                paddingLeft: "30px",
                paddingRight: "30px",
              }}
            >
              <Typography variant="h3">Статистика по статусу</Typography>
              {data && statusData && (
                <StatusBlock count={data.count} statusData={statusData} />
              )}
            </StyledPaper>
          </Grid>
        </Grid>

        {/* По городам */}
        <Grid item xs={3}>
          <StyledPaper
            sx={{
              height: "clamp(320px, 26.04vw, 500px)",
              paddingLeft: "5px",
            }}
          >
            {data && cityData && (
              <CityBlock count={data.count} cityData={cityData} />
            )}
          </StyledPaper>
        </Grid>

        {/* Недавние Жалобы */}
        <Grid item xs={4}>
          <StyledPaper
            sx={{
              paddingTop: "25px",
              paddingLeft: "30px",
              paddingRight: "15px",
            }}
          >
            {data && <ComplaintBlock count={data.count} />}
          </StyledPaper>
        </Grid>

        {/* Статистика прибыли */}
        <Grid item xs={3}>
          <StyledPaper
            sx={{
              paddingTop: "25px",
              paddingLeft: "30px",
              paddingRight: "30px",
            }}
          >
            <Typography variant="h3">Статистика прибыли</Typography>
            {data && religionData && (
              <DoughnutChart count={data.count} barData={religionData} />
            )}
          </StyledPaper>
        </Grid>

        {/* Статистика по возрасту */}
        <Grid item xs={5}>
          <Box sx={{ height: "100%" }}>
            <StyledPaper
              sx={{
                paddingTop: "25px",
                paddingLeft: "30px",
                paddingRight: "30px",
              }}
            >
              <Typography variant="h3">Статистика по возрасту</Typography>
              {data && <AgesBlock count={data.count} agesData={data.ages} />}
            </StyledPaper>
          </Box>
        </Grid>

        {/* Тест */}
        {/* <Grid item xs={5}>
          <Box sx={{ height: "100%" }}>TEST</Box>
        </Grid> */}
      </Grid>
    </>
  );
};

export default HomeSection;
