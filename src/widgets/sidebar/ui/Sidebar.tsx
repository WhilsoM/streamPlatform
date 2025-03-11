import { NavLink } from 'react-router'

import s from './sidebar.module.scss'

import homeImg from '@/shared/assets/images/home.svg'
import loupeImg from '@/shared/assets/images/loupe.svg'
import profileImg from '@/shared/assets/images/profile-icon.png'

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
							<img src={loupeImg} alt='loupe' className={s.nav_list__link} />
						</NavLink>
					</li>
					<li>
						<NavLink
							to={'/'}
							className={({ isActive }) => (isActive ? s.active : '')}
						>
							<img src={homeImg} alt='home' className={s.nav_list__link} />
						</NavLink>
					</li>

					<li>
						<NavLink
							to={'/profile'}
							className={({ isActive }) => (isActive ? s.active : '')}
						>
							<img
								src={profileImg}
								alt='profile'
								className={`${s.nav_list__link} ${s.profile_icon}`}
							/>
						</NavLink>
					</li>
				</ul>
			</nav>
		</aside>
	)
}
