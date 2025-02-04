import React from 'react';
import Button from './Button';

export default function ProductItem({product}) {
  const {name, price, thumbnail} = product;
  return (
        <div className="ProductItem">
          <div className="description">
            <h2>{name}</h2>
            <strong>{price.toLocaleString()}원</strong>
            <Button styleType={'brand'} onClick={()=>console.log("주문하기 클릭!")}>주문하기</Button>
          </div>
          <div className="thumbnail">
            <img src={thumbnail} alt={`${name} ${price.toLocaleString()}원`} />
          </div>
        </div>
  )
}

