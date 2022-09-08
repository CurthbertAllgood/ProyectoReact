import {Link} from 'react-router-dom';
import React from 'react';

const ItemDetail = ({ char_id,name, img, occupation,status }) => {

return (
    
    <Link to={`/detail/${char_id}`}>
    <h1>{name}</h1>
    <h2>{occupation}</h2>
    <h2>{status}</h2>
    <img src={img} alt="" />
    </Link>
);
};

export default ItemDetail;