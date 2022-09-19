import React,{useContext} from 'react';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import { CartContext } from '../CartProvider/useContext';

const CartWidget=()=>{
    const { items } = useContext(CartContext)
    let itemsInCart=0;
        
    items.map((item)=> {
        itemsInCart=itemsInCart+item.qty;
    })
    return(
        <div>
        <div>
            {itemsInCart}
        </div>
        <div>
        <RestaurantMenuIcon/>
        </div>
        </div>
    )
};

export default CartWidget;