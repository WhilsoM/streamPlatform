import { fetchApiData } from '@/features/fetchApiData'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { TMovie } from '../movies/movies.slice'

type TPremiere = TMovie
type TPremieres = {
	items: TPremiere[]
}

export const fetchPremieres = createAsyncThunk(
	'premieres/fetchPremieres',
	async (_, { rejectWithValue }) => {
		try {
			const res = await fetchApiData(
				`v2.2/films/premieres?year=${new Date().getFullYear()}&month=${new Date()
					.toLocaleString('en-US', { month: 'long' })
					.toUpperCase()}`
			)

			return res
		} catch (error) {
			return rejectWithValue((error as Error).message || 'Неизвестная ошибка')
		}
	}
)

const premieresSlice = createSlice({
	name: 'premieres',
	initialState: {
		isLoading: false,
		error: null as string | null,
		premieres: {} as TPremieres,
	},
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchPremieres.pending, (state) => {
				state.isLoading = true
				state.error = null
			})
			.addCase(fetchPremieres.fulfilled, (state, action) => {
				state.isLoading = false

				state.premieres = action.payload ?? { items: [] }
			})
			.addCase(fetchPremieres.rejected, (state, action) => {
				state.isLoading = false
				state.error = (action.payload as string) || 'Ошибка загрузки данных'
				state.premieres = { items: [] }
			})
	},
})

export const premieresReducer = premieresSlice.reducer
