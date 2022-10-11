import React, { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList'
import {db} from '../../firebase/firebaseConfig';
import {collection, query, getDocs } from "firebase/firestore"
import Loader from '../Loader/Loader'
import './itemListContainer.css'

const ItemListContainer= () =>{
    const [listaProductos, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
	
const getProductos = async () => {
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
            setTimeout(()=>{
                setIsLoading(false);
            },1000);
    },[]);

    return(
        <>
			{isLoading ? (
				<div className='Spinner'>
					<Loader />
				</div>
			) : (
				<div>
						<ItemList lista={listaProductos} />
				</div>
			)}
		</>
    )
}


export default ItemListContainer;