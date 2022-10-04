import ItemDetail from '../ItemDetail/ItemDetail'
import React,{useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {getDocs,query, collection, where, documentId} from "firebase/firestore"
import {db} from '../../firebase/firebaseConfig'


const ItemDetailContainer =()=>{
    const [items, setItems]=useState([]);

    const {id} = useParams();

    useEffect(()=>{
        const getItems = async()=>{
            const q= query(collection(db,'listaDeProductos'),where(documentId(), '==', id));
            const docs=[];
            const querySnapShot= await getDocs(q);
            querySnapShot.forEach((doc)=>{
                docs.push({ ...doc.data(), id: doc.id });
            });

            setItems(docs);
            console.log(docs);
        };

        getItems();

    },[id])
    return(
        <div>
            {
                <ItemDetail items={items}/>
            }
    </div>
    )
}



export default ItemDetailContainer; 