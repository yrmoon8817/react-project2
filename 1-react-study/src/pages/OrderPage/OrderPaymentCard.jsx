import React from 'react';
import Card from '../../components/Card';

const OrderPaymentCard=({order}) => {
  const {totalPrice,productPrice, deliveryPrice, discountPrice, paymentMethod } = order
  return (
    <Card
    header={<>총 결제금액: {totalPrice.toLocaleString()}원
    <br/>
    결제방법: {paymentMethod}
    </>
    
  }
      data={[
        {term:'메뉴가격', desc:<>{productPrice.toLocaleString()}원</>},
        {term:'배달료', desc:<>{deliveryPrice.toLocaleString()}원</>},
        {term:'할인금액', desc:<>{discountPrice.toLocaleString()}원</>},
      ]}
    ></Card>
  )
}

export default OrderPaymentCard;