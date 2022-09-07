import React, { useEffect, useState } from 'react';
import ItemList from '../Items/Item/ItemList'
import { getStock,getPedidoPorCodigo,getPedidoPorId} from '../../asyncmock'
import { useParams } from 'react-router-dom'
import Loader from '../Loader/Loader'

export const ItemListContainer =({greeting})=>{
    const [pedido, setPedidos] = useState([]);
    const [loading, setLoading] = useState(false)
    const { id, codigo } = useParams()

    useEffect(()=>{
        setLoading(true)

        if(!id && !codigo){
            getStock().then(pedido=>setPedidos(pedido))
            setLoading(false)
        }
        else if(id){
            getPedidoPorId(id).then(pedido=>{
                setPedidos(pedido)
                setLoading(false)
            })
        }
        else{
            getPedidoPorCodigo(codigo).then(pedido=>{
                setPedidos(pedido)
                setLoading(false)
            })
        }
    },[id,codigo])
    return(
        <div>
        {loading ? <Loader /> : <ItemList pedido={pedido}/> }
        
        </div>
    );
};

export default ItemListContainer;