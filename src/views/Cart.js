import React,{useContext} from 'react';
import {CartContext} from '../Components/CartProvider/useContext'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Button } from '@mui/material';
import {Link} from 'react-router-dom'
const Cart=()=>{
    const {items, removeItem, clearItems, totalPrice, totalProducts}=useContext(CartContext);
    console.log(items)
    return(
        <div>
            <div>
            {
                items.map((item)=>(

            <div key={item.id}>

<Card sx={{ maxWidth: 345 }} >
    
			<CardActionArea>
            <Typography gutterBottom variant='h5' component='div'>
						{item.title}
					</Typography>
				<CardMedia component='img' image={item.image} />
				<CardContent>
                    <Typography variant='body2' color='text.secondary'>
						Precio: $   {item.price}
					</Typography>
					<Typography variant='body2' color='text.secondary'>
					Cantidad: {item.qty}
					</Typography>

				</CardContent >
                <button onClick={()=> removeItem(item.id)}>Borrar compra</button>
			</CardActionArea>
		</Card>

            </div>
                ))
            }
            <h3>Precio Total: {totalPrice()}</h3>
            <Button variant="contained" color="error" onClick={()=>clearItems()}>Vaciar carrito</Button>
            <Link to='/Shop'>
				<Button variant="contained" color="success">
					Finalizar Compra
					</Button>	
                </Link>
            </div>

        </div>
    )
};

export default Cart;