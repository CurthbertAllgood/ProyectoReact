import React from 'react';
import './App.css';
import Home from './views/Home';
import Status from './views/Status';
import {CartProvider} from './Components/CartProvider/useContext'
import Router from './Components/BrowserRouter/Router'
function App() {
  return (
    <div className="App">
      <CartProvider>
        <Router/>
      </CartProvider>
    </div>
  );
}
export default App;
