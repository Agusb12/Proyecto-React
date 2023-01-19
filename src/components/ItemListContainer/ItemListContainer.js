import './ItemListContainer.css';
import {useState} from 'react';
const ItemListContainer = ({title,image})=>{
    
    const [contador,setContador] = useState(1)
    const [fecha,setFecha] = useState()
    
    const addNumber = ()=>{
        setContador(contador + 1); 
        const fecha = new Date().toLocaleString;
        setFecha(fecha);  
    }
    const restNumber = ()=>{
        setContador(contador - 1);
    }
    
    return(
        <div className="div-item">
            <h1>{title}</h1>
            <img className='img' src={image} alt="Imagen"></img>
            <button onClick={addNumber}>+</button>
            <p>{contador}</p>
            <button onClick={restNumber}>-</button>
            <p>{fecha}</p>
            
        </div>
    )
}

export default ItemListContainer