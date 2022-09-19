import React, {createContext,useState}from 'react';

export const CartContext = createContext([])

export const CartProvider = ({children}) => {
    const [items, setItems]=useState([{
        id:1,
        titulo:"holaa",
        qty:5
    }])

    const isInCart=(id)=>{
        const found = items.find(item => item.id===id);
        return found;
    }

    const addItem = (item, qty) =>{
        console.log("Llegando");
            setItems([...items, {...item, qty: qty}]);
    }

    return (
        <CartContext.Provider value={{items, addItem}}>
            {children}
            </CartContext.Provider>
            )

}
