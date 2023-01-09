// library
import { Box, Drawer, List, Stack, Toolbar, Typography } from "@mui/material";
import { Link, NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";

// icons
import PersonOutlineRoundedIcon from "@mui/icons-material/PersonOutlineRounded";

import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

//style
import {
  StyledBox,
  StyledItemText,
  StyledListItem,
  StyledListItemIcon,
  StyledNavLink,
} from "./StyledDrawer";

// store
import { logout } from "../../redux/store/reducers/auth/auth.action";
import { useTypedSelector } from "../../redux/store";

import HeaderLogo from "../../assets/images/drawer_header.svg";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import EngineeringOutlinedIcon from "@mui/icons-material/EngineeringOutlined";

const DrawerAdmin = () => {
  const dispatch = useDispatch();

  const role = useTypedSelector((state) => state.user.role);

  return (
    <Drawer
      sx={{
        width: "300px",
        flexShrink: 0,

        "& .MuiDrawer-paper": {
          width: "300px",
          boxSizing: "border-box",
          borderRight: 0,

          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Stack>
        <NavLink
          to="/app/home"
          style={{ textDecoration: "none", color: "#000", fontSize: "27px" }}
        >
          <Toolbar sx={{ justifyContent: "center", mt: "23px", mb: "23px" }}>
            <Box
              component="img"
              sx={{
                width: 213,
                height: 33,
              }}
              alt="The house from the offer."
              src={HeaderLogo}
            />
          </Toolbar>
        </NavLink>
        <Box sx={{ width: "300px", height: "1px", background: "#2398AB" }} />
        <List sx={{ p: 0, pt: "40px" }}>
          {/* <StyledNavLink to="profile">
            <StyledListItem>
              <StyledListItemIcon>
                <PersonOutlineRoundedIcon />
              </StyledListItemIcon>
              Профиль
            </StyledListItem>
          </StyledNavLink> */}
          <StyledNavLink to="users">
            <StyledListItem>
              <StyledListItemIcon>
                <PeopleOutlinedIcon />
              </StyledListItemIcon>
              Пользователи
            </StyledListItem>
          </StyledNavLink>
          <StyledNavLink to="announcement">
            <StyledListItem>
              <StyledListItemIcon>
                <MenuBookIcon />
              </StyledListItemIcon>
              Объявления
            </StyledListItem>
          </StyledNavLink>
          <StyledNavLink to="employees">
            <StyledListItem>
              <StyledListItemIcon>
                <EngineeringOutlinedIcon />
              </StyledListItemIcon>
              Персонал
            </StyledListItem>
          </StyledNavLink>
          <StyledNavLink to="management">
            <StyledListItem>
              <StyledListItemIcon>
                <SettingsOutlinedIcon color="primary" />
              </StyledListItemIcon>
              Управление
            </StyledListItem>
          </StyledNavLink>
        </List>
      </Stack>
      <Stack>
        <List>
          <StyledNavLink to="">
            <StyledListItem
              // @ts-ignore
              onClick={() => dispatch(logout())}
              sx={{ color: "#F18989", mb: "35px" }}
            >
              <StyledListItemIcon>{/* <LogoutLogo /> */}</StyledListItemIcon>
              Выйти
            </StyledListItem>
          </StyledNavLink>
        </List>
      </Stack>
    </Drawer>
  );
};

export default DrawerAdmin;
