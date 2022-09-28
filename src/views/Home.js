import React from 'react';
import ItemListContainer from '../Components/ItemListContainer/ItemListContainer';
const Home=()=>{
    return(
    <div>
        <br /><br /><br />
        <ItemListContainer categoria="character" categoriaNombre='Personaje'/>
        <br /><br /><br />
        
    </div>
    );  
};

export default Home;