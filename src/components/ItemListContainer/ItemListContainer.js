import {useState,useEffect} from 'react'
import './ItemListContainer.css'
import ItemList from '../ItemList/itemList';
import { collection,getDocs } from 'firebase/firestore';
import db from '../../firebaseConfig';


const ItemListContainer = ()=>{  
    // console.log("informacion de contexto", useContext(CartContext))
    const [listProducts,setListProducts] = useState([]);
    
    const getProducts = async ()=>{
        const productCollection = collection(db,'Productos');
        const productSnapshot = await getDocs(productCollection);
        const productList = productSnapshot.docs.map( (doc)=>{
            let product = doc.data()
            product.id = doc.id
            return product
        })
        return productList
    }

    useEffect( ()=>{
        getProducts()
        .then((res) => {
            setListProducts(res)
        })
    },[])
    return( 
        <div className='List-product'>
           <ItemList dataProducts = {listProducts}/>
        </div>     
    )
}
export default ItemListContainer;