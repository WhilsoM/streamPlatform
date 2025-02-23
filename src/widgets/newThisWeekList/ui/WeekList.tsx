import { fetchMovies } from '@/store/movies/movies.slice'
import { AppDispatch, RootState } from '@/store/store'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import s from './weeklist.module.scss'

import arrowRightImg from '@/shared/assets/images/arrow-right.svg'
export const WeekList = () => {
	const { movies, isLoading, error } = useSelector(
		(state: RootState) => state.movies
	)
	const dispatch = useDispatch<AppDispatch>()
	const limitedMovies = movies?.items?.slice(0, 12)

	useEffect(() => {
		dispatch(fetchMovies())
	}, [dispatch])

	if (isLoading) {
		return <div>Загрузка...</div>
	}

	if (error) {
		return <div>ошибка: {error}</div>
	}

	return (
		<section className={s.week_list}>
			<h2 className='section-title'>New this week</h2>

			<section className={s.week_list_wrapper}>
				{limitedMovies?.map((movie) => (
					<article key={movie.kinopoiskId}>
						<img
							src={movie.posterUrlPreview}
							alt={movie.nameRu}
							width={145}
							height={207}
						/>
					</article>
				))}
			</section>

			<button className={s.arrow_right_btn}>
				<img className={s.arrow_right} src={arrowRightImg} alt='arrow right' />
			</button>
		</section>
	)
}
