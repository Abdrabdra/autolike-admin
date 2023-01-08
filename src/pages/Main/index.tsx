//library
import React, { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import { useGetRoleQuery } from "../../redux/store/rtk-api/user-rtk/userEndpoints";
import { useDispatch } from "react-redux";
import { setRole } from "../../redux/store/reducers/user/user.slice";

//components
import Layout from "../../components/layouts";

//pages
import Profile from "../Profile";
import Users from "../Users";
import ComplaintsPage from "../Complaints";
import StaffPage from "../Staff";
import ComplaintsUser from "../Complaints/ComplaintsSection/ComplaintsUser";
import Edit from "../Staff/StaffSection/Edit";
import Worker from "../Staff/StaffSection/Worker";
import Create from "../Staff/StaffSection/Create";

import Management from "../Management";

const Main = () => {
  // debugger
  const { data: role, isLoading, isError, refetch } = useGetRoleQuery("");
  const dispatch = useDispatch();

  useEffect(() => {
    refetch();
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="users" />} />
          {/* <Route path="profile/*" element={<Profile />} /> */}
          <Route path="users/*" element={<Users />} />
          <Route path="complaints/" element={<ComplaintsPage />} />
          <Route path="complaints/user" element={<ComplaintsUser />} />
          <Route path="employees/" element={<StaffPage />} />
          <Route path="employees/one-worker" element={<Worker />} />
          <Route path="employees/one-worker/edit" element={<Edit />} />
          <Route path="employees/one-worker/create" element={<Create />} />

          <Route path="management/*" element={<Management />} />
        </Route>
      </Routes>
    </>
  );
};

export default Main;

/* <Route path="complaints/user*" element={<ComplaintsUser />} />
<Route path="employees/one-worker" element={<Worker />} />
<Route path="employees/one-worker/edit" element={<Edit />} /> */
