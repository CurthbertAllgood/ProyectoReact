import React,{useState} from 'react';


const ItemCount= ({items, stock, initial, addItem}) =>{
    const [qty, setQty]=useState(initial);

    const SumaQty=()=>{
        if(qty<stock){
            setQty(qty+1);
        }
    };

    const RestaQty=()=>{
        if(qty>0){
            setQty(qty-1);
        }
    };


    return (
        <div className='contador'>
            <button disabled={qty<1} onClick={RestaQty}>-</button>
            <span className='espacio'>{qty}</span>
            <button disabled={qty>=stock} onClick={SumaQty}>+</button>
                <div>
                <button disabled={stock<=0} onClick={()=> addItem(items, qty)}>Agregar al pedido</button>
                </div>
        </div>

    );
}
export default ItemCount;