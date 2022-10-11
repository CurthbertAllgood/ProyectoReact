import React, {createContext,useState} from 'react';

export const CartContext = createContext([])

export const CartProvider = ({children}) => {
    const [items, setItems]=useState([])

    const isInCart=(id)=>{
        const found= items.find(item=> item.id===id);
        return found;
    }


    const addItem = (item, qty) =>{
        isInCart(item.id)
        ?
        setItems(items.map((prod)=>{
            if(prod.id==item.id){
                prod.qty+=item.qty;
            }
            return prod;
        }))
        :
        setItems([...items, {...item, qty:qty}]);
        }

    const removeItem=(id)=>{
        setItems(items.filter(item=>item.id!==id))
    }
    const clearItems=()=>{
        setItems([])
    }

    const totalPrice=()=>{
        return items.reduce((prev,act)=>prev + act.price * act.qty,0);
    }
    const totalProducts =()=> {
        items.reduce((acumulador,productoActual)=>acumulador + productoActual.qty, 0)
    }
    return (

        <CartContext.Provider value={{items, addItem, removeItem,clearItems, totalPrice, totalProducts}}>
            {children}
            </CartContext.Provider>
            )

}
