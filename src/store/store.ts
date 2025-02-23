import { configureStore } from '@reduxjs/toolkit'
import { moviesReducer } from './movies/movies.slice'
import { premieresReducer } from './premieres/premieres.slice'

export const store = configureStore({
	reducer: {
		movies: moviesReducer,
		premieres: premieresReducer,
	},
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
