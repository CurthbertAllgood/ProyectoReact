import React from 'react';

const ItemDetail = ({ nombre, descripcion,precio,img }) => {

return (
    
    <div>
        <h1>{nombre}</h1>
        <h2>{descripcion}</h2>
        <h2>{precio}</h2>
        <img src={img} alt="" />
    </div>
);
};

export default ItemDetail;