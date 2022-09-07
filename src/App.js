
import './App.css';
import NavBar from './Components/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
function App() {
  return (
    <div className="App">
  | <BrowserRouter>
  <NavBar/>
      <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/codigo/:codigo' element={<ItemListContainer/>}/>
        <Route path='/detalle/:id' element={<ItemListContainer/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
