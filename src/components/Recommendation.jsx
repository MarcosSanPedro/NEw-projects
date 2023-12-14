import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import tmdbService from './../utils/tmdbService'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons'

const Recommendation = () => {
	const [media, setMedia] = useState(null)

	const loadRecommendation = async () => {
		try {
			const randomMedia = await tmdbService.getRandomMedia()
			setMedia(randomMedia)
		} catch (error) {
			console.error('Error fetching recommendation', error)
		}
	}

	useEffect(() => {
		loadRecommendation()
	}, [])

	const handleLikeClick = () => {
		loadRecommendation()
	}

	const handleDislikeClick = () => {
		loadRecommendation()
	}

	return (
		<div className="w w-4/5 mb-10 md:w-3/5 m-auto border border-black text-white bg-slate-600">
			{media ? (
				<div className="flex gap-10 relative">
					<div className="w-56">
						<img
							className="w-56 max-w-lg h-72"
							src={
								media.poster_path
									? `https://image.tmdb.org/t/p/w500${media.poster_path}`
									: 'https://images.placeholders.dev/?width=256&height=256&text=404'
							}
							alt={media.title || media.name}
						/>
					</div>
					<div className="flex flex-col gap-3">
						<div className="flex flex-col gap-3 mt-2 h-44">
							<h2 className="tex text-3xl">
								{media.title || media.name}
							</h2>
							<p className="line line-clamp-5">
								{media.overview}
							</p>
						</div>
						<div className="flex text-2xl gap-6">
							<button onClick={handleLikeClick}>
								<FontAwesomeIcon icon={faThumbsUp} />
							</button>
							<button onClick={handleDislikeClick}>
								<FontAwesomeIcon icon={faThumbsDown} />
							</button>
						</div>
						{/* Agrega un enlace a la página de detalles */}
						<Link
							to={`/details/${media.title ? 'movie' : 'tv'}/${
								media.id
							}`}
							key={`${media.title || media.name}-${
								media.id + Math.random()
							}`}
						>
							Details
						</Link>
					</div>
				</div>
			) : (
				<p>Cargando recomendación...</p>
			)}
		</div>
	)
}

export default Recommendation
