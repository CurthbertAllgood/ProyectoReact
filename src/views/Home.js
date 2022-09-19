import React from 'react';
import ItemListContainer from '../Components/ItemListContainer/ItemListContainer';
const Home=()=>{
    return(
    <div>
        <br /><br /><br />
        <ItemListContainer categoria="character" categoriaNombre='Personajes'/>
        <br /><br /><br />
        <ItemListContainer categoria="location" categoriaNombre='Localizaciones'/>
        <br /><br /><br />
        <ItemListContainer categoria="episode" categoriaNombre='Episodios'/>

    </div>
    );  
};

export default Home;