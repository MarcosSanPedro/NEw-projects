import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const MovieDetails = () => {
	const { type, id } = useParams()
	const [mediaDetails, setMediaDetails] = useState(null)

	useEffect(() => {
		const fetchMediaDetails = async () => {
			try {
				const response = await fetch(
					`https://api.themoviedb.org/3/${type}/${id}?api_key=962b101b6006d8adaf4068e595dc24e7`,
				)

				if (!response.ok) {
					throw new Error(`HTTP error! Status: ${response.status}`)
				}

				const data = await response.json()

				setMediaDetails({
					title: data.title,
					overview: data.overview,
					release_date: data.release_date,
					vote_average: data.vote_average,
					genres: data.genres,
					poster_path: data.poster_path,
				})
			} catch (error) {
				console.error('Error fetching media details:', error)
			}
		}

		fetchMediaDetails()
	}, [id])

	if (!mediaDetails) {
		return <div>Loading...</div>
	}

	const {
		title,
		name,
		overview,
		release_date,
		vote_average,
		genres,
		poster_path,
	} = mediaDetails

	return (
		<div className="flex flex-col lg:flex-row mt-10">
			<div className="m-auto lg:h-full ml-16">
				<img
					className="m-auto max-w-full lg:max-w-xl h-96 rounded"
					src={
						poster_path
							? `https://image.tmdb.org/t/p/w500${poster_path}`
							: 'https://images.placeholders.dev/?width=256&height=256&text=404'
					}
					alt={title || name}
				/>
			</div>
			<div className="flex flex-col gap-5 text-white mt-3 w-4/5 mr-4 ml-12">
				<h2 className="text-3xl">{title || name}</h2>
				<p>{overview}</p>
				<p>Release Date: {release_date}</p>
				<p>Rating: {vote_average}⭐</p>
				<p>Genres: {genres.map((genre) => genre.name).join(', ')}</p>
			</div>
		</div>
	)
}

export default MovieDetails
