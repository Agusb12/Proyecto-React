import './ItemProduct.css';
import ItemCount from '../ItemCount/ItemCount';
import {FiShoppingCart} from 'react-icons/fi'

const ItemProduct = ({data})=>{
    return(
        <div className="div-item">
            <h1>{data.title}</h1>
            <img className='img' src={data.image} alt="Imagen"></img>
            <p>{data.description}</p>
            <span>${data.price}</span>
            <ItemCount/>
            <FiShoppingCart/>
            <p>Agregar al carrito</p>               
    </div>
    )
}
export default ItemProduct;