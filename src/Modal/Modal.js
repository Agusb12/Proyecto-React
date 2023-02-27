
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import {FiArchive} from "react-icons/fi"
import "./Modal.css"
const Modal = ()=>{
    const {modal,setModal} = useContext(CartContext)
    const {cartProducts} = useContext(CartContext);
    const closeModal = ()=>{
        setModal(false)
    }
    const deleteItems = ()=>{
        cartProducts.pop()
    }
    return(

        <div className="Modal-div">
            <p className="close-modal" onClick={closeModal}>X</p>
            {cartProducts.map( (product)=>{
                const {image,price,id,name} = product 
                return(
                    <div className="modal-container" key={id}>
                    <img src={`/assets/${image}`} alt="Imagen"></img>
                    <p>{name}</p>
                    <span>${price}</span>
                    <p>Ir a carrito final</p>
                    </div>
                ) 
            })}
            <FiArchive onClick={deleteItems} className="delete-icon"/>
        </div>
        
    )
}

export default Modal;