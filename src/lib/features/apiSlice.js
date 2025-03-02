// apiSlice.js
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseURL: `${process.env.NEXT_PUBLIC_API_BASE_URL}/api`,
  }), // Adjust the base URL as needed
  endpoints: (builder) => ({
    getContact: builder.query({
      query: () => "/contact",
    }),
  }),
});

export const { useGetContactQuery } = apiSlice;
