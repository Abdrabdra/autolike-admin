import React, { useEffect } from "react";
import { Box, Tab, Tabs, Typography } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import SortOutlinedIcon from "@mui/icons-material/SortOutlined";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
import TextSnippetOutlinedIcon from "@mui/icons-material/TextSnippetOutlined";
import HobbyTab from "./HobbyTab";
import CityTab from "./CityTab";
import HadithTab from "./HadithTab";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const ManagementSection = () => {
  const location = useLocation();

  const [value, setValue] = React.useState(0);

  useEffect(() => {
    if (location.pathname === "/app/management/hobby/list") {
      setValue(0);
    }
    if (location.pathname === "/app/management/hobby/list") {
      setValue(0);
    }
    if (location.pathname === "/app/management/hobby/create") {
      setValue(0);
    }
    if (location.pathname === "/app/management/hobby/one/:hobbyId") {
      setValue(0);
    }
    if (location.pathname === "/app/management/city") {
      setValue(1);
    }
    if (location.pathname === "/app/management/city/list") {
      setValue(1);
    }
    if (location.pathname === "/app/management/city/create") {
      setValue(1);
    }
    if (location.pathname === "/app/management/city/one/:cityId") {
      setValue(1);
    }
    if (location.pathname === "/app/management/hadith") {
      setValue(2);
    }
    if (location.pathname === "/app/management/hadith/list") {
      setValue(2);
    }
    if (location.pathname === "/app/management/hadith/create") {
      setValue(2);
    }
    if (location.pathname === "/app/management/hadith/hadithes/:hadithId") {
      setValue(2);
    }
    if (location.pathname === "/app/management/hadith/hadith/description") {
      setValue(2);
    }
  }, [location]);

  // {
  //   setValue(0);
  // }

  const navigate = useNavigate();
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{
          backgroundColor: "#fff",
          borderRadius: "15px",
          borderBottom: 1,
          borderColor: "divider",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs">
          <Tab
            icon={<PeopleOutlinedIcon />}
            label="Хобби"
            {...a11yProps(0)}
            onClick={() => navigate("/app/management/hobby/list")}
          />
          <Tab
            icon={<SortOutlinedIcon />}
            label="Города"
            {...a11yProps(1)}
            onClick={() => navigate("/app/management/city/list")}
          />
          <Tab
            icon={<LocalOfferOutlinedIcon />}
            label="Хадисы"
            {...a11yProps(2)}
            onClick={() => navigate("/app/management/hadith/list")}
          />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <HobbyTab />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <CityTab />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <HadithTab />
      </TabPanel>
    </Box>
  );
};

export default ManagementSection;
