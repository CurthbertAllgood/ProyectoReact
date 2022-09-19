import ItemDetail from '../ItemDetail/ItemDetail'
import React,{useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'

const ItemDetailContainer =()=>{
    const [item, setItem]=useState({})
    const [loader, setLoading]=useState(true)
    const params=useParams()

    useEffect(()=>{
        setTimeout(()=>{
            fetch(`https://rickandmortyapi.com/api/character/${params.id}`).then((response)=>response.json()).then(respJSON=>{console.log(respJSON); setItem(respJSON);setLoading(false)})
        },0)
    },[params.id])
    return(
        <>
        {
            loader ?
            <h5>Cargando detalles de la opcion elegida</h5>
            :
            <div>
                <ItemDetail item={item}/>
            </div>
        }
        </>
    )
}



export default ItemDetailContainer; 