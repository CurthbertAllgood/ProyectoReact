import React, { useEffect, useState } from 'react';
import ItemList from '../Items/Item/ItemList'
import { useParams } from 'react-router-dom'
import axios from 'axios'
export const ItemListContainer =()=>{
    
    
    const { categoriaStatus } = useParams()
	const [items, setItems] = useState([]);

	useEffect(() => {
		axios('https://breakingbadapi.com/api/characters').then((res) =>
			setItems(res.data)
		);
	}, []);

    useEffect(()=>{
    const getItems=()=>{
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                resolve(items)
            });
        });
    }
        if(categoriaStatus){
            console.log("entraste al if")
            getItems().then(res=>setItems(res.filter(alives=>alives.status===categoriaStatus)));
        }
        else{
            console.log("entraste al else")
            getItems().then(items=>setItems(items))

        }
    },[categoriaStatus])
    return(
        <div>
        {<ItemList items={items}/> }
    </div>
    );
};

export default ItemListContainer;