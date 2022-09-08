import React, { useEffect, useState } from 'react';
import ItemList from '../Items/Item/ItemList'
import { useParams } from 'react-router-dom'
import Loader from '../Loader/Loader'
import axios from 'axios'
export const ItemListContainer =()=>{
    
    
    const [loading, setLoading] = useState(false)
    const { char_id, status } = useParams()
	const [items, setItems] = useState([]);

	useEffect(() => {
		axios('https://breakingbadapi.com/api/characters').then((res) =>
			setItems(res.data)
		);
	}, []);

    const getStock=()=>{
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                resolve(items)
            }   )
        })
    }

    
    const  getPedidoPorCodigo=(getPedidoPorCodigo)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(items.filter(item=>item.codigo===getPedidoPorCodigo))
        })
    })
}


const  getPedidoPorId=(getPedidoPorId)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(items.filter(item=>item.char_id===getPedidoPorId))
        })
    })
}

    useEffect(()=>{
        setLoading(true)
        if(!char_id && !status){
            getStock().then(items=>setItems(items))
            setLoading(false)
        }
        else if(char_id){
            getPedidoPorId(char_id).then(items=>{
                setItems(items)
                setLoading(false)
            })
        }
        else{
            getPedidoPorCodigo(status).then(items=>{
                setItems(items)
                setLoading(false)
            })
        }
    },[char_id,status])
    return(
        <div key={items.char_id}>
        {loading ? <Loader /> : <ItemList items={items}/> }
    </div>
    );
};

export default ItemListContainer;