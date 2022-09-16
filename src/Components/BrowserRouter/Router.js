import React from 'react'
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer'
import NavBar from '../NavBar'
import Home from '../../views/Home'
import Status from '../../views/Status'
import Cart from '../../views/Cart'
import {BrowserRouter, Route, Routes} from 'react-router-dom'


const Router=()=>{
    return(
<>
<BrowserRouter>
<NavBar/>
<Routes>
<Route path='/' element={<Home/>}/>
<Route path='/status/:codigo' element={<Status/>}/>
<Route path='/detail/:id' element={<ItemDetailContainer/>}/>
<Route path='/Cart'element={<Cart/>}/>
</Routes>
</BrowserRouter>
</>
)
}

export default Router;