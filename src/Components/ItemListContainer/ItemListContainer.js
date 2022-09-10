import React, { useEffect, useState } from 'react';
import ItemList from '../Items/Item/ItemList'
import { useParams } from 'react-router-dom'


const BBDD=[
    {
        id: 1,
        codigo:"Comida",
        nombre: "Pizza",
        img: "/assets/img/pizza.png",
        descripcion:"pizza de muzarella",
        precio: 150,
        cantidad:1
    },
    {
        id: 2,
        codigo:"Comida",
        nombre: "sushi",
        img: "/assets/img/sushi.png",
        descripcion:"Sushi con salmon piola",
        precio: 200,
        cantidad:1
    },

    {
        id: 3,
        codigo:"Bebida",
        nombre: "Caipi",
        descripcion:"Cachasha con lima y hielo",
        img: "/assets/img/Caipi.png",
        precio: 50,
        cantidad:1
    },
    {
        id: 4,
        codigo:"Bebida",
        nombre: "Cuba Libre",
        img: "/assets/img/CubaLibre.png",
        descripcion:"Coca cola y Ron Capitan Morgan con una rodaja de lima y hielo",
        precio: 60,
        cantidad:1
    },

    {
        id: 5,
        codigo:"Postre",
        nombre: "Helado",
        img: "/assets/img/Helado.png",
        descripcion:"helado de chocolate y frutilla",
        precio: 30,
        cantidad:1
    },

    {
        id: 6,
        codigo:"Postre",
        nombre: "flan",
        img: "/assets/img/flan.png",
        descripcion:"flan bañado con dulce de leche",
        precio: 35,
        cantidad:1
    }
]


export const ItemListContainer =()=>{
    const [items, setItems] = useState([]);
    const { codigo } = useParams()

    
    useEffect(() => {
        const getItems= new Promise(resolve=>{
            setTimeout(()=>{
                resolve(BBDD);
            })
        });
        if(codigo){
            console.log('entraste al if')
            getItems.then(res=>setItems(res.filter(item=>item.codigo===codigo)));
        }else{
            console.log('entraste al else')
            getItems.then(res=>setItems(res));
        }
    }, []);
    

        return(
            <div>
                {<ItemList items={items}/> }
            </div>
        );
}

export default ItemListContainer;