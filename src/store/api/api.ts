import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
export type TMovieItem = {
	title: string
	posterUrlPreview: string
	year: number
	ratingKinopoisk: number
	description: string
}

export const movieByIdApi = createApi({
	reducerPath: 'movieByIdApi',
	baseQuery: fetchBaseQuery({
		baseUrl: import.meta.env.VITE_API_URL,
		prepareHeaders: (headers) => {
			headers.set('X-API-KEY', import.meta.env.VITE_X_API_KEY)
			return headers
		},
	}),
	keepUnusedDataFor: 240,
	endpoints: (build) => ({
		getMovieById: build.query<TMovieItem, number>({
			query: (id) => `/api/v2.2/films/${id}`,
		}),
	}),
})

export const { useGetMovieByIdQuery } = movieByIdApi
