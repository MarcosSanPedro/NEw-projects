import { Navbar } from './components/Navbar'
import { Outlet } from 'react-router-dom'
import { useState } from 'react'
import { SearchResultsContext } from './lib/context/search-context'
import GridGenre from './components/GridGenre'

function App() {
	const [searchResults, setSearchResults] = useState([])
	const [searchQuery, setSearchQuery] = useState('')

	return (
		<SearchResultsContext.Provider
			value={{ searchResults, setSearchResults, searchQuery }}
		>
			<Navbar
				setSearchResults={setSearchResults}
				searchQuery={searchQuery}
				setSearchQuery={setSearchQuery}
			/>
			{searchResults.length > 0 && (
				<GridGenre title={searchQuery} items={searchResults} />
			)}
			<Outlet searchResults={searchResults} />
			<footer className="p-10 footer text-white bg-teal-950 footer-center">
				<div>
					<h2 className=" text-2xl">Social Media&apos;s Coming Soon!!!!</h2>
				</div>
			</footer>
		</SearchResultsContext.Provider>
	)
}

export default App
