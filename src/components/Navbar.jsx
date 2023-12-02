import { useEffect, useState } from "react";
import { weatherData } from "../utils/meto-w-utils";

export function Navbar() {
	const [weather, setWeather] = useState(null);

	useEffect(() => {
		setWeather(weatherData);

		const interval = setInterval(() => {
			console.log(weatherData);
			setWeather(weatherData);
		}, 5000);

		return () => clearInterval(interval);
	}, []);

	return (
		<div className="navbar bg-slate-400">
			<div className="navbar-start">
				<div className="dropdown">
					<div
						tabIndex={0}
						role="button"
						className="btn btn-ghost lg:hidden">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor">
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h8m-8 6h16"
							/>
						</svg>
					</div>
					<ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
						<li>
							<a>Park Info</a>
						</li>
						<li>
							<a>Events</a>
						</li>
						<li>
							<a>Things to do</a>
							<ul className="p-2">
								<li>
									<a>Restaurants</a>
								</li>
								<li>
									<a>Shops</a>
								</li>
								<li>
									<a>Rides</a>
								</li>
							</ul>
						</li>
					</ul>
				</div>
				<a className="btn btn-ghost text-3xl">ScripPark</a>
			</div>
			<div className="navbar-center hidden lg:flex">
				<ul className="menu menu-horizontal px-1 text-2xl z-[1]">
					<li>
						<a>Park Info</a>
					</li>
					<li>
						<a>Events</a>
					</li>
					<li>
						<details>
							<summary>Things to do</summary>
							<ul className="p-2">
								<li>
									<a>Restaurants</a>
								</li>
								<li>
									<a>Shops</a>
								</li>
								<li>
									<a>Rides</a>
								</li>
							</ul>
						</details>
					</li>
				</ul>
			</div>
			<div className="navbar-end gap-4 mr-4">
				{weather && (
					<div className="flex flex-col items-center">
						<div className="flex flex-row items-center">
							<img
								src="https://openweathermap.org/img/wn/04d.png"
								alt="asd"
								className="w-7"
							/>
							<p className="text-2xl">
								{weather.hourly.precipitationProbability[0]}
							</p>
						</div>
						<p className="text-2xl">
							{Math.round(weather.hourly.temperature2m[0])}°F
						</p>
					</div>
				)}
				<img src="cart.svg" alt="alt" className="w-7" />
				<div className="drawer drawer-end w-fit z-10">
					<input
						id="my-drawer-4"
						type="checkbox"
						className="drawer-toggle"
					/>
					<div className="drawer-content">
						{/* Page content here */}
						<label htmlFor="my-drawer-4" className="drawer-button">
							<img
								src="logo-black.svg"
								alt="asd"
								className="w-7"
							/>
						</label>
					</div>
					<div className="drawer-side">
						<label
							htmlFor="my-drawer-4"
							aria-label="close sidebar"
							className="drawer-overlay"></label>
						<ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
							<li>
								<a>
									<img
										src="cart.svg"
										alt="asd"
										className="w-7"
									/>
								</a>
							</li>
							<li>
								<a>Sidebar Item 2</a>
							</li>
							<li>
								<a>Sidebar Item 2</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}
