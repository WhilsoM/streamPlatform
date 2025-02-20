import { Home } from '@/pages/home/'
import { SearchMovies } from '@/pages/searchMovies/'
import { Route, Routes } from 'react-router'
import { Layout } from './Layout.tsx'

export const App = () => {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<Home />} />
				<Route path='search-movies' element={<SearchMovies />} />
			</Route>
		</Routes>
	)
}
