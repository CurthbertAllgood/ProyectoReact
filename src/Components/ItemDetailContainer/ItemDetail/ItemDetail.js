
import React, {useState, useContext, CartContext} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Button } from '@mui/material';
import ItemCount from '../../ItemCount/ItemCount';
import {Link} from 'react-router-dom'

const ItemDetail = ({ item }) => {
	const [add, setAdd] =useState(false);
	const { addItem } = useContext(CartContext);

return (
<Card sx={{ maxWidth: 345 }} >
    
			<CardActionArea>
				<CardMedia component='img' image={item.img} />
				<CardContent>
					<Typography gutterBottom variant='h5' component='div'>
						{item.nombre}
					</Typography>
					<Typography variant='body2' color='text.secondary'>
						{item.descripcion}
					</Typography>
					<Typography variant='body2' color='text.secondary'>
					${item.precio}
					</Typography>
					<div>{
						add ?
							<div>¡Añadido!</div>
							:
						<ItemCount item = {item} stock = {10} initial = {1} addItem = { addItem }/>
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