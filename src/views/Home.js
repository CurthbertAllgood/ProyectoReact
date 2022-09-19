import React from 'react';
import ItemListContainer from '../Components/ItemListContainer/ItemListContainer';
const Home=()=>{
    return(
    <div>
        <br /><br /><br />
        <ItemListContainer categoria="characters"/>
        <br /><br /><br />
        <ItemListContainer categoria="locations"/>
        <br /><br /><br />
        <ItemListContainer categoria="episodes"/>

    </div>
    );  
};

export default Home;