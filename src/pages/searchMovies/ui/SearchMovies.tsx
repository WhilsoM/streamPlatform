import { fetchApiData } from '@/features/fetchApiData'
import loupeImg from '@/shared/assets/images/loupe.svg'
import { TMovie } from '@/types'
import { useState } from 'react'
import s from './searchMovies.module.scss'

type TMovieSearch = TMovie & {
	filmId: number
	posterUrl: string
}
export const SearchMovies = () => {
	const [movieValue, setMovieValue] = useState('')
	const [result, setResult] = useState<TMovieSearch[]>([])

	const searchMovie = async (value: string) => {
		if (movieValue.length === 0) return

		const res = await fetchApiData(
			`v2.1/films/search-by-keyword?keyword=${value}`
		)

		setResult(res.films)
	}
	return (
		<>
			<div className={s.search_movie_input_wrapper}>
				<input
					type='text'
					placeholder='Найти фильм...'
					value={movieValue}
					onChange={(e) => setMovieValue(e.target.value)}
					className={s.search_movie_input}
				/>
				<button
					className={s.button_search_movie}
					onClick={() => searchMovie(movieValue)}
					title='поиск'
				>
					<img src={loupeImg} alt='loupe img' className={s.loupe_img} />
				</button>
			</div>

			<p className={s.search_movie_result}>
				{result.length !== 0 && `Результат поиска: ${movieValue}`}
			</p>

			<section className={s.search_movies_wrapper}>
				{result && (
					<>
						{result.map((movie) => (
							<article key={movie.filmId}>
								<img src={movie.posterUrl} width={200} alt={movie.nameRu} />
							</article>
						))}
					</>
				)}
			</section>
		</>
	)
}
