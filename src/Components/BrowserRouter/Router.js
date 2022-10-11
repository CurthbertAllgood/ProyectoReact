import React from 'react'
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer'
import NavBar from '../NavBar'
import Home from '../../views/Home'
import Category from '../../views/Category'
import Cart from '../../views/Cart'
import Shop from '../../views/Shop/Shop'
import {BrowserRouter, Route, Routes} from 'react-router-dom'


const Router=()=>{
    return(
<>
<BrowserRouter>
<NavBar/>
<Routes>
<Route path='/' element={<Home/>}/>
<Route path='/category/:category' element={<Category/>}/>
<Route path='/detail/:id' element={<ItemDetailContainer/>}/>
<Route path='/Shop/' element={<Shop/>}/>
<Route path='/Cart'element={<Cart/>}/>
</Routes>
</BrowserRouter>
</>
)
}

export default Router;