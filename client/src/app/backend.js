import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import webconfig from '../webconfig.json';

const Api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: webconfig.BackUrl,
    headers: { 'content-type': 'application/json' },
  }),
  endpoints: (builder) => ({
    getAutoRec: builder.mutation({
      query: (body) => ({
        url: '/predict_user',
        method: 'POST',
        body,
      }),
    }),

    getAutoRecSa: builder.mutation({
      query: (body) => ({
        url: '/predict_user_review',
        method: 'POST',
        body,
      }),
    }),

    getRatings: builder.mutation({
      query: (body) => ({
        url: '/criteria',
        method: 'POST',
        body,
      }),
    }),

    getLstmWord2vec: builder.mutation({
      query: (body) => ({
        url: '/predict',
        method: 'POST',
        body,
      }),
    }),

    getLstm: builder.mutation({
      query: (body) => ({
        url: 'predict_lstm',
        method: 'POST',
        body,
      }),
    }),

    /* ******************************* User ******************************* */
    /* Sign In */
    signIn: builder.mutation({
      query: (body) => ({
        url: '/signin',
        method: 'POST',
        body,
      }),
    }),
    /* Sign Up / Register */
    signUp: builder.mutation({
      query: ({ body }) => ({
        url: '/signup',
        method: 'POST',
        body,
      }),
    }),
    /* Log out */
    logOut: builder.mutation({
      query: () => ({
        url: '/logout',
        method: 'POST',
      }),
    }),
    /* Get User Data */
    getUserData: builder.mutation({
      query: () => ({ url: '/', method: 'GET' }),
    }),
    /* Edit User Data */
    editUser: builder.mutation({
      query: (body) => ({ url: '/user', method: 'PUT', body }),
    }),
  }),
});

export const {
  // User
  useSignInMutation,
  useSignUpMutation,
  useLogOutMutation,
  useGetUserDataMutation,
  useEditUserMutation,
  // ai
  useGetAutoRecMutation,
  useGetRatingsMutation,
  useGetAutoRecSaMutation,
  useGetLstmMutation,
  useGetLstmWord2vecMutation,
} = Api;
export default Api;
