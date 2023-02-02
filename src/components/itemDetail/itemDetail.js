import './itemDetail.css';
const ItemDetail = ({data})=>{
    return(
        <div className='detail-container'>
            <h1>{data.title}</h1>
            <img alt='imagen' src={'/assets/${data.image}'}></img>
            <span>${data.price}</span>
            <p>{data.description}</p>
            <button>COMPRE AQUI</button>
        </div>
    )
}

export default ItemDetail;