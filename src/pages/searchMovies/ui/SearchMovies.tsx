import { fetchApiData } from '@/features/fetchApiData'
import loupeImg from '@/shared/assets/images/loupe.svg'
import { TMovie } from '@/store/movies/movies.slice'
import { useState } from 'react'

type TMovieSearch = TMovie & {
	filmId: number
}

export const SearchMovies = () => {
	const [movieValue, setMovieValue] = useState('')
	const [result, setResult] = useState<TMovieSearch[]>([])

	const searchMovie = async (value: string) => {
		if (movieValue.length === 0) return

		const res = await fetchApiData(
			`v2.1/films/search-by-keyword?keyword=${value}`
		)
		setMovieValue('')

		setResult(res.films)
	}
	return (
		<>
			<div>
				<input
					type='text'
					placeholder='Найти фильм...'
					value={movieValue}
					onChange={(e) => setMovieValue(e.target.value)}
				/>
				<button onClick={() => searchMovie(movieValue)} title='поиск'>
					<img src={loupeImg} alt='loupe img' />
				</button>
			</div>

			<p>{result.length !== 0 && `Результат поиска: ${movieValue}`}</p>

			{result && (
				<section>
					{result.map((movie) => (
						<article key={movie.filmId}>
							<img src={movie.posterUrl} width={200} alt={movie.nameRu} />
						</article>
					))}
				</section>
			)}
		</>
	)
}
