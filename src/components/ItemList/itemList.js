const itemList = ({dataProducts})=>{
    {dataProducts.map( (product)=> <ItemProduct data = {product}/> )}
}

export default itemList;