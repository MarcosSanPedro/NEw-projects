/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import tmdbService from './../utils/tmdbService'
import { SignOutUser } from '../lib/firebase'
import { AuthContext } from '../lib/context/auth-context.jsx'

export function Navbar({ setSearchResults, searchQuery, setSearchQuery }) {
	const { currentUser } = useContext(AuthContext)

	const handleSearchSubmit = async (e) => {
		e.preventDefault()
		try {
			const results = await tmdbService.searchMulti(searchQuery)
			setSearchResults(results)
		} catch (error) {
			console.error('Error searching', error)
		}
	}

	return (
		<>
			<div className="navbar bg-black mb-5 text-white justify-between">
				<div className="navbar-start w-fit">
					<div className="dropdown">
						<div
							tabIndex={0}
							role="button"
							className="btn btn-ghost lg:hidden"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M4 6h16M4 12h8m-8 6h16"
								/>
							</svg>
						</div>
						<ul
							tabIndex={0}
							className="menu menu-sm dropdown-content mt-3 z-[1] p-2 text-black shadow bg-base-100 rounded-box w-52"
						>
							<li>
								<Link to="/">Home</Link>
							</li>
							<li>
								<Link to="/Movies">Movies</Link>
							</li>
							<li>
								<Link to="/TVShows">TV Shows</Link>
							</li>
						</ul>
					</div>
					<Link to="/" className="btn btn-ghost text-xl">
						Samamovies
					</Link>
				</div>
				<div className="navbar-center ">
					<ul className="menu menu-horizontal px-1 hidden lg:flex">
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/Movies">Movies</Link>
						</li>
						<li>
							<Link to="/TVShows">TV Shows</Link>
						</li>
					</ul>
					<form
						className=" bg-black lg:hidden hidden md:flex w-full"
						onSubmit={handleSearchSubmit}
					>
						<div className="b bg-black w-full">
							<input
								type="text"
								id="searchQuery"
								value={searchQuery}
								onChange={(e) => setSearchQuery(e.target.value)}
								className="input input-bordered join-item w-24 block md:w-auto"
							/>
						</div>

						<div className="indicator">
							<button type="submit" className="btn join-item">
								Search
							</button>
						</div>
					</form>
				</div>
				<div className="flex-none gap-2 navbar-end w-fit">
					{currentUser ? (
						<div className="dropdown dropdown-end">
							<div
								tabIndex={0}
								role="button"
								className="btn btn-ghost btn-circle avatar"
							>
								<div className="w-10 rounded-full">
									<img
										alt="Tailwind CSS Navbar component"
										src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1eQLS9JeAz0NJW0Kcr4K0TDcMe3l_zvnzYjwuZTJOuw&s"
									/>
								</div>
							</div>
							<ul
								tabIndex={0}
								className="mt-3 z-[1] p-2 text-black shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
							>
								<li>
									<Link to="/UserProfile">
										{' '}
										<a className="justify-between">
											Profile
										</a>
									</Link>
								</li>
								<li>
									<button onClick={SignOutUser}>
										Logout
									</button>
								</li>
							</ul>
						</div>
					) : (
						<Link to="/auth" className="btn">
							Log in
						</Link>
					)}
				</div>
			</div>
			<form
				className="join flex md:hidden lg:flex mx-auto w-fit"
				onSubmit={handleSearchSubmit}
			>
				<div>
					<div>
						<input
							type="text"
							id="searchQuery"
							value={searchQuery}
							onChange={(e) => setSearchQuery(e.target.value)}
							className="input input-bordered join-item w-24 md:w-auto w-full"
						/>
					</div>
				</div>
				<div className="indicator">
					<button type="submit" className="btn join-item">
						Search
					</button>
				</div>
			</form>
		</>
	)
}
