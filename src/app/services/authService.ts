import { createApi } from "@reduxjs/toolkit/query/react";
import baseQuery from "~/app/config/baseQuery";
export const authServiceApi = createApi({
  reducerPath: "authServiceApi",
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    authLogin: builder.mutation({
      query: (payload) => ({
        url: "/auth/admin/login",
        method: "POST",
        body: payload,
      }),
    }),
  }),
  refetchOnMountOrArgChange: true
});

export const {
  useAuthLoginMutation,
} = authServiceApi;
