import { TMovie, TMovies } from '@/types'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const movieApi = createApi({
	reducerPath: 'movieApi',
	baseQuery: fetchBaseQuery({
		baseUrl: import.meta.env.VITE_API_URL,
		prepareHeaders: (headers) => {
			headers.set('X-API-KEY', import.meta.env.VITE_X_API_KEY)
			return headers
		},
	}),
	keepUnusedDataFor: 240,
	endpoints: (build) => ({
		getMovieById: build.query<TMovie, number>({
			query: (id) => `/api/v2.2/films/${id}`,
		}),
		getMovies: build.query<TMovies, void>({
			query: () => `/api/v2.2/films`,
		}),
	}),
})

export const { useGetMovieByIdQuery, useGetMoviesQuery } = movieApi
