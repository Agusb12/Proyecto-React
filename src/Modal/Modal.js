
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import {FiArchive} from "react-icons/fi"
import "./Modal.css"
const Modal = ()=>{
    const {modal,setModal} = useContext(CartContext)
    const {addProductToCart,cartProducts,setCartProducts} = useContext(CartContext);
    const closeModal = ()=>{
        setModal(false)
    }
    const deleteItems = ()=>{
        setCartProducts([])
    }
    
    return(
       
        <div className="Modal-div">
            <p className="close-modal" onClick={closeModal}>X</p>
            {cartProducts.map( (product)=>{
                const {image,price,id,name,description} = product 
                return(
                    <div className="modal-container" key={id}>
                        <img src={`${image}`} alt="Imagen"></img>
                        <p>{name}</p>
                        <span>${price}</span>
                        <p>{description}</p>
                        <FiArchive onClick={deleteItems} className="delete-icon"/>
                    </div>
                ) 
            })}
            
        </div>
        
    )
}

export default Modal;