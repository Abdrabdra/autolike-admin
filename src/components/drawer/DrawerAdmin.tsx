// library
import { Box, Drawer, List, Stack, Toolbar, Typography } from "@mui/material";
import { Link, NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";

// icons
// @ts-ignore: Ts че ты хочешь?
import { ReactComponent as ProfileLogo } from "../../assets/svg/Vectorprofile.svg";
// @ts-ignore: Ts че ты хочешь?
import { ReactComponent as HomeLogo } from "../../assets/svg/Vectorhome.svg";
// @ts-ignore: Ts че ты хочешь?
import { ReactComponent as UsersLogo } from "../../assets/svg/Vectorusers.svg";
// @ts-ignore: Ts че ты хочешь?
import { ReactComponent as ComplainsLogo } from "../../assets/svg/Vectorcomplains.svg";
// @ts-ignore: Ts че ты хочешь?
import { ReactComponent as EmployeesLogo } from "../../assets/svg/Vectoremployees.svg";
// @ts-ignore: Ts че ты хочешь?
import { ReactComponent as LogoutLogo } from "../../assets/svg/Vectorlogout.svg";

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
            <StyledBox />
            <Typography
              sx={{
                fontFamily: "Gilroy",
                fontSize: "42px",
                lineHeight: "40px",
                letterSpacing: "0.2em",
                color: "primary.main",
              }}
            >
              HITBA
            </Typography>
          </Toolbar>
        </NavLink>
        <Box sx={{ width: "300px", height: "1px", background: "#2398AB" }} />
        <List sx={{ p: 0, pt: "40px" }}>
          {role && role === "WORKER" && (
            <StyledNavLink to="profile">
              <StyledListItem>
                <StyledListItemIcon>
                  <ProfileLogo />
                </StyledListItemIcon>
                Профиль
              </StyledListItem>
            </StyledNavLink>
          )}
          <StyledNavLink to="home">
            <StyledListItem>
              <StyledListItemIcon>
                <HomeLogo />
              </StyledListItemIcon>
              Главная
            </StyledListItem>
          </StyledNavLink>
          <StyledNavLink to="users">
            <StyledListItem>
              <StyledListItemIcon>
                <UsersLogo />
              </StyledListItemIcon>
              Пользователи
            </StyledListItem>
          </StyledNavLink>
          <StyledNavLink to="complaints">
            <StyledListItem>
              <StyledListItemIcon>
                <ComplainsLogo />
              </StyledListItemIcon>
              Список жалоб
            </StyledListItem>
          </StyledNavLink>
          {role && role === "SUPER-ADMIN" && (
            <StyledNavLink to="employees">
              <StyledListItem>
                <StyledListItemIcon>
                  <EmployeesLogo />
                </StyledListItemIcon>
                Персонал
              </StyledListItem>
            </StyledNavLink>
          )}
          <StyledNavLink to="management/hobby/list">
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
              <StyledListItemIcon>
                <LogoutLogo />
              </StyledListItemIcon>
              Выйти
            </StyledListItem>
          </StyledNavLink>
        </List>
      </Stack>
    </Drawer>
  );
};

export default DrawerAdmin;
