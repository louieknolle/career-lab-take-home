import React from 'react';
import {
	Card,
	CardActions,
	CardContent,
	CardMedia,
	Button,
	Typography,
	Grid,
	Modal,
} from '@mui/material';
import { Box } from '@mui/system';
import SelectedArtDetails from './SelectedArtDetails';

const ArtResults = ({ artworks }) => {
	const [selectedArtwork, setSelectedArtwork] = React.useState(null);

	const handleLearnMore = (artwork) => {
		setSelectedArtwork(artwork);
	};

	const handleCloseModal = () => {
		setSelectedArtwork(null);
	};

	console.log(artworks[0].image_id);
	return (
		<>
			{!selectedArtwork ? (
				<Box
					sx={{ flexGrow: 1, margin: 'auto', marginTop: '5%', width: '90%' }}
				>
					<Grid container spacing={4}>
						{artworks.map((artwork) => {
							return (
								<Grid
									key={artwork.id}
									item
									md={6}
									sm={6}
									sx={{ margin: 'auto' }}
								>
									<Card sx={{ padding: '2rem', margin: '2rem' }}>
										<CardMedia
											alt={artwork.thumbnail.alt_text}
											component="img"
											src={`https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg`}
											title={artwork.title}
										/>
										<CardContent>
											<Typography component="div" gutterBottom variant="h5">
												{artwork.title}
											</Typography>
											<Typography color="text.secondary" variant="body1">
												{artwork.artist_title}
											</Typography>
											<Typography color="text.secondary" variant="body2">
												{artwork.date_display}
											</Typography>
										</CardContent>
										<CardActions>
											<Button
												size="large"
												onClick={() => handleLearnMore(artwork)}
											>
												Learn More
											</Button>
										</CardActions>
									</Card>
								</Grid>
							);
						})}
					</Grid>
				</Box>
			) : (
				<SelectedArtDetails
					artwork={selectedArtwork}
					handleGoBack={handleCloseModal}
				/>
			)}
		</>
	);
};

export default ArtResults;
