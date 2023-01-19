import './ItemProduct.css';

const ItemProduct = ({title,image})=>{

    return(
        <div className="div-item">
            <h1>{title}</h1>
            <img className='img' src={image} alt="Imagen"></img>
                        
    </div>
    )
}
export default ItemProduct;