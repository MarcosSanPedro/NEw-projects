import { Link } from 'react-router-dom'

/* eslint-disable react/prop-types */
const GridGenre = ({ title, items }) => {
	return (
		<div className="mb-8 w-screen ">
			<h2 className="text-2xl font-bold mb-4">{title}</h2>
			<div className="w-screen grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-4">
				{items.map((item) => (
					<div key={item.id} className=" w-64 m-auto">
						<Link
							to={`/details/${item.title ? 'movie' : 'tv'}/${
								item.id
							}`}
							key={`${item.title || item.name}-${
								item.id + Math.random()
							}`}
						>
							<img
								src={
									item.poster_path
										? `https://image.tmdb.org/t/p/w500${item.poster_path}`
										: 'https://images.placeholders.dev/?width=256&height=256&text=404'
								}
								alt={item.title}
								className="max-w-96 w-full max-h-64 h-full object-cover rounded-md"
							/>
							<div className="mt-2">
								<h3 className="text-lg font-semibold text-white">
									{item.title}
								</h3>
								<h3 className="text-lg font-semibold text-white">
									{item.name}
								</h3>
								<p className="text-gray-500">
									{item.release_date}
								</p>

								<p className="text-yellow-500">
									Valoración: {item.vote_average}
								</p>
							</div>
						</Link>
					</div>
				))}
			</div>
		</div>
	)
}

export default GridGenre
