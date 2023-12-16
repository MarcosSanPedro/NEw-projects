/* eslint-disable react/prop-types */
import { useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faChevronLeft,
	faChevronRight,
} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const CategoryList = ({ title, items }) => {
	const scrollRef = useRef(null)

	const handleScroll = (scrollOffset) => {
		if (scrollRef.current) {
			scrollRef.current.scrollLeft += scrollOffset
			const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current

			if (scrollLeft + clientWidth === scrollWidth) {
				scrollRef.current.scrollLeft = 0
			}

			if (scrollLeft === 0 && scrollOffset < 0) {
				scrollRef.current.scrollLeft = scrollWidth - clientWidth
			}
		}
	}

	return (
		<div className="mb-8 relative">
			<h2 className="text-2xl text-white font-bold mb-4">{title}</h2>
			<div className="flex items-center overflow-hidden">
				{/* Flecha izquierda */}
				<div
					className="absolute left-3 top-1/2 text-4xl transform -translate-y-1/2 cursor-pointer z-10 w-12 h-12 rounded-full bg-green-500"
					onClick={() => handleScroll(-200)}
				>
					<div className="ml-3 ">
						<FontAwesomeIcon icon={faChevronLeft} />
					</div>
				</div>

				<div
					ref={scrollRef}
					className="flex space-x-4 overflow-x-scroll overflow-hidden scrollbar-hide relative"
				>
					{items.map((item) => (
						<Link
							className="text-white"
							to={`/details/${item.title ? 'movie' : 'tv'}/${
								item.id
							}`}
							key={`${item.title || item.name}-${
								item.id + Math.random()
							}`}
						>
							<div className="flex-shrink-0 w-64 scr">
								<img
									src={
										item.poster_path
											? `https://image.tmdb.org/t/p/w500${item.poster_path}`
											: 'https://images.placeholders.dev/?width=256&height=256&text=404'
									}
									alt={item.title}
									className="w-full h-64 object-cover rounded-md"
								/>
								<div className="mt-2">
									<h3 className="text-lg font-semibold">
										{item.title || item.name}
									</h3>

									<p className="text-gray-500">
										{item.release_date}
									</p>

									<p className="text-yellow-500">
										Ratings: {item.vote_average}
									</p>
								</div>
							</div>
						</Link>
					))}
				</div>

				{/* Flecha derecha */}
				<div
					className="absolute text-4xl right-0 top-1/2 transform -translate-y-1/2 cursor-pointer z-10 w-12 h-12 rounded-full bg-green-500 mr-3"
					onClick={() => handleScroll(200)}
				>
					<div className="ml-3">
						<FontAwesomeIcon icon={faChevronRight} />
					</div>
				</div>
			</div>
		</div>
	)
}

export default CategoryList
