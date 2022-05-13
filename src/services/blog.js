import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const blogApi = createApi({
  reducerPath: "blogApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://logibricks.com/api" }),
  endpoints: (builder) => ({
    getAllBlogs: builder.query({
      query: () => ({
        url: "/blogCategories",
        method: "GET",
      }),
    }),
    getBlogByName: builder.query({
      query: (name, per_page) => {
        return {
          url: `/blogs/${name}?page=1&per_page=${per_page}`,
          method: "GET",
        };
      },
    }),
  }),
});

export const { useGetAllBlogsQuery, useGetBlogByNameQuery } = blogApi;
