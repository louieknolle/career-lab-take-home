import { Button } from '@mui/material';
import React from 'react';

const SelectedArtDetails = ({ artwork, handleGoBack }) => {
	console.log(artwork);
	return artwork ? (
		<div
			style={{
				height: '40%',
				width: '80%',
				margin: 'auto',
				yOverflow: 'hidden',
				flexDirection: 'column',
				display: 'flex',
				justifyContent: 'space-evenly',
				alignItems: 'center',
			}}
		>
			<h1>{artwork.title}</h1>
			<h2>{artwork.artist_title}</h2>
			<h3>{artwork.date_display}</h3>
			<img
				alt={artwork.thumbnail?.alt_text}
				src={`https://www.artic.edu/iiif/2/${artwork?.image_id}/full/843,/0/default.jpg`}
				style={{ width: 'auto', height: '70%' }}
			/>
			<Button
				color="primary"
				style={{ marginTop: '2%' }}
				variant="outlined"
				onClick={handleGoBack}
			>
				Back to list
			</Button>
		</div>
	) : null;
};

export default SelectedArtDetails;
