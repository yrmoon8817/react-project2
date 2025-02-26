import React from 'react';
import Card from '../../components/Card';


const OrderDeliveryCard=({order}) => {
  const {deliveryAddress, deliveryContact, messageToShop, messageToRider } = order
  return (
    <Card
      data={[
        {term:'배달주소', desc:deliveryAddress},
        {term:'전화번호', desc:deliveryContact},
        {term:'가게사장님께', desc:messageToShop},
        {term:'라이더님께', desc:messageToRider}
      ]}
    ></Card>
  )
}

export default OrderDeliveryCard;