import { useEffect, useState } from 'react'
import tmdbService from '../utils/tmdbService'
/* eslint-disable react/prop-types */
const TVShowDetails = ({ match }) => {
	const [tvShowDetails, setTVShowDetails] = useState(null)

	useEffect(() => {
		const fetchTVShowDetails = async () => {
			try {
				const tvShowId = match.params.id
				const details = await tmdbService.getTVShowDetails(tvShowId)
				setTVShowDetails(details)
			} catch (error) {
				console.error('Error fetching TV show details', error)
			}
		}

		fetchTVShowDetails()
	}, [match.params.id])

	return (
		<div>
			{tvShowDetails ? (
				<div>
					<img
						src={
							TVShowDetails.poster_path
								? `https://image.tmdb.org/t/p/w500${TVShowDetails.poster_path}`
								: 'https://images.placeholders.dev/?width=256&height=256&text=404'
						}
						alt={tvShowDetails.name}
					/>
					<h2>{tvShowDetails.name}</h2>
					<p>{tvShowDetails.overview}</p>
					<p>Ratings: {tvShowDetails.vote_average}</p>
					<p>Fecha de lanzamiento: {tvShowDetails.first_air_date}</p>
					<p>
						Géneros:{' '}
						{tvShowDetails.genres
							.map((genre) => genre.name)
							.join(', ')}
					</p>
					{/* Agrega más detalles según tus necesidades */}
				</div>
			) : (
				<p>Cargando detalles del programa de televisión...</p>
			)}
		</div>
	)
}

export default TVShowDetails
;``
