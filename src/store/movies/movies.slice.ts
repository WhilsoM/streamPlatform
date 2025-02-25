import { fetchApiData } from '@/features/fetchApiData'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
export type TMovie = {
	kinopoiskId: number
	nameRu: string
	year: number
	ratingKinopoisk: number
	posterUrl: string
	posterUrlPreview: string
	description: string
}
export type TMovies = {
	items: TMovie[]
}

export const fetchMovieById = createAsyncThunk(
	'movies/fetchMovieById',
	async (id: string, { rejectWithValue }) => {
		try {
			const res = await fetchApiData(`v2.2/films/${id}`)
			return res
		} catch (error) {
			return rejectWithValue((error as Error).message || 'Неизвестная ошибка')
		}
	}
)

const movieSlice = createSlice({
	name: 'movies',
	initialState: {
		isLoading: false,
		error: null as string | null,
		movie: {} as TMovie,
	},
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchMovieById.pending, (state) => {
				state.isLoading = true
				state.error = null
			})
			.addCase(fetchMovieById.fulfilled, (state, action) => {
				state.isLoading = false

				state.movie = action.payload ?? {}
			})
			.addCase(fetchMovieById.rejected, (state, action) => {
				state.isLoading = false
				state.error = (action.payload as string) || 'Ошибка загрузки данных'
				state.movie = {} as TMovie
			})
	},
})

export const movieReducer = movieSlice.reducer
