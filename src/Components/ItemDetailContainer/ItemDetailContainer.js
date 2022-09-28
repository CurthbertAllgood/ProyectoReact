import ItemDetail from '../ItemDetail/ItemDetail'
import React,{useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {db} from '../../firebase/firebaseConfig';
import {collection,where, query, getDocs, documentId } from "firebase/firestore"

const ItemDetailContainer =()=>{
    const [item, setItem]=useState({})

    const params=useParams()

    useEffect(()=>{
        setTimeout(()=>{
            const q = query(collection(db, "listaDeProductos"),where("id",'==',id));
            setItem(q);
            console.log(item) 
        },0)
    })
    return(
        <>
        {
            <div>
                <ItemDetail lista={item}/>
            </div>
        }
        </>
    )
}



export default ItemDetailContainer; 