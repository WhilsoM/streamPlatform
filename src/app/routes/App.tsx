import { Home } from '@/pages/home/ui/Home'
import { Route, Routes } from 'react-router'
import { Layout } from './Layout.tsx'

export const App = () => {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<Home />} />
			</Route>
		</Routes>
	)
}
