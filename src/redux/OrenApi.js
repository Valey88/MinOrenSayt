import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const OrenApi = createApi({
  reducerPath: "orenApi/api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/" }),
  endpoints: (builder) => ({

    addUsers: builder.mutation({
      query: (body) => ({
        url: "api/user",
        headers: { "Content-Type": "application/json" },
        method: "POST",
        body: {
          fio: body.address,
          email: body.name,
          phone: body.description,
          organization: body.price,
          post: body.places,
          city: body.weeks,
          district: body.timeStart,
          events: body.timeEnd,
        },
      }),
    }),
  }),
});

export const {
 useAddUsersMutation
} = OrenApi;
