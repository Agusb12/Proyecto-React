import './ItemCount.css';
import {useState} from 'react';
import { CartContext } from '../../context/CartContext';
import { useContext } from 'react';
const ItemCount = ({setQuantitySelected,productData})=>{
    // const {addProductToCart} = useContext(CartContext)
    const [CountQuantity,setCountQuantity] = useState(1)
    const addCount = ()=>{
        setCountQuantity((prevCountQuantity)=>prevCountQuantity +1);       
    }
        const restCount = ()=>{
            setCountQuantity((prevCountQuantity)=>prevCountQuantity > 1 ? prevCountQuantity  -1 : 1); 
    }
    // const onAdd = ()=>{
    //     setQuantitySelected(CountQuantity);
    //     addProductToCart([productData]);
    // }

    return(
        <> 
        <div className='card-count'>
            <button onClick = {addCount}>+</button>
            <p>{CountQuantity}</p>
            <button onClick = {restCount}>-</button>
        </div>   
        <button >Compre aqui</button> 
        </>
    )
}
export default ItemCount;