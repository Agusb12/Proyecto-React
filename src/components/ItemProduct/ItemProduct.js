import './ItemProduct.css';
import ItemCount from '../ItemCount/ItemCount';
import {FiShoppingCart} from 'react-icons/fi'
import { Link } from 'react-router-dom';
const ItemProduct = ({data})=>{
    return(
        <div className="div-item">
            <h1>{data.title}</h1>
            <div className='div-image'>
                <img className='img' src={data.image} alt="Imagen"></img>
            </div>
            <span>${data.price}</span>
            <ItemCount/>
            <FiShoppingCart/>
            <button className='cart-button'>Agregar al carrito</button>
            <Link to={'/productos/${id}'}>
            <button className='seeMore'>"Ver más"</button>
            </Link>                            
        </div>
    )
}
export default ItemProduct;