import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const ItemCard = ({ data }) => {
	return (
		<Card sx={{ maxWidth: 345 }}>
			<CardActionArea>
				<CardMedia component='img' image={data.img} />
				<CardContent>
					<Typography gutterBottom variant='h5' component='div'>
						{data.nombre}
					</Typography>
					<Typography variant='body2' color='text.secondary'>
						{data.descripcion}
					</Typography>
					<Typography variant='body2' color='text.secondary'>
					${data.precio}
					</Typography>
				</CardContent>
			</CardActionArea>
		</Card>
)};

export default ItemCard;