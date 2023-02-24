import {useEffect,useState} from "react";
import ItemDetail from "../itemDetail/itemDetail"
import products from "../../utils/ProductsMock";
import { useParams } from "react-router-dom";
import './itemDetailContainer.css'
const ItemDetailContainer = ()=>{
    const [ProductData,setProductData] = useState({})
    const {id} = useParams();
    useEffect( ()=>{
        filterById()
    },[id]);
    const filterById = ()=>{
        products.some( (product)=>{
            if (product.id == id){
                setProductData(product);
            }     
        })
    }
   
    return(
        <div>
            {}
            <ItemDetail data = {ProductData}/>
        </div>
    )
}

export default ItemDetailContainer;