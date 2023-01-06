
import hobbyApi from "./hadithApi";
import {
  ICreateHadith,
  ICreateHadithCategory,
  IHadithCategoryResponse,
  IHadithesListResponse,
  IOneHadithResponse
} from "./hadith.type";

export const hadithEndpoints = hobbyApi.injectEndpoints({
  endpoints: (builder) => ({
    getHadithCategory: builder.query<IHadithCategoryResponse[],any>({
      query: () => ({
        url: `hadis/category`,
        method:"GET"
      }),
      providesTags: ["hadith"],
    }),
    createHadithCategory: builder.mutation<any,ICreateHadithCategory>({
      query: (data) => ({
        url: `hadis/category`,
        method:"POST",
        body:data
      }),
      invalidatesTags: ["hadith"],
    }),
    getOneHadith: builder.query<IOneHadithResponse,number|undefined>({
      query: (id) => ({
        url: `hadis/one/${id}`,
        method:"GET"
      }),
      providesTags: ["hadith"],
    }),
    createHadith: builder.mutation<any,ICreateHadith>({
      query: (data) => ({
        url: `hadis/${data.id}`,
        method:"POST",
        body:{
          title: data.title,
          arabic: data.arabic,
          translate: data.translate,
          description: data.description
        }
      }),
      invalidatesTags: ["hadith"],
    }),
    getHadithesList: builder.query<IHadithesListResponse[],number>({
      query: (id) => ({
        url: `hadis/list/${id}`,
        method:"GET"
      }),
      providesTags: ["hadith"],
    }),
    deleteHadithCategory: builder.mutation<any,number>({
      query: (id) => ({
        url: `hadis/category/${id}`,
        method:"DELETE",

      }),
      invalidatesTags: ["hadith"],
    }),
    deleteHadith: builder.mutation<any,number>({
      query: (id) => ({
        url: `hadis/${id}`,
        method:"DELETE",

      }),
      invalidatesTags: ["hadith"],
    })
  }),
});

export const {useCreateHadithCategoryMutation,useCreateHadithMutation,useGetHadithCategoryQuery,useGetHadithesListQuery,useGetOneHadithQuery, useDeleteHadithCategoryMutation, useDeleteHadithMutation} = hadithEndpoints;
