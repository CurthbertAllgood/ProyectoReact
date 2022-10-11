import React from 'react';
import {useParams} from 'react-router-dom';
import GenreType from '../Components/GenreType/GenreType';

const Status =() =>{
    const {categoria, categoriaNombre}= useParams();
    return (
        <div>
            <h1>control</h1>
            <GenreType/>
        </div>
    )
}

export default Status;