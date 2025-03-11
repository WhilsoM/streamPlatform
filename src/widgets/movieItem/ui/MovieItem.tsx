import { useGetMovieByIdQuery } from '@/store/api/api'
import { memo } from 'react'
import s from './movieItem.module.scss'

export const MovieItem = memo(({ movieId }: { movieId: number }) => {
	const { data, isLoading, error } = useGetMovieByIdQuery(movieId)

	if (data === undefined) return
	const {
		description,
		posterUrlPreview,
		ratingKinopoisk,
		nameRu,
		year,
		slogan,
		filmLength,
		ratingAgeLimits,
	} = data

	return (
		<section className={`${s.movie_item}`}>
			<div className={s.movie_item_wrapper}>
				{isLoading && <p>Загрузка...</p>}
				{error && <p>Ошибка</p>}
				{data && (
					<>
						<div>
							<img src={posterUrlPreview} alt={nameRu} width={500} />
						</div>
						<div className={s.movie_info}>
							<h3 className={`${s.title}`}>{nameRu}</h3>
							<p className={`${s.movie_info_text} ${s.year}`}>
								год создания: {year ? year : '-'}
							</p>
							<p className={`${s.movie_info_text} ${s.rating}`}>
								рейтинг кинопоиск: {ratingKinopoisk ? ratingKinopoisk : '-'}
							</p>

							<p className={`${s.movie_info_text} ${s.description}`}>
								Описание: {description ? description : '-'}
							</p>

							<p className={`${s.movie_info_text} ${s.slogan}`}>
								Слоган: &quot;{slogan ? slogan : '-'}&quot;
							</p>
							<p className={`${s.movie_info_text} ${s.duration}`}>
								Продолжительность: {filmLength ? filmLength : '-'}
							</p>
							<p className={`${s.movie_info_text} ${s.ratingAgeLimits}`}>
								Возрастное ограничение:
								{ratingAgeLimits ? `${ratingAgeLimits.slice(3)}+` : ' нету'}
							</p>
						</div>
					</>
				)}
			</div>
		</section>
	)
})
