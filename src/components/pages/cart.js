import { CartContext } from "../../context/CartContext";
import { useContext } from "react";
import { useState } from "react";
import modalCart from "../pages/modalCart";
const Cart =()=>{
    const {cartProducts} = useContext(CartContext);
    
    return(
        <div>
            <h2>Carrito</h2>
            {cartProducts.map( (cartProduct)=>{
                const {title,image,price} = cartProduct
                return(
                    <div>
                        <img src={`/assets/${image}`}></img>
                        <p>{title}</p>
                        <span>${price}</span>
                    </div>
                )
            })}
            
                
        </div>
    )
}

export default Cart;