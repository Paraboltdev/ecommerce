import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const key = "bc8c931920a745b5964a7a79f56a33d7 ";

export const gameApi = createApi({
    reducerPath:'gameApi',
    baseQuery: fetchBaseQuery({baseUrl:`https://api.rawg.io/api/games`}),
    endpoints: (builder) => ({
        getGameByName: builder.query({
          query: (name) => `?search=${name}&key=${key}`,
        }),
      }),

})

export const {useGetGameByNameQuery}= gameApi