import ItemProduct from "../ItemProduct/ItemProduct";
import products from "../../utils/ProductsMock";
const itemList = ({dataProducts})=>{
    {dataProducts.map( (product)=> <ItemProduct key = {product.id} data = {products}/> )}
}

export default itemList;