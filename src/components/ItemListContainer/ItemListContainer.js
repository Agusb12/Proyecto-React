import {useState,useEffect} from 'react'
import './itemListContainer.css'
import products from '../../utils/ProductsMock';
import ItemList from '../ItemList/itemList';
import ItemDetailContainer from '../itemDetailContainer/itemDetailContainer';

const ItemListContainer = ()=>{  
    const [listProducts,setListProducts] = useState([]);
    const productsPromise = new Promise( (resolve,reject)=>{
        setTimeout( ()=>{
            resolve(products);
            reject(new Error);
        },250);      
    })
    useEffect( ()=>{
        productsPromise
        .then( (resolve)=>{
            setListProducts(resolve);
        })

        .catch((error)=>{
            console.log(error)
        })

        .finally( ()=>{
           
        })
    },[])
    return(
        <div className='List-product'>
           <ItemList dataProducts = {listProducts}/>
        </div>
    )
}
export default ItemListContainer;