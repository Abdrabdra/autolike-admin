import {ICreateManagementBody, IManagementResponse} from "./city.type";
import hobbyApi from "./cityApi";

export const cityEndpoints = hobbyApi.injectEndpoints({
  endpoints: (builder) => ({
    getCities: builder.query<IManagementResponse[],any>({
      query: () => ({
        url: `region`,
        method:"GET"
      }),
      providesTags: ["city"],
    }),
    createCity: builder.mutation<any,ICreateManagementBody>({
      query: (data) => ({
        url: `region`,
        method:"POST",
        body:data
      }),
      invalidatesTags: ["city"],
    }),
    // deleteCity: builder.mutation<any,number>({
    //   query: (id) => ({
    //     url: `hobby/remove-city/${id}`,
    //     method:"DELETE",
    //
    //   }),
    //   invalidatesTags: ["city"],
    // })

  }),
});

export const {useCreateCityMutation,useGetCitiesQuery} = cityEndpoints;
