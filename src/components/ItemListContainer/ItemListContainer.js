import ItemProduct from '../ItemProduct/ItemProduct';
import ItemCount from '../ItemCount/ItemCount';
const ItemListContainer = ()=>{  
    return(
        <div className='List-product'>
            <ItemProduct title = "Primer item" image = {'imagen.jpg'}>
              <ItemCount/>
               </ItemProduct>
        </div>
    )
}

export default ItemListContainer;