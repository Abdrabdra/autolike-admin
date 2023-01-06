import { IGetVisit, IHome } from "./home.type";
import homeApi from "./homeApi";

export const homeEndpoints = homeApi.injectEndpoints({
  endpoints: (builder) => ({
    getHome: builder.query<IHome, string>({
      query: () => ({
        url: `/profile/statistic`,
      }),
      providesTags: ["home"],
    }),
    getVisit: builder.mutation<number, IGetVisit>({
      query: (body) => ({
        url: `/user/statistic`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["visitInfo"],
    }),
  }),
});

export const { useGetHomeQuery, useGetVisitMutation } = homeEndpoints;
