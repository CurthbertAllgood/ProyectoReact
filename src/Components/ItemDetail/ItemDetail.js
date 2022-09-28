
import React, {useState, useContext} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Button } from '@mui/material';
import ItemCount from '../ItemCount/ItemCount'
import {Link} from 'react-router-dom'
import {CartContext}  from '../CartProvider/useContext';

const ItemDetail = ({lista}) => {
	const [add, setAdd] =useState(false);
	const { addItem }=useContext(CartContext);
	console.log(lista)
	

return (
<Card sx={{ maxWidth: 345 }} >
    
			<CardActionArea>
				<CardMedia component='img' image={lista.image} />
				<CardContent>
					<Typography gutterBottom variant='h5' component='div'>
						{lista.title}
					</Typography>
					<Typography variant='body2' color='text.secondary'>
						{lista.description}
					</Typography>
					<Typography variant='body2' color='text.secondary'>
					{lista.price}
					</Typography>
					<div>{
						add ?
							<div>¡Añadido!</div>
							:
						<ItemCount lista = {lista} stock = {10} initial = {1} addItem = { addItem }/>
							}
					</div>
				</CardContent >
				<Link to='/Cart'>
				<Button variant="contained" color="success">
					Finalizar Compra
					</Button>	
                </Link>
			</CardActionArea>
		</Card>
);
};

export default ItemDetail;