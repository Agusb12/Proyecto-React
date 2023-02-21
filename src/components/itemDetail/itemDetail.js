import './itemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
import {useState} from 'react';
import { Link } from 'react-router-dom';
const ItemDetail = ({data})=>{
    const {quantitySelected,setQuantitySelected} = useState(1)
    const {title,description,price,image} = data

    return(
        <>
     <div className='detail-container'>
        <div className='div-img'>
            <img className='img-detail' alt='imagen' src={image}></img>
        </div>

            <div className='elements-detail'>
                <h1>{title}</h1>
                <span>{price}</span>
                <p>{description}</p>
              
                 <div className='btn-compra'>
                
                    { 
                        quantitySelected > 1? <Link to ="/cart"><button>Terminar la compra</button></Link> :<ItemCount setQuantitySelected = {setQuantitySelected} productData = {data}/>
                    }
                 </div> 
            </div>        
         </div>
        
         
         
         </>
    )
}

export default ItemDetail;