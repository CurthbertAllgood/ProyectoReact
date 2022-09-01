import React,{useState} from 'react';
import Producto from '../index';
import ItemCount from '../ItemCount/ItemCount';
export const ItemListContainer =()=>{
    const onAdd=(cont)=>{
        alert(`hiciste ${cont} pedidos`);
    }
    const [items, setItems]=useState([]);

    fetch('https://pokeapi.co/api/v2/pokemon/').then(response=> response.json()).then(data=>setItems(data.results));
    
    return(
        <div>
        <Producto Nombre='Holaa' Continuacion='este es un ItemList'/>
        <ItemCount initial={0} stock={10} onAdd={onAdd}/>
        </div>
    );
};

export default ItemListContainer;