import { createContext,useState } from "react";

const CartContext = createContext()

const CartProvider = ({children}) => {
    const [modal,setModal] = useState(false)
    const  [cartProducts,setCartProducts] = useState([])
    const addProductToCart = (product)=>{
        setCartProducts(cartProducts =>  [...cartProducts,product]           
    )}
 
    const data = {
        cartProducts,
        setCartProducts,
        addProductToCart,
        modal,
        setModal
        
    };

    return(
        <CartContext.Provider value = {data}>
            {children}
        </CartContext.Provider>
    )
}
   


export default CartProvider;
export {CartContext};