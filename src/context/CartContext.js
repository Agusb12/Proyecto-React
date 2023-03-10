import { createContext,useState } from "react";

const CartContext = createContext()

const CartProvider = ({children}) => {
    const [modal,setModal] = useState(false)
    const  [cartProducts,setCartProducts] = useState([])
    const [totalProducts,setTotalProducts] = useState((0))
    
    const addProductToCart = (product)=>{
    let isInCart = cartProducts.find(cartItem => cartItem.id === product.id)
        if (!isInCart) {
            setTotalProducts(totalProducts + product.length)
            return   setCartProducts(cartProducts =>  [...cartProducts,product])   
        }    
    }
    const data = {
        cartProducts,
        setCartProducts,
        addProductToCart,
        modal,
        setModal,
        totalProducts
    };
    return(
        <CartContext.Provider value = {data}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;
export {CartContext};