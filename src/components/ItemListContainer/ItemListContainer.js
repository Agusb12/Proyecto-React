import {useState,useEffect} from 'react'
import itemProduct from '../ItemProduct/ItemProduct';
import './itemListContainer.css'
import products from '../../utils/ProductsMock';

const ItemListContainer = ()=>{  
    const [listProducts,setListProducts] = useState([]);
    const productsPromise = new Promise( (resolve,reject)=>{
        setTimeout( ()=>{
            resolve(products);
            reject(new Error);
        },3000);
         
    })
    useEffect( ()=>{
        productsPromise
        .then( (resolve)=>{
            console.log("Productos:",resolve);
            setListProducts(resolve);
        })

        .catch((error)=>{
            console.log(error)
        })

        .finally( ()=>{
            console.log("La promesa se realizo con exito")
        })
    },[])
   
    return(
        <div className='List-product'>
           {listProducts.map( (product)=> <itemList data = {product}/> )}
        </div>
    )
}
export default ItemListContainer;