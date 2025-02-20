import { NavLink } from 'react-router'

import s from './sidebar.module.scss'

import homeImg from '@/shared/assets/images/home.svg'
import loupeImg from '@/shared/assets/images/loupe.svg'
import plusImg from '@/shared/assets/images/plus.svg'
import premierImg from '@/shared/assets/images/premier.svg'
import shareImg from '@/shared/assets/images/share.svg'
import trendsImg from '@/shared/assets/images/trends.svg'
import tvImg from '@/shared/assets/images/tv.svg'

export const Sidebar = () => {
	return (
		<aside className={s.sidebar}>
			<nav>
				<ul className={s.nav_list}>
					<li className='nav_list__li'>
						<NavLink
							to={'/search-movies'}
							className={({ isActive }) => (isActive ? s.active : '')}
						>
							<img src={loupeImg} alt='loupe' />
						</NavLink>
					</li>
					<li>
						<NavLink
							to={'/'}
							className={({ isActive }) => (isActive ? s.active : '')}
						>
							<img src={homeImg} alt='home' />
						</NavLink>
					</li>
					<li>
						<NavLink
							to={'/premier'}
							className={({ isActive }) => (isActive ? s.active : '')}
						>
							<img src={premierImg} alt='premier' />
						</NavLink>
					</li>
					<li>
						<NavLink
							to={'/tv'}
							className={({ isActive }) => (isActive ? s.active : '')}
						>
							<img src={tvImg} alt='tv' />
						</NavLink>
					</li>
					<li>
						<NavLink
							to={'/trends'}
							className={({ isActive }) => (isActive ? s.active : '')}
						>
							<img src={trendsImg} alt='trends' />
						</NavLink>
					</li>
					<li>
						<NavLink
							to={'/plus'}
							className={({ isActive }) => (isActive ? s.active : '')}
						>
							<img src={plusImg} alt='plus' />
						</NavLink>
					</li>
					<li>
						<NavLink
							to={'/share'}
							className={({ isActive }) => (isActive ? s.active : '')}
						>
							<img src={shareImg} alt='share' />
						</NavLink>
					</li>
				</ul>
			</nav>
		</aside>
	)
}
