import { useEffect } from 'react'
import { useLocation } from 'react-router'
import s from './profile.module.scss'

export const Profile = () => {
	const { pathname } = useLocation()

	useEffect(() => {
		const mainElement = document.querySelector('main')!
		if (pathname === '/profile') {
			mainElement.style.display = 'flex'
			mainElement.style.alignItems = 'center'
			mainElement.style.justifyContent = 'center'
		}

		return () => {
			mainElement.style.display = ''
		}
	}, [pathname])
	return (
		<div className={s.profile_wrapper}>
			<h1>Профиль</h1>
			<p>Имя: moonwqwizliokyn</p>
			<p>Почта: asdf@gmail.com</p>
		</div>
	)
}
