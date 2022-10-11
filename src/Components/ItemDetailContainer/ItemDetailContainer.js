import ItemDetail from '../ItemDetail/ItemDetail'
import React,{useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {getDocs,query, collection, where, documentId} from "firebase/firestore"
import {db} from '../../firebase/firebaseConfig'
import Loader from '../Loader/Loader'
import '../ItemList/ItemList.css'
const ItemDetailContainer =()=>{
    const [items, setItems]=useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const {id} = useParams();
    useEffect(()=>{
        const getItems = async()=>{
            const q= query(collection(db,'listaDeProductos'),where(documentId(), '==', id));
            const docs=[];
            const querySnapShot= await getDocs(q);
            querySnapShot.forEach((doc)=>{
                docs.push({ ...doc.data(), id: doc.id });
            });
            setItems(docs);
            console.log(docs);
        };

        getItems();
        setTimeout(()=>{
            setIsLoading(false);
        },1000);

    },[id]);

    return(
        <div>
            {
                isLoading ? (
				<div className='Spinner'>
					<Loader />
				</div>
			) : (
				items.map((data)=>{
                return <ItemDetail items={ data }/>
            })
			)
            }
    </div>
    )
}



export default ItemDetailContainer; 