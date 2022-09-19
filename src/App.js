import React from 'react';
import './App.css';
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
