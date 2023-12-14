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
			<footer className="p-10 footer bg-base-200 text-base-content footer-center">
				<div>
					<p>
						Website made with{' '}
						<a href="https://windmillui.com">Windmill UI</a>
					</p>
				</div>
			</footer>
		</SearchResultsContext.Provider>
	)
}

export default App
