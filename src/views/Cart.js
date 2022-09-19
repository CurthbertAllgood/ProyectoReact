import React,{useContext} from 'react';
import {CartContext} from '../Components/CartProvider/useContext'


const Cart=()=>{
    const {items, removeItem, clearItems}=useContext(CartContext);
    console.log(items)
    return(
        <div>
            <div>
            {
                items.map((item)=>(
                    <div key={item.id}>
                    <div>{item.genero}</div>  
                    <h5>{item.nombre}</h5> 
                    <div>{item.qty}</div>
                    <button onClick={()=> removeItem(item.id)}>Borrar personaje</button>
                    </div>
                ))
            }
            <button onClick={()=>clearItems()}>Vaciar Personajes</button>
            </div>

        </div>
    )
};

export default Cart;