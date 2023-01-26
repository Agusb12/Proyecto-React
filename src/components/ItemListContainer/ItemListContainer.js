import ItemProduct from '../ItemProduct/ItemProduct';
import './ItemListContainer.css'
import {useState,useEffect} from 'react'
import products from '../../utils/ProductsMock';

const ItemListContainer = ()=>{  
    const [listProducts,setListProducts] = useState([]);
    const productsPromise = new Promise( (resolve)=>{
        resolve(products)  
    })

    productsPromise
    .then( (resolve)=>{
        console.log("Productos:",resolve);
        setListProducts(resolve);
    })

    return(
        <div className='List-product'>
           {listProducts.map( (product)=> <ItemProduct data = {product}/> )}
        </div>
    )
}
export default ItemListContainer;