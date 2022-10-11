import React,{useContext} from 'react';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import { CartContext } from '../CartProvider/useContext';
import {Link} from 'react-router-dom';

const CartWidget=()=>{
    const { items } = useContext(CartContext)
    let itemsInCart=0;
        
    items.map((item)=> {
        return (itemsInCart=itemsInCart+item.qty)
    })
    return(
        <div>
        <div>
            {itemsInCart}
        </div>
        <div>
            <Link to={`/Shop/`}>
        <RestaurantMenuIcon/>
        </Link>
        </div>
        </div>
    )
};

export default CartWidget;