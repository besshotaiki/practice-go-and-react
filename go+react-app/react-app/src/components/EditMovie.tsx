import { Fragment, SyntheticEvent, useEffect, useState } from "react"
import { Movie } from '../models/movie'
import './EditMovie.css'
 
const EditMovie = (props: any) => {
	const [movie, setMovie] = useState<Movie>()
	const [isLoaded, setIsLoaded] = useState(false)
	const [error, setError] = useState("")
  const [id, setID] = useState(0)
	const [title, setTitle] = useState("")
	const [description, setDescription] = useState("")
	const [releaseDate, setReleaseDate] = useState("")
	const [runtime, setRuntime] = useState(0)
	const [rating, setRating] = useState(0)
	const [mpaaRating, setMpaaRating] = useState("")
	useEffect(() => {
		(
			async () => {
			}
		)()
	}, [])

  const submit = async (e: SyntheticEvent) => {
		e.preventDefault()
		const sampleData: Movie = {
			id: id,
			title: title,
			description: description,
			release_date: releaseDate,
			year: 0,
			runtime: runtime,
			rating: rating,
			mpaa_rating: mpaaRating,
			genres: []
		}
 
		console.log(sampleData)
 
		console.log("register")
	}
	return (
		<Fragment>
			<h2>Add/Edit Movie</h2>
			<hr />
      <form method="post" onSubmit={submit}>
				<input
					type="hidden"
					name="id"
					id="id"
					value={movie?.id}
          onChange={e => setID(+e.target.value)}
				/>
				<div className="mb-3">
					<label htmlFor="title" className="form-label">
						Title
					</label>
					<input
						type="text"
						className="form-control"
						id="title"
						name="title"
						value={movie?.title}
            onChange={e => setID(+e.target.value)}
					/>
				</div>
				<div className="mb-3">
					<label htmlFor="release_date" className="form-label">
						Release date
					</label>
					<input
						type="text"
						className="form-control"
						id="release_date"
						name="release_date"
						value={movie?.release_date}
            onChange={e => setID(+e.target.value)}
					/>
				</div>
				<div className="mb-3">
					<label htmlFor="runtime" className="form-label">
						Runtime
					</label>
					<input
						type="text"
						className="form-control"
						id="runtime"
						name="runtime"
						value={movie?.runtime}
            onChange={e => setID(+e.target.value)}
					/>
				</div>
				<div className="mb-3">
					<label htmlFor="mpaa_rating" className="form-label">
						MPAA Rating
					</label>
					<select name="mpaa_rating" className="form-select" value={movie?.mpaa_rating}>
						<option className="form-select">Choose...</option>
						<option className="form-select" value="G">G</option>
						<option className="form-select" value="PG">PG</option>
						<option className="form-select" value="PG14">PG14</option>
						<option className="form-select" value="R">R</option>
						<option className="form-select" value="NC17">NC17</option>
					</select>
				</div>
				<div className="mb-3">
					<label htmlFor="rating" className="form-label">
						Rating
					</label>
					<input
						type="text"
						className="form-control"
						id="rating"
						name="rating"
						value={movie?.rating}
            onChange={e => setID(+e.target.value)}
					/>
				</div>
				<div className="mb-3">
					<label htmlFor="description" className="form-label">
						Description
					</label>
					<textarea
						className="form-control"
						id="description"
						name="description"
						rows={3}
						value={movie?.description}
            onChange={e => setID(+e.target.value)}
					/>
				</div>
 
				<hr />
 
				<button className="btn btn-primary" type="submit">Save</button>
			</form>
		</Fragment>
	)
}
 
export default EditMovie