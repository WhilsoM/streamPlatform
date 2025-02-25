import { useGetMovieByIdQuery } from '@/store/api/api'
import { memo, useEffect, useRef } from 'react'
import s from './movieItem.module.scss'

export const MovieItem = memo(({ movieId }: { movieId: number }) => {
	const { data, isLoading, error } = useGetMovieByIdQuery(movieId)
	const renderCount = useRef(0)

	useEffect(() => {
		renderCount.current += 1
		console.log('Component re-rendered:', renderCount.current)
	})
	if (data === undefined) return
	const { description, posterUrlPreview, ratingKinopoisk, title, year } = data

	return (
		<section className={`${s.movie_item}`}>
			<div className={s.movie_item_wrapper}>
				{isLoading && <p>Загрузка...</p>}
				{error && <p>Ошибка</p>}
				{data && (
					<>
						<div>
							<img src={posterUrlPreview} alt={title} width={500} />
						</div>
						<div className={s.movie_info}>
							<h3 className={s.title}>{title}</h3>
							<p className={s.year}>год создания: {year}</p>
							<p className={s.rating}>рейтинг кинопоиск: {ratingKinopoisk}</p>
							{description && (
								<>
									<p className={s.description}>Описание фильма: </p>
									<p className={s.description}>{description}</p>
								</>
							)}
						</div>
					</>
				)}
			</div>
		</section>
	)
})
