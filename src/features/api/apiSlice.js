import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
//we can have the api  key in .env file for security
const API_KEY = "63be7360969f06502871ad7f";
export const apiSlice = createApi({
	reducerPath: "api",
	baseQuery: fetchBaseQuery({
		baseUrl: "https://touchinspiration-0ada.restdb.io",
		prepareHeaders: (headers, { getState }) => {
			headers.set("x-apikey", API_KEY);
			return headers;
		},
	}),
	tagTypes: ["User"],
	endpoints: (builder) => ({
		getUsers: builder.query({
			query: () => "/rest/sample",
			providesTags: ["User"],
			method: "GET",
		}),
		updateUser: builder.mutation({
			query: (userPayload) => ({
				url: `/rest/sample/${userPayload._id}`,
				method: "PATCH",
				body: userPayload,
			}),
			invalidatesTags: ["User"],
		}),
	}),
});

export const { useGetUsersQuery, useUpdateUserMutation } = apiSlice;
