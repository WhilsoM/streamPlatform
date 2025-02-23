import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
type TMovie = {
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
			const response = await fetch(
				`${import.meta.env.VITE_API_URL}/api/v2.2/films`,
				{
					method: 'GET',
					headers: {
						'X-API-KEY': import.meta.env.VITE_X_API_KEY,
						'Content-Type': 'application/json',
					},
				}
			)

			return await response.json()
		} catch (error) {
			console.error('Ошибка загрузки:', error)
			const err = error as Error
			return rejectWithValue(err.message || 'Неизвестная ошибка')
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
