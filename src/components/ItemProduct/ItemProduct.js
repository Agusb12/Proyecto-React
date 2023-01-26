import './ItemProduct.css';
import ItemCount from '../ItemCount/ItemCount';
import products from '../../utils/ProductsMock';
const ItemProduct = ({data})=>{
    return(
        <div className="div-item">
            <h1>{title}</h1>
            <img className='img' src={image} alt="Imagen"></img>
            <p>{description}</p>
            <span>{price}</span>
            <ItemCount/>               
    </div>
    )
}
export default ItemProduct;