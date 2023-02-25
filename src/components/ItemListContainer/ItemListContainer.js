import {useState,useEffect} from 'react'
import './ItemListContainer.css'
import products from '../../utils/ProductsMock';
import ItemList from '../ItemList/itemList';



const ItemListContainer = ()=>{  
    // console.log("informacion de contexto", useContext(CartContext))
    const [listProducts,setListProducts] = useState([]);
    const [loader,setLoader] = useState(false)
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
            console.log(listProducts);
        })
    },[])
    return(
        <> 
        <div className='List-product'>
           <ItemList dataProducts = {listProducts}/>
        </div>
           {/* <button onClick={()=>setLoader(true)}>click me</button>
           {loader? <Loading/> : "there is nothing loading..."} */}
           </> 
    )
}
export default ItemListContainer;