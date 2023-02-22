import ItemProduct from "../ItemProduct/ItemProduct";
const itemList = ({dataProducts})=>{
    return(
        dataProducts.map( (product)=> <ItemProduct key = {product.id} data = {product}/>)
    )
}
export default itemList;