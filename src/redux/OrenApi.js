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
          surname: body.seName,
          name: body.name,
          middlename: body.midleName,
          email: body.email,
          phone: body.phoneNumber,
          organization: body.organization,
          post: body.post,
          city: body.city,
          district: body.rayon,
          events: body.selectedAnswers,
        },
      }),
    }),
  }),
});

export const { useAddUsersMutation } = OrenApi;
