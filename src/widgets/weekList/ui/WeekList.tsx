import { useEffect, useState } from 'react'
import s from './weeklist.module.scss'

import { fetchApiData } from '@/features/fetchApiData'
import arrowRightImg from '@/shared/assets/images/arrow-right.svg'
import { TMovies } from '@/store/movies/movies.slice'
import { Link } from 'react-router'
export const WeekList = () => {
	const [movies, setMovies] = useState<TMovies>({ items: [] })

	useEffect(() => {
		fetchMovies()
	}, [])

	const fetchMovies = async () => {
		const data = await fetchApiData('v2.2/films')
		setMovies(data)
	}

	return (
		<section className={s.week_list}>
			<h2 className='section-title'>New this week</h2>
			<section className={s.week_list_wrapper}>
				{movies.items.slice(0, 10)?.map((movie) => (
					<article key={movie.kinopoiskId}>
						<Link to={`/movies/${movie.kinopoiskId}`}>
							<img
								src={movie.posterUrlPreview}
								alt={movie.nameRu}
								width={145}
								height={207}
							/>
						</Link>
					</article>
				))}
			</section>

			<button className={s.arrow_right_btn}>
				<img className={s.arrow_right} src={arrowRightImg} alt='arrow right' />
			</button>
		</section>
	)
}
