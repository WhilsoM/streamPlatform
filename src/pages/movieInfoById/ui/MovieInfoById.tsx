import { MovieItem } from '@/widgets/movieItem'
import { useParams } from 'react-router'
import s from './movieInfoById.module.scss'

export const MovieInfoById = () => {
	const { id } = useParams()
	const idNumber = Number(id)

	return (
		<section className={s.movie_info}>
			<h2 className={`section-title ${s.movie_title}`}>
				Подробная информация про фильм
			</h2>
			<MovieItem movieId={idNumber} />
		</section>
	)
}
