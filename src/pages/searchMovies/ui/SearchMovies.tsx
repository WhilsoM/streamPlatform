import loupeImg from '@/shared/assets/images/loupe.svg'

export const SearchMovies = () => {
	return (
		<>
			<div>
				<input type='text' placeholder='Найти фильм...' />
				<img src={loupeImg} alt='loupe img' />
			</div>

			<div>Результат поиска</div>
		</>
	)
}
