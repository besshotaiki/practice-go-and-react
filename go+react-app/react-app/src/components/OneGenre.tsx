import { useState, useEffect, Fragment } from 'react'
import { Link, useParams ,useLocation} from 'react-router-dom'
import { Movie } from '../models/movie'
import axios from 'axios'
 
const OneGenre = (props: any) => {
	const [movies, setMovies] = useState<Movie[]>([])
	const [isLoaded, setIsLoaded] = useState(false)
	const [error, setError] = useState("")
	const { id } = useParams()
	const location = useLocation();
  const { genreName } = location.state as any;
	
	useEffect(() => {
		(
			async () => {
				await axios.get(`movies/${id}`)
					.then((response) => {
						setMovies(response.data.movies)
						setIsLoaded(true)
					})
					.catch((err) => {
						setError(err.message)
					})
			}
		)()
	}, [])
	if (!movies) {
		setMovies([])
	}

	if (error) {
		return (
			<div>Error: {error}</div>
		)
	} else if (!isLoaded) {
		return (
			<p>Loading...</p>
		)
	}
 
	if (movies == null) {
		return (
			<Fragment>
				<h2>Genre: {genreName}</h2>
				<div className="list-group">
				</div>
			</Fragment>
		)

	} else {
		return (
			<Fragment>
				<h2>Genre: {genreName}</h2>
				<div className="list-group">
					{movies.map((m, index) => {
						return (
							<Link to={`/movies/${m.id}`}
									key={index}
										className="list-group-item list-group-item-action">
								{m.title}
							</Link>
						)
					})}
				</div>
			</Fragment>
		)
	}
}
 
export default OneGenre