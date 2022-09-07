import React from 'react';
import ItemCard from '../ItemCard';

const ItemList = ({pedido}) => {
        return (
        <div>
            {pedido.map(pedidos => <ItemCard key={pedidos.id} {...pedidos} />)}
        </div> 
        )
    }
export default ItemList;
