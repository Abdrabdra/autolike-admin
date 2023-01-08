import React, { useEffect } from "react";
import { Box, Tab, Tabs, Typography } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import SortOutlinedIcon from "@mui/icons-material/SortOutlined";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";

import CityTab from "./CityTab";
import MarkaTab from "./MarkaTab";
import ModelTab from "./ModelTab";
import BodyTab from "./BodyTab";
import GenerationTab from "./GenerationTab";
import TagTab from "./TagTab";

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
    if (location.pathname === "/app/management/city") {
      setValue(0);
    }
    if (location.pathname === "/app/management/marka") {
      setValue(1);
    }
    if (location.pathname === "/app/management/model") {
      setValue(2);
    }

    if (location.pathname === "/app/management/body") {
      setValue(3);
    }
    if (location.pathname === "/app/management/generation") {
      setValue(4);
    }
    if (location.pathname === "/app/management/tags") {
      setValue(5);
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
            icon={<SortOutlinedIcon />}
            label="Города"
            onClick={() => navigate("/app/management/city")}
          />
          <Tab
            icon={<PeopleOutlinedIcon />}
            label="Марка"
            onClick={() => navigate("/app/management/marka")}
          />
          <Tab
            icon={<LocalOfferOutlinedIcon />}
            label="Модель"
            onClick={() => navigate("/app/management/model")}
          />

          <Tab
            icon={<LocalOfferOutlinedIcon />}
            label="Кузов"
            onClick={() => navigate("/app/management/body")}
          />
          <Tab
            icon={<LocalOfferOutlinedIcon />}
            label="Поколение"
            onClick={() => navigate("/app/management/generation")}
          />
          <Tab
            icon={<LocalOfferOutlinedIcon />}
            label="Тэги"
            onClick={() => navigate("/app/management/tags")}
          />
        </Tabs>
      </Box>

      <TabPanel value={value} index={0}>
        <CityTab />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <MarkaTab />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <ModelTab />
      </TabPanel>

      <TabPanel value={value} index={3}>
        <BodyTab />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <GenerationTab />
      </TabPanel>
      <TabPanel value={value} index={5}>
        <TagTab />
      </TabPanel>
    </Box>
  );
};

export default ManagementSection;
