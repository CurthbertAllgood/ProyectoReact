import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import {Link} from 'react-router-dom';

const Items = ({ data }) => {
	return (
		<Card sx={{ maxWidth: 345 }}>
			<CardActionArea>
			<Link to={`/detail/${data.id}`}>
				<CardMedia component='img' image={data.image} />
			</Link>
				<CardContent>
					<Typography gutterBottom variant='h5' component='div'>
						{data.title}
					</Typography>
					<Typography variant='body2' color='text.secondary'>
						{data.rate}
					</Typography>
				</CardContent>
			</CardActionArea>
		</Card>
)};

export default Items;