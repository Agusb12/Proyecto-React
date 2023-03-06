import {FiShoppingCart} from "react-icons/fi"
import { useState } from "react";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import Modal from "../../Modal/Modal";
const CartWidget = ()=>{   
const {modal,setModal,totalProducts,cartProducts} = useContext(CartContext)
    return(
        <div>
            {cartProducts.length !== 0 && <p>{totalProducts}</p>}
            <FiShoppingCart onClick={()=>setModal(true)}/>
            {modal && <Modal/>}
                  
        </div>
    )
}

export default CartWidget;