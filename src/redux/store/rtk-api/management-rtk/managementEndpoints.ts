import managementApi from "./managementApi";
import { IGetMarkaResponse, IMarka } from "../../../../types/Management/Marka";
import { IGeneration } from "../../../../types/Management/Generation";
import { IGetDescriptionResponse } from "../../../../types/Management/Description";

export const managementEndpoints = managementApi.injectEndpoints({
  endpoints: (builder) => ({
    getMarka: builder.query<IGetMarkaResponse, any>({
      query: () => ({
        url: `marka`,
        method: "GET",
      }),
      providesTags: ["marka"],
    }),
    createMarka: builder.mutation<any, { title: string }>({
      query: (body) => ({
        url: "marka",
        method: "POST",
        body,
      }),
      invalidatesTags: ["marka"],
    }),
    deleteMarka: builder.mutation<any, { id: number }>({
      query: (arg) => ({
        url: `marka/${arg.id}`,
        method: "DELETE",
      }),
    }),

    getModel: builder.query<IGetMarkaResponse, any>({
      query: () => ({
        url: `model`,
        method: "GET",
      }),
      providesTags: ["model"],
    }),
    createModel: builder.mutation<
      any,
      { title: string; markaId: number | null; bodyTypeId: number | null }
    >({
      query: (body) => ({
        url: "model",
        method: "POST",
        body,
      }),
      invalidatesTags: ["model"],
    }),
    deleteModel: builder.mutation<any, { id: number }>({
      query: (arg) => ({
        url: `model/${arg.id}`,
        method: "DELETE",
      }),
    }),

    getBody: builder.query<IMarka[], string>({
      query: () => {
        return {
          url: `/body-type`,
        };
      },
      providesTags: ["body"],
    }),
    createBody: builder.mutation<any, { title: string }>({
      query: (body) => {
        return {
          url: "body-type",
          method: "POST",
          body,
        };
      },
      invalidatesTags: ["body"],
    }),
    deleteBody: builder.mutation<any, { id: number }>({
      query: (arg) => ({
        url: `body-type/car/${arg.id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["body"],
    }),

    getGeneration: builder.query<
      IGeneration[],
      { modelId: number | undefined }
    >({
      query: (arg) => {
        return {
          url: `/generation${arg.modelId ? `/${arg.modelId}` : ""}`,
        };
      },
      providesTags: ["generation"],
    }),
    createGeneration: builder.mutation<
      any,
      {
        title: string;
        modelId?: number;
        createdFrom?: number;
        createdTo?: number;
      }
    >({
      query: (body) => {
        return {
          url: "generation",
          method: "POST",
          body,
        };
      },
      invalidatesTags: ["generation"],
    }),
    deleteGeneration: builder.mutation<any, { id: number }>({
      query: (arg) => ({
        url: `generation/${arg.id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["generation"],
    }),

    // Descriptions
    getDescriptions: builder.query<IGetDescriptionResponse[], string>({
      query: (arg) => {
        return {
          url: `/description`,
        };
      },
      providesTags: ["tag"],
    }),
    createDescription: builder.mutation<
      any,
      {
        title: string;
      }
    >({
      query: (body) => {
        return {
          url: "description",
          method: "POST",
          body,
        };
      },
      invalidatesTags: ["tag"],
    }),
    deleteDescription: builder.mutation<any, { id: number }>({
      query: (arg) => ({
        url: `description/tag/${arg.id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["tag"],
    }),

    // DescriptionTags
    getTags: builder.query<IGetDescriptionResponse[], string>({
      query: (arg) => {
        return {
          url: `/description`,
        };
      },
      providesTags: ["tag"],
    }),
    createTag: builder.mutation<
      any,
      {
        title: string;
        descriptionId: number;
      }
    >({
      query: (body) => {
        return {
          url: "description/tags",
          method: "POST",
          body,
        };
      },
      invalidatesTags: ["tag"],
    }),
    deleteTag: builder.mutation<any, { id: number }>({
      query: (arg) => ({
        url: `description/description/${arg.id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["tag"],
    }),
  }),
});

export const {
  useGetMarkaQuery,
  useCreateMarkaMutation,
  useDeleteMarkaMutation,

  useGetModelQuery,
  useCreateModelMutation,
  useDeleteModelMutation,

  useGetBodyQuery,
  useCreateBodyMutation,
  useDeleteBodyMutation,

  useGetGenerationQuery,
  useCreateGenerationMutation,
  useDeleteGenerationMutation,

  useGetDescriptionsQuery,
  useCreateDescriptionMutation,
  useDeleteDescriptionMutation,

  useGetTagsQuery,
  useCreateTagMutation,
  useDeleteTagMutation,
} = managementEndpoints;
