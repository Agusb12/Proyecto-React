import './ItemCount.css';
import {useState,useEffect} from 'react';

const ItemCount = ()=>{
    useEffect(()=>{
        console.log("Inicio de montaje")
    },[])
    const  [contador,setContador] = useState(1)
    const [time,setTime] = useState("")
    const addNumber = ()=>{
        setContador((prevContador)=>prevContador +1);   
        setTime( (prevTime)=>{
            prevTime = new Date().toLocaleDateString;
            return prevTime; 
        }) 
    }
    const restNumber = ()=>{
        setContador((prevContador)=>prevContador > 1 ? prevContador  -1 : 1); 
    }

    return(
        <div className='card-count'>
            <button onClick = {addNumber}>+</button>
            <p>{contador}</p>
            <p>{time}</p>
            <button onClick = {restNumber}>-</button>
         
        </div>    
    )
}
export default ItemCount;