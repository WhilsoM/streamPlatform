import { TMovie } from '@/types'
import { createSlice } from '@reduxjs/toolkit'

const movieSlice = createSlice({
	name: 'movies',
	initialState: {
		isLoading: false,
		error: null as string | null,
		movie: {} as TMovie,
	},
	reducers: {},
})

export const movieReducer = movieSlice.reducer
