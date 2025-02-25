import { configureStore } from '@reduxjs/toolkit'
import { movieByIdApi } from './api/api.ts'

export const store = configureStore({
	reducer: {
		// movies: movieReducer,
		// premieres: premieresReducer,
		[movieByIdApi.reducerPath]: movieByIdApi.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(movieByIdApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
