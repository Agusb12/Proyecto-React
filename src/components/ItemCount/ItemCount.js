import './ItemCount.css';
import {useState,useEffect} from 'react';
const ItemCount = ({children})=>{
    useEffect(()=>{
        console.log("Inicio de montaje")
    },[])
    const  [contador,setContador] = useState(1)
    const addNumber = ()=>{
        setContador(contador + 1)
    }
    const restNumber = ()=>{
        setContador(contador - 1)
    }
    return(
        <div>
            <button onClick = {addNumber()}>+</button>
            <p>{contador}</p>
            <button onCLick = {restNumber()}>-</button>
        </div>    
    )
}

export default ItemCount;