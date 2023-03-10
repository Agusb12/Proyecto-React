import {useEffect,useState} from "react";
import ItemDetail from "../itemDetail/itemDetail"
import products from "../../utils/ProductsMock";
import { useParams } from "react-router-dom";
import './itemDetailContainer.css'
//FIREBASE
import db from '../../firebaseConfig';
import {doc,getDoc} from "firebase/firestore"
const ItemDetailContainer = ()=>{
    const [ProductData,setProductData] = useState({})
    const {id} = useParams();
    useEffect( ()=>{
        getProduct()
        .then( (res)=>{
            setProductData(res);
        })
    },[id]);
   
    const getProduct = async ()=>{
        const docRef = doc(db,"productos",id)
        const docSnapshot = await getDoc(docRef)
        let product = docSnapshot.data()
        product.id = docSnapshot.id
        return product
    }
    return(
        <div>
            {}
            <ItemDetail data = {ProductData}/>
        </div>
    )
}

export default ItemDetailContainer;