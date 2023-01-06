import {ICreateHobbyBody, IHobbyResponse} from "./hobby.type";
import hobbyApi from "./hobbyApi";

export const hobbyEndpoints = hobbyApi.injectEndpoints({
  endpoints: (builder) => ({
    getHobbies: builder.query<IHobbyResponse[],any>({
      query: () => ({
        url: `hobby/get-hobbies`,
        method:"GET"
      }),
      providesTags: ["hobby"],
    }),
    createHobby: builder.mutation<any,ICreateHobbyBody>({
      query: (data) => ({
        url: `hobby/create-hobby`,
        method:"POST",
        body:data
      }),
      invalidatesTags: ["hobby"],
    }),
    deleteHobby: builder.mutation<any,number>({
      query: (id) => ({
        url: `hobby/remove-hobby/${id}`,
        method:"DELETE",

      }),
      invalidatesTags: ["hobby"],
    })

  }),
});

export const {useCreateHobbyMutation,useDeleteHobbyMutation,useGetHobbiesQuery} = hobbyEndpoints;
