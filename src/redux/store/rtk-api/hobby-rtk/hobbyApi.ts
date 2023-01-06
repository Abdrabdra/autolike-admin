import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "../rtkApi";

export default createApi({
  reducerPath: "hobbyApi",
  baseQuery: baseQuery,
  tagTypes: ["hobby"],
  endpoints: () => ({}),
});
