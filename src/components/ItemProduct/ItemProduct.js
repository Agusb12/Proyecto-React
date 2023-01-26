import './ItemProduct.css';
import ItemCount from '../ItemCount/ItemCount';
const ItemProduct = ({data})=>{
    return(
        <div className="div-item">
            <h1>{data.title}</h1>
            <img className='img' src={data.image} alt="Imagen"></img>
            <p>{data.description}</p>
            <span>${data.price}</span>
            <ItemCount/>               
    </div>
    )
}
export default ItemProduct;