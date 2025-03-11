export type TMovie = {
	nameRu: string
	posterUrlPreview: string
	year: number
	ratingKinopoisk: number
	description: string
	slogan: string
	filmLength: string
	ratingAgeLimits: string
	kinopoiskId: number
}
export type TMovies = {
	items: TMovie[]
}
