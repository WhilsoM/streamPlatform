import { fetchPremieres } from '@/store/premieres/premieres.slice'
import { AppDispatch, RootState } from '@/store/store'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import s from './trendList.module.scss'

export const TrendList = () => {
	const dispatch = useDispatch<AppDispatch>()
	const { premieres, isLoading, error } = useSelector(
		(state: RootState) => state.premiers
	)
	const limitedPremieres = premieres?.items?.slice(0, 12)

	useEffect(() => {
		dispatch(fetchPremieres())
	}, [])

	return (
		<section className={s.premieres}>
			<h2 className='section-title'>Trending Now</h2>
			<section className={s.premieres_wrapper}>
				{isLoading && <div>Загрузка...</div>}
				{error && <div>{error}</div>}
				{limitedPremieres && (
					<>
						{limitedPremieres?.map((premiere) => (
							<article key={premiere.kinopoiskId}>
								<img src={premiere.posterUrlPreview} alt={premiere.nameRu} />
							</article>
						))}
					</>
				)}
			</section>
		</section>
	)
}
