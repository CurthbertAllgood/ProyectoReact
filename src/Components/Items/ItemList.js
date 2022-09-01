import React,{useState} from 'react';

import Item from './Item/Item';
const ItemList=()=>{
    const [items, setItems]=useState([]);

    fetch('https://pokeapi.co/api/v2/pokemon/').then(response=> response.json()).then(data=>setItems(data.results));



    return(
        <div className='espacio'>
            {items.map(item=>{
                return(<Item name={item.name} img={item.img}/>)
            })}
        </div>
    );
    
};

export default ItemList;