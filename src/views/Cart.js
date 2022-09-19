import React,{useContext} from 'react';
import {CartContext} from '../Components/CartProvider/useContext'


const Cart=()=>{
    const {items, addItem}=useContext(CartContext);
    console.log(items)
    return(
        <div>
            {
                items.map((item)=>(
                    <div key={item.id}>
                    <h1>{item.nombre}</h1> 
                    </div>
                ))
            }
        </div>
    )
};

export default Cart;