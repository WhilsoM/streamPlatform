import { fetchApiData } from '@/features/fetchApiData'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
export type TMovie = {
	kinopoiskId: number
	nameRu: string
	year: number
	ratingImdb: number
	posterUrl: string
	posterUrlPreview: string
}
type TMovies = {
	items: TMovie[]
}

export const fetchMovies = createAsyncThunk(
	'movies/fetchMovies',
	async (_, { rejectWithValue }) => {
		try {
			const res = await fetchApiData('v2.2/films')
			return res
		} catch (error) {
			return rejectWithValue((error as Error).message || 'Неизвестная ошибка')
		}
	}
)

const moviesSlice = createSlice({
	name: 'movies',
	initialState: {
		isLoading: false,
		error: null as string | null,
		movies: {} as TMovies,
	},
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchMovies.pending, (state) => {
				state.isLoading = true
				state.error = null
			})
			.addCase(fetchMovies.fulfilled, (state, action) => {
				state.isLoading = false

				state.movies = action.payload ?? { items: [] }
			})
			.addCase(fetchMovies.rejected, (state, action) => {
				state.isLoading = false
				state.error = (action.payload as string) || 'Ошибка загрузки данных'
				state.movies = { items: [] }
			})
	},
})

export const moviesReducer = moviesSlice.reducer
