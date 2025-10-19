import ProductItem from "../../components/ProductItem";

const OrderableProductItem = ({product})=>{
  const handleClick=()=>{
    console.log(pathname)
  }
  return <ProductItem product={product} onClick={handleClick}/>
}

export default OrderableProductItem;