import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "../rtkApi";

export default createApi({
  reducerPath: "homeApi",
  baseQuery: baseQuery,
  tagTypes: ["home", "visitInfo"],
  endpoints: () => ({}),
});
