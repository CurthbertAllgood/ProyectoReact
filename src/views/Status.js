import React from 'react';
import {useParams} from 'react-router-dom';
import ItemListContainer from '../Components/ItemListContainer/ItemListContainer';

const Status =() =>{
    const {categoria, categoriaNombre}= useParams();
    return (
        <div>
            <ItemListContainer categoria={categoria} categoriaNombre={categoriaNombre}/>
        </div>
    )
}

export default Status;