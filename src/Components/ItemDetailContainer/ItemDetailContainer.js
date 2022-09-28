import ItemDetail from '../ItemDetail/ItemDetail'
import React,{useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {getDocs, getFirestore,doc} from "firebase/firestore"

const ItemDetailContainer =()=>{

        const [producto, setProduct]=useState([]);

        const {id}=useParams();
        useEffect(()=>{
            const queryProducto=getFirestore();
            const queryDoc=doc(queryProducto, 'listaDeProductos', id);
            getDocs(queryDoc)
            .then(res=> setProduct({id:res,id, ...res.data()}))
        },[id])
        console.log(producto)
    return(
        <>
        {
            <div>
                <ItemDetail lista={producto}/>
            </div>
        }
        </>
    )
}



export default ItemDetailContainer; 