import React, {useState,useEffect} from 'react';
import {useParams} from 'react-router-dom';
import Item from '../Item/Items';
import Loader from '../Loader/Loader';
import {db} from '../../firebase/firebaseConfig';
import {collection, query, getDocs, where} from 'firebase/firestore';

const GenreType =()=>{
    const [itemData, setItemData]=useState([]);
    const [isLoading, setIsLoading]=useState(true);
    const {category} = useParams();

    useEffect(()=>{
        const getItems = async()=>{
            const q= query(collection(db, "listaDeProductos"), where('category', '==', category));
            const docs=[];
            const querySnapShot= await getDocs(q);
            querySnapShot.forEach((doc)=> {
                docs.push({ ...doc.data(), id: doc.id});
                });
                setItemData(docs);
                console.log(docs);
        };
        getItems();
        setTimeout(()=>{
            setIsLoading(false);
        },300);
    },[category]);
    return(
        <div>
        {
            isLoading ? (
                <div>
                    <Loader/>
                </div>
            ) : (
                itemData.map((data)=>{
                    return <Item data={data}/>
                })
            )
        }
        </div>
    )
}

export default GenreType;