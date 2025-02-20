import { Sidebar } from '@/widgets/sidebar'
import { Outlet } from 'react-router'

export const Layout = () => {
	return (
		<>
			<Sidebar />

			<main>
				<Outlet />
			</main>
		</>
	)
}
