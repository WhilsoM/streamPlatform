import { configureStore } from '@reduxjs/toolkit'
import { movieApi } from './api/api.ts'

export const store = configureStore({
	reducer: {
		// movies: movieReducer,
		// premieres: premieresReducer,
		[movieApi.reducerPath]: movieApi.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(movieApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
