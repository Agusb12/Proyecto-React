
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "./Modal.css"
const Modal = ()=>{
    const {modal,setModal} = useContext(CartContext)
    const {cartProducts} = useContext(CartContext);
    const closeModal = ()=>{
        setModal(false)
    }
    return(

        <div className="Modal-div">
            <p className="close-modal" onClick={closeModal}>X</p>
            {cartProducts.map( (product)=>{
                const {image,price,id,name} = product 
                return(
                    <div key={id}>
                    <img src={`/assets/${image}`}></img>
                    <p>{name}</p>
                    <span>${price}</span>
                    </div>
                )
                
                
            })}
        </div>
        
    )
}

export default Modal;