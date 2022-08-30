import React,{useState} from 'react';


const ItemCount=( {initial, stock, onAdd})=>{
    const [cont, setCount]=useState(initial);

    const Bajacont=()=>{
        setCount(cont-1);
    };

    const Subecont=()=>{
        setCount(cont+1);
    };


    return (
        <div className='contador'>
            <button disabled={cont>=stock} onClick={Subecont}>+</button>
            <span className='espacio'>{cont}</span>
            <button disabled={cont<1} onClick={Bajacont}>-</button>
                <div>
                <button disabled={stock<=0} onClick={()=>onAdd(cont)}>Agregar al pedido</button>
                </div>
        </div>

    );
}
export default ItemCount;