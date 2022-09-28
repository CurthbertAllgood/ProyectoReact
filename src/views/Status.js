import React from 'react';
import {useParams} from 'react-router-dom';
import ItemListContainer from '../Components/ItemListContainer/ItemListContainer';

const Status =() =>{
    const {categoria, categoriaNombre}= useParams();
    return (
        
        <div>
            <h1>control</h1>
            <ItemListContainer categoria={categoria} categoriaNombre={categoriaNombre}/>
        </div>
    )
}

export default Status;