import React from 'react';
import {Link} from 'react-router-dom';

const ItemCard=({nombre, id, codigo, img})=>{
  return(
      <div>
        <p>{nombre}</p>
        <p>{id}
        <p>{codigo}</p></p>
        {img}
        <Link to={`/detalles/${id}`}>
        <button>Detalles</button>
        </Link>
    </div>
    );
    
};

export default ItemCard;