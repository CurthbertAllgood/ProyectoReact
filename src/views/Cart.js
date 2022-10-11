import React,{useContext, useState} from 'react';
import {CartContext} from '../Components/CartProvider/useContext'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase/firebaseConfig';
import TextField from '@mui/material/TextField';
import MensajeCompra from '../Components/MensajeCompra/MensajeCompra';
const styles = {
	containerShop: {
		textAlign: 'center',
		paddingTop: 20,
	},
};
const initialState = {
	name: '',
	lastName: '',
	city: '',
};
const Cart=()=>{
    const [values, setValues] = useState(initialState);
	const [purchaseID, setPurchaseID] = useState('');
	const handleOnChange = (e) => {
		const { value, name } = e.target;
		setValues({ ...values, [name]: value });
	};
    const {items, removeItem, clearItems, totalPrice}=useContext(CartContext);
    

	const onSubmit = async (e) => {
		e.preventDefault();
		console.log(values);
		// Add a new document with a generated id.
		const docRef = await addDoc(collection(db, 'Compras'), {
			values,items,
		});
		// console.log('Document written with ID: ', docRef.id);
		setPurchaseID(docRef.id);
		setValues(initialState);
	};
    
    return(
        <div style={styles.containerShop}>
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
        
            </div >
            <h1>Datos Personales</h1>
			<form className='FormContainer' onSubmit={onSubmit}>
				<TextField
					placeholder='Name'
					style={{ margin: 10, width: 400 }}
					name='name'
					value={values.name}
					onChange={handleOnChange}
				/>
				<TextField
					placeholder='Last Name'
					style={{ margin: 10, width: 400 }}
					name='lastName'
					value={values.lastName}
					onChange={handleOnChange}
				/>
				<TextField
					placeholder='City'
					style={{ margin: 10, width: 400 }}
					name='city'
					value={values.city}
					onChange={handleOnChange}
				/>
                <div>
                <button variant="contained" color="error" onClick={()=>clearItems()}>Vaciar carrito</button>
				<button variant="contained" color="success">Finalizar Compra</button>
                </div>
			</form>
			{purchaseID && <MensajeCompra purchaseID={purchaseID} />}
        </div>
    )
};

export default Cart;