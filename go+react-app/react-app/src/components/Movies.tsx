import { useEffect, useState, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { Movie } from '../models/movie'

const Movies = () => {
	const tmpData = [
		{id: 1, title: "The Shawshank Redemption", runtime: 142},
		{id: 2, title: "Harry Potter", runtime: 175},
		{id: 3, title: "The Dark Kngiht", runtime: 142},
	]
 
	const [movies, setMovies] = useState<Movie[]>([])
 
	useEffect(() => {
		(
			() => {
				setMovies(tmpData)
			}
		)()
	}, [])
	return (
		<Fragment>
			<h2>Choose a movie</h2>
			<ul>
				{movies.map((m) => {
					return (
						<li key={m.id}>
							<Link to={`/movies/${m.id}`}>{m.title}</Link>
						</li>
					)
				})}
			</ul>
		</Fragment>
	)
}
 
export default Movies