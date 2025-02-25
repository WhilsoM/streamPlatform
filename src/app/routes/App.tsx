import { Home } from '@/pages/home/'
import { MovieInfoById } from '@/pages/movieInfoById/'
import { SearchMovies } from '@/pages/searchMovies/'
import { Route, Routes } from 'react-router'
import { Layout } from './Layout.tsx'
import { Premier } from '@/pages/premier/ui/Premier.tsx'
import { Tv } from '@/pages/tv/ui/Tv.tsx'
import { Trends } from '@/pages/trends/ui/Trends.tsx'
import { Plus } from '@/pages/plus/ui/Plus.tsx'
import { Share } from '@/pages/share/ui/Share.tsx'

export const App = () => {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<Home />} />
				<Route path='search-movies' element={<SearchMovies />} />
				<Route path='/movies/:id' element={<MovieInfoById />} />
				<Route path='/premier' element={<Premier />} />
				<Route path='/tv' element={<Tv />} />
				<Route path='/trends' element={<Trends />} />
				<Route path='/plus' element={<Plus />} />
				<Route path='/share' element={<Share />} />
			</Route>
		</Routes>
	)
}
