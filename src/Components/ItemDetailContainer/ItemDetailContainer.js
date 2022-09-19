import ItemDetail from './ItemDetail/ItemDetail';
import React,{useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'
export const ItemDetailContainer=()=>{


    const BBDD=[
        {
            id: 1,
            codigo:"Comida",
            nombre: "Pizza",
            img: "/assets/img/pizza.png",
            descripcion:"pizza de muzarella",
            precio: 150,
            cantidad:10
        },
        {
            id: 2,
            codigo:"Comida",
            nombre: "sushi",
            img: "/assets/img/sushi.png",
            descripcion:"Sushi con salmon piola",
            precio: 200,
            cantidad:10
        },
    
        {
            id: 3,
            codigo:"Bebida",
            nombre: "Caipi",
            descripcion:"Cachasha con lima y hielo",
            img: "/assets/img/Caipi.png",
            precio: 50,
            cantidad:10
        },
        {
            id: 4,
            codigo:"Bebida",
            nombre: "Cuba Libre",
            img: "/assets/img/CubaLibre.png",
            descripcion:"Coca cola y Ron Capitan Morgan con una rodaja de lima y hielo",
            precio: 60,
            cantidad:10
        },
    
        {
            id: 5,
            codigo:"Postre",
            nombre: "Helado",
            img: "/assets/img/Helado.png",
            descripcion:"helado de chocolate y frutilla",
            precio: 30,
            cantidad:10
        },
    
        {
            id: 6,
            codigo:"Postre",
            nombre: "flan",
            img: "/assets/img/flan.png",
            descripcion:"flan bañado con dulce de leche",
            precio: 35,
            cantidad:10
        }
    ]

    const [item, setItemid]=useState({});
    const { id } = useParams()  
    console.log(id);  
    useEffect(()=>{
        const getItem= new Promise(resolve=>{
            setTimeout(()=>{
                resolve(BBDD)
            })
        });
        getItem.then(res=>setItemid(res.find(detail=>detail.id===id)));
        console.log(getItem)
    },[]);


    return(
        <div>
            <ItemDetail item={ item }/>
        </div>

    );
}

export default ItemDetailContainer; 