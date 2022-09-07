import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail/ItemDetail';
import ItemList from '../Items/Item/ItemList';
import { getPedidoPorId } from '../../asyncmock';

export const ItemDetailContainer=()=>{

    const getPedidoPorId=(id)=>{
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                resolve(items.find(id=>items.id===id))
            },5000)
        })
    };

    const [item, setItem]=useState()
    const [loading, setLoading]=useState(false)
    const {itemId}=useParams();
    useEffect(()=>{
        setLoading(true)
        getItemById(itemId)
        .then(item=>{
            setItem(item)
            setLoading(false)
        })
    },[itemId])
    return(
        <div>
            <ItemDetail/>
        </div>

    );
}

export default ItemDetailContainer; 