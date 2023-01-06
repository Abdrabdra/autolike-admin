import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "../rtkApi";

export default createApi({
  reducerPath: "complaintApi",
  baseQuery: baseQuery,
  tagTypes: ["complaint"],
  endpoints: () => ({}),
});
