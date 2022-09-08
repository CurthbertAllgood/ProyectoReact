import React from 'react';
import './App.css';
import Home from './views/Home';
import Status from './views/Status';
import NavBar from './Components/NavBar';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
function App() {
  return (
    <div className="App">
  | <BrowserRouter>
  <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/status/:status' element={<Status/>}/>
        <Route path='/detail/:id' element={<ItemDetailContainer/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
