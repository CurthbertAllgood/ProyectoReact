import React, { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import Loader from '../Loader/Loader'

const ItemListContainer= ({categoria, categoriaNombre}) =>{
    const [items, setItems] = useState([])
    const [loader, setLoading] =useState(false)

    useEffect(()=>{
        setLoading(true)
        setTimeout(()=>{
            fetch(`https://rickandmortyapi.com/api/${categoria}`).then(response=>response.json()).then(respJSON=>{console.log(respJSON.results); setItems(respJSON.results); setLoading(false); }).catch(error=>console.log('Error', error))
        },2000)
    },[categoria])

    return(
        <div>
            <h1>{categoriaNombre}</h1>
                {
                    loader ?
                    <Loader/>
                    :
                    <ItemList items={items}/>
                }
        </div>
    )
}

export default ItemListContainer;