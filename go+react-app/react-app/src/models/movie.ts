import internal from "stream"

export interface Movie {
	id: number
	title: string
	description: string
	year: number
	release_date: string
	runtime: number
	rating: number
	mpaa_rating: string
	genres: Array<string>
}
export interface Genre {
	id: number
	genre_name: string
}