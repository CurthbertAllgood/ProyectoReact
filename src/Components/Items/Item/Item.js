import React from 'react';


const Item=(props)=>{
    return(
        <div>
            <img src={props.img}></img>
            <h2>{props.name}</h2>
        </div>
    );
};


export default Item;
