import { Navbar } from "./components/Navbar";
import { Outlet } from "react-router-dom";

function App() {
	{
		/* <Router>
   <Routes>
    <Route path='/' element={ <EventsPage/>} />
    <Route path='/SignupPage' element={<SignupPage/>} />
    <Route path='/MainPage' element={<Header/>}  />
    <Route path='/EventsPage' element={<LoginPage/> }  /> 
   </Routes>
   </Router>
) */
	}
	return (
		<div className="">
			<Navbar />
			<Outlet />
			<footer className="p-10 footer bg-base-200 text-base-content footer-center">
				<div>
					<p>
						Website made with{" "}
						<a href="https://windmillui.com">Windmill UI</a>
					</p>
				</div>
			</footer>
		</div>
	);
}

export default App;
