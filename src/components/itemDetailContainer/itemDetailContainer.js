import {useEffect,useState} from "react";
import ItemDetail from "../itemDetail/itemDetail"
import products from "../../utils/ProductsMock";
import { useParams } from "react-router-dom";
import './itemDetailContainer.css'
const ItemDetailContainer = ()=>{
    const [productData,setProductData] = useState({});
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
            <ItemDetail data = {productData}/>
        </div>
    )
}

export default ItemDetailContainer;