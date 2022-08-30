import React from 'react';
export const Producto= (props)=>{
    return(
        <div>
        <p>{props.Nombre}</p>
        <p>{props.Continuacion}</p>
        </div>
    );
};
    
export default Producto;
