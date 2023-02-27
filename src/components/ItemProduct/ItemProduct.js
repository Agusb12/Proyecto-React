import './ItemProduct.css';
import {FiShoppingCart} from 'react-icons/fi'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
const ItemProduct = ({data})=>{
    const {addProductToCart} = useContext(CartContext);
    const {id,title,image,price} = data
    const addToCart = ()=>{
        addProductToCart(data)
    }
    return(
        <div className="div-item">
            <h1>{title}</h1>
            <div className='div-image'>
                <img className='img' src={image} alt="Imagen"></img>
            </div>
            <span>${price}</span>
            <FiShoppingCart/>
            <button onClick={addToCart}  className='cart-button'>Agregar al carrito</button>
            <Link to={`/productos/${id}`}>
            <button className='seeMore'>Ver detalles</button>
            </Link>                            
        </div>
    )
}
export default ItemProduct;