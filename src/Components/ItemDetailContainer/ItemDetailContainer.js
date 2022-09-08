import ItemDetail from './ItemDetail/ItemDetail';
import React,{useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'
export const ItemDetailContainer=()=>{

	const [items, setItems] = useState([]);
    const {detailId}=useParams();
	useEffect(() => {
		axios('https://breakingbadapi.com/api/characters').then((res) =>
			setItems(res.data)
		);
	}, []);

    useEffect(()=>{
        const getItem= new Promise(resolve=>{
            setTimeout(()=>{
                resolve(items)
            })
        });
        getItem.then(res=>setItems(res.find(detalle=>detalle.char_id===detailId)));
    },[]);

    return(
        <div>
            <ItemDetail items={items}/>
        </div>

    );
}

export default ItemDetailContainer; 