import { env } from "@/env";
import { getFromLocalStorage } from "@/utils/localStorage";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const pcBuilderApi = createApi({
  reducerPath: "pcBuilderApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${env.BASE_URL}`,
    prepareHeaders: (headers) => {
      headers.set("authorization", getFromLocalStorage("user-info"));
      return headers;
    },
  }),
  tagTypes: ["products"],
  endpoints: (builder) => ({
    postProductInPcBuilder: builder.mutation({
      query: (product) => ({
        url: `/pcbuilder`,
        method: "POST",
        body: product,
      }),
      invalidatesTags: ["products"],
    }),
    getPcBuilderProducts: builder.query({
      query: () => "/pcBuilder",
      providesTags: ["products"],
    }),
  }),
});

export const {
  usePostProductInPcBuilderMutation,
  useGetPcBuilderProductsQuery,
} = pcBuilderApi;
