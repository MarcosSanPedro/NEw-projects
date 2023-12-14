import { Navbar } from './components/Navbar'
import { Outlet } from 'react-router-dom'

function PrivateApp() {
	return (
		<div className="">
			<Navbar />
			<Outlet />
			<footer className="p-10 footer bg-base-200 text-base-content footer-center">
				<div>
					<p>
						Website made with{' '}
						<a href="https://windmillui.com">Windmill UI</a>
					</p>
				</div>
			</footer>
		</div>
	)
}

export default PrivateApp
