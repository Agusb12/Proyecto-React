import {FiShoppingCart} from "react-icons/fi"
import { useState } from "react";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import Modal from "../../Modal/Modal";
const CartWidget = ()=>{   
const {modal,setModal} = useContext(CartContext)
    return(
        <div>
            <FiShoppingCart onClick={()=>setModal(true)}/>
            {modal && <Modal/>}      
        </div>
    )
}

export default CartWidget;