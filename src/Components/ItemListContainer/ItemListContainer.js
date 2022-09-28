import React, { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList'
import Loader from '../Loader/Loader'
import {db} from '../../firebase/firebaseConfig';
import {collection, query, getDocs } from "firebase/firestore"

const ItemListContainer= ({categoriaNombre}) =>{
    const [listaProductos, setItems] = useState([]);
	const getProductos = async() => {
		const q = query(collection(db, "listaDeProductos"));
		const querySnapShot=await getDocs(q);
        const docs = [];
		querySnapShot.forEach((doc)=>{
            docs.push({...doc.data(), id: doc.id});
		});
        setItems(docs);
	};

    useEffect(()=>{
        getProductos();
    },[]);



    return(
        <div>
            <h1>{categoriaNombre}</h1>
                {
                    <ItemList lista={listaProductos}/>
                }
        </div>
    )
}

export default ItemListContainer;