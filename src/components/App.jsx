import React, { useState } from 'react';
import './App.css';

import { searchArtworks } from '../utils/api';
import { SearchForm } from './SearchForm';
import { Footer } from './Footer';
import ArtResults from './ArtResults';

export function App() {
	const [artworks, setArtworks] = useState(null);
	const [isArtworkSelected, setIsArtworkSelected] = useState(false);
	function onSearchSubmit(query) {
		searchArtworks(query).then((json) => {
			setArtworks(json.data);
		});
	}

	const artworkSelectedToFalse = () => {
		setIsArtworkSelected(false);
	};

	const artworkSelectedToTrue = () => {
		setIsArtworkSelected(true);
	};

	console.log(artworks);
	return (
		<div className="App">
			<h1>TCL Career Lab Art Finder</h1>

			{!isArtworkSelected ? (
				<SearchForm onSearchSubmit={onSearchSubmit} />
			) : null}
			{artworks ? (
				<ArtResults
					artworkSelectedToFalse={artworkSelectedToFalse}
					artworkSelectedToTrue={artworkSelectedToTrue}
					artworks={artworks}
				/>
			) : null}
			<Footer />
		</div>
	);
}
