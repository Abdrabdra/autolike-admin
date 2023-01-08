import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "../rtkApi";

export default createApi({
  reducerPath: "managementApi",
  baseQuery: baseQuery,
  tagTypes: ["management", "marka", "model", "generation", "body", "tag"],
  endpoints: () => ({}),
});
