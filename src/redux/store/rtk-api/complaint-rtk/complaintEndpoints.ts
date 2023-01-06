import { IComplaintsResponse } from "./complaint.type";
import complaintApi from "./complaintApi";

export const complaintEndpoints = complaintApi.injectEndpoints({
  endpoints: (builder) => ({
    getComplaints: builder.query<IComplaintsResponse, any>({
      query: () => ({
        url: `complaint?offset=${1}&limit=${50}`,
        method: "GET",
      }),
      providesTags: ["complaint"],
    }),
    getFilteredComplaints: builder.query<IComplaintsResponse, any>({
      query: (limit) => ({
        url: `complaint?offset=${1}&limit=${limit}`,
        method: "GET",
      }),
      providesTags: ["complaint"],
    }),
    blockUser: builder.mutation<any, number | null>({
      query: (id) => ({
        url: `profile/block-profile/${id}`,
        method: "PUT",
      }),
      invalidatesTags: ["complaint"],
    }),
    changeComplaintStatus: builder.mutation<any, any>({
      query: (data) => ({
        url: `complaint/${data.id}`,
        method: "PUT",
        body: {
          status: data.status,
        },
      }),
      invalidatesTags: ["complaint"],
    }),
  }),
});

export const {
  useGetComplaintsQuery,
  useGetFilteredComplaintsQuery,
  useBlockUserMutation,
  useChangeComplaintStatusMutation,
} = complaintEndpoints;
