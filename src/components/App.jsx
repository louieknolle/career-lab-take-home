import React, { useState } from 'react';
import './App.css';

import { searchArtworks } from '../utils/api';
import { SearchForm } from './SearchForm';
import { Footer } from './Footer';
import ArtResults from './ArtResults';

export function App() {
	const [artworks, setArtworks] = useState(null);
	function onSearchSubmit(query) {
		searchArtworks(query).then((json) => {
			setArtworks(json.data);
		});
	}

	console.log(artworks);
	return (
		<div className="App">
			<h1>TCL Career Lab Art Finder</h1>
			<SearchForm onSearchSubmit={onSearchSubmit} />
			{artworks ? <ArtResults artworks={artworks} /> : null}
			<Footer />
		</div>
	);
}
